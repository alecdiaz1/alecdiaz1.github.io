import React from 'react';
import styled from '@emotion/styled';
// import { Link, graphql, useStaticQuery } from 'gatsby';

const TextBox = styled('div')`
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: center;
  /* padding: 0 calc((100vw - 550px) / 2) 2rem; */
  width: 75%;

  @media only screen and (max-width: 900px) {
      margin-left: 2rem;
  }

  @media only screen and (max-width: 430px) {
        height: 60vh;
        /* padding-bottom: -10rem; */
  }

  h1 {
    color: white;
    font-size: 2.25rem;
    font-weight: 800;
  }

  p,
  a {
    color: white;
    font-size: 1.5rem;
    font-weight: 300;
    margin-top: 1rem;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  return (
    <TextBox>
      <h1>Alec Diaz</h1>
      <p>
      Listen, strange women lyin' in ponds distributin' swords is no basis for a system of government. Supreme executive power derives from a mandate
      </p>
    </TextBox>
  );
};

export default Hero;
