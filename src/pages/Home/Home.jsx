import Banner from "../../components/Banner/banner";

const Home = () => {
  return (
    <div>

  {/*banner component*/}
  {/* Reduced spacer so banner is closer to navbar */}
  <div className="w-full min-h-[120px] bg-[#f0f2f3] flex items-center justify-center"></div>

  <Banner />

    </div>
  );
};

export default Home;