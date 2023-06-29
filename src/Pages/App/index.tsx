import {
  Avatar,
  Button,
  Col,
  Layout,
  List,
  Row,
  Space
} from 'antd'
import {
  CheckOutlined,
  DeleteOutlined
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../store/reducers/todoSlice'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Search from '../../components/Search'

import {
  done,
  TodoProps
} from '../../store/reducers/todoSlice'

import {
  contentContainer,
  contentStyle,
  contentSearch,
  mainStyle,
  itemDone,
} from './styles'

const { Content } = Layout

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.todo)

  const handleDone = (item: TodoProps) => {
    dispatch(done(item))
  }

  const handleDelete = (item: TodoProps) => {
    dispatch(remove(item.id))
  }

  return (
    <Space
      direction="vertical"
      style={{ width: '100%' }}
      size={[0, 48]}
    >
      <Header />

      <Content style={mainStyle}>
        <Space style={contentStyle} direction='vertical'>
          <Row style={contentSearch}>
            <Col span={24}>
              <Search />
            </Col>
          </Row>

            <Row style={contentContainer}>
              <Col span={24}>
                <List
                  itemLayout='horizontal'
                  dataSource={state}
                  renderItem={(item, index) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            src={
                              `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`
                            }
                          />
                        }
                        title={item.title}
                        description={item.description}
                        style={item.done ? itemDone : {} }
                      />
                      <List.Item>
                        <Button
                          type="primary"
                          shape="circle"
                          size='large'
                          icon={<CheckOutlined />}
                          style={{ marginRight: '1rem' }}
                          onClick={() => handleDone(item)}
                        />

                        <Button
                          type="default"
                          shape="circle"
                          size='large'
                          icon={<DeleteOutlined />}
                          onClick={() => handleDelete(item)}
                        />
                      </List.Item>
                    </List.Item>
                  )}
                  style={{
                    backgroundColor: 'aliceblue',
                    borderRadius: '0.3rem',
                    padding: '0 0.8rem',
                  }}
                />
              </Col>
            </Row>
        </Space>
      </Content>

      <Footer />
    </Space>
  )
}

export default App
