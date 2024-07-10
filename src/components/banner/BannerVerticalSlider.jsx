import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import nextArrowIcon from "./../../assets/images/Group 344.png";
import BannerSlideElement from "./BannerSlideElement";

import "./style/style.css";
import { useState } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",

        backgroundImage: `url(${nextArrowIcon})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "50px", // Adjust the width and height as needed
        height: "50px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
        // background: "green",
        botton: 0,
        left: 0,
        // fontSize: "40px",
        // left: "unset",
      }}
      onClick={onClick}
    />
  );
}

const BannerVerticalSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    // beforeChange: function (currentSlide, nextSlide) {
    //   console.log("before change", currentSlide, nextSlide);
    // },
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  const formatSlideNumber = (number) => String(number + 1).padStart(2, "0");

  return (
    <div>
      <div className="slider-container">
        <p className="capitalize font-secondary vertical-text">scroll down</p>
        <Slider {...settings}>
          {/*  */}

          {/*  */}
          <BannerSlideElement></BannerSlideElement>
          <BannerSlideElement></BannerSlideElement>
          <BannerSlideElement></BannerSlideElement>
          <BannerSlideElement></BannerSlideElement>
          <BannerSlideElement></BannerSlideElement>
          {/*  */}
        </Slider>
        <div className="slide-indicator">
          <span className="current-slide">
            {formatSlideNumber(currentSlide)}
          </span>
          <span className="total-slides">
            /{formatSlideNumber(totalSlides - 1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BannerVerticalSlider;
