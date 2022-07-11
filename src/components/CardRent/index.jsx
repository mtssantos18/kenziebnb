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
import {
  BookingInfo,
  Container,
  HostInfo,
  ImgDiv,
  PeriodAndPrice,
  Title,
  TotalPrice,
} from "./style";
import image from "../../assets/image-reservation.svg";

function CardRent(props) {
  return (
    <>
      <Title>Minhas Reservas</Title>
      <Container>
        <ImgDiv>
          <img src={image} alt="imagem" />
        </ImgDiv>
        <BookingInfo>
          <PeriodAndPrice>
            <p>
              Hóspedes: <span>4</span>
            </p>
            <h3>Período</h3>
            <p>
              Entrada: <span>05/07/2022</span>
            </p>
            <p>
              Saída: <span>10/07/2022</span>
            </p>
            <TotalPrice>
              <p>Total de dias:</p>
              <p>5</p>
            </TotalPrice>
            <TotalPrice>
              <p>Total da reserva:</p>
              <p>R$ 4.000,00</p>
            </TotalPrice>
          </PeriodAndPrice>
          <HostInfo>
            <h3>Dados Locador</h3>
            <p>
              Nome: <span>Gilsinho</span>
            </p>
            <p>
              Telefone: <span>129991930</span>
            </p>
            <p>
              Email: <span>gilsinhobala@mail.com</span>
            </p>
          </HostInfo>
          <button>Cancelar Reserva</button>
        </BookingInfo>
      </Container>
    </>
  );
}
export default CardRent;
