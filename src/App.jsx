import "./App.css";
import Banner from "./components/banner/Banner";
import Cards from "./components/cards/Cards";
import Nav from "./components/navbar/Nav";
// import Release from "./components/release/Release";
import SliderCardsTwo from "./components/slider/SliderCardsTwo";
// import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className="font-primary bg-[#101010] text-white min-h-screen ">
      <div>
        <Nav></Nav>
      </div>
      <div>
        <Banner></Banner>
      </div>
      <div className="relative lg:-top-10 -top-20 z-40">
        <Cards></Cards>
      </div>
      {/* <div>
        <Release></Release>
      </div> */}
      <div>
        <SliderCardsTwo></SliderCardsTwo>
      </div>
    </div>
  );
}

export default App;
