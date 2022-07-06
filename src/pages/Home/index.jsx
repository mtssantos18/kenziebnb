import Input from "../../components/Input/index.jsx";
import SelectInput from "../../components/SelectInput/index.jsx";

function Home() {
	return (
		<div>
			{/* Exemplos Input */}
			<Input
				label="Senha"
				name="password"
				type="password"
				placeholder="Digite aqui seu email"
				// register={register}
				// error={errors.password?.message}
			/>
			<Input
				label="Nome"
				name="name"
				type="text"
				placeholder="Digite aqui seu nome"
				// register={register}
				// error={errors.password?.message}
			/>
			<SelectInput
				label="Atribuição"
				name="atribution"
				// register={register}
			/>
		</div>
	);
}

export default Home;
