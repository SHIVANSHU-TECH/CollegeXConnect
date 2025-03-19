import Navbar from "@/components/navbar/page";
import React from "react";
import Footer from "@/components/footer/page";

const Noteslayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Noteslayout;
