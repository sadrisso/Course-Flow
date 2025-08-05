"use client"
import { useSession } from "next-auth/react";
import React from "react";

const UserInfo = () => {
  const sessions = useSession();

  return <div>{JSON.stringify(sessions)}</div>;
};

export default UserInfo;
