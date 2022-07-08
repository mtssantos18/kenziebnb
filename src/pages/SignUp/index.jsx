import { AnimationContainer, Background, Container, FormDiv } from "./style";

import Input from "../../components/Input";
import SelectInput from "../../components/SelectInput";
import Button from "../../components/Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import SignupImage from "../../assets/signup.svg";

import { useContext } from "react";
import { UserContext } from "../../providers/User/User";

function SignUp() {
  const { handleNavigation, signUpUser } = useContext(UserContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(/^(?=.{5,})/, "Mínimo de 5 caracteres"),
    passwordConfirm: yup
      .string()
      .required("Confirme a senha")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
    cpf: yup.string().required("CPF obrigatório"),
    phone: yup.string().required("Telefone obrigatório"),
    atribution: yup.string().required("Atribuição obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmit(data) {
    const { atribution, cpf, email, name, password, phone } = data;
    const newAccount = { atribution, cpf, email, name, password, phone };
    signUpUser(newAccount);
  }

  return (
    <Container>
      <h1 className="title">KenzieBnB</h1>
      <FormDiv>
        <AnimationContainer>
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Nome"
              name="name"
              type="text"
              placeholder="Digite seu nome"
              register={register}
              error={errors.name?.message}
            />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Digite seu email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              label="Senha"
              name="password"
              type="password"
              placeholder="Digite sua senha"
              register={register}
              error={errors.password?.message}
            />
            <Input
              label="Confirmação de senha"
              name="passwordConfirm"
              type="password"
              placeholder="Confirme sua senha"
              register={register}
              error={errors.passwordConfirm?.message}
            />
            <Input
              label="CPF"
              name="cpf"
              type="text"
              placeholder="Digite seu CPF"
              register={register}
              error={errors.cpf?.message}
            />

            <Input
              label="Telefone"
              name="phone"
              type="text"
              placeholder="Digite seu telefone"
              register={register}
              error={errors.phone?.message}
            />
            <SelectInput
              label="Atribuição"
              name="atribution"
              register={register}
              error={errors.atribution?.message}
            />

            <Button type="submit">Cadastrar</Button>
          </form>
          <p>Já possui cadastro? </p>
          <button onClick={() => handleNavigation("/login")} className="login">
            Entre aqui!
          </button>
        </AnimationContainer>
      </FormDiv>
      <Background>
        <img src={SignupImage} alt="Plano de Fundo" />
      </Background>
    </Container>
  );
}

export default SignUp;
