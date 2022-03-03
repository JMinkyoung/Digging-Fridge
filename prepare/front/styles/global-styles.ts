import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root{
    --maingreen : #3e6958;
    --mainyellow: #fed88d;
  }
  * {
    box-sizing: border-box;
    /* user-select: none; */
  }
  body{
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
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