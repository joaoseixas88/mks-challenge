import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.shape};
  width: calc(385rem / 16);
  height: calc(101rem / 16);
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  padding: 1rem 1.3rem;
  border-radius: 8px;
	gap: 1.3rem;;
`;
export const FirstContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  .title {
    width: calc(113rem / 16);
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: calc(138rem / 16);
  align-items: center;
  justify-content: center;
  width: calc(46rem / 16);
  height: calc(57rem / 16);
`;

export const SecondContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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
		}
		.custom-button{
			padding: 0 0.2rem ;
			cursor: pointer;
		}
  }


`;
