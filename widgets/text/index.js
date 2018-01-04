import Widget from '../../components/widget';
import styled from 'styled-components';

const Heading = styled.h1`
  color: #cf9815;
  text-align: center;
`;

export default ({ text }) => (
  <Widget>
    <Heading>{text}</Heading>
  </Widget>
);
