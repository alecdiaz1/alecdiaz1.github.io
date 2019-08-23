import React from 'react';
import { css } from '@emotion/core';


const Footer = () => (
    <footer css={css`
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
        font-weight: 300;
    `}
    >
        <p>Made with &#10084; by Alec Diaz</p>
    </footer>
);

export default Footer;