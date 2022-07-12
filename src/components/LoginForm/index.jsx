import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  LoginFormStyle,
  Container,
  SignupContainer,
  ScreenContainer,
} from "./style";
import Button from "../Button";
import Input from "../Input";
import { useContext } from "react";
import { UserContext } from "../../providers/User/User";

function LoginForm() {
  const { loginUser, handleNavigation } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function onSubmitFunction(data) {
    loginUser(data);
  }

  return (
    <>
      <Container>
        <h1>KenzieBnB</h1>
        <LoginFormStyle onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Digite aqui seu email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            label="Senha"
            name="password"
            type="password"
            placeholder="Digite aqui sua senha"
            register={register}
            error={errors.password?.message}
          />
          <Button type="submit">Entrar</Button>
        </LoginFormStyle>
        <SignupContainer>
          <p>Não tem cadastro ainda?</p>
          <button onClick={() => handleNavigation("/signup")}>
            <span>Cadastre-se aqui!</span>
          </button>
        </SignupContainer>
      </Container>
    </>
  );
}

export default LoginForm;
