import React, { useState } from 'react'
import styled from 'styled-components'
import Menu from '../menu'
import { MobileNav } from './containers/MobileNav'

export function Footer () {
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
          <MenuWrap>
            <Menu />
          </MenuWrap>
          <AuthWrap>
            <NavItem href='https://app.neu.ro/login'>Log In</NavItem>
            <Sep>|</Sep>
            <NavItem href='https://app.neu.ro/signup'>Sign Up</NavItem>
          </AuthWrap>
          <MobButton onClick={showForm}>
            <svg width='30' height='30' viewBox='0 0 16 16' fill='#fff'>
              <path d='M0 3h16v1.6H0zM0 7.2h16v1.6H0zM0 11.4h16V13H0z' />
            </svg>
          </MobButton>
        </FooterContent>
      </FooterWrap>
      <MobileNav
        handleCloseForm={handleCloseForm}
        isOpenForm={isOpenForm}
      />
    </>
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

const MenuWrap = styled.div`
  display: none;
  @media only screen and (min-width: 960px) {
    display: block;
  }
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

const AuthWrap = styled.div`
  display: none;
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
