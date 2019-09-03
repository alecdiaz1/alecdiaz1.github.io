import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';
import Footer from './footer';
import useSiteMetadata from '../hooks/use-sitemetadata';
import Fade from 'react-reveal/Fade';
// import Lato from 'typeface-lato';

const Layout = ({ children }) => {
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

          html,
          body {
            background-color: white;
            margin: 0;
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

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: black;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: black;
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          display: flex;
          flex-direction: column;
          margin: 2rem auto;
          max-width: 900px;
        `}
      >
        <Fade bottom distance={'3rem'}>
          {children}
        </Fade>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
