import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.css";

import img1 from "./../../assets/images/slider1.png";
import img2 from "./../../assets/images/slider2.png";
import img3 from "./../../assets/images/slider3.png";
import img4 from "./../../assets/images/slider4.png";
import img5 from "./../../assets/images/slider5.png";
import img6 from "./../../assets/images/slider6.png";
import ReleaseCard from "../release/releasecard/ReleaseCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        // background: "red",
        top: -80,
        right: 90,
        // fontSize: "40px",
        // right: "unset",
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
        display: "block",
        // background: "green",
        top: -80,
        right: 160,
        // fontSize: "40px",
        left: "unset",
      }}
      onClick={onClick}
    />
  );
}

const SliderCardsTwo = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="relative">
        <div className="slider-container overflow-x-hidden py-20">
          <div className="container mx-auto max-w-[1400px] w-[100%] lg:w-[88%] lg:mx-auto pb-12">
            <div className="flex items-center gap-5">
              <h2 className="text-5xl font-black uppercase">Newest releases</h2>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="41"
                  viewBox="0 0 21 41"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.88859 15.023C3.3734 10.5632 0.73792 4.56467 -0.00012207 0.35356L2.5185 2.25423C3.61301 5.79391 5.98958 10.1066 10.1462 13.4678C12.8613 15.6634 16.363 17.4747 20.8135 18.3891V21.6744C16.363 22.5888 12.8613 24.4002 10.1462 26.5957C5.05716 30.7109 2.63634 36.2524 1.96985 40.0552L-0.00012207 39.71C0.73792 35.4989 3.3734 29.5004 8.88859 25.0406C11.5762 22.8673 14.9256 21.0772 19.0333 20.0318C14.9256 18.9863 11.5762 17.1962 8.88859 15.023ZM20.8135 14.5416L2.44838 2.02263C2.23817 1.3132 2.08004 0.636991 1.96985 0.00830078L-0.00012207 0.35356L2.44838 2.02263C2.47114 2.09945 2.49451 2.17665 2.5185 2.25423L20.8135 16.0605V14.5416Z"
                    fill="#E2E2E2"
                  />
                </svg>
              </span>
            </div>
          </div>
          <Slider {...settings}>
            <div>
              <ReleaseCard img={img1}></ReleaseCard>
            </div>
            <div>
              <ReleaseCard img={img2}></ReleaseCard>
            </div>
            <div>
              <ReleaseCard img={img3}></ReleaseCard>
            </div>
            <div>
              <ReleaseCard img={img4}></ReleaseCard>
            </div>
            <div>
              <ReleaseCard img={img5}></ReleaseCard>
            </div>
            <div>
              <ReleaseCard img={img6}></ReleaseCard>
            </div>
            <div>
              <ReleaseCard img={img3}></ReleaseCard>
            </div>
            <div>
              <ReleaseCard img={img4}></ReleaseCard>
            </div>
            <div>
              <ReleaseCard img={img5}></ReleaseCard>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderCardsTwo;
