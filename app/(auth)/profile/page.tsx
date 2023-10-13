"use client";
import { useSession } from "next-auth/react";
import React from "react";

const Page = () => {
  const session = useSession();
  const data = session.data;
  const user = data?.user;
  const id = data?.id;
  return <div>{JSON.stringify({ ...user, id })}</div>;
};

export default Page;
