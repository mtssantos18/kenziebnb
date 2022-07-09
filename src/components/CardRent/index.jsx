/**
 * Fazer o componente CardRent, que será o componente que mostrará o card de aluguel.
 * O componente deve ter as seguintes propriedades:
 * - title: string que será o título do card, ex: "Minhas reservas".
 * - imagem: imagem que será exibida no card, ex: "./src/assets/image-reservation.svg"
 * - span: string que será o texto que será exibido o status da reservano card, ex: "Pendente".
 * - text: string que terá o número de hóspedes, ex: "4 hóspedes".
 * - text2: string que terá o período com data de entratada e saída, ex: "Entrada: 01/01/2019, Saída: 31/01/2019".
 * - text3: string que terá o total de dias, ex: "5 dias".
 * - text4: string que terá o valor da reserva, ex: "R$ 3.935,00".
 * - title: string que será o título Dados do Locador, ex: "Dados do Locador".
 * - text5: string que terá o nome do locador, ex: "Gilsinho das Casas".
 * - text6: string que terá o número do telefone do locador, ex: "(97) 97741-8574".
 * - text7: string que terá o email do locador, ex: "gilsinho_locador@gmail.com".
 * - button: string que será o texto do botão, ex: "Cancelar Reserva".
 * Receber por props as reservas e o usuário.
 * Fazer um function chamada CardRent que retornará o componente CardRent.
 *
 */
import { Container, Title } from "./style";
import image from "../../assets/image-reservation.svg";

function CardRent(props) {
  return (
    <>
      <Title>
        <h2>Minhas Reservas</h2>
      </Title>
      <Container>
        <div className="card-rent__image">
          <img src={image} alt="Imagem do card" />
        </div>
        <div className="card-rent__container">
          <div className="card-rent__text">
            <p>Hospedes:</p>
            <span>4</span>
          </div>
          <div className="card-rent__span">
            <span>Pendente</span>
          </div>
        </div>
        <div className="card-rent__text2">
          <h2>Período</h2>
          <div>
            <p>Entrada:</p>
            <span>01/01/2019</span>
          </div>
          <div>
            <p>Saída:</p>
            <span>31/01/2019</span>
          </div>
        </div>
        <div className="card-rent__container2">
          <p>Total dias:</p>
          <span>5</span>
        </div>
        <div className="card-rent__container2">
          <p>Total da reserva:</p>
          <span>R$ 3.935,00</span>
        </div>
        <div className="card-rent__title">
          <h2>Dados Locador</h2>
        </div>
        <div className="card-rent__text3">
          <div>
            <p>Nome:</p>
            <span>Gilsinho das Casas</span>
          </div>
          <div>
            <p>Telefone:</p>
            <span>(97) 97741-8574</span>
          </div>
          <div>
            <p>Email:</p>
            <span>gilsinho_locador@gmail.com</span>
          </div>
        </div>
        <div className="card-rent__button">
          <button>Cancelar Reserva</button>
        </div>
      </Container>
    </>
  );
}
export default CardRent;
