'use client'

import React, { useEffect, useState } from "react";
 
const TripsUseClient = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      next: {
        revalidate: 0
      }
    })
    .then((res) => res.json())
    .then((res) => setData(res));
  }, []);

  console.log({data});
  
  return (
  <div>
    {data.map((i: any) => (
      <p key={i.id}>{i.title}</p>
    ))}
  </div>
  );
};

export default TripsUseClient;
