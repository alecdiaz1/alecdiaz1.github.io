import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
// import { Link, graphql, useStaticQuery } from 'gatsby';

const TextBox = styled('div')`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  height: 65vh;
  justify-content: center;
  //align-items: center;
  /* padding: 0 calc((100vw - 550px) / 2) 2rem; */
  width: 80%;
  margin-bottom: 4rem;

  h1 {
    color: #515151;
    font-size: 2.25rem;
    font-weight: 900;
    /* margin-bottom: 1rem; */
  }

  p,
  a {
    color: #515151;
    font-size: 1.25rem;
    font-weight: 300;
    /* margin-top: rem; */
  }

  h2, a {
    margin: 1rem auto 0 0;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 900;
  }

  .highlight {
    color: #0073ff;
    transition: .2s;

    &:hover {
      color: rgb(35,111,205);
    }
  }

  .subtitle {
    font-size: 1rem;

    a {
      font-size: 1rem;
    }
  }

  .contact-container {
    display: flex;
    flex-direction: row;
    margin-top: 1.5rem;
  }

  .contact {
    /* margin-right: 2rem; */
    width: 10rem;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    transition: .2s;

    &:hover {
      color: #3a98c3;
    }
  }
  
`;

const Hero = () => {
  return (
    <TextBox>
      <h1>Alec Diaz</h1>
      <p>ux designer + developer</p>
      <h2>My website has moved to <a className={"highlight"} href="https://alecdiaz.dev">alecdiaz.dev</a></h2>
    </TextBox>
  );
};

export default Hero;
