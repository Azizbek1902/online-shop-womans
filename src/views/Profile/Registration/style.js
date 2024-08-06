import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 84vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login {
    box-shadow: 0px 0px 10px #ead2f2;
    padding: 0px 20px;
    border-radius: 20px;
    width: 17%;
  }
  .title {
    font-size: 20px;
    text-align: center;
    font-weight: 600;
  }
  .item {
    margin-bottom: 15px;
    height: 40px;
    width: 100%;
  }
  .log {
    width: 100%;
    margin-bottom: 15px;
    background: linear-gradient(45deg, #f371b2, #9d6cff, #8073ff);
  }
  .ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover,
  .ant-btn-primary:not(:disabled):not(.ant-btn-disabled):active {
    color: #fff;
    background: linear-gradient(45deg, #f371b2, #9d6cff, #8073ff);
  }
  .create {
    font-size: 15px;
    text-decoration: underline;
    cursor: pointer;
    color: gray;
    padding-bottom: 20px;
  }
  @media (max-width: 1440px) {
    .login {
      width: 20%;
    }
  }
  @media (max-width: 1024px) {
    .login {
      width: 30%;
    }
  }
  @media (max-width: 768px) {
    .login {
      width: 50%;
    }
  }
  @media (max-width: 500px) {
    .login {
      width: 90%;
    }
  }
`;
