import React from "react";
import { Analytics } from "@vercel/analytics/react";

const Rootlayout = ({ children }) => {
  return (
    <main>
      {children}
      <Analytics />
    </main>
  );
};

export default Rootlayout;
