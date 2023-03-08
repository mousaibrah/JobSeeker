import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,200;1,400;1,600&family=Quicksand:wght@300;400;500;600;700&family=Style+Script&display=swap');
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
   color: #fcfeff;
    background: #121212;
  }
`;
 
export default GlobalStyle;