import styled, { ThemeProvider } from 'styled-components';
import Side from '../components/side';
import Main from '../components/main';
import theme from '../theme';
// Service Worker
import './sw';


const Container = styled.div`
  display        : flex;
  flex-direction : row;
  min-height     : 100vh;
  @media (max-width: 700px) {
    flex-direction : column;
  }
`;

export default () =>
  <ThemeProvider theme={theme} >
    <Container>
      <Side />
      <Main />
    </Container>
  </ThemeProvider>;
