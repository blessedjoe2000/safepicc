import Navbar from "@/components/Navbar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default HomeLayout;
