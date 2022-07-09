import styled from "styled-components";

export const Container = styled.div`
  color: var(--grey-4);
  width: 100%;
  margin-top: 10px;
  .grades {
    display: flex;
    svg {
      font-size: 25px;
      margin: 1rem 0;
      color: #ffe600;
    }
  }
  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
  .containerConforts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 7px;
    margin-top: 7px;
  }
  .confort {
    display: flex;
    align-items: center;
    gap: 7px;
    .circle {
      width: 39px;
      height: 39px;
      background: var(--grey-2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 24px;
      color: var(--blue-3);
    }
    p {
      font-weight: 300;
      font-size: 11px;
      line-height: 13px;
    }
  }
  @media (min-width: 900px) {
    h3 {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
    }
  }
`;
