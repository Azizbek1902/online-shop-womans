import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .filter {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .title {
    font-size: 35px;
    font-weight: 600;
    height: 95px;
    width: max-content;
  }
  .items {
    display: flex;
    gap: 30px;
    width: 60%;
    overflow: auto;
    padding-bottom: 10px;
    justify-content: center;
  }
  .container {
    display: flex;
    justify-content: center;
  }
  .item {
    display: flex;
    height: 78px;
    flex-direction: column;
    font-size: 20px;
    gap: 10px;
    width: max-content;
    font-weight: 500;
    cursor: pointer;
    color: #303030;
    align-items: center;
  }
  .items::-webkit-scrollbar {
    height: 8px; /* Height of the horizontal scrollbar */
  }

  .items::-webkit-scrollbar-track {
    background: #f1f1f1; /* Background color of the scrollbar track */
  }

  .items::-webkit-scrollbar-thumb {
    background: #888; /* Color of the scrollbar thumb */
    border-radius: 6px; /* Rounded corners of the scrollbar thumb */
  }

  .items::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color of the scrollbar thumb on hover */
  }
  @media (max-width: 768px) {
    .title {
      font-size: 25px;
    }
    .items {
      display: flex;
      gap: 20px;
      width: 90%;
      overflow: auto;
    }
    .item {
      font-size: 18px;
    }
  }
  @media (max-width: 600px) {
    .title {
      font-size: 20px;
    }
  }
  @media (max-width: 425px) {
    .title {
      font-size: 15px;
    }
  }
`;
