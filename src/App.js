import React from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/Navbar/Home";
import AboutUsPage from "./Components/AboutUs";
import Extracurricular from "./Components/extacarricular";
import UpcomingEvents from "./Components/upcomingevents";
import Footer from "./Components/Footer";

function App(){
  return (
    <div>
     <Navbar/> 
     <HomePage/> 
     <AboutUsPage/> 
     <Extracurricular/> 
     <UpcomingEvents/>
     <Footer/>
     

    </div>
  );
};

export default App;