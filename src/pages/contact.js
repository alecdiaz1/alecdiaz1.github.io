import React from 'react';
import PostLayout from '../components/post-layout';
import ReadLink from '../components/read-link';
import styled from '@emotion/styled';
// import Img from 'gatsby-image';

const FormGroup = styled('form')`
  display: flex;
  flex-direction: column;
  margin: 2rem 4rem;

  @media only screen and (max-width: 600px) {
    margin: 2rem 2rem;
  }

  h3 {
    margin: 0;
  }
`;

const TextInput = styled('input')`
  background: #f0f0f0;
  color: #515151;
  border: none;
  border-radius: 3px;
  padding: 0.5rem;
  font-size: 0.75rem;
  transition: 0.2s;
  outline: none;
  border: 2px solid transparent;
  margin-bottom: 2rem;
  font-size: 20px;

  &:focus {
    border: 2px solid #555;
  }
`;

const TextInputBox = styled('textarea')`
  background: #f0f0f0;
  color: #515151;
  border: none;
  border-radius: 3px;
  padding: 0.5rem;
  font-size: 0.75rem;
  transition: border 0.2s;
  outline: none;
  border: 2px solid transparent;
  font-family: 'Lato';
  resize: vertical;
  height: 10rem;
  font-size: 20px;
  margin-bottom: 2rem;

  &:focus {
    border: 2px solid #555;
  }
  
`;

const SubmitButton = styled('button')`
  font-family: 'Lato';
  font-size: 18px;
  background: white;
  border: 2px solid #515151;
  padding: .5rem;
  width: 25%;
  margin: 0 auto;
  border-radius: 50rem;
  transition: .15s;

  &:hover {
    background: #3a98c3;
    border: 2px solid transparent;
    color: white;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    background: #3a98c3;
    border: 2px solid transparent;
    color: white;
    width: 75%;
  }
`;

const Contact = () => (
  <PostLayout>
    <h1>Contact</h1>
    <h4>Let's get in touch &mdash;</h4>
    <FormGroup id="contact">
      <h3>Subject</h3>
      <TextInput type="text"></TextInput>
      <h3>Message</h3>
      <TextInputBox type="text"></TextInputBox>
      <SubmitButton type="submit" value="submit" form="contact">Submit</SubmitButton>
    </FormGroup>

    <ReadLink to="/">&larr; back to home</ReadLink>
  </PostLayout>
);

export default Contact;
