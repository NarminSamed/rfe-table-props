import { Table, Button } from "antd";

const StudentsTable = ({ students, setStudents }) => {
  const handleDelete = (record) => {
    const newStudents = students.filter(
      (student) => student.name !== record.name
    );
    setStudents(newStudents);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "GPA",
      dataIndex: "gpa",
      key: "gpa",
      sorter: (a, b) => a.gpa - b.gpa,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button onClick={() => handleDelete(record)}>Delete</Button>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={students} columns={columns} rowKey="name" />
    </>
  );
};

export default StudentsTable;
