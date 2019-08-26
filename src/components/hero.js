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
  margin-bottom: 4rem;

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
    margin: 1rem auto 0 0;
    text-decoration: none;
    font-size: 1.25rem;
  }

  .contact-container {
    display: flex;
    flex-direction: row;
  }

  .contact {
    margin-left: 2rem;
    margin-right: 2rem;
    width: 6rem;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    transition: .2s;

    &:hover {
      color: pink;
    }
  }
  
  @media only screen and (max-width: 900px) {
    margin-left: 2rem;

    .contact  {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 430px) {
    height: 60vh;
    
    .contact  {
      margin-left: 0;
    }
  }
`;

const Hero = () => {
  return (
    <TextBox>
      <h1>Alec Diaz</h1>
      <p>
      Listen, strange women lyin' in ponds distributin' swords is no basis for a system of government. Supreme executive power derives from a mandate
      </p>
      <div class="contact-container">
        <a class="contact" href="#">
          <svg id="i-clipboard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M12 2 L12 6 20 6 20 2 12 2 Z M11 4 L6 4 6 30 26 30 26 4 21 4" />
          </svg>
          resume
        </a>
        <a class="contact" href="#">
          <svg id="i-mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6" />
          </svg>
          contact
        </a>
      </div>
    </TextBox>
  );
};

export default Hero;
