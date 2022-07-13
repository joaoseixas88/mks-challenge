import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 13.6rem;
	height: 17rem;
	justify-content: space-between;
	border-radius: 5px;
	background: ${({ theme }) => theme.colors.shape};
	padding-top: 18px;
	overflow: hidden;
	box-shadow: 0px 2px 10px 1px #888888;

	@media (max-width: 800px) {
		width: 15.6rem;
		min-height: 20.3rem;
	}


	.image-container{		
		position: relative;
		height: calc(138rem/16);
		align-items: center;		justify-content: center;

		@media (max-width: 800px) {
			height: 158px;
	}
		
	}

	.price-container{
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		padding: 11px;
		
		div{
			flex: 1;
		}

		.price{
			max-width: fit-content;
		}
	}

	.btn-container{
		height: 2rem;
		border: 0 0 5px 5px;

		@media (max-width: 800px) {
			height: 2.2rem;			
		}
	}

	

	h3{
		font-weight: 400;
		font-size: 1rem;
	}

	.description{
		padding: 0 11px 12px 11px;
		p{
			font-size: 0.62rem;
			font-weight: lighter;
		}
	}


`