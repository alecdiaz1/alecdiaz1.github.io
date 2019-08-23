import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const PostPreview = ({ post }) => {
  const InfoOverlay = styled('div')`
    opacity: 0;
    transition: .2s;
  `;

  return (
  <Link
    css={css`
      display: flex;
      background-color: blue;
      width: 50%;
      height: 25rem;
      padding: 2rem 2rem;
      text-decoration: none;
      color: white;
      transition: .2s;

      :first-of-type {
        background-color: red;
      }

      :nth-of-type(2) {
        background-color: green;
      }

      :nth-of-type(3) {
        background-color: orange;
      }

      :hover {
        background-color: gray;
      }

      :hover div {
        opacity: 100;
      }

      @media only screen and (max-width: 600px) {
        width: 100%;
        height: 20rem;
      }
    `}

    to={post.slug}
  >
    <article>
      <InfoOverlay>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <p>read this post &rarr;</p>
      </InfoOverlay>
    </article>
  </Link>
  );
};

export default PostPreview;
