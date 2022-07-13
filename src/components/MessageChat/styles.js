import styled from "styled-components";

export const Container = styled.li`
  background-color: var(--grey-2);
  border-radius: 8px;
  width: 100%;
  padding: 0.2rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h4 {
    font-weight: 500;
    color: var(--grey-4);
  }
  p {
    padding-left: 4px;
    font-weight: 400;
    color: var(--grey-4);
    height: fit-content;
    width: 100%;
  }
  small {
    align-self: flex-end;
    font-size: 10px;
    color: var(--grey-4);
  }
`;
