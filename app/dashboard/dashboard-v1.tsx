"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    const savedEmail = localStorage.getItem("email");

    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    window.location.href = "/login";
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Rakshanova AI Control Center
      </h1>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-900 p-5 rounded-xl">
          <h3 className="text-gray-400">Leads</h3>
          <p className="text-3xl font-bold">0</p>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl">
          <h3 className="text-gray-400">Projects</h3>
          <p className="text-3xl font-bold">0</p>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl">
          <h3 className="text-gray-400">Revenue</h3>
          <p className="text-3xl font-bold">$0</p>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl">
          <h3 className="text-gray-400">AI Status</h3>
          <p className="text-green-400 text-xl">ONLINE</p>
        </div>
      </div>

      <div className="bg-gray-900 p-5 rounded-xl mb-4">
        <h2 className="text-xl font-semibold mb-2">
          User Information
        </h2>

        <p>{email}</p>
      </div>

      <div className="bg-gray-900 p-5 rounded-xl mb-4">
        <h2 className="text-xl font-semibold mb-2">
          AI Mission Panel
        </h2>

        <ul className="space-y-2">
          <li>Lead Hunter AI</li>
          <li>Proposal Generator AI</li>
          <li>Project Manager AI</li>
          <li>Finance Tracker AI</li>
        </ul>
      </div>

      <div className="flex gap-4">
        <a
          href="/leads"
          className="bg-blue-600 px-4 py-2 rounded-lg"
        >
          Find Leads
        </a>

        <a
          href="/proposal"
          className="bg-green-600 px-4 py-2 rounded-lg"
        >
          Create Proposal
        </a>

        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}