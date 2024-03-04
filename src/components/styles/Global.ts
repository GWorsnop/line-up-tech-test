import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
    background-color: ${({ theme }) => theme.colors.body};
    font-family: sans-serif;
    font-size: 1.15em;
    margin: 0;
}

p {
    line-height: 1.5; 
}

img {
    max-width: 100%;    
}

`;

export default GlobalStyles;
