import Banner from "../../components/Banner/Banner";
import Delivery from "../../components/Delivery/Delivery";
import Brand from "../../components/Brand/Brand";
import Features from "../../components/Features/Features";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  return (
    <div>
      {/*banner component*/}
      <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl">
        <Banner />
      </div>
 

      {/*delivery component */}
      <div className="delivery_component w-full min-h-[150px] bg-white mb-20">
        <Delivery />
      </div>

      {/* brand component */}
       <div className="brand flex items-center h-[171px] justify-center w-full mt-8 mb-5 ">
        <Brand />
       </div>

       {/* features component */}
       <div className="w-full flex items-center justify-center mb-[80px]">
        <Features />
       </div>

       {/* features component */}
       <div className="w-full flex items-center justify-center">
        <Categories />
       </div>
    </div>
  );    
}; 

export default Home;