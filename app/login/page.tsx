"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  function handleLogin() {
    localStorage.setItem("token", "rakshanova-token");
    localStorage.setItem("email", email);

    window.location.href = "/dashboard";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-96 rounded-xl bg-slate-900 p-6">
        <h1 className="mb-4 text-2xl font-bold">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="mb-3 w-full rounded bg-slate-800 p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full rounded bg-cyan-500 p-3 font-bold text-black"
        >
          Login
        </button>
      </div>
    </div>
  );
}