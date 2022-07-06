import Input from "../../components/Input/index.jsx";

function Home() {
	return (
		<div>
			<Input
				label="Nome"
				name="name"
				type="text"
				placeholder="Digite aqui seu email"
				// register={{}}
				// error={true}
			/>
		</div>
	);
}

export default Home;
