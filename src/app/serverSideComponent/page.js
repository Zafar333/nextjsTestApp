import React from "react";
import { json } from "stream/consumers";
async function fetchuser() {
  const res = await fetch("https://dummyjson.com/users", {
    cache: "default",
  });
  return await res?.json();
}

const ServerSideComponent = async (props) => {
  const data = await fetchuser();
  console.log("hello i am arslan zafar");

  return (
    <div>
      <h1>ServerSide Component Users</h1>
      <>
        {data?.users?.map((user) => (
          <h2>{user?.firstName}</h2>
        ))}
      </>
      {/* <h2>
        {data?.users?.map((user) => (
          <div>{user?.firstName}</div>
        ))}
      </h2> */}
    </div>
  );
};
// export const getServerSideProps = async () => {
//   console.log("server side rendering");
//   return {
//     props: {
//       name: "arslan",
//     },
//   };
// };

export default ServerSideComponent;
