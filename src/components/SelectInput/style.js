import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;

  label {
    color: #0077b6;
    font-weight: 400;
    font-size: 12px;
    line-height: 0px;
  }
`;

export const InputContainer = styled.div`
  height: 39px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #e9ecef;
  padding: 5px 13.0293px;
  border-radius: 3.20867px;

  &:focus-within {
    outline: 0.9772px solid #0077b6;
  }

  select {
    width: 100%;
    background: none;
    color: #495057;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;

    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }

    &:focus {
      color: #495057;
    }

    option {
      background: white;
    }
  }
`;
