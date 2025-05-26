import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import HeroGrid from './components/HeroGrid';
import Logo from './components/Logo';

const Container = styled.div`
  padding: 50px 0;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <HeroGrid />
        <Logo />
      </Container>
    </>
  );
}

export default App;
