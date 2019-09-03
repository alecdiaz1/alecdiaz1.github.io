import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const PostPreview = ({ post }) => {
  const ItemContainer = styled('div')`
    position: relative;
    height: 20rem;
    width: 50%;
    /* margin-bottom: 1rem; */

    @media only screen and (max-width: 600px) {
      width: 100%;
    }

    &:hover div {
      opacity: .9;
    }
  `

  const Overlay = styled('div')`
    background-color: gray;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: .2s;

    h2 {
      color: white;
      padding-top: 2rem;
      padding-bottom: .5rem;
      padding-left: 2rem;
    }

    p {
      color: white;
      padding-left: 2rem;
    }
  `

  return (
    <ItemContainer>
      <Link 
      css={css`
        text-decoration: none;
      `}
      to={post.slug}>
        <Overlay>
          <h2>{post.title}</h2>
          <p>{post.tag}</p>
        </Overlay>
        <Img css={css`
          /* position: absolute; */
          top: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        `} 
        style={{position: "absolute"}}
        fluid={post.image.sharp.fluid}/>
      </Link>
    </ItemContainer>
  )
};

export default PostPreview;
