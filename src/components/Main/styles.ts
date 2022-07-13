import styled from "styled-components";

export const Container = styled.main`
	display: grid;
	padding: 13rem 15rem;
	margin-bottom: 20px;
	gap: 22px;
	/* overflow: scroll; */
	width: 100%;
	height: 100%;
	grid-template-columns: repeat(4, 1fr);
	


	@media (max-width: 800px) {
		display: flex;
		height: 100%;
		flex-direction: column;
		padding: 8rem 1rem;
		align-items: center;
	}
	
	@media (max-width: 1230px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1440px) {
		grid-template-columns: repeat(5, 1fr);
	}

	@media (min-width: 1900px) {
		grid-template-columns: repeat(6, 1fr);
	}
	
`