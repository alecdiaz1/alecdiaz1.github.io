import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';
import Footer from './footer';
import Fade from 'react-reveal/Fade';
import useSiteMetadata from '../hooks/use-sitemetadata';

const PostLayout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          /* More info: https://bit.ly/2PsCnzk */
          /* * + * {
              margin-top: 1rem;
            } */
            
          html {
            margin-left: calc(100vw - 100%);
            margin-right: 0;
          }

          html,
          body {
            background-color: white;
            /* margin: 0; */
            color: black;
            /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                'Segoe UI Emoji', 'Segoe UI Symbol'; */
            font-family: 'Lato';
            font-size: 18px;
            line-height: 1.4;

            /* remove margin for the main div that Gatsby mounts into */
            > div {
              margin-top: 0;
            }

            @media only screen and (max-width: 900px) {
              margin: 0 2rem;
            }

            @media only screen and (max-width: 600px) {
              margin: 0 0rem;
            }
          }

          h1 {
            margin: 0 4rem;

            @media only screen and (max-width: 600px) {
              margin: 0.5rem 2rem 0 2rem;
            }
          }

          h2 {
            margin: 1.5rem 4rem 0 4rem;

            @media only screen and (max-width: 600px) {
              margin: 1.5rem 2rem 0 2rem;
            }
          }

          h3 {
            margin: 1.5rem 4rem 0 4rem;

            @media only screen and (max-width: 600px) {
              margin: 0.5rem 2rem 0 2rem;
            }
          }

          h4 {
            font-weight: 300;
            margin: 0 4rem 2rem 4rem;

            @media only screen and (max-width: 600px) {
              margin: 0.5rem 2rem 1rem 2rem;
            }
          }

          p {
            font-weight: 500;
            line-height: 1.5; 
            color: #515151;
            margin: 0.5rem 4rem 1rem 4rem;

            @media only screen and (max-width: 600px) {
              margin: 0.5rem 2rem 1rem 2rem;
            }
          }

          strong {
            color: white;
          }

          li {
            margin-top: 0.25rem;

            @media only screen and (max-width: 600px) {
              margin-top: 0;
            }
          }

          img {
            height: 2rem;
          }

          a {
            color: black;
            transition: 0.2s;
          }

          .gallery {
            display: flex;
            width: 100%;
            margin-bottom: 2rem;

            @media only screen and (max-width: 600px) {
              flex-direction: column;
            }
          }

          .gatsby-resp-image-wrapper {
            width: 45%;

            @media only screen and (max-width: 600px) {
              width: 90%;
              margin-bottom: 1rem;
            }
          }

          .summary {
            display: flex;
            justify-content: space-between;
            margin-bottom: 2rem;

            @media only screen and (max-width: 700px) {
              flex-direction: column;
            }
          }

          .about-link:hover {
            color: #3a98c3;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <Fade bottom distance={'3rem'}>
        <main
          css={css`
            display: flex;
            flex-direction: column;
            margin: 2rem auto;
            max-width: 900px;
          `}
        >
          {children}
        </main>
        <Footer />
      </Fade>
    </>
  );
};

export default PostLayout;
