import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            tag
            slug
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 600
                  maxHeight: 600
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    tag: post.frontmatter.tag,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
  }));
};

export default usePosts;
