const SingleCard = ({ image, name, type }) => {
  return (
    <div className="flex lg:flex-col md:flex-row md:gap-5 items-center lg:-mt-20 md:-mt-10 md:mb-20 ">
      <div>
        <img
          src={image}
          className="lg:w-72 md:w-64 mx-auto object-cover mb-5"
          alt=""
        />
      </div>
      <div>
        <h3 className="uppercase font-bold md:text-2xl">{name}</h3>
        <div className="flex items-center lg:gap-3 md:gap-1 font-secondary lg:text-sm text-[#999]">
          <div className="flex items-center lg:gap-1">
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
            <span className="text-[12px]">9.5</span>
          </div>
          <div className="flex items-center lg:gap-1">
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
            <span className="text-[12px]">02h 30m</span>
          </div>
          <div className="flex items-center lg:gap-1">
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
            <span className="text-[12px]">4k Quality</span>
          </div>
        </div>
        <div>
          <span className=" font-secondary text-sm text-[#999]">{type}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
