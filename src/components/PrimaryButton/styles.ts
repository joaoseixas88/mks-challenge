import styled from "styled-components";

export const Container = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 14px;
	background: ${({ theme }) => theme.colors.primaryBlue};
	border: none;
	width: 100%;
	height: 100%;
	color: ${({ theme }) => theme.colors.shape};
	font-size: 0.9rem;
	font-weight: 500;

	&:hover{
		opacity: .9;
	}
`;
