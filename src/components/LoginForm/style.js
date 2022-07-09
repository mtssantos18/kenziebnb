import styled, { keyframes } from "styled-components";

// export const ScreenContainer = styled.div`
// 	width: 100vw;
// 	height: 100vh;
// 	display: flex;
// 	justify-content: center;
// 	padding: 5px;

// 	@media (min-width: 800px) {
// 		/* display: none; */
// 	}
// `;

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  height: 600px;
  max-width: 400px;
  display: flex;
  /* outline: 1px solid red; */
  flex-direction: column;
  z-index: 1;
  margin-top: 0px;
  align-self: center;

  h1 {
    color: var(--white);
    margin-top: 40px;
    margin-bottom: 80px;
  }

  h1,
  button {
    align-self: center;
  }

  @media (min-width: 800px) {
    max-width: 800px;
    background-color: var(--white);
    padding-top: 20px;
    margin: 0px;
    height: 100%;

    h1 {
      color: var(--blue-3);
    }
  }
`;

const appearFromRight = keyframes`
from{
	opacity: 0;
	transform: translateX(20px);
}
to{
	opacity: 1;
	transform: translate(0px);
}
`;

export const LoginFormStyle = styled.form`
  background: var(--white);
  height: 280px;
  padding: 35px 5px 0px 5px;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 30px;
  animation: ${appearFromRight} 1s;

  & > button {
    position: absolute;
    bottom: -10px;
    width: 100%;

    @media (min-width: 800px) {
      max-width: 350px;
      position: static;
      margin-top: 40px;
    }
  }

  @media (min-width: 800px) {
    box-shadow: none;
    position: none;
    height: 350px;
  }
`;

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  color: var(--grey-4);
  font-size: 14px;
  margin-top: 40px;
  animation: ${appearFromRight} 1s;

  button {
    color: var(--grey-4);
    background: none;
    font-size: 14px;

    span {
      text-decoration: 1.2px solid underline;
      text-decoration-color: var(--grey-3);
      transition: 0.3s;
    }
    span:hover {
      text-decoration-color: var(--grey-4);
    }
  }

  @media (min-width: 800px) {
    margin-top: 0px;
  }
`;
