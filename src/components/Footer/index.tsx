import React from 'react'
import { Layout } from 'antd'

const { Footer: FooterAntd } = Layout

const footerStyle: React.CSSProperties = {
  textTransform: 'uppercase',
  textAlign: 'center',

  position: 'fixed',
  bottom: '0',
  width: '100%',
}

const Footer = () => (
  <FooterAntd style={footerStyle}>
    Lucas Augusto @ {new Date().getFullYear()}
  </FooterAntd>
)

export default Footer
