"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-section">
      <div className="img-box"></div>
      <div className="login-box">
        <div className="title-box">
          <h1>Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button>Login</button>

          {error && <div className="error">{error}</div>}

          <div className="link">
            <Link href={"/register"}>
              Don't have an account? <span>Register</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
