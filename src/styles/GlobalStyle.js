import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * { 
    box-sizing: border-box;
  }
  body {
    font-family: "Nanum Gothic", sans-serif;
  }

  a { text-decoration: none; color: black; }
  a:visited { text-decoration: none; }
  a:hover { text-decoration: none; }
  a:focus { text-decoration: none; }
  a:hover, a:active { text-decoration: none; }

  :root {
    --color-indianred: #cd5c5c;
    --bs-light-rgb: 248, 249, 250;
    --color-shallow-indianred: 250, 128, 114;
  }

`;

export default GlobalStyle;
