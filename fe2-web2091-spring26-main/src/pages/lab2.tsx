import { Table, Tag, Button, Space } from "antd";

const columns = [
    { title: "id", dataIndex: "id" },
    { title: "name", dataIndex: "name" },
    { title: "age", dataIndex: "age" },
    { title: "major", dataIndex: "major" },
];

const data = [
    {
        key: 1,
        id: 1,
        name: "John",
        age: 25,
        major: "cntt",
    },
    {
        key: 2,
        id: 2,
        name: "Anna",
        age: 30,
        major: "MKT",
    },
    {
        key: 3,
        id: 3,
        name: "David",
        age: 28,
        major: "QTKQ",
    },
];


// ===== BÀI 3 =====

const columnsUser = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },

    {
        title: "Status",
        dataIndex: "status",
        render: (status: string) => (
            <Tag color={status === "active" ? "green" : "red"}>
                {status}
            </Tag>
        ),
    },

    {
        title: "Action",
        render: () => (
            <Space>
                <Button type="primary">Edit</Button>
                <Button danger>Delete</Button>
            </Space>
        ),
    },
];

const dataUser = [
    {
        key: 1,
        id: 1,
        name: "John",
        email: "john@gmail.com",
        status: "active",
    },
    {
        key: 2,
        id: 2,
        name: "Anna",
        email: "anna@gmail.com",
        status: "inactive",
    },
    {
        key: 3,
        id: 3,
        name: "David",
        email: "david@gmail.com",
        status: "active",
    },
];

export default function UserTable() {
    return (
        <>

            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 2 }}
            />

            <br /><br />


            <Table
                columns={columnsUser}
                dataSource={dataUser}
            />
        </>
    );
}