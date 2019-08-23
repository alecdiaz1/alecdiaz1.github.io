import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
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
  <Layout>
    <h1 css={css`
      margin: 0 2rem 0rem 2rem;
    `}>
      {post.frontmatter.title}
    </h1>
    <p
      css={css`
        font-size: .9rem;
        margin: .5rem 2rem 2rem 2rem;
      `}
    >
      {post.frontmatter.author}
    </p>
    <Img css={css`
      height: 35vh;
    `}
    fluid={post.frontmatter.image.sharp.fluid}>
    </Img>
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </Layout>
);

export default PostTemplate;
