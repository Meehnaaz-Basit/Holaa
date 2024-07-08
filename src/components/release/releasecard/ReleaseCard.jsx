import "./style.css";

const ReleaseCard = ({ img }) => {
  return (
    <div className="keen-slider__slide relative rounded-2xl release-card cursor-pointer mx-2 overflow-hidden">
      <img className="release-card-img" src={img} alt="" />
      {/* hidden */}
      <div className="card-hover">
        {/* opacity */}
        <div className="bg-black-opacity hide absolute top-0 w-full h-full rounded-2xl"></div>
        {/* name */}
        <div className="absolute hide bottom-2 px-2 ">
          <h2 className="uppercase font-bold text-2xl">The family monks</h2>
          <div className="flex items-center gap-3 font-secondary text-sm text-[#999]">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7.68341 0.452137L9.24195 3.74897C9.35677 3.98783 9.57592 4.1537 9.82867 4.19056L13.3294 4.72726C13.5339 4.75748 13.7194 4.87102 13.8447 5.04426C13.9687 5.2153 14.0219 5.43204 13.9918 5.64509C13.9673 5.82202 13.8881 5.98569 13.767 6.11101L11.2304 8.69938C11.0448 8.88 10.9608 9.14761 11.0056 9.40932L11.6302 13.0482C11.6967 13.4876 11.4201 13.9019 11.0056 13.9852C10.8348 14.014 10.6597 13.9838 10.5057 13.9012L7.38305 12.1886C7.1513 12.0655 6.87754 12.0655 6.64579 12.1886L3.52312 13.9012C3.13944 14.1157 2.66403 13.9697 2.45049 13.5716C2.37137 13.4131 2.34336 13.2325 2.36927 13.0563L2.9938 9.41669C3.03861 9.15572 2.9539 8.88664 2.76906 8.70602L0.232412 6.11912C-0.0693531 5.81244 -0.078455 5.30745 0.212107 4.98971C0.218409 4.98307 0.22541 4.9757 0.232412 4.96833C0.352838 4.83931 0.511072 4.75748 0.681908 4.7361L4.18266 4.19867C4.43471 4.16108 4.65386 3.99668 4.76939 3.75634L6.27191 0.452137C6.40564 0.169045 6.6829 -0.00714949 6.98396 0.000222678H7.07778C7.33894 0.0333974 7.56649 0.203695 7.68341 0.452137Z"
                  fill="#D27304"
                />
              </svg>
              <span>9.5</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M14 7C14 10.8668 10.8661 14 7 14C3.1339 14 0 10.8668 0 7C0 3.1346 3.1339 0 7 0C10.8661 0 14 3.1346 14 7Z"
                  fill="white"
                />
                <path
                  d="M9.50156 9.67018C9.40987 9.67018 9.31747 9.64638 9.23277 9.59668L6.48456 7.95728C6.32636 7.86208 6.22906 7.69058 6.22906 7.50578V3.97288C6.22906 3.68308 6.46426 3.44788 6.75406 3.44788C7.04386 3.44788 7.27906 3.68308 7.27906 3.97288V7.20758L9.77107 8.69368C10.0196 8.84278 10.1015 9.16478 9.95307 9.41398C9.85437 9.57848 9.68006 9.67018 9.50156 9.67018Z"
                  fill="white"
                />
              </svg>
              <span>02h 30m</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                className="mt-2"
              >
                <g filter="url(#filter0_d_1_201)">
                  <rect
                    x="4"
                    width="15"
                    height="14"
                    rx="3"
                    fill="white"
                    fill-opacity="0.4"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.125 8.75H10.375V10H9.25V8.75H7V5H8.125V7.5H9.25V5H10.375V7.5H11.125V8.75ZM16 10H14.6875L13.375 8.125V10H12.25V5H13.375V6.875L14.6875 5H16L14.3125 7.5L16 10Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_201"
                    x="0"
                    y="0"
                    width="23"
                    height="22"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_201"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_201"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <span>4k Quality</span>
            </div>
          </div>
          <div>
            <span className=" font-secondary text-sm text-[#999]">
              Action, Comedy
            </span>
          </div>
        </div>
        {/* play icon */}
        <div className="absolute hide top-1/3 left-1/2 transform -translate-x-1/2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="71"
            height="72"
            viewBox="0 0 71 72"
            fill="none"
          >
            <g filter="url(#filter0_b_1_274)">
              <ellipse
                cx="35.5"
                cy="36.1923"
                rx="35.5"
                ry="35.5398"
                fill="url(#paint0_linear_1_274)"
              />
            </g>
            <path
              d="M44.249 34.4912C45.5132 35.273 45.5132 37.1117 44.249 37.8934L33.0518 44.817C31.7194 45.6409 30 44.6825 30 43.1159L30 29.2687C30 27.7021 31.7194 26.7437 33.0518 27.5676L44.249 34.4912Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_b_1_274"
                x="-15"
                y="-14.3475"
                width="101"
                height="101.08"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_1_274"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_1_274"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_274"
                x1="7.06183"
                y1="10.9705"
                x2="62.2773"
                y2="61.9257"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.27" />
                <stop offset="1" stop-color="white" stop-opacity="0.09" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* side social */}
        <div className="absolute hide right-2 top-2 ">
          <div className="w-10 mt-1 h-10 rounded-full flex items-center justify-center border-2 border-gray-300 border-opacity-10 shadow-inner bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg cursor-pointer transition-all duration-300 hover:bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.4 10.1512C12.7314 10.1512 13 9.8823 13 9.55055C13 9.21881 12.7314 8.94988 12.4 8.94988H1.6C1.26863 8.94988 1 9.21881 1 9.55055C1 9.8823 1.26863 10.1512 1.6 10.1512H12.4ZM12.4 5.94652C12.7314 5.94652 13 5.67759 13 5.34585C13 5.0141 12.7314 4.74517 12.4 4.74517H7.6C7.26863 4.74517 7 5.0141 7 5.34585C7 5.67759 7.26863 5.94652 7.6 5.94652H12.4ZM12.4 1.74181C12.7314 1.74181 13 1.47288 13 1.14114C13 0.809397 12.7314 0.540466 12.4 0.540466H7.6C7.26863 0.540466 7 0.809397 7 1.14114C7 1.47288 7.26863 1.74181 7.6 1.74181H12.4Z"
                fill="white"
                stroke="white"
                stroke-width="0.5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 1.92457C1 1.45278 1.51837 1.16515 1.918 1.4152L4.98592 3.3348C5.36192 3.57007 5.36192 4.11828 4.98592 4.35354L1.918 6.27314C1.51837 6.52319 1 6.23556 1 5.76377V1.92457ZM2.2 3.84417C2.2 4.20803 2.59979 4.42986 2.90799 4.23702C3.19798 4.05557 3.19798 3.63277 2.90799 3.45133C2.59979 3.25848 2.2 3.48031 2.2 3.84417Z"
                fill="white"
                fill-opacity="0.4"
              />
            </svg>
          </div>
          <div className="w-10 mt-1 h-10 rounded-full flex items-center justify-center border-2 border-gray-300 border-opacity-0 shadow-inner bg-transparent bg-opacity-0 backdrop-filter backdrop-blur-lg cursor-pointer transition-all duration-300 hover:bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 ">
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_bii_1_262)">
                <path
                  d="M40 20.5965C40 31.6546 31.0457 40.6189 20 40.6189C8.9543 40.6189 0 31.6546 0 20.5965C0 9.53844 8.9543 0.574097 20 0.574097C31.0457 0.574097 40 9.53844 40 20.5965Z"
                  fill="white"
                  fill-opacity="0.1"
                />
                <path
                  d="M39.5 20.5965C39.5 31.379 30.769 40.1189 20 40.1189C9.23098 40.1189 0.5 31.379 0.5 20.5965C0.5 9.81405 9.23098 1.0741 20 1.0741C30.769 1.0741 39.5 9.81405 39.5 20.5965Z"
                  stroke="url(#paint0_linear_1_262)"
                  stroke-opacity="0.2"
                />
              </g>
              <path
                opacity="0.4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.4615 23.9079C14.3391 23.9079 14.2217 23.9566 14.1352 24.0433C14.0486 24.1299 14 24.2475 14 24.37C14 24.4925 14.0486 24.6101 14.1352 24.6967C14.2217 24.7834 14.3391 24.8321 14.4615 24.8321C14.584 24.8321 14.7014 24.8807 14.7879 24.9674C14.8745 25.054 14.9231 25.1716 14.9231 25.2941C14.9231 25.4167 14.9717 25.5342 15.0583 25.6208C15.1448 25.7075 15.2622 25.7562 15.3846 25.7562C15.5071 25.7562 15.6245 25.7075 15.711 25.6208C15.7976 25.5342 15.8462 25.4167 15.8462 25.2941C15.8462 24.9265 15.7003 24.5739 15.4406 24.3139C15.181 24.054 14.8288 23.9079 14.4615 23.9079ZM14.4615 22.0597C14.3391 22.0597 14.2217 22.1084 14.1352 22.1951C14.0486 22.2817 14 22.3992 14 22.5218C14 22.6443 14.0486 22.7618 14.1352 22.8485C14.2217 22.9352 14.3391 22.9838 14.4615 22.9838C15.0736 22.9838 15.6606 23.2272 16.0934 23.6605C16.5262 24.0938 16.7693 24.6814 16.7693 25.2941C16.7693 25.4167 16.8179 25.5342 16.9045 25.6208C16.991 25.7075 17.1084 25.7562 17.2308 25.7562C17.3532 25.7562 17.4706 25.7075 17.5572 25.6208C17.6438 25.5342 17.6924 25.4167 17.6924 25.2941C17.6915 24.4366 17.3508 23.6144 16.7451 23.0081C16.1394 22.4017 15.3181 22.0606 14.4615 22.0597ZM14.4615 20.2115C14.3391 20.2115 14.2217 20.2602 14.1352 20.3468C14.0486 20.4335 14 20.551 14 20.6735C14 20.7961 14.0486 20.9136 14.1352 21.0003C14.2217 21.0869 14.3391 21.1356 14.4615 21.1356C15.5629 21.1368 16.6187 21.5753 17.3975 22.355C18.1762 23.1346 18.6143 24.1916 18.6155 25.2941C18.6155 25.4167 18.6641 25.5342 18.7507 25.6208C18.8372 25.7075 18.9546 25.7562 19.077 25.7562C19.1994 25.7562 19.3168 25.7075 19.4034 25.6208C19.4899 25.5342 19.5386 25.4167 19.5386 25.2941C19.537 23.9466 19.0017 22.6547 18.0499 21.7018C17.0981 20.749 15.8076 20.213 14.4615 20.2115Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.7296 25.4855C25.9027 25.3122 26 25.0771 26 24.8321V16.5151C26 16.27 25.9027 16.0349 25.7296 15.8616C25.5565 15.6883 25.3217 15.5909 25.0769 15.5909H14.9231C14.6783 15.5909 14.4435 15.6883 14.2704 15.8616C14.0973 16.0349 14 16.27 14 16.5151V18.8253C14 18.9479 14.0486 19.0654 14.1352 19.1521C14.2217 19.2387 14.3391 19.2874 14.4615 19.2874C14.5839 19.2874 14.7013 19.2387 14.7879 19.1521C14.8745 19.0654 14.9231 18.9479 14.9231 18.8253V16.5151H25.0769V24.8321H20.9231C20.8007 24.8321 20.6833 24.8807 20.5967 24.9674C20.5102 25.054 20.4615 25.1716 20.4615 25.2941C20.4615 25.4167 20.5102 25.5342 20.5967 25.6208C20.6833 25.7075 20.8007 25.7562 20.9231 25.7562H25.0769C25.3217 25.7562 25.5565 25.6588 25.7296 25.4855Z"
                fill="white"
                stroke="white"
                stroke-width="0.5"
              />
              <defs>
                <filter
                  id="filter0_bii_1_262"
                  x="-20"
                  y="-19.4259"
                  width="80"
                  height="80.0448"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_1_262"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_1_262"
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
                    result="effect2_innerShadow_1_262"
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
                    in2="effect2_innerShadow_1_262"
                    result="effect3_innerShadow_1_262"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1_262"
                  x1="7.27273"
                  y1="5.67071"
                  x2="34.9424"
                  y2="35.4914"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F0F0F0" />
                  <stop offset="1" stop-color="#9B9B9B" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="w-10 mt-1 h-10 rounded-full flex items-center justify-center border-2 border-gray-300 border-opacity-10 shadow-inner bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg cursor-pointer transition-all duration-300 hover:bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500">
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_bii_1_257)">
                <ellipse
                  cx="20"
                  cy="20.6469"
                  rx="20"
                  ry="20.0224"
                  fill="url(#paint0_linear_1_257)"
                />
                <path
                  d="M39.5 20.6469C39.5 31.4294 30.769 40.1693 20 40.1693C9.23098 40.1693 0.5 31.4294 0.5 20.6469C0.5 9.86447 9.23098 1.12451 20 1.12451C30.769 1.12451 39.5 9.86447 39.5 20.6469Z"
                  stroke="url(#paint1_linear_1_257)"
                  stroke-opacity="0.2"
                />
              </g>
              <path
                d="M25.9999 19.5506C25.9935 17.9039 25.1306 16.3553 23.4292 15.8066C22.2609 15.4292 20.9883 15.639 20 17.0595C19.0117 15.639 17.7391 15.4292 16.5709 15.8066C14.8693 16.3553 14.0063 17.9043 14.0001 19.5512C13.9843 22.8265 17.2994 25.3328 19.9992 26.5307L20 26.5303L20.0008 26.5307C22.7007 25.3327 26.0161 22.8262 25.9999 19.5506Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="square"
              />
              <path
                opacity="0.4"
                d="M22.4281 20.6252C21.9285 21.4842 21.0401 22.1791 20.0128 22.1613C18.9855 22.1791 18.097 21.4842 17.5974 20.6252"
                stroke="white"
                stroke-opacity="0.4"
                stroke-width="1.5"
                stroke-linecap="square"
              />
            </svg>
          </div>
          <div className="w-10 mt-1 h-10 rounded-full flex items-center justify-center border-2 border-gray-300 border-opacity-10 shadow-inner bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg cursor-pointer transition-all duration-300 hover:bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500">
            <svg
              width=""
              height=""
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M16.9955 19.1021H16.3903C15.0703 19.1021 14 20.1736 14 21.4951V24.6608C14 25.9816 15.0703 27.0531 16.3903 27.0531H23.6097C24.9297 27.0531 26 25.9816 26 24.6608V21.4886C26 20.171 24.933 19.1021 23.6169 19.1021H23.0052"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 14.6905V22.5096"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.1089 16.5921L19.9997 14.6907L21.8912 16.5921"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseCard;
