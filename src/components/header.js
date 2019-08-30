import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: black;
  font-size: 1rem;
  font-weight: 300;
  /* font-weight: ${props => props.fontWeight || 'normal'}; */
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  transition: .2s;
  position: relative;

  &:last-of-type {
    margin-right: 0;
  }

  &.current-page {
    border-bottom: 2px solid black;
  }

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: -.1rem auto;
    width: 0%;
    content: '.';
    color: transparent;
    background: black;
    height: 2px;
    transition: .2s;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Header = () => (
  <header
    css={css`
      background: white;
      display: flex;
      justify-content: space-between;
      /* padding: 1rem calc((100vw - 900px - 0.5rem) / 2); */
      margin: 2rem auto;
      max-width: 900px;

      @media only screen and (max-width: 900px) {
        margin: 2rem 2rem;
      }
    
      /* @media only screen and (max-width: 430px) {
        flex-direction: column;
        align-items: center;
        margin: 1rem;
      } */
    `}
  >
    <NavLink to="/" fontWeight="bold" css={css`
      :hover:after {
        width: 0%;
      }
    `}>
      Logo
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Work
      </NavLink>
      <NavLink to="/about/" activeClassName="current-page">
        About
      </NavLink>
      <NavLink to="/contact/" activeClassName="current-page">
        Contact
      </NavLink>
    </nav>
  </header>
);

export default Header;
