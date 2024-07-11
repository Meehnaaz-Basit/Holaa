import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
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
      className={`${className} custom-next-arrow`}
      style={
        {
          // ...style,
          // display: "block",
          // zIndex: "10",
          // top: -80,
          // right: 10,
          // left: 1400,
          // width: 40,
          // borderRadius: 100,
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }
      }
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle className=" lg:text-6xl md:text-5xl text-white" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      // style={{
      //   ...style,
      //   display: "block",
      //   top: -80,
      //   right: 160,
      //   width: 30,
      //   borderRadius: 100,
      //   zIndex: "10",
      //   left: "unset",
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      // }}
      onClick={onClick}
    >
      <IoIosArrowDropleftCircle className=" lg:text-6xl md:text-5xl text-white" />
    </div>
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
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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
        <div className="slider-container overflow-x-hidden lg:py-20 md:py-14 py-2">
          <div className="container mx-auto max-w-[1400px] w-[100%] lg:w-[88%] lg:mx-auto pb-12">
            <div className="flex items-center gap-5">
              <h2 className="lg:text-5xl md:text-3xl text-2xl mx-4 md:mx-4 font-black uppercase">
                Newest releases
              </h2>
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
