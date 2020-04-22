import React from 'react'
import styled, { createGlobalStyle } from "styled-components"

import { rhythm } from '../utils/typography'
import Header from './header'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  body {
    background: #ededed;
  }
  a, a:visited {
    color: #dc1335;
  }
  p {
    color: #4b4b4b;
    font-weight: 300;
    font-size: 18px;
  }
`

class Layout extends React.Component {
  render () {
    const { children } = this.props
    return (
      <>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(36)
            }}
          >
            <main
              style={{
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
              }}
            >{children}
            </main>
          </div>
          <Footer />
        </Wrapper>
      </>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: 80px;
`

export default Layout
