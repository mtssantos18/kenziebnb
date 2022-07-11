import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  footer {
    position: absolute;
    bottom: 0px;

    margin-top: 1rem;
  }

  .btnHome {
    background: #d9d9d9;

    border-radius: 10px;

    height: 26px;

    padding: 0 1rem;
    margin-left: 1.3rem;
    margin-bottom: 1rem;

    color: var(--grey-4);
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 5px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 1.3rem;
`;
