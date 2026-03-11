import { Table } from "antd";

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
        major: "QTKQ"
    },
];

export default function UserTable() {
    return (
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 2 }} />
    );
}

