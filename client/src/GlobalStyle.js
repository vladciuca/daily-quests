import styled, { createGlobalStyle } from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
`;

const GlobalStyle = createGlobalStyle`
body{
    font-family: "Arial", sans-serif;
    background-color:  ${({ theme }) => theme.bgPrimary};
    background-image: radial-gradient( circle farthest-corner at 0.8% 3.1%,  rgba(255,188,224,0.15) 0%, rgba(170,165,255,0.15) 46%, rgba(66,39,90,0.15) 100.2% );
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.text}
}
`;

export default GlobalStyle;
