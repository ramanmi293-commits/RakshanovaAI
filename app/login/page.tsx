"use client";

import { useState } from "react";

export default function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

function handleLogin() {
const user = JSON.parse(
localStorage.getItem("user") || "{}"
);


if (
  email === user.email &&
  password === user.password
) {
  localStorage.setItem(
    "token",
    "rakshanova-token"
  );

  localStorage.setItem("email", email);

  window.location.href = "/dashboard";
} else {
  alert("Invalid Email or Password");
}


}

return ( <div className="min-h-screen flex items-center justify-center bg-black text-white"> <div className="w-96 rounded-xl bg-slate-900 p-6"> <h1 className="mb-4 text-2xl font-bold">
Login </h1>


    <input
      type="email"
      placeholder="Email"
      className="mb-3 w-full rounded bg-slate-800 p-3"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      className="mb-3 w-full rounded bg-slate-800 p-3"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
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
