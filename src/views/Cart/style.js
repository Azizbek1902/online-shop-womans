import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 84vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    text-align: center;
    font-size: 43px;
    padding: 0px 10px;
  }
  @media (max-width: 768px) {
    .title {
      font-size: 35px;
    }
  }
`;
