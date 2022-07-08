import Button from "../../components/Button/index.jsx";
import FilterModal from "../../components/FilterModal/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import { FooterStyle } from "../../components/Footer/styles.js";
import Input from "../../components/Input/index.jsx";
import LoginForm from "../../components/LoginForm/index.jsx";
import SelectInput from "../../components/SelectInput/index.jsx";

function Home() {
	return (
		<div>
			{/* <h1>Home</h1>
      <p> em construção</p>
       <Footer/> */}

			<FilterModal />
			{/* Exemplos Input */}
			{/* <Input
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
      /> */}
			{/* Exemplos Button:
	  	pode ser passado as seguintes props: 
		width, height, fontSize, fontWeight com os valores desejadodos
		caso não passe nada, ele virá com um valor predefinido;
		e caso seja um button da Header, basta passar a props header
		que ele virá com as configurações para o Header 
		deixei um exempo no componente <Button>

	  */}
			{/* <Button width={200} fontWeight={600}>
        Cadastrar
      </Button>

      <Button header>Login</Button> */}
		</div>
	);
}

export default Home;
