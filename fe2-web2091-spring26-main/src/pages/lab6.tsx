import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function EditStory() {
    const { id } = useParams();
    const navigate = useNavigate();
    const qc = useQueryClient();

    const [form] = Form.useForm();


    const { data } = useQuery({
        queryKey: ["story", id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/stories/${id}`);
            return res.data;
        },
    });

    useEffect(() => {
        if (data) {
            form.setFieldsValue(data);
        }
    }, [data]);

    const { mutate } = useMutation({
        mutationFn: async (values: any) => {
            await axios.put(`http://localhost:3000/stories/${id}`, values);
        },
        onSuccess: () => {
            toast.success("Cập nhật thành công");
            qc.invalidateQueries({ queryKey: ["getAllStories"] });
            navigate("/list");
        },
    });

    const onFinish = (values: any) => {
        mutate(values);
    };

    return (
        <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item label="Ten truyen" name="title">
                <Input />
            </Form.Item>

            <Form.Item label="Tac gia" name="author">
                <Input />
            </Form.Item>

            <Form.Item label="Hinh anh" name="image">
                <Input />
            </Form.Item>

            <Button type="primary" htmlType="submit">
                Update
            </Button>
        </Form>
    );
}