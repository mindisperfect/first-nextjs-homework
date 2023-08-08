"use client";

import { request } from "@/server/request";
import React, { useEffect, useState } from "react";

const UserAccount = () => {
  const [user, setUser] = useState(null);
  async function getUserData() {
    const { data } = await request.get("auth/me");
    setUser(data);
  }
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className="container">
      <div className="account">
      {user?.map((pr, i) => (
        <div className="contentssss" key={i}>
          <h1>{pr?.firstName}</h1>
        </div>
      ))}
      </div>
    </div>
  );
  // <div>{JSON.stringify(user)}</div>;
};

export default UserAccount;
