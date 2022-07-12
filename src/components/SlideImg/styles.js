import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  overflow-y: none;
  .containerImgs,
  .mySwiper {
    width: 100%;
    height: 210px;
    border-radius: 10px;
    display: flex;
    .swiper-slide,
    .slider,
    .swiper-slide-active {
      margin: 0 auto;
      display: flex;
    }
    img {
      border-radius: 10px;
      height: 100%;
      margin: 0 auto;
    }
    .slider {
      margin: 0 auto;
    }
  }
  @media (min-width: 375px) {
    .mySwiper {
      height: 300px;
    }
  }
  @media (min-width: 650px) {
    .mySwiper {
      height: 350px;
    }
  }
  @media (min-width: 900px) {
    .swiper-slide,
    .slider,
    .swiper-slide-active {
      margin: 0;
    }
    img {
      width: 100%;
    }
    .mySwiper {
      width: 430px;
      height: 350px;
    }
  }
  @media (min-width: 1000px) {
    .mySwiper {
      width: 520px;
      height: 400px;
    }
  }
  @media (min-width: 1100px) {
    .mySwiper {
      width: 632px;
      height: 420px;
    }
  }
`;
