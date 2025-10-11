import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <div>

  {/*banner component*/}
  {/* Reduced spacer so banner is closer to navbar */}
  <div className="w-full  bg-[#bebfc0] flex items-center justify-center"></div>

  <Banner />

    </div>
  );    
};

export default Home;