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

function LoginForm() {
	const formSchema = yup.object().shape({
		email: yup
			.string()
			.required("Email obrigatório")
			.email("Email inválido"),
		password: yup.string().required("Senha obrigatória"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(formSchema) });

	function onSubmitFunction(data) {
		console.log(data);
	}

	return (
		<ScreenContainer>
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
					<button>
						<span>Cadastre-se aqui!</span>
					</button>
				</SignupContainer>
			</Container>
		</ScreenContainer>
	);
}

export default LoginForm;
