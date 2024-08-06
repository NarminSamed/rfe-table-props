import { Form, Input, Button } from 'antd';

const AddStudent = ({ students, setStudents }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setStudents([...students, values]);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input the student name!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="gpa" label="GPA" rules={[{ required: true, message: 'Please input the GPA!' }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Add Student</Button>
      </Form.Item>
    </Form>
  );
};

export default AddStudent;
