import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-image: url("https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

export default GlobalStyle;