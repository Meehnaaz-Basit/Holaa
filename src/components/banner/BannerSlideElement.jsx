import bannerLeftIcon from "./../../assets/images/file 1.png";
import "./style/style.css";

const BannerSlideElement = () => {
  return (
    <div className="small-screen">
      <div className="flex items-center justify-evenly lg:max-w-6xl md:max-w-4xl  ">
        <div className="banner-small-screen-icon">
          <img
            src={bannerLeftIcon}
            className="lg:w-[420px] md:w-[300px] w-200px object-cover "
            alt=""
          />
        </div>

        <div className="space-y-4 lg:pb-20 small-screen-banner-content">
          <div className="">
            <h1 className="lg:text-8xl md:text-6xl text-5xl md:text-left text-center uppercase font-extrabold ">
              The Lord <br /> of The Rings
            </h1>
          </div>
          <div className="flex items-center md:gap-3 gap-1 font-secondary text-sm text-white">
            <div className="flex items-center gap-1 md:px-4 md:py-2 px-2 py-1 rounded-3xl bg-white bg-opacity-5 border-white border-2 border-opacity-5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8.00004 13.09L3.05574 16L4.16001 10.1565L0 6.11146L5.62676 5.40998L8.00004 0L10.3733 5.40998L16 6.11146L11.8401 10.1565L12.9443 16L8.00004 13.09Z"
                  fill="#E2E2E2"
                />
              </svg>
              <span>4.9 Reviews</span>
            </div>
            <div className="flex items-center gap-1  md:px-4 md:py-2 px-2 py-1 rounded-3xl bg-white bg-opacity-5 border-white border-2 border-opacity-5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 16C3.58172 16 0 12.4182 0 8C0 3.58172 3.58172 0 8 0C12.4182 0 16 3.58172 16 8C16 12.4182 12.4182 16 8 16ZM8.8 8V4H7.2V9.6H12V8H8.8Z"
                  fill="#E2E2E2"
                />
              </svg>
              <span>02h 30m</span>
            </div>
            <div className="flex items-center gap-1  md:px-4 md:py-2 px-2 py-1 rounded-3xl bg-white bg-opacity-5 border-white border-2 border-opacity-5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
              >
                <path
                  d="M0.9 0H17.1C17.5971 0 18 0.397973 18 0.888889V15.1111C18 15.602 17.5971 16 17.1 16H0.9C0.402948 16 0 15.602 0 15.1111V0.888889C0 0.397973 0.402948 0 0.9 0ZM8.55 9.33333V8H7.65V5.33333H6.3V8H4.95V5.33333H3.6V9.33333H6.3V10.6667H7.65V9.33333H8.55ZM14.4 10.6667L12.375 8L14.4 5.33333H12.825L11.25 7.33333V5.33333H9.9V10.6667H11.25V8.66667L12.825 10.6667H14.4Z"
                  fill="#E2E2E2"
                />
              </svg>{" "}
              <span>4k Quality</span>
            </div>
          </div>
          <div>
            <p className="font-secondary text-[#999]">
              The Lord of the Rings is a trilogy of epic fantasy adventure films
              directed.
            </p>
          </div>
          <div className="flex md:flex-row flex-col items-center  gap-5">
            <div className="flex items-center gap-2 md:py-4 md:px-7 py-3 px-5 border-white border-opacity-10 border rounded-full transition-all duration-300 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="15"
                viewBox="0 0 13 15"
                fill="none"
              >
                <path
                  d="M1 2.66967C1 1.90998 1 1.53013 1.16686 1.31807C1.31227 1.13326 1.53485 1.01765 1.77687 1.00119C2.05461 0.982329 2.39036 1.18772 3.06203 1.59855L10.9592 6.42893C11.542 6.78532 11.8335 6.96359 11.934 7.19025C12.022 7.38826 12.022 7.61173 11.934 7.80974C11.8335 8.0364 11.542 8.21467 10.9592 8.57106L3.06203 13.4014C2.39036 13.8123 2.05461 14.0177 1.77687 13.9988C1.53485 13.9824 1.31227 13.8667 1.16686 13.6819C1 13.4699 1 13.0901 1 12.3304V2.66967Z"
                  fill="white"
                  fill-opacity="0.2"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="uppercase font-bold">play trailer</p>
            </div>
            <div className="flex items-center  md:py-4 md:px-7 py-3 px-5 border-white border-opacity-10 border rounded-full transition-all duration-300 hover:bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
              >
                <path
                  d="M0 11.0526H8.09524V12.6316H0V11.0526ZM0 5.52632H16.1905V7.10526H0V5.52632ZM0 0H16.1905V1.57895H0V0ZM12.9524 11.0526V8.68421H14.5714V11.0526H17V12.6316H14.5714V15H12.9524V12.6316H10.5238V11.0526H12.9524Z"
                  fill="#fff"
                />
              </svg>
              <p className="uppercase font-bold">add yo list</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlideElement;
