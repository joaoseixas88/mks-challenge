import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	background: ${({ theme }) => theme.colors.bgColor};
	justify-content: center;
	align-items: center;
	height: 100vh;
	flex-direction: column;
	

	@media (max-width: 800px) {
		background: ${({ theme }) => theme.colors.shape};;
		
	}
`