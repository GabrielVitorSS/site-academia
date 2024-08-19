import React from "react";
import Hero from "./hero";
import About from "./about";
import BMI from "./BMI";
import Services from "./Services";
import Banner from "./Banner";
import Trainers from "./Trainers";
import Popular from "./Popular";
import PricingPlan from "./PricingPlan";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto">
        <Hero />
        <About />
        <BMI />
        <Services />
        <Banner /> 
        <Trainers />
        <Popular />
        <PricingPlan />
      </div>
    </>
  );
}; 

export default Home;
