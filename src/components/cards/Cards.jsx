import SingleCard from "./SingleCard";
import cardImg1 from "./../../assets/images/Rectangle 189.png";
import cardImg2 from "./../../assets/images/Rectangle 190.png";
import cardImg3 from "./../../assets/images/Rectangle 191.png";
import cardImg4 from "./../../assets/images/Rectangle 192.png";
const Cards = () => {
  return (
    <div className="">
      <div className="container mx-auto max-w-[1400px] w-[100%] lg:w-[88%] lg:mx-auto  bg-[#181818] lg:pb-14 lg:px-14 px-4 md:py-1 py-6 rounded-[40px]">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-1 gap-7">
          <SingleCard
            image={cardImg1}
            name="Samelill sronle"
            type=" Action, Comedy"
          ></SingleCard>
          <SingleCard
            image={cardImg2}
            name="The family monky"
            type=" Action, Comedy"
          ></SingleCard>
          <SingleCard
            image={cardImg3}
            name="Chiefly universes   "
            type="Comedy, Crime"
          ></SingleCard>
          <SingleCard
            image={cardImg4}
            name="World war 02"
            type=" Action, Comedy"
          ></SingleCard>
        </div>
      </div>
    </div>
  );
};

export default Cards;
