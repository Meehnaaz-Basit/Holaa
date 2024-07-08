const ButtonPrimary = ({ buttonText, svg }) => {
  return (
    <a
      href="#_"
      className="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-full ease md:w-auto"
      style={{
        background:
          " linear-gradient(92deg, #5A0DFF 0%, #FF29B8 38.6%, #FF581C 97.73%)",
        boxShadow:
          "-5px -3px 8px 0px rgba(71, 23, 11, 0.20) inset, 5px 2px 10px 0px rgba(45, 23, 70, 0.20) inset",
      }}
    >
      <span>{svg}</span>
      <span className="capitalize">{buttonText}</span>
    </a>
  );
};

export default ButtonPrimary;
