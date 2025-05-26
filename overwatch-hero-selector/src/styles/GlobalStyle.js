import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    width: 100vw;
    background-image: url("https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/bg.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

export default GlobalStyle;