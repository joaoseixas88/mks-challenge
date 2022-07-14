import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.shape};
  height: calc(220rem / 16);
  width: calc(250rem / 16);
  border-radius: 8px;
  padding: 1rem;
	gap: 11px;
`;

export const ImageContainer = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: calc(80rem / 16);
  height: calc(95rem / 16);
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const Counter = styled.div`
  display: flex;
  flex-direction: row;
  .buttons-container {
    display: flex;
    list-style-type: none;
    width: calc(97rem / 16);
    height: 2.2rem;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 4px;

		.quantity{
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 6px;

			span {
      color: ${({ theme }) => theme.colors.lightGray};
			font-size: 18px;
    }
		}

		.custom-button{
			display: flex;
			width: 100%;
			height: 100%;
			align-items: center;
			justify-content: center;
			cursor: pointer;
		}
   
  }
`;
