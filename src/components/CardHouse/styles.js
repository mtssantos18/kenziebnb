import styled from "styled-components";

export const Container = styled.div`
  min-width: 280px;
  height: 420px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 1px 4px 9px rgba(0, 0, 0, 0.12);
  margin-left: 20px;
  position: relative;

  button {
    width: 200px;
    height: 45px;
    position: absolute;
    bottom: -20px;
    right: 0;
    left: 0;
    margin: 0 auto;
  }

  div {
    padding-left: 7px;
    h2 {
      font-family: "Inter";
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
      color: var(--grey-4);
      padding-top: 17px;
    }
    p {
      font-family: "Inter";

      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;
      color: var(--grey-4);
    }
  }
  figure {
    height: 202px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 900px) {
    min-width: 280px;
    height: 400px;
    margin-bottom: 3rem;
  }
`;

export const ContainerEvaluation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;
  padding-top: 3rem;
  svg {
    color: #ffe600;
    font-size: 2rem;
  }
  @media (min-width: 900px) {
    padding-top: 2rem;
  }
`;

export const Price = styled.p`
  height: 35px;
  font-family: "Inter";
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: var(--black);
  padding-top: 16px;
  padding-left: 7px;

  span {
    font-family: "Inter";
    color: var(--black);
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;
