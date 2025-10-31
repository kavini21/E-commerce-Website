import Banner from "../../components/Banner/banner";
import Delivery from "../../components/Delivery/Delivery";

const Home = () => {
  return (
    <div>
      {/*banner component*/}
      {/* Reduced spacer so banner is closer to navbar */}
      <div className="w-full bg-[#bebfc0] flex items-center justify-center rounded-b-3xl"></div>

      <Banner />

      {/*delivery component */}
      <div className="w-full min-h-[150px] bg-white shadow-md">
        <Delivery />
      </div>
    </div>
  );    
};

export default Home;