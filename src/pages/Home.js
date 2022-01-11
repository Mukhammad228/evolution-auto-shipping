import React from "react";
import AboutUs from "../components/AboutUs";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderForm from "../components/home__form/HeaderForm";
import Services from "../components/Services";
import WhyUs from "../components/whyUs";

function Home() {
  return (
    <>
      <Header />
      <section className="media__form">
        <HeaderForm />
      </section>
      <AboutUs />
      <Services />
      <WhyUs />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
