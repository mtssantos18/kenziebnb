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

export const Title = styled.h2`
  font-weight: 600;
  font-family: Inter;
  font-size: 16px;
  color: #495057;

  padding: 0.5rem 1.3rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;

  padding: 0 1.3rem;
  margin-bottom: 1rem;

  @media (min-width: 800px) {
    overflow-x: hidden;

    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;

  text-align: center;

  h2 {
    font-size: 20px;
  }

  a {
    text-decoration: underline;
    text-underline-offset: 1px;

    :hover {
      color: var(--blue-3);
    }
  }
`;
