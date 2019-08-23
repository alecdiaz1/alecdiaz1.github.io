import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import Hero from '../components/hero';
import PostPreview from '../components/post-preview';


export default () => {
  const posts = usePosts();

  const ItemContainer = styled('div')`
    display: flex;
    flex-wrap: wrap;
    /* height: 50rem; */

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  `;

  return (
    <>
      <Layout>
        <Hero/>
          <ItemContainer>
            {posts.map(post => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </ItemContainer>
      </Layout>
    </>
  );
};
