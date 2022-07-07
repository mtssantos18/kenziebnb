import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;

  background-color: var(--grey-2);

  .title {
    padding: 1.5rem;

    color: var(--white);

    font-size: 36px;
    font-weight: 700;

    text-shadow: 2px 4px 7px rgba(0, 0, 0, 0.73);
  }
`;

export const Background = styled.div``;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 85%;
  max-width: 500px;

  background-color: var(--white);

  border-radius: 9px;

  padding: 0.5rem;

  box-shadow: 3px 2px 8px 2px rgba(0, 0, 0, 0.24);
`;

const appearFromLeft = keyframes`
from{
    opacity: 0;
    transform: translateX(-25px);
}
to{
    opacity: 1;
    transform: translateX(0px);
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  animation: ${appearFromLeft} 1s;

  h1 {
    font-weight: 700;
    font-size: 24px;
    color: var(--blue-3);

    padding: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 4px;

    width: 100%;
    max-width: 330px;

    & > button {
      margin: 0 auto;

      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      width: 95%;
    }
  }

  p {
    font-size: 13px;
  }

  .login {
    background-color: transparent;
    text-decoration: underline;

    font-size: 13px;
  }
`;
