import React from "react";
import TripsServerComponents from "./components/TripsServerComponents";
import TripsUseClient from "./components/TripsUseClient";


export const metadata = {
  title: "About",
};

const Page = () => {
  return (
    <div>
      <TripsUseClient />
      <hr />
       {/* @ts-expect-error Server Component */}
      <TripsServerComponents />
    </div>
  );
};

export default Page;
