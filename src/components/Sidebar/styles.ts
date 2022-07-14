import styled from "styled-components";

export const Container = styled.aside`
  height: 100vh;
  background: ${({ theme }) => theme.colors.primaryBlue};
  display: flex;
  flex-direction: column;
	justify-content: space-between;

	
`;

export const Content = styled.div`
  padding: calc(36rem / 16) calc(22rem / 16) calc(42rem / 16) calc(47rem / 16);
	flex: 1;
	display: grid;
	height: 89%;
	grid-template-rows: 1fr 10fr 1fr;

  .top {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.shape};
    font-size: calc(27rem / 16);
    font-weight: bold;
  }

  .title {
    width: calc(200rem / 16);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(38rem / 16);
    height: calc(38rem / 16);
    border-radius: 10rem;
    background: ${({ theme }) => theme.colors.primaryBlack};
    cursor: pointer;

    transition: 0.2s;

    &:hover {
      opacity: 0.45;
    }
  }

	.wrapper{
		overflow: hidden;
		padding: 1rem 0;
		margin-right: 1.3rem;
	}

  .cards {		
    display: flex;
    flex-direction: column;
		align-items: center;
		gap: .5rem;		
		height: 100%;
		margin-right: -1.3rem;
		overflow-x: hidden;	
  }

	.total{
		display: flex;
		padding: 1rem 0;
		justify-content: space-between;
		color: ${({ theme }) => theme.colors.shape};
		
		font-size: calc(27rem / 16);
		font-weight: bold;
	}
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primaryBlack};
  color: ${({ theme }) => theme.colors.shape};
  height: calc(97rem / 16);
  font-size: calc(28rem / 16);
  font-weight: bold;
`;
