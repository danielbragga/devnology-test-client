import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${theme.colors.black};
    font-family: ${theme.font.family};
    overflow-x: hidden;
    color: ${theme.colors.white};
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  input, select, textarea, button {
    font-family: inherit;
    font-size: inherit;
  }

  &::selection {
    color: ${theme.colors.black};
    background:  ${theme.colors.white};
  }
`
