import styled from "styled-components";

export const Filter = styled.div`
  width: 6rem;

  background-color: var(--grey-3);
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 22px;
  margin-bottom: 21px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  color: var(--white);
  padding-left: 1.5rem;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  height: 480px;
  flex-direction: row;
  overflow-x: scroll;

  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    max-width: 900px;
    height: auto;
    flex-wrap: wrap;
    overflow: hidden;
  }
`;
