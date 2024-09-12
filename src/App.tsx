import { Form, Input, Table } from "antd";

function App() {
  return (
    <>
      <Form>
        <Table
          columns={[
            {
              dataIndex: "id",
              title: "ID",
            },
            {
              dataIndex: "name",
              title: "Name",
            },
            {
              dataIndex: "email",
              title: "Email",
            },
          ]}
          dataSource={[
            {
              id: 1,
              name: "khanh",
              email: "khanhEmail",
            },
            {
              id: 2,
              name: "khanh",
              email: "khanhEmail",
            },
            {
              id: 3,
              name: "khanh",
              email: "khanhEmail",
            },
            {
              id: 4,
              name: "khanh",
              email: "khanhEmail",
            },
            {
              id: 5,
              name: "khanh",
              email: "khanhEmail",
            },
          ]}
          rowKey={"id"}
          scroll={{
            x: 1000,
          }}
          summary={() => (
            <Table.Summary fixed="top">
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>
                  <Form.Item name='id'>
                    <Input />
                  </Form.Item>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1}>
                  <Form.Item name='name'>
                    <Input />
                  </Form.Item>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                  <Form.Item name='email'>
                    <Input />
                  </Form.Item>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
          pagination={false}
        />
      </Form>
    </>
  );
}

export default App;
