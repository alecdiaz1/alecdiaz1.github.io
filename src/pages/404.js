import React from 'react';
import PostLayout from '../components/post-layout';
import ReadLink from '../components/read-link';
import styled from '@emotion/styled';

const TextContainer = styled('div')`
    margin: 20vh auto;
`

const About = () => (
  <PostLayout>
      <TextContainer>
        <h1>Oh no!</h1>
        <h4>Page not found</h4>
        <ReadLink to="/">&larr; back to home</ReadLink>
      </TextContainer>
  </PostLayout>
);

export default About;
