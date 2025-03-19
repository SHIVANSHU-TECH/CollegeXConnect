import Navbar from "@/components/navbar/page";
import React from "react";
// import Footer from "@/components/footer/page";

const Leadershiplayout = ({ children }) => {
  return (
    <div>
       <Navbar /> 
      {children}

    </div>
  );
};

export default Leadershiplayout;
