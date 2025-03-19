import Navbar from "@/components/navbar/page";
import React from "react";
// import Footer from "@/components/footer/page";

const Careerlayout = ({ children }) => {
  return (
    <div>
       <Navbar /> 
      {children}

    </div>
  );
};

export default Careerlayout;
