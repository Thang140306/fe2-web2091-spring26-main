import { Layout, Menu, Form, Input, Button, Table, Modal } from "antd";
import { useState } from "react";

const { Header, Sider, Content } = Layout;

type User = {
    key: number;
    name: string;
    email: string;
    role: string;
};

export default function Lab1() {
    const [open, setOpen] = useState(false);

    const [users, setUsers] = useState<User[]>([
        { key: 1, name: "Nguyen Van A", email: "a@gmail.com", role: "Admin" },
        { key: 2, name: "Tran Thi B", email: "b@gmail.com", role: "User" },
    ]);

    const onRegister = (values: any) => {
        console.log("Register:", values);
    };


    const onAddUser = (values: any) => {
        const newUser: User = {
            key: users.length + 1,
            name: values.name,
            email: values.email,
            role: values.role,
        };

        setUsers([...users, newUser]);
        setOpen(false);
    };

    const columns = [
        { title: "Name", dataIndex: "name" },
        { title: "Email", dataIndex: "email" },
        { title: "Role", dataIndex: "role" },
    ];

    return (
        <Layout style={{ minHeight: "100vh" }}>


            <Header style={{ color: "white" }}>Dashboard</Header>

            <Layout>


                <Sider width={200}>
                    <Menu
                        mode="inline"
                        items={[
                            { key: "1", label: "Home" },
                            { key: "2", label: "Users" },
                            { key: "3", label: "Products" },
                        ]}
                    />
                </Sider>


                <Content style={{ padding: 20 }}>


                    <h2>Form đăng ký</h2>

                    <Form layout="vertical" onFinish={onRegister} style={{ maxWidth: 400 }}>

                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: "Nhập tên" }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: "Nhập email" }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: "Nhập password" }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>

                    </Form>


                    <h2 style={{ marginTop: 40 }}>Danh sách User</h2>

                    <Button
                        type="primary"
                        onClick={() => setOpen(true)}
                        style={{ marginBottom: 20 }}
                    >
                        Thêm User
                    </Button>

                    <Table columns={columns} dataSource={users} />


                    <Modal
                        title="Thêm User"
                        open={open}
                        footer={null}
                        onCancel={() => setOpen(false)}
                    >
                        <Form layout="vertical" onFinish={onAddUser}>

                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[{ required: true, message: "Nhập tên" }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: "Nhập email" }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Role"
                                name="role"
                                rules={[{ required: true, message: "Nhập role" }]}
                            >
                                <Input />
                            </Form.Item>

                            <Button type="primary" htmlType="submit">
                                Add User
                            </Button>

                        </Form>
                    </Modal>

                </Content>
            </Layout>
        </Layout>
    );
}