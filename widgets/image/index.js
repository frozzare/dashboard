import Widget from '../../components/widget';
import styled from 'styled-components';

const Image = styled.img`
  color: #cf9815;
  text-align: center;
`;

export default ({ alt = '', url }) => (
  <Widget>
    <Image src={url} alt={alt} />
  </Widget>
);
