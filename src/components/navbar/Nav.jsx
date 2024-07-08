import logo from "./../../assets/images/logo.png";

const Nav = () => {
  return (
    <div className="">
      <div className="navbar bg-transparent absolute top-0 left-0 right-0 pt-6 z-20 container mx-auto max-w-[1400px] w-[100%] lg:w-[88%] lg:mx-auto px-0 pb-0">
        <div className=" flex mr-6">
          <a className="">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="flex-1">
          <button className="btn btn-square btn-ghost rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <circle
                cx="25"
                cy="25"
                r="24.5"
                stroke="white"
                stroke-opacity="0.4"
              />
              <path
                d="M17 18H33V19.7778H17V18ZM17 24.2222H27.6667V26H17V24.2222ZM17 30.4444H33V32.2222H17V30.4444Z"
                fill="#E2E2E2"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center">
            <a
              href="#_"
              className="px-6 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-full ease md:w-auto flex items-center gap-2"
              style={{
                background:
                  " linear-gradient(92deg, #5A0DFF 0%, #FF29B8 38.6%, #FF581C 97.73%)",
                boxShadow:
                  "-5px -3px 8px 0px rgba(71, 23, 11, 0.20) inset, 5px 2px 10px 0px rgba(45, 23, 70, 0.20) inset",
              }}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0918 0.681633C9.49771 -0.227206 8.14931 -0.227215 7.55522 0.681633L4.55572 5.27005L2.26304 3.97109C1.11443 3.32031 -0.266602 4.34018 0.0445324 5.6094L1.60213 11.9633C1.67226 12.2494 1.93203 12.4509 2.23065 12.4509H15.4164C15.715 12.4509 15.9748 12.2494 16.0449 11.9633L17.6025 5.6094C17.9137 4.34017 16.5326 3.32032 15.384 3.97109L13.0913 5.27005L10.0918 0.681633ZM9.00466 1.3719C8.91986 1.24207 8.72716 1.24207 8.64236 1.3719L5.30994 6.46957C5.12341 6.75493 4.74268 6.84607 4.4441 6.67693L1.61851 5.07604C1.45442 4.98308 1.25713 5.12877 1.30158 5.31008L2.73965 11.1764H14.9074L16.3455 5.31008C16.3898 5.12877 16.1926 4.98308 16.0285 5.07604L13.2029 6.67693C12.9043 6.84607 12.5236 6.75493 12.3371 6.46957L9.00466 1.3719Z"
                    fill="white"
                  />
                  <path
                    d="M2.78843 13.7255C2.43131 13.7255 2.14182 14.0108 2.14182 14.3628C2.14182 14.7147 2.43131 15 2.78843 15H14.8584C15.2155 15 15.505 14.7147 15.505 14.3628C15.505 14.0108 15.2155 13.7255 14.8584 13.7255H2.78843Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="uppercase text-lg font-bold">subscribe now</span>
            </a>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
            >
              <g filter="url(#filter0_bii_1_63)">
                <circle
                  cx="30.5"
                  cy="30"
                  r="30"
                  fill="white"
                  fill-opacity="0.3"
                />
                <circle
                  cx="30.5"
                  cy="30"
                  r="29.5"
                  stroke="url(#paint0_linear_1_63)"
                  stroke-opacity="0.3"
                />
              </g>
              <path
                opacity="0.4"
                d="M31.0453 32.9235C26.3385 32.9235 22.3181 33.6656 22.3181 36.6339C22.3181 39.6034 26.3134 40.3717 31.0453 40.3717C35.7522 40.3717 39.7726 39.6307 39.7726 36.6612C39.7726 33.6917 35.7784 32.9235 31.0453 32.9235Z"
                fill="white"
              />
              <path
                d="M31.0454 30.0959C34.2517 30.0959 36.8207 27.5259 36.8207 24.3207C36.8207 21.1155 34.2517 18.5454 31.0454 18.5454C27.8402 18.5454 25.2701 21.1155 25.2701 24.3207C25.2701 27.5259 27.8402 30.0959 31.0454 30.0959Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_bii_1_63"
                  x="-19.5"
                  y="-20"
                  width="100"
                  height="100"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_1_63"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_1_63"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="4" />
                  <feGaussianBlur stdDeviation="2.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.121569 0 0 0 0 0.121569 0 0 0 0 0.121569 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_1_63"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-4" dy="-5" />
                  <feGaussianBlur stdDeviation="2.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.121569 0 0 0 0 0.121569 0 0 0 0 0.121569 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_innerShadow_1_63"
                    result="effect3_innerShadow_1_63"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1_63"
                  x1="11.4091"
                  y1="7.63636"
                  x2="52.8636"
                  y2="52.3636"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F0F0F0" />
                  <stop offset="1" stop-color="#9B9B9B" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
