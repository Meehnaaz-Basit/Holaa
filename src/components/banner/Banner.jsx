import bannerRightBg from "../../assets/images/wallpaperflare 1.png";
import BannerVerticalSlider from "./BannerVerticalSlider";

const Banner = () => {
  return (
    <div className="relative">
      <div className="flex items-center">
        {/* left side  */}
        <div className="basis-1/3 z-10">
          <div
            style={{
              background:
                "linear-gradient(92deg, #080018 0%, #FF2929 45.93%, #FFB21C 97.73%)",
              width: "100%",
              height: "100vh",
            }}
          >
            {/* <div>
              <img
                src={bannerLeftIcon}
                className="lg:w-[420px] md:w-[300px] w-200px object-cover absolute top-20 left-[12%]"
                alt=""
              />
            </div> */}
          </div>
        </div>
        {/* right side */}
        <div className="basis-2/3 ">
          <div className="">
            <img
              src={bannerRightBg}
              className="w-full h-screen object-cover"
              alt=""
            />
          </div>
          <div className="absolute h-screen bg-black opacity-80 top-0 w-2/3"></div>
        </div>
      </div>
      {/* slide content */}
      <div className="absolute top-24 left-0 right-0 z-10 b lg:max-w-6xl md:max-w-4xl mx-auto">
        <div className="z-40">
          <BannerVerticalSlider></BannerVerticalSlider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
