import Head from 'next/head';
import normalize from 'normalize.css/normalize.css';
import { Flex } from 'grid-styled';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  ${normalize}
  html {
    background-color: #282c36;
    color: #e9e9ea;
    font-family: 'Roboto', sans-serif;
  }
`;

const Container = styled.main`
  margin: 5px;
`;

export default ({ children }) => (
  <Container>
    <Head>
      <title>Dashboard</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta charSet='utf-8' />
    </Head>
    <Flex wrap style={{ height: '100%' }}>
      {children}
    </Flex>
  </Container>
);
