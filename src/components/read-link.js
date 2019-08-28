import styled from '@emotion/styled';
import { Link } from 'gatsby';

const ReadLink = styled(Link)`
  display: block;
  font-size: 0.875rem;
  text-decoration: none;
  margin: 0 auto 0 2rem;
  color: white;
  transition: .1s;

  :hover {
    color: pink;
  }
`;

export default ReadLink;
