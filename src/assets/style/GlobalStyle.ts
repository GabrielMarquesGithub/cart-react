import { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}
body{
    background: ${(props) => props.theme.theme.background};
    color: ${(props) => props.theme.theme.text};
    -webkit-font-smoothing: antialiased;

    transition: background-color, 0.4s;
}
body,
input,
textarea,
select,
button {
  font: 500 1rem "Roboto", sans-serif;
}
button {
  cursor: pointer;
}
a {
  //o inherit faz com que ele assuma as cores do elemento pai
  color: inherit;
  text-decoration: none;
}
`;
export const opacityAppear = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

export default GlobalStyle;
