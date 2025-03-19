import Navbar from "@/components/navbar/page";
import React from "react";
import Footer from "@/components/footer/page";

const Academicslayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Academicslayout;
