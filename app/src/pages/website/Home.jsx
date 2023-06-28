import React from "react";
import Hero from "../../components/website/Hero";
import InvestmentOptionSection from "../../components/website/InvestmentOptionSection";
import FeaturesSection from "../../components/website/FeaturesSection";
import Header from "../../components/website/Header";
import Footer from "../../components/website/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesSection />
      <InvestmentOptionSection />
      <Footer />
    </>
  );
};

export default Home;
