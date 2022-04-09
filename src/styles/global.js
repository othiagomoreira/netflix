import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #111;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%; // 15px
  }
  @media (max-width: 720px) {
    font-size: 87.5%; // 14px
  }
}

body {
  background-color: var(--background);
  min-height: 100vh;
}

body, input, textarea, button {
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, strong {
  font-weight: 600;
}

ul {
  list-style: none
}


img {
  display: block;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

`;
