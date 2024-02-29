"use client";
import React from "react";
import "./mainLayout.css";
import { useRouter } from "next/navigation";

const MainLayout = () => {
  const navigate = useRouter();
  function gotoHome() {
    navigate.push("/mainLayout/home");
  }
  return (
    <div className="mainLayoutContainer">
      <button onClick={gotoHome}>got to home page</button>
    </div>
  );
};

export default MainLayout;
