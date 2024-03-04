import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
}

body {
    background-color: ${({ theme }) => theme.colors.white};
    font-family: Lato, sans-serif;
    font-size: 14px;
    line-height: 24px;
}

p {
    line-height: 1.5; 
}

img {
    max-width: 100%;    
}

`;

export default GlobalStyles;
