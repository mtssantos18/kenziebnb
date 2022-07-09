import Header from "./../../components/Header";
import CardHouse from "../../components/CardHouse/index.js";

import { List, Container, FilterButton, ContentContainer } from "./styles.js";

import mockup from "./../../images/mockup.png";

import Footer from "../../components/Footer";

import { useContext } from "react";
import { HomesContext } from "../../providers/Homes/Homes";
import Button from "../../components/Button";
<<<<<<< HEAD
import FilterModal from "../../components/FilterModal";
import { IoFilterOutline } from "react-icons/io5";
=======
import Map from "../../components/Map";
>>>>>>> 1d0a3a26cc8cc599ef5f494e98c43830b2352b1d

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
	const { homeList } = useContext(HomesContext);

	return (
		<>
			<Header />

			<Container>
				<ContentContainer>
					<FilterButton>
						<IoFilterOutline size={22} />
						<p>Filtros</p>
					</FilterButton>
					<List>
						{data.map((product) => (
							<CardHouse key={product.id} product={product} />
						))}
					</List>
				</ContentContainer>
			</Container>

<<<<<<< HEAD
			{/* <Button header onClick={() => console.log(homeList)}>
				console homeList
			</Button> */}

			<Footer />
		</>
	);
=======
      <Button header onClick={() => console.log(homeList)}>
        console homeList
      </Button>
      <Map />
      <Footer />
    </>
  );
>>>>>>> 1d0a3a26cc8cc599ef5f494e98c43830b2352b1d
}

export default Home;
