import React from "react";
import Header from "../Components/Header";
import Advertise from "../Components/Advertise";
import BackIMG from "../assets/backImage.png";
import PopularServices from "../Components/PopularServices";
// import AllServices from "../Components/AllServices";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="">
        <img src={BackIMG} alt="" />
      </div>
      <PopularServices />
      <Advertise />
      {/* <AllServices /> */}
      
    </div>
  );
};

export default Home;
