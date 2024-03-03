"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
const ClientSideComponent = () => {
  const [data, setdata] = useState();
  //   const { data, err } = useSWR("https://dummyjson.com/users");
  useEffect(() => {
    async function fetchuser() {
      const res = await fetch("https://dummyjson.com/users");
      setdata(await res?.json());
    }
    fetchuser();
  }, []);

  return (
    <div>
      <h1>ClientSide Component Users</h1>
      <h2>
        {data?.users?.map((user) => (
          <div>{user?.firstName}</div>
        ))}
      </h2>
    </div>
  );
};

export default ClientSideComponent;
