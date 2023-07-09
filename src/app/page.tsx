"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const {data, status} = useSession();

  console.log({data})

  if (status === "loading") {
    return <h1>Carregando...</h1>
  }
  return (
    <>
      <div>
        <div className="flex gap-4">
          <button onClick={() => signIn()}>Login</button>
          <button onClick={() => signOut()}>Logount</button>
        </div>
        <p>
        Olá, {data?.user?.name}
        </p>
        <img src={data?.user?.image ?? ""} alt="" />
      </div>
      <h1>Home</h1>
    </>
  )
}
