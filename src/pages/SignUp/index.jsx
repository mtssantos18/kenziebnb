import { AnimationContainer, Container, FormDiv } from "./style";

import Input from "../../components/Input";
import SelectInput from "../../components/SelectInput";
import Button from "../../components/Button";

import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import SignupImage from "../../assets/signup.svg";

function SignUp() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
        "Senha deve conter pelo menos uma letra maiúscula, um número, um caractere especial e no mínimo 8 caracteres"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes"),
    cpf: yup.string().required("Campo obrigatório"),
    zipCode: yup.string().required("Campo obrigatório"),
    number: yup.string().required("Campo obrigatório"),
    phone: yup.string().required("Campo obrigatório"),
    atribution: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmit(data) {
    console.log(data);
    // history.push("/login");
  }

  function handleLogin() {
    history.push("/login");
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
            <div>
              <Input
                label="CEP"
                name="zipCode"
                type="text"
                placeholder="Digite seu cep"
                register={register}
                error={errors.zipCode?.message}
              />
              <div className="firstDiv">
                <Input
                  label="Nº"
                  name="number"
                  type="text"
                  placeholder="0000"
                  register={register}
                  error={errors.number?.message}
                />
              </div>
            </div>
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
          <button onClick={handleLogin} className="login">
            Entre aqui!
          </button>
        </AnimationContainer>
      </FormDiv>
    </Container>
  );
}

export default SignUp;
