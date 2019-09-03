import React from 'react';
import usePosts from '../hooks/use-posts';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';


const LinkBox = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
    
    a {
        color: #515151;
        font-weight: 500;
        margin: 0 1rem;
        text-decoration: none;
        transition: .2s;
    }
`

const FooterLink = styled(Link)`
    &:hover {
        color: #3a98c3;
    }

    &.current-page {
        color: #3a98c3;
  }
`

const Footer = () => (
    <footer css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
        font-weight: 300;
    `}
    >
        <LinkBox>
            {usePosts().map(post => (
              <FooterLink to={"/" + post.slug} activeClassName="current-page">{post.title}</FooterLink>
            ))}
        </LinkBox>
        <p>Made with &#10084; by Alec Diaz</p>
    </footer>
);

export default Footer;