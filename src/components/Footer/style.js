import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #303030;
  width: 100%;
  display: flex;
  padding: 22px 0px;
  justify-content: center;
  .title {
    font-size: 20px;
    color: white;
    cursor: pointer;
    text-decoration: none;
    border-bottom: 2px solid white;
  }
  .card {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .contact {
    display: flex;
    gap: 20px;
  }
  .item {
    color: white;
    display: flex;
    cursor: pointer;
    border-radius: 5px;
    gap: 5px;
    align-items: center;
    background-color: #000000;
    border: 2px solid #737373;
    padding: 5px 10px;
    text-decoration: none;
  }
  @media (max-width: 500px) {
    .card {
      flex-direction: column;
      gap: 20px;
      align-items: start;
    }
  }
`;
