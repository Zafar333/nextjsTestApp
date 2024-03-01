"use client"
import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {
  const navigate=useRouter();
  function loginPage(){
    navigate.push("/mainLayout/login")

  }
  return <div className="mainLayoutHomePage">i am home page
  <button onClick={loginPage}>go to login page</button>
  
  </div>;
};

export default HomePage;
