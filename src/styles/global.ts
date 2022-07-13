import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

	*{
		font-family: 'Montserrat', sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	 

	 button{
		cursor: pointer;
	 }

	 html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

`;
