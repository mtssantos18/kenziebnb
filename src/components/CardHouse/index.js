import { Container, ContainerEvaluation, Price } from "./styles";
import { AiFillStar } from "react-icons/ai";
import Button from "../Button";
import { useHistory } from "react-router-dom";

function CardHouse({ product }) {
  const formatValue = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  const history = useHistory();

  function handleClickDetails() {
    history.push("/house/4");
  }

  return (
    <Container>
      <figure>
        <img src={product.img} alt={product.title} />
      </figure>
      <div>
        <h2>{product.title}</h2>
        <p>{product.guests} hóspedes</p>
      </div>
      <Price>
        {formatValue}
        <span> / noite</span>
      </Price>
      <ContainerEvaluation>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </ContainerEvaluation>

      <Button onClick={handleClickDetails}>Ver detalhes</Button>
    </Container>
  );
}
export default CardHouse;
