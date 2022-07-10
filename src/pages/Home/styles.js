import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 5px 20px;

  @media (min-width: 950px) {
    padding: 10px 20px 5px 20px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 950px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const List = styled.ul`
  display: flex;
  height: 480px;
  flex-direction: row;
  overflow-x: scroll;

  @media (min-width: 950px) {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    /* align-items: center; */
    max-width: 950px;
    height: auto;
    flex-wrap: wrap;
    overflow: hidden;
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  margin-left: 20px;
  gap: 10px;
  background: var(--grey-3);
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 18px;
  color: white;

  &:hover {
    background: var(--grey-4);
  }
`;
