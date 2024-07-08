import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import nextArrowIcon from "./../../assets/images/Group 344.png";
import BannerSlideElement from "./BannerSlideElement";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        // opacity: 0,
        content: "",
        backgroundImage: `url(${nextArrowIcon})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "50px", // Adjust the width and height as needed
        height: "50px",
        top: "450px",
        left: "-100px",
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
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {/*  */}

          {/*  */}
          <BannerSlideElement></BannerSlideElement>
          <BannerSlideElement></BannerSlideElement>
          <BannerSlideElement></BannerSlideElement>
          {/*  */}
        </Slider>
      </div>
    </div>
  );
};

export default BannerVerticalSlider;
