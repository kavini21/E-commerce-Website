import Banner from "../../components/Banner/Banner";
import Delivery from "../../components/Delivery/Delivery";
import Brand from "../../components/Brand/Brand";
import Features from "../../components/Features/Features";

const Home = () => {
  return (
    <div>
      {/*banner component*/}
      <Banner />

      {/*delivery component */}
      <div className="delivery_component w-full min-h-[150px] bg-white mb-20">
        <Delivery />
      </div>

      {/* brand component */}
       <div className="brand flex items-center h-[171px] justify-center w-full mt-8 mb-5 ">
        <Brand />
       </div>

       {/* features component */}
       <div className="w-full flex items-center justify-center">
        <Features />
       </div>
    </div>
  );    
}; 

export default Home;