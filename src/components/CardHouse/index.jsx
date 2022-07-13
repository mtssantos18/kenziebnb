import { Container, ContainerEvaluation, Price } from "./styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { SlideImg } from "../SlideImg";
import { useContext } from "react";
import { FilterContext } from "../../providers/Filter/Filter";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function CardHouse({ product }) {
  const history = useHistory();
  const [currentHomeStars, setCurrentHomeStars] = useState([]);
  const { filterList } = useContext(FilterContext);

  const formatValue = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  function handleClickDetails(id) {
    history.push(`/house/${id}`);
  }

  function homeStars() {
    const starsArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= product.reviews) {
        starsArray.push(true);
      } else {
        starsArray.push(false);
      }
    }
    setCurrentHomeStars([...starsArray]);
  }

  useEffect(() => {
    homeStars();
  }, [filterList, product]);

  return (
    <Container>
      <figure>
        {/* <img src={product.imgs[0]} alt={product.title} /> */}
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="containerImgs">
            {product.imgs?.map((img, index) => {
              return (
                <SwiperSlide className="slider" key={index}>
                  <img src={img} alt="" />
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </figure>
      <div>
        <h2>{product.title}</h2>
        <p>{product.capacity} hóspedes</p>
      </div>
      <Price>
        {formatValue}
        <span> / noite</span>
      </Price>
      <ContainerEvaluation>
        {/* {product.reviews} */}
        {currentHomeStars?.map((elem, index) => {
          return elem ? (
            <AiFillStar key={index} />
          ) : (
            <AiOutlineStar key={index} />
          );
        })}
      </ContainerEvaluation>

      <Button onClick={() => handleClickDetails(product.id)}>
        Ver detalhes
      </Button>
    </Container>
  );
}
export default CardHouse;
