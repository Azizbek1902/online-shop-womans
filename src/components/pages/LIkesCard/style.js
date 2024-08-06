import styled from "styled-components";

export const Wrap = styled.div`
  .card {
    height: 100%;
    border: 2px solid #e2e0e16e;
    min-width: 200px;
    width: 100%;
    background: rgb(233, 213, 248);
    background: radial-gradient(
      circle,
      rgba(233, 213, 248, 1) 0%,
      rgba(255, 255, 255, 1) 97%
    );
    max-width: 400px;
    padding: 10px;
  }
  .hiden {
    width: 100%;
    background-color: transparent;
    overflow: hidden;
    height: 300px;
  }
  .img {
    width: 100%;
    transition: 0.4s ease-in-out;
    height: 300px;
  }
  .img:hover {
    transform: scale(1.2);
  }
  .text {
    width: 100%;
    padding: 15px 0px;
    background-color: transparent;
  }
  .title {
    font-size: 20px;
    height: 50px;
    background-color: transparent;
  }
  .price {
    font-size: 21px;
    font-weight: 700;
    background-color: transparent;
  }
  .footer {
    display: flex;
    background-color: transparent;
    align-items: center;
    padding-top: 20px;
    justify-content: space-between;
  }
  .buton_group {
    display: flex;
    background-color: transparent;
    gap: 20px;
    align-items: center;
  }
  .btn {
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #efeef6;
  }
  .btn2 {
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fcecf6;
  }
`;
