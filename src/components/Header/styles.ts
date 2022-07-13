import styled from "styled-components";

export const Container = styled.header`
	position: fixed;
	width: 100vw;
	background: ${({ theme }) => theme.colors.primaryBlue};
	padding: 1.75rem 4rem ;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 5;

	@media (max-width: 720px) {
      padding: 1.75rem 1.25rem;
    }

	div{
		display: flex;
		align-items: center;
		color: ${({ theme }) => theme.colors.shape};
		gap: 5px;

		h1{
			font-size: 2.5rem;
			font-weight: 600;
		}

		p{
			font-size: 1.25rem;
			font-weight: 300;
		}
	}

	.title-container{
		align-items: flex-end;
		p{
			margin-bottom: 5px;
		}
	}
	
	

	.cart-container{
		background: ${({ theme }) => theme.colors.shape};
		border-radius: 8px;
		width: 5.6rem;
		height: 2.8rem;
		display: flex;
		justify-content: center;
		gap: 16px;

		p{
			font-size: 1.1rem;
			font-weight: 600;
			line-height: 21px;
			color: ${({ theme }) => theme.colors.primaryBlack};
		}
	}

`