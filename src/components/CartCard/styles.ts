import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.shape};
  width: 24rem;
  height: 6.3rem;
  display: flex;
	align-items: center;
  grid-template-columns: 1fr 1fr;  
  border-radius: 8px;
	justify-content: center;
	padding: 0 .5rem;
	flex-wrap: wrap;
`;


export const FirstContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
	flex: 1;
  .title {
    width: 5rem;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 8.6rem;
  align-items: center;
  justify-content: center;
	margin-left: -30px;
	margin-right: 20px;
  width: 2.4rem;
  height: 3.5rem;
`;

export const SecondContent = styled.div`
  display: flex;
	flex: 1;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  h2 {
		
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
	p{
		font-size: 12px;
	}
  .buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    width: 5rem;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    list-style-type: none;
		span{
			color: ${({ theme }) => theme.colors.lightGray};
			margin: 0 5px;
		}
		.custom-button{
			padding: 0 0.2rem ;
			cursor: pointer;
		}
  }


`;
