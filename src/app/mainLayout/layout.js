"use client";
import React, { useEffect } from "react";
import "./layout.css";
import { useRouter } from "next/navigation";
import Header from "./header/page.js";
import { usePathname } from "next/navigation";

const Layout = ({ children }, { params }) => {
  const pathname = usePathname();
  console.log("path", pathname);
  const navigate = useRouter();
  //   useEffect(() => {
  //     navigate.push("/homepage");
  //   }, []);
  return (
    <div className="mainLayoutViewContainer">
      {pathname != "/mainLayout/login" ? <Header /> : <h1>No Login Header</h1>}

      {children}
    </div>
  );
};

export default Layout;
