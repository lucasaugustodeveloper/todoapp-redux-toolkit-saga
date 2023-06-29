import React from 'react'
import { Layout, Menu } from 'antd'

const { Header: HeaderAntd } = Layout

const headerStyle: React.CSSProperties = {
  color: '#ffffff',
}

const Header = () => (
  <HeaderAntd style={headerStyle}>
    <Menu
      theme="dark"
      mode='horizontal'
      defaultSelectedKeys={['1']}
      items={new Array(3).fill(null).map((_, index) => {
        const key = index++

        return {
          key,
          label: `nav ${key}`
        }
      }) }
    />
  </HeaderAntd>
)

export default Header
