import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import HeroGrid from './components/HeroGrid';
import Logo from './components/Logo';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const WelcomeContainer = styled(Container)`
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ShowHeroesButton = styled.button`
  padding: 15px 30px;
  font-size: 1.2rem;
  background-color: #f99e1a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
  font-weight: bold;
  text-transform: uppercase;
  
  &:hover {
    background-color: #ff9c00;
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(249, 158, 26, 0.6);
  }
`;

const WelcomeLogo = styled.div`
  max-width: 400px;
  margin-bottom: 30px;
  
  img {
    width: 100%;
    height: auto;
  }
`;

const CustomGlobalStyle = styled(GlobalStyle)`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
  }
`;

function App() {
  const [showHeroes, setShowHeroes] = useState(false);

  if (!showHeroes) {
    return (
      <>
        <CustomGlobalStyle />
        <WelcomeContainer>
          <WelcomeLogo>
            <img 
              src="https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/logo_overwatch.png" 
              alt="Overwatch" 
            />
          </WelcomeLogo>
          <ShowHeroesButton onClick={() => setShowHeroes(true)}>
            히어로즈 이미지 보기
          </ShowHeroesButton>
        </WelcomeContainer>
      </>
    );
  }

  return (
    <>
      <CustomGlobalStyle />
      <Container>
        <HeroGrid />
        <Logo />
      </Container>
    </>
  );
}

export default App;
