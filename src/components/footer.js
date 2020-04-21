import React from 'react'
import styled from 'styled-components'
import Menu from './menu'

export default function Footer () {
  return (
    <FooterWrap>
      <FooterContent>
        <ColLeft>
          © Neu.ro {new Date().getFullYear()}
          <Sep>|</Sep>
          <a
            href='mailto:team@neu.ro'
            rel='noopener noreferrer'
            target='_blank'
          >
            team@neu.ro
          </a>
        </ColLeft>
        <Menu />
        <div>
          <NavItem href='https://app.neu.ro/login'>Log in</NavItem>
          <Sep>|</Sep>
          <NavItem href='https://app.neu.ro/signup'>Sign Up</NavItem>
        </div>
      </FooterContent>
    </FooterWrap>
  )
}

const FooterWrap = styled.footer`
  box-sizing: border-box;
  padding: 24px 0 22px;
  background-color: #3d003f;
  color: #fff;
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
  padding: 0 20px;
  max-width: 1050px;
  max-width: 1220px;
  width: 100%;
`

const ColLeft = styled.div`
  font-weight: 300;
  font-size: 16px;
  a {
    color: #fff;
  }
`

const NavItem = styled.a`
  margin: 0 15px;
  text-decoration: none !important;
  color: #fff !important;
  font-size: 16px;
  font-weight: 400;
`

const Sep = styled.span`
  margin: 0 10px;
  display: inline-block;
  color: #dc1335;
`
