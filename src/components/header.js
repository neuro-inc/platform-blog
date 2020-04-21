import React from 'react'
import styled from 'styled-components'
import Menu from './menu'
import { Link } from 'gatsby'

import headerBg from '../../static/assets/HeaderNeo.jpg'
import LogoImg from '../../static/assets/Logo.svg'

export default function Header () {
  return (
    <HeaderWrap>
      <HeaderInner>
        <Logo to='' />

        <Menu />
        <AuthWrap>
          <a href='https://app.neu.ro/login'>Log in</a>
          <span>|</span>
          <a href='https://app.neu.ro/signup'>Sign Up</a>
        </AuthWrap>
      </HeaderInner>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.header`
  background:url(${headerBg});
  background-position: 50% 0;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  max-width: 1220px;
  width: 100%;
  margin: auto;
  min-height: 64px;
`

const Logo = styled(Link)`
  display: inline-block;
  width: 134px;
  height: 30px;
  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  line-height: 1;
`

const AuthWrap = styled.div`
  a {
    color: #fff !important;
    text-decoration: none;
    font-size: 16px;
  }
  span {
    display: inline-block;
    color: #aaa;
    position: relative;
    margin: 0 15px;
    top: -1px;
  }
`
