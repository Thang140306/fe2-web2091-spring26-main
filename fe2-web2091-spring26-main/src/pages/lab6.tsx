import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUpdateStory } from "../hooks/useUpdateStory";

export function EditStory() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const { data } = useQuery({
        queryKey: ["story", id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/stories/${id}`);
            return res.data;
        },
        enabled: !!id,
    });

    useEffect(() => {
        if (data) {
            form.setFieldsValue(data);
        }
    }, [data, form]);

    const { mutate } = useUpdateStory();

    const onFinish = (values: any) => {
        mutate(
            { id, ...values },
            {
                onSuccess: () => {
                    navigate("/list");
                },
            }
        );
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