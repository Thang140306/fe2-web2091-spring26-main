import { Form, Input, Button } from "antd";
const LoginForm = () => {
    const onFinish = (values: any) => {
        console.log("Form data:", values);
    };

    return (
        <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
            <Form.Item label="Email" name="email"
                rules={[
                    { required: true, message: "vui long nhap email" },
                    { type: "email", message: "email khong hop le" },
                ]}>
                <Input />
            </Form.Item>

            <Form.Item label="Password" name="password"
                rules={[
                    { required: true, message: "vui long nhap password" },
                    { min: 6, message: "password it nhat 6 ki tu" },
                ]}>
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    dang nhap
                </Button>
            </Form.Item>



            <br /><br />
            bai2
            <Form.Item label="Email" name="email"
                rules={[
                    { required: true, message: "vui long nhap email" },
                    { type: "email", message: "email khong hop le" },
                ]}>
                <Input />
            </Form.Item>

            <Form.Item label="Phone" name="phone">
                <Input />
            </Form.Item>

            <Form.Item label="Password" name="password"
                rules={[
                    { required: true, message: "vui long nhap password" },
                    { min: 6, message: "password it nhat 6 ki tu" },
                ]}>
                <Input.Password />
            </Form.Item>


            <Form.Item
                label="Confirm Password"
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                    { required: true, message: "Vui lòng xác nhận mật khẩu!" },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error("Mật khẩu xác nhận không khớp!")
                            );
                        },
                    }),
                ]}
            >
                <Input.Password placeholder="Nhập lại mật khẩu" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    dang nhap
                </Button>
            </Form.Item>
        </Form>




    );
};
export default LoginForm;

