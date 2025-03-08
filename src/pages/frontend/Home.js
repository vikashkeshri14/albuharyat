import React from "react";
import Header from "../../component/frontend/Header";
import Footer from "../../component/frontend/Footer";
import Video from "../../component/frontend/Video";
import About from "../../component/frontend/About";
import WhyChooseUs from "../../component/frontend/WhyChooseUs";
import Register from "../../component/frontend/Register";
import CheckAvaibility from "../../component/frontend/CheckAvaibility";

export default function Home() {
  return (
    <div>
      <Header
        otherPage={false}
        CustomClass="ltn__header-transparent gradient-color-2"
      />
      <Video />
      <About />
      <WhyChooseUs />
      <CheckAvaibility />
      <Register />
      <Footer />
    </div>
  );
}
