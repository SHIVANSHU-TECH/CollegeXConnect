import Navbar from "@/components/navbar/page";
import React from "react";
import Footer from "@/components/footer/page";
import Welcome from "@/components/welcome/page";
const HomeLayout = ({ children }) => {
  return (
    <div>
      <Welcome />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
