import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const text = css`
	font-family: 'Montserrat', sans-serif;
	letter-spacing: 1px;
	text-transform: uppercase;
`;

export const titleText = css`
	${text};

	font-size: 14px;
	font-weight: 600;
`;

export const colors = {
  white: 'white',
  darkgrey: 'lightgrey',
  lightgrey: '#ddd',
  transparentGrey: 'rgba(241, 242, 244, 0.8)',
  hoverGrey: '#6fa8aa',
  mainText: 'darkslategrey',
  lightText: 'cadetblue',
  darkText: 'darkslategrey',
}

export const borderRadius = {
  small: '5px',
  normal: '15px',
  huge: '45px',
}

export default GlobalStyle;
