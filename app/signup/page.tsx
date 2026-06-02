"use client";

import { useState } from "react";

export default function SignupPage() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

function handleSignup() {
localStorage.setItem(
"user",
JSON.stringify({
name,
email,
password,
})
);


alert("Account Created!");
window.location.href = "/login";


}

return ( <div className="min-h-screen flex items-center justify-center bg-black text-white"> <div className="w-96 rounded-xl bg-slate-900 p-6"> <h1 className="mb-4 text-2xl font-bold">
Create Account </h1>


    <input
      type="text"
      placeholder="Full Name"
      className="mb-3 w-full rounded bg-slate-800 p-3"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

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
      onClick={handleSignup}
      className="w-full rounded bg-cyan-500 p-3 font-bold text-black"
    >
      Create Account
    </button>
  </div>
</div>


);
}
