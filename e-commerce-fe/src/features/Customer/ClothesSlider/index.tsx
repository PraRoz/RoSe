import React, { useRef } from "react";
import Card from "../../../constants/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ICard, IProduct } from "../../../types";

type ISlider = {
  title: string;
  productArray?: IProduct[];
};

function ClothesSlider({ title, productArray }: ISlider) {
  const sliderRef = useRef(null);
  const next = () => {
    // @ts-ignore
    sliderRef?.current?.slickNext();
  };
  const prev = () => {
    // @ts-ignore
    sliderRef?.current?.slickPrev();
  };

  const sliderSettings = {
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    speed: 500,
    touchMove: true,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="px-24 my-10 relative">
      <i
        className="fa-solid fa-circle-arrow-right absolute text-primary text-3xl top-[21rem] right-10  cursor-pointer hover:text-4xl"
        style={{ transition: "all 300ms" }}
        onClick={next}
      ></i>
      <i
        className="fa-solid fa-circle-arrow-left absolute text-primary text-3xl top-[21rem] left-10  cursor-pointer hover:text-4xl"
        style={{ transition: "all 300ms" }}
        onClick={prev}
      ></i>
      <h1 className="Heading  text-2xl font-semibold text-primary ">{title}</h1>
      <Slider ref={sliderRef} {...sliderSettings}>
        { productArray?.map((product: ICard) => {
          return (
            <Card
              key={product._id}
              _id={product._id}
              name={product.name}
              photo={product.photo}
              intro={product.intro}
              price={product.price}
              discount={product.discount}
            />
          );
        })}
      </Slider>
    </div>
  );
}
export default ClothesSlider;
