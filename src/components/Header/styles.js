import styled from "styled-components";

export const HeaderArea = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
  background-color: #2c3e50;
  padding: 20px;
  margin-bottom: 70px;

  a {
    text-decoration: none;
    color: #fff;
    transition: color 0.5s ease;

    &:hover {
      color: #3498db;
    }
  }

  p {
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
  }
`;
