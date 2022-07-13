import styled from "styled-components";

export const Container = styled.div`

display: flex;
justify-content: center;
background: ${({ theme }) => theme.colors.secondaryBlack};
padding: 4px 7px;
border-radius: 5px;
max-height: 26px;

p{
	font-size: 1rem;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.shape};
}

`