import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-padding-top: 32px;

}
html::-webkit-scrollbar {
  width: 10px;
  background: transparent;
}
html::-webkit-scrollbar-thumb {
  background: #0275d8;
}
  body {
  /* text-align: center; */

   color: #fcfeff;
    background: #1e1e2a;
  }
`;

export default GlobalStyle;
