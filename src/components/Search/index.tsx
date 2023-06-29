import { Button, Form, Input, Row, Col } from 'antd'

import { searchStyle } from './styles'

const handleSubmit = (values: any) => {
  console.log('handleSubmit', values)
}

const handleSubmitFailed = (errorInfo: any) => {
  console.error('handleSubmitFailed', errorInfo)
}

const Search = () => (
  <Form
    name="search"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ title: '', description: '' }}
    onFinish={handleSubmit}
    onFinishFailed={handleSubmitFailed}
    autoComplete='off'
  >
    <Row style={searchStyle}>
      <Col style={{ width: '100%' }}>
        <Form.Item
          label="title"
          name="title"
          rules={[
            {
              required: true,
              message: 'Please add an title!'
            }
          ]}
        >
          <Input />
        </Form.Item>
      </Col>

      <Col style={{ width: '100%' }}>
        <Form.Item
          label="description"
          name="description"
          rules={[
            {
              required: true,
              message: 'Please add an description!'
            }
          ]}
        >
          <Input />
        </Form.Item>
      </Col>

      <Col style={{ width: '100%' }}>
        <Form.Item>
          <Button type="primary" htmlType='submit'>add</Button>
        </Form.Item>
      </Col>
    </Row>
  </Form>
)

export default Search
