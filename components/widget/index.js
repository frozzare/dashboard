import { Box } from 'grid-styled';
import styled from 'styled-components';

const Widget = styled.div`
  height: 15em;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5em;
  box-sizing: border-box;
  min-height: 1em;
  background-color: #3e4453;
  overflow: hidden;
  border-radius: 5px;
`;

export default ({
  children,
  title = '',
  className = '',
  width = [1, 1 / 2, 1 / 4],
  style = {}
}) => (
  <Box width={width} p={5}>
    <Widget className={className} style={style}>{children}</Widget>
  </Box>
);
