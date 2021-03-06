import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #2d2d34;
    --color-primary-darker: #1e1e21;
    --color-secundary: #f3f3f4;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  body {
    color: var(--color-secundary);
    background-color: var(--color-primary);
    -webkit-tap-highlight-color: transparent;
    min-width: 320px;
  }
  
  p,
  label,
  span {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  input {
    background-color: var(--color-secundary);
  }
  
  body,
  input,
  button,
  label,
  textarea {
    font: 400 1rem Maven Pro, sans-serif !important;
  }
`;

export default GlobalStyle;
