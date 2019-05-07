import { createGlobalStyles } from 'styled-components';

export default createGlobalStyles`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  -webkit-font-smoothing: antialised;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
  --color-main: ${props => props.theme.colors.main};
  --color-mainDark: ${props => props.theme.colors.mainDark};
  --color-mainLight: ${props => props.theme.colors.mainLight};
  --color-mainLighter: ${props => props.theme.colors.mainLighter};
  --color-textColor: ${props => props.theme.colors.textColor};
  --color-whiteColor: ${props => props.theme.colors.whiteColor};
  --color-shadow: ${props => props.theme.colors.shadow};

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 55%;
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 60%;
  }
}

body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.6;
}

a, input, textarea, button {
  outline: none;
  font-family: inherit;
  text-decoration: none;

}


`;
