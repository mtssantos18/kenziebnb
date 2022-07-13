import LoginForm from "../../components/LoginForm";

import { LoginModal, ScreenContainer } from "./style";

import ubatubaImg from "../../assets/Ubatuba1.png";

function Login() {
  return (
    <ScreenContainer>
      <LoginModal>
        <img src={ubatubaImg} alt="Plano de fundo" />

        <LoginForm />
      </LoginModal>
    </ScreenContainer>
  );
}

export default Login;
