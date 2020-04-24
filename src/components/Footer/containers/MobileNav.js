
import React from 'react'
import styled from 'styled-components'

export function MobileNav ({ handleCloseForm, isOpenForm }) {
  return (
    <Wrap open={isOpenForm}>
      <Bg onClick={handleCloseForm} />
      <MenuWrap>
        <ItemsWrap>
          <NavItem href='https://neu.ro/'>Platform</NavItem>
          <NavItem href='https://neu.ro/consulting'>Solutions</NavItem>
          <NavItem href='https://neu.ro/pricing'>Pricing</NavItem>
          <NavItem className='active' href='/'>Blog</NavItem>
          <NavItem href='https://docs.neu.ro/'>Docs</NavItem>
        </ItemsWrap>
        <AuthWrap>
          <a href='https://app.neu.ro/login' rel='noopener noreferrer' target='_blank' to='https://app.neu.ro/login'>Log In</a>
          <a href='https://app.neu.ro/login' rel='noopener noreferrer' target='_blank' to='https://app.neu.ro/login'>Sign Up</a>
        </AuthWrap>
      </MenuWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: ${props => props.open ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  overflow-y: auto;
`

const Bg = styled.div`
  background-color: rgba(0,0,0,.7);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 800;
`

const MenuWrap = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  padding: 15px 0 0;
  border-radius: 10px;
  background-color: #fff;
  width: 200px;
  z-index: 900;
`

const ItemsWrap = styled.div``

const NavItem = styled.a`
  display: block;
  padding: 5px 10px 5px 0;
  color: #333 !important;
  position: relative;
  border-top: 1px dashed #999;
  font-weight: 300;
  margin: 0 20px 0 30px;
  text-decoration: none;
  position: relative;
  &:first-child {
    border: none;
  }
  &:hover {
    opacity: .8;
  }
  &.active {
    color: #dc1335 !important;
    &:after {
      content: "";
      width: 5px;
      height: 5px;
      border-radius: 50%;
      position: absolute;
      left: -15px;
      top: 17px;
      background-color: #dc1335;
  }
  }
`

const AuthWrap = styled.div`
  display: flex;
  margin: 20px 0 0;
  background: #e8e8e8;
  padding: 5px 20px 5px 30px;
  border-radius: 0 0 10px 10px;
  flex-direction: column;
  a {
    display: block;
    text-align: left;
    color: #333 !important;
    font-weight: 300;
    padding-left: 0;
    margin: 0;
    text-decoration: none;
    font-size: 16px;
    padding: 5px 0;
    &:first-child {
      border-bottom: 1px dashed #999;
    }
  }
`
