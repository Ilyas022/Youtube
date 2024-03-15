import styled, { createGlobalStyle } from 'styled-components'

import RobotoRegular from './assets/fonts/Roboto-Regular.woff2'
import RobotoMedium from './assets/fonts/Roboto-Medium.woff2'
import RobotoBold from './assets/fonts/Roboto-Bold.woff2'
import { device } from 'constants/breakpoints'

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Roboto';
  src: local('Roboto-Regular'), url(${RobotoRegular}) format('woff2');
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: 'Roboto';
  src: local('Roboto-Medium'), url(${RobotoMedium}) format('woff2');
  font-style: normal;
  font-weight: 500;
}

@font-face {
  font-family: 'Roboto';
  src: local('Roboto-Bold'), url(${RobotoBold}) format('woff2');
  font-style: normal;
  font-weight: 700;
}

	*{
		padding: 0;
		margin: 0;
		border: 0;
	}
	*,*:before,*:after{
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	:focus,:active{outline: none;}
	a:focus,a:active{outline: none;}

	nav,footer,header,aside,main{display: block;}

	html {
		font-size: 62.5%;
		font-family: Roboto, sans-serif;
	}

	html,body,#root{
		height: 100%;
		line-height: 1;
		-ms-text-size-adjust: 100%;
		-moz-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
	}
	body {
		background-color: ${(props) => props.theme.primary};
	}
	input,button,textarea{font-family:inherit;}

	input::-ms-clear{display: none;}
	button{cursor: pointer;}
	button::-moz-focus-inner {padding:0;border:0;}
	a, a:visited{text-decoration: none;}
	a:hover{text-decoration: none;}
	ul li{list-style: none;}
	img{vertical-align: top;}

	h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: inherit;}

	*a, *button {
		color: inherit;
	}

	body {
			background-color: ${({ theme }) => theme.colors.background};
			color: ${({ theme }) => theme.colors.text}
	}

	#root > div {

		> main {
			flex: 1 0 auto;
		}

		> footer {
			flex: 0 0 auto;
		}
	}
`
export const StyledWrapper = styled.div`
	width: 100%;
	min-height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	max-width: 1480px;
	padding: 0 20px;
	margin: 0 auto;
	overflow: hidden;

	@media ${device.xs} {
		padding: 0 17px 0 14px;
	}

	> main {
		flex: 1 0 auto;
		padding-bottom: 55px;
		border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
		margin-bottom: 62px;

		@media ${device.sm} {
			padding-bottom: 12px;
			margin-bottom: 7px;
		}
	}

	> footer {
		flex: 0 0 auto;
	}
`
