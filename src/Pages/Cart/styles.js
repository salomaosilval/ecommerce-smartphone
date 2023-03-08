import styled from "styled-components";

export const ProductsArea = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    height: 320px;
    width: 230px;
    border: 1px solid #e0e0e0;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 20px;

    button {
      border: none;
      background-color: transparent;
      color: crimson;
      font-size: 30px;
      cursor: pointer;
    }
  }

  div:hover {
    transform: scale(1.05);
  }
`;

export const SubTotalDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;
