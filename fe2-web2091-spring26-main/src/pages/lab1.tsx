import { Layout, Menu, Form, Input, Button, Table } from "antd";

const { Header, Sider, Content } = Layout;

type FormValues = {
    name: string;
    email: string;
    password: string;
};

type User = {
    key: number;
    name: string;
    email: string;
    role: string;
};

export default function Lab1() {
    const onFinish = (values: FormValues) => {
        console.log(values);
    };
    const data: User[] = [
        {
            key: 1,
            name: "Nguyen Van A",
            email: "a@gmail.com",
            role: "Admin",
        },
        {
            key: 2,
            name: "Tran Thi B",
            email: "b@gmail.com",
            role: "User",
        },
        {
            key: 3,
            name: "Le Van C",
            email: "c@gmail.com",
            role: "User",
        },
    ];

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Role",
            dataIndex: "role",
        },
    ];

    return (
        <Layout style={{ minHeight: "100vh" }}>


            <Header style={{ color: "white" }}>
                Dashboard
            </Header>

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

                    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>

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

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>

                    </Form>

                    <h2 style={{ marginTop: 40 }}>Danh sách User</h2>

                    <Table columns={columns} dataSource={data} />

                </Content>

            </Layout>

        </Layout>
    );
}