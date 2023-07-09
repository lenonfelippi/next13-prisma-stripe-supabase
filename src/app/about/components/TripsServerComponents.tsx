import { prisma } from "@/lib/prisma";
import React from "react";

const getTrips = async () => {
  const trips = await prisma.trip.findMany({});

  return trips;
};

const TripsServerComponents = async () => {
  // const data = await getTrips();
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 0
    }
  }).then((res) => res.json());

  console.log({data});
  
  return (
  <div>
    {data.map((i: any) => (
      <p key={i.id}>{i.title}</p>
    ))}
  </div>
  );
};

export default TripsServerComponents;
