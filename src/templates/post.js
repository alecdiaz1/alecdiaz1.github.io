import React from 'react';
import styled from '@emotion/styled';
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

const Hero = styled('div')`
  display: flex;
  flex-direction: column;
  z-index: -1;
  margin-bottom: 3rem;
  position: relative;

  .arrow {
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media only screen and (max-width: 400px) {
      top: 90%
    }
  }

  .arrow span {
    display: block;
    width: 15px;
    height: 15px;
    border-bottom: 2px solid #ffffff;
    border-right: 2px solid #ffffff;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 3s infinite;
  }

  .arrow span:nth-child(2) {
    animation-delay: -0.2s;
  }

  .arrow span:nth-child(3) {
    animation-delay: -0.4s;
  }

  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-20px, -20px);
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: rotate(45deg) translate(20px, 20px);
    }
  }
`;

const TitleBox = styled('div')`
  color: white;
  position: absolute;
  top: calc(100vh / 3.5);
  display: flex;
  flex-direction: column;
  z-index: 10;

  > h4 {
    margin-bottom: 0;

    @media only screen and (max-width: 600px) {
      margin-bottom: 3rem;
    }
  }

  @media only screen and (max-width: 600px) {
    top: calc(100vh / 9);
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <PostLayout>
    <Hero>
      <TitleBox>
        <h1>{post.frontmatter.title}</h1>
        <h4>{post.frontmatter.tag}</h4>
        <div class="summary">
          <div>
            <h3>Role</h3>
            <p>UX/UI Designer</p>
          </div>
          <div>
            <h3>Tools</h3>
            <p>Figma</p>
          </div>
          <div>
            <h3>Timeline</h3>
            <p>Sep. 2018 - Oct. 2018</p>
          </div>
        </div>
      </TitleBox>
      <Img
        css={css`
          height: 90vh;
          margin-left: -50vw;
          left: 50%;
          width: 98.7vw;
          filter: brightness(0.3);
        `}
        fluid={post.frontmatter.image.sharp.fluid}
      ></Img>
      <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Hero>
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </PostLayout>
);

export default PostTemplate;
