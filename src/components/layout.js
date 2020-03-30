import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          <FooterContent>
            <div>
              © Neu.ro {new Date().getFullYear()}
              {` `}
              <a
                href="mailto:team@neu.ro"
                rel="noopener noreferrer"
                target="_blank"
              >
                team@neu.ro
              </a>
            </div>
            <Navigation>
              <NavigationColumn>
                {` `}{" "}
                <NavItem aria-current="page" href="https://neu.ro/">
                  Platform
                </NavItem>
                {` `}{" "}
                <NavItem href="https://neu.ro/consulting">Solutions</NavItem>
                {` `}
                <NavItem
                  href="https://forum.neu.ro"
                  rel="noopener noreferrer"
                  target="_blank"
                  to="https://forum.neu.ro"
                >
                  ML Forum
                </NavItem>
              </NavigationColumn>
              {` `}
              <NavigationColumn>
                {` `}
                <NavItem
                  href="https://medium.com/@Neuromation"
                  rel="noopener noreferrer"
                  target="_blank"
                  to="https://medium.com/@Neuromation"
                >
                  Blog
                </NavItem>
                {` `}
                <NavItem href="https://neu.ro/docs">Docs</NavItem>
                {` `}
                <NavItem
                  href="https://get.neu.ro/platform-early-adopters"
                  rel="noopener noreferrer"
                  target="_blank"
                  to="https://get.neu.ro/platform-early-adopters"
                >
                  Contact us
                </NavItem>
              </NavigationColumn>
            </Navigation>
          </FooterContent>
        </Footer>
      </Wrapper>
    )
  }
}

const NavItem = styled.a`
  margin-left: 15px;
  text-decoration: none !important;
  color: #159ed1;
`
const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  padding: 42px 0 40px;
  background-color: #ededed;
  font-size: 15px;
  line-height: 30px;
  font-weight: 500;

  @media (--sm-scr) {
    padding: 20px 0;
    line-height: 20px;
  }
`

const FooterContent = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1050px;
  width: 100%;
`

const Navigation = styled.div`
  display: flex;
  align-items: center;

  @media (--sm-scr) {
    width: 100%;
    align-items: flex-start;
    margin: 20px 0;
  }
`

const NavigationColumn = styled.div`
  @media (--lg-scr) {
    & + & {
      margin-left: 15px;
    }
  }

  @media (--sm-scr) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`

export default Layout
