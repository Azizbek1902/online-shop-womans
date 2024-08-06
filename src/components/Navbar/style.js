import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: ${({ isScrolled }) => (isScrolled ? "fixed" : "relative")};
  top: ${({ isScrolled }) => (isScrolled ? "0" : "auto")};
  width: 100%;
  background: rgb(241, 228, 247);
  background: linear-gradient(
    90deg,
    rgba(241, 228, 247, 1) 0%,
    rgba(255, 255, 255, 1) 100%,
    rgba(252, 176, 69, 1) 100%
  );
  border-bottom: 2px solid #e1e5ea;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 2px 8px rgba(0, 0, 0, 0.15)" : "none"};
  transition: all 0.3s ease-in-out;
  .items {
    display: flex;
    align-items: center;
    gap: 40px;
    background: transparent;
  }
  .item {
    background: transparent;
    text-decoration: none;
    color: #303030;
    font-weight: 600;
    font-size: 18px;
  }
  .active {
    background: linear-gradient(45deg, #f371b2, #9d6cff, #8073ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
  }
  .serach {
    display: flex;
    gap: 40px;
    align-items: center;
    background-color: transparent;
  }
  .search-input {
    display: flex;
    align-items: center;
    background-color: transparent;
  }
  .serch {
    border-top: 2px solid #e1e5ea;
    border-left: 2px solid #e1e5ea;
    border-bottom: 2px solid #e1e5ea;
    border-right: 0px;
    padding: 10px 0px 10px 15px;
    background-color: white;
    border-radius: 25px 0px 0px 25px;
  }
  .input {
    border-radius: 0px 25px 25px 0px;
    border-top: 2px solid #e1e5ea;
    border-right: 2px solid #e1e5ea;
    border-left: 0px;
    height: 45px;
    outline: none;
    width: 200px;
    box-shadow: none;
    border-bottom: 2px solid #e1e5ea;
  }
  .cart {
    padding: 0px;
    border-radius: 50%;
    width: 43px;
    height: 43px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #f371b2, #9d6cff, #8073ff);
    border: none;
  }
  .title {
    background: linear-gradient(45deg, #f371b2, #9d6cff, #8073ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
    font-weight: 600;
    font-size: 22px;
  }
  /* @media (max-width: 1300px) {
    padding: 20px 100px;
  }
  @media (max-width: 1024px) {
    padding: 20px 50px;
  } */
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavbarResponsive = styled.div`
  position: ${({ isScrolled }) => (isScrolled ? "fixed" : "relative")};
  height: ${({ open }) => (open ? "300px" : "60px")};
  top: ${({ isScrolled }) => (isScrolled ? "0" : "auto")};
  width: 100%;
  background: rgb(241, 228, 247);
  background: linear-gradient(
    90deg,
    rgba(241, 228, 247, 1) 0%,
    rgba(255, 255, 255, 1) 100%,
    rgba(252, 176, 69, 1) 100%
  );
  overflow: hidden;
  border-bottom: 2px solid #e1e5ea;
  padding: 0px 30px;
  z-index: 1000;
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 2px 8px rgba(0, 0, 0, 0.15)" : "none"};
  transition: all 0.3s ease-in-out;
  .nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    background-color: transparent;
    align-items: center;
  }
  .hamburger {
    cursor: pointer;
  }
  .title {
    background: linear-gradient(45deg, #f371b2, #9d6cff, #8073ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
    font-weight: 600;
    font-size: 22px;
  }
  .items {
    display: flex;
    flex-direction: column;
    background: transparent;
  }
  .item {
    background: transparent;
    text-decoration: none;
    color: #303030;
    font-weight: 600;
    font-size: 18px;
    height: 45px;
  }
  .active {
    background: linear-gradient(45deg, #f371b2, #9d6cff, #8073ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    height: 45px;
  }
  .serach {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-top: 25px;
  }
  .search-input {
    display: flex;
    align-items: center;
    background-color: transparent;
  }
  .serch {
    border-top: 2px solid #e1e5ea;
    border-left: 2px solid #e1e5ea;
    border-bottom: 2px solid #e1e5ea;
    border-right: 0px;
    padding: 10px 0px 10px 15px;
    border-radius: 25px 0px 0px 25px;
    background-color: white;
  }
  .input {
    border-radius: 0px 25px 25px 0px;
    border-top: 2px solid #e1e5ea;
    border-right: 2px solid #e1e5ea;
    border-left: 0px;
    height: 45px;
    outline: none;
    min-width: 100px;
    max-width: 200px;
    box-shadow: none;
    border-bottom: 2px solid #e1e5ea;
  }
  .cart {
    padding: 0px;
    border-radius: 50%;
    width: 43px;
    height: 43px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #f371b2, #9d6cff, #8073ff);
    border: none;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
