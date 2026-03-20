import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, Checkbox } from "antd";
import axios from "axios";
import toast from "react-hot-toast";

interface Category {
    title: string;
    description?: string;
    active: boolean;
}

export default function CategoryForm() {

    const mutation = useMutation({
        mutationFn: async (data: Category) => {
            const res = await axios.post("http://localhost:3000/category", data);
            return res.data;
        },

        onSuccess: () => {
            toast.success("Thêm danh mục truyện thành công");
        },

        onError: () => {
            toast.error("Có lỗi xảy ra");
        },
    });

    const onFinish = (values: Category) => {
        console.log("Success:", values);
        mutation.mutate(values);
    };

    return (
        <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>

            <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: "Không được để trống title" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
            >
                <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item
                name="active"
                valuePropName="checked"
            >
                <Checkbox>Active</Checkbox>
            </Form.Item>

            <Button
                type="primary"
                htmlType="submit"
                loading={mutation.isPending}
            >
                Thêm danh mục
            </Button>

        </Form>
    );
}