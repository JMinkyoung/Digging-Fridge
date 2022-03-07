import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root{
    --maingreen : #3e6958;
    --mainyellow: #fed88d;
    --lightbackcolor: whitesmoke;
    --lightcolor: #ccc;
    --darkbackcolor: #1E1E22;
    --darkcolor: #31302E;
  }
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color : rgba(0,0,0,0);
  }
  body{
    font-family: -apple-system,BlinkMacSystemFont,helvetica,AppleSDGothicNeo,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    background-color:#F8F7F4;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  img { 
    -webkit-perspective: 1;
    image-rendering: -webkit-optimize-contrast;
    transform: translateZ(0);
    backface-visibility: hidden;
  }
  /* @media only screen and (max-width: 768px) {
    body {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 576px) {
    body {
      font-size: 12px;
    }
  } */
`

export default GlobalStyle;