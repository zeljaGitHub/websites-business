import React from "react";
import Navbar from "./components/Navbar";
import MainHeader from "./components/MainHeader";
import FeaturedProducts from "./components/FeaturedProjects";
import Services from "./components/Services";
import WorkTogether from "./components/WorkTogether";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <MainHeader />
      <FeaturedProducts />
      <Services />
      <WorkTogether />
      <Footer />
    </>
  );
};

export default App;
