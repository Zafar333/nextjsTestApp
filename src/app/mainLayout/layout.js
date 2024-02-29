"use client";
import React, { useEffect } from "react";
import "./layout.css";
import { useRouter } from "next/navigation";
import Header from "./header/page.js";

const Layout = ({ children }) => {
  const navigate = useRouter();
  //   useEffect(() => {
  //     navigate.push("/homepage");
  //   }, []);
  return (
    <div className="mainLayoutViewContainer">
      <Header />

      {children}
    </div>
  );
};

export default Layout;
