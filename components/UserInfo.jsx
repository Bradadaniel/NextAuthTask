"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();
  return (
    <div className="user-info">
      <div className="info">
        <p>
          Name: <span>{session?.user?.name}</span>
        </p>
        <p>
          Email: <span>{session?.user?.email}</span>
        </p>
        <button onClick={() => signOut()}>Log Out</button>
      </div>
    </div>
  );
}
