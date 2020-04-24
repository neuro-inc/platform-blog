import React, { useState } from 'react'
import styled from 'styled-components'
import Menu from '../menu'
import { Link } from 'gatsby'

import headerBg from '../../../static/assets/HeaderNeo.jpg'
import LogoImg from '../../../static/assets/Logo.svg'
import { MobileNav } from './containers/MobileNav'

export function Header () {
  // Open PopUp
  const [isOpenForm, setIsOpenForm] = useState(false)
  const handleCloseForm = () => {
    setIsOpenForm(false)
  }
  function showForm () {
    setIsOpenForm(!isOpenForm)
  }

  return (
    <>
      <MobileNav
        handleCloseForm={handleCloseForm}
        isOpenForm={isOpenForm}
      />
      <HeaderWrap>
        <HeaderInner>
          <Logo to='' />
          <MenuWrap>
            <Menu />
          </MenuWrap>
          <AuthWrap>
            <a href='https://app.neu.ro/login'>Log In</a>
            <span>|</span>
            <a href='https://app.neu.ro/signup'>Sign Up</a>
          </AuthWrap>
          <MobButton onClick={showForm}>
            <svg width='30' height='30' viewBox='0 0 16 16' fill='#fff'>
              <path d='M0 3h16v1.6H0zM0 7.2h16v1.6H0zM0 11.4h16V13H0z' />
            </svg>
          </MobButton>
        </HeaderInner>
      </HeaderWrap>
    </>
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
  width: 67px;
  height: 30px;
  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  line-height: 1;

  @media only screen and (min-width: 960px) {
    
    width: 134px;
  }
`

const MenuWrap = styled.div`
  display: none;
  @media only screen and (min-width: 960px) {
    display: block;
  }
`

const AuthWrap = styled.div`
  display: none;
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
  @media only screen and (min-width: 960px) {
    display: block;
  }
`

const MobButton = styled.span`
  display: block;
  cursor: pointer;
  @media only screen and (min-width: 960px) {
    display: none;
  }
`
