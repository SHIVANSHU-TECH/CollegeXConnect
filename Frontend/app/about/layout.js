import Navbar from "@/components/navbar/page";
import React from "react";
import Footer from "@/components/footer/page";

const Aboutlayout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Aboutlayout;
