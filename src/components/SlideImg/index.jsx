import React from "react";

import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export const SlideImg = ({ house }) => {
	return (
		<Container>
			{house && (
				<Swiper
					pagination={{
						dynamicBullets: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					<div className="containerImgs">
						{house &&
							house.map((img) => {
								return (
									<SwiperSlide className="slider" key={img}>
										<img src={img} alt="" />
									</SwiperSlide>
								);
							})}
					</div>
				</Swiper>
			)}
		</Container>
	);
};
