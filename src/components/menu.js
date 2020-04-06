import React from 'react'
import styled from 'styled-components'

export default function Menu () {
  return (
    <Navigation>
      <NavItem href='https://neu.ro/'>Platform</NavItem>
      <NavItem href='https://neu.ro/consulting'>Solutions</NavItem>
      <NavItem href='https://neu.ro/pricing'>Pricing</NavItem>
      <NavItem className='active' href='/'>Blog</NavItem>
      <NavItem href='https://neu.ro/docs'>Docs</NavItem>
    </Navigation>
  )
}

const Navigation = styled.nav`
  display: flex;
  list-style: none;
  margin: 0;
`

const NavItem = styled.a`
  margin-left: 35px;
  text-decoration: none !important;
  color: #fff !important;
  font-size: 16px;
  font-weight: 400;
  position: relative;
  &:hover {
    opacity: .8;
  }
  &.active:after {
    content: "";
    width: 100%;
    height: 2px;
    background: #fff;
    position: absolute;
    left: 0;
    bottom: -8px;
    background-color: #dc1335;
  }
`
