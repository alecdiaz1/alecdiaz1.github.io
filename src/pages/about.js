import React from 'react';
import PostLayout from '../components/post-layout';
import ReadLink from '../components/read-link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
// import Img from 'gatsby-image';

const ListStyle = styled('ul')`
  position: relative;
  list-style: none;
  margin-left: 1.5rem;
  padding-left: 1.5em;

  li:before {
    content: '➤';
    position: absolute;
    left: 0;
  }
`;

const About = () => (
  <PostLayout>
    <h1>Hello!</h1>
    <h4>A little about me -</h4>
    <p>image here</p>
    <p>
      I'm a designer fascinated by the intersection of technology and human
      behavior.
    </p>
    <p>
      Want to chat? You can reach me at{' '}
      <a class="about-link" href="mailto:alecdiaz1@yahoo.com">
        alecdiaz1@yahoo.com
      </a>
    </p>
    <p>
      In my free time, I like <br />
      <ListStyle>
        <li>making <a class="about-link" href="https://soundcloud.com/thealegator">music</a>
        </li>
        <li> dancing</li>
        <li> playing video games (League of Legends, Rocket League)</li>
        <li>
          {' '}
          watching <i>The Office</i>
        </li>
      </ListStyle>
    </p>
    <ReadLink to="/">&larr; back to home</ReadLink>
  </PostLayout>
);

export default About;
