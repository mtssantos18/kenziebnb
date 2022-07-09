import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  position: relative;

  .iconHouse {
    position: absolute;
    inset: 0;
    margin: auto;
    z-index: 9999999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--grey-4);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    svg {
      font-size: 20px;
      color: #fff;
    }
  }
  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: var(--grey-4);
    margin-bottom: 10px;
  }
`;
