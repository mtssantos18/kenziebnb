import Header from "./../../components/Header";
import CardHouse from "../../components/CardHouse/index.js";
import { Filter, List, Container } from "./styles.js";
import mockup from "./../../images/mockup.png";

const data = [
  {
    id: 1,
    img: mockup,
    title: `Champion Packable Jacket`,
    description: `Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...`,
    price: 100,
    guests: 2,
  },
  {
    id: 2,
    img: mockup,
    title: `Champion Packable Jacket`,
    description: `Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...`,
    price: 100,
    guests: 2,
  },
  {
    id: 3,
    img: mockup,
    title: `Champion Packable Jacket`,
    description: `Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...`,
    price: 100,
    guests: 2,
  },
  {
    id: 4,
    img: mockup,
    title: `Champion Packable Jacket`,
    description: `Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...`,
    price: 100,
    guests: 2,
  },
  {
    id: 5,
    img: mockup,
    title: `Champion Packable Jacket`,
    description: `Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...`,
    price: 100,
    guests: 2,
  },
];

function Home() {
  return (
    <>
      <Header />

      <Container>
        <List>
          {data.map((product) => (
            <CardHouse key={product.id} product={product} />
          ))}
        </List>
      </Container>

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
    </>
  );
}

export default Home;
