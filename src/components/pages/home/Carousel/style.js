import styled from "styled-components";

export const Wrap = styled.div`
  .img {
    width: 100%;
    height: 70vh;
  }
  .swiper-pagination {
    background: transparent;
  }
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
  }
  .swiper-pagination-bullet-active {
    background: linear-gradient(45deg, #f371b2, #9d6cff, #8073ff);
  }
  @media (max-width: 1024px) {
    .img {
      width: 100%;
      height: 50vh;
    }
  }
  @media (max-width: 900px) {
    .img {
      width: 100%;
      height: 30vh;
    }
    .swiper-pagination-bullet {
      width: 15px;
      height: 15px;
    }
  }
  @media (max-width: 600px) {
    .img {
      width: 100%;
      height: 20vh;
    }
  }
  @media (max-width: 425px) {
    .img {
      width: 100%;
      height: 15vh;
    }
  }
`;
