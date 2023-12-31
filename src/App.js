import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import TimeLine from "./components/TimeLine";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home/>
      <Work/>
      <TimeLine/>
      <Services/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </>
  );
};

export default App;
