import React from 'react';
import PostLayout from '../components/post-layout';
import ReadLink from '../components/read-link';
// import Img from 'gatsby-image';

const About = () => (
  <PostLayout>
    <h1>Hello!</h1>
    <h4>A little about me -</h4>
    <p>image here</p>
    <p>
      I'm a student/designer who's fascinated by the intersection of technology
      and human behavior. With the pervasiveness of technology in all aspects of
      daily life, I believe that we need to take a closer look at its effects on
      our lives.
    </p>
    <p>
      Want to chat? You can reach me at{' '}
      <a class="about-link" href="mailto:alecdiaz1@yahoo.com">alecdiaz1@yahoo.com</a> (I made it
      before Gmail was a big thing).
    </p>
    <p>
      Other than designing things, I spend a lot of my free time dabbling in a
      lot of hobbies! I'm pretty serious about dancing; I've been doing urban
      dance since high school and I used to breakdance. When I'm not dancing I'm
      usually at my computer playing video games like
      <i>Rocket League</i> and <i>League of Legends</i>, or flying airliners in
      a flight sim. When I'm not gaming, you can probably catch me binging{' '}
      <i>The Office</i> for the 20th time. I also like to make{' '}
      <a class="about-link" href="https://soundcloud.com/thealegator">music</a>.
    </p>
    <ReadLink to="/">&larr; back to home</ReadLink>
  </PostLayout>
);

export default About;
