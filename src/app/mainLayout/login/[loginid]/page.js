"use client";
import React from "react";
import { useRouter } from "next/navigation";

const LoginSpecificDEtail = () => {
  const router = useRouter();

  console.log("router", router);

  return (
    <>
      <div>LoginSpecificDEtail</div>
    </>
  );
};

export default LoginSpecificDEtail;
