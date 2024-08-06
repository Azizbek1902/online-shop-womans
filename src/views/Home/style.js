import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0px 100px;
  @media (max-width: 768px) {
    padding: 0px 10px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 0px;
  padding: 16px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;
