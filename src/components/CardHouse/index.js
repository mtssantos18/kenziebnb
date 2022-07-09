import { Container, ContainerEvaluation, Price } from "./styles";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Button from "../Button";

function CardHouse({ product }) {
  const formatValue = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

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

      <Button>Ver detalhes</Button>
    </Container>
  );
}
export default CardHouse;
