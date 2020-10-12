import React from "react";
import Header from "../components/header/header.component";
import MainImage from "../components/MainImage/MainImage.components";
import Hero from "../components/hero/hero.component";
// import VideoHomepage from "../components/videoHomepage/videoHomepage.components";
import Footer from "../components/footer/footer.component";

function Homepage() {
  return (
    <div>
      <Header />
      <MainImage />
      <Hero />
      <Footer />
    </div>
  );
}

export default Homepage;

// <VideoHomepage />
