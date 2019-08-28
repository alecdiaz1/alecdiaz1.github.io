import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';
import Img from 'gatsby-image';
import ReadLink from '../components/read-link';
import PostLayout from '../components/post-layout';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tag
        image {
          sharp: childImageSharp {
            fluid {
              srcSetWebp
            }
          }
        }
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <PostLayout>
    <h1>
      {post.frontmatter.title}
    </h1>
    <h4>
      {post.frontmatter.author}
    </h4>
    <Img css={css`
      height: 35vh;
    `}
    fluid={post.frontmatter.image.sharp.fluid}>
    </Img>
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </PostLayout>
);

export default PostTemplate;
