"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [email, setEmail] = useState("");
  const [leadCount, setLeadCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
const [revenue, setRevenue] = useState(0);

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

const leads =
  JSON.parse(localStorage.getItem("leads") || "[]");

setLeadCount(leads.length);
const projects =
  JSON.parse(localStorage.getItem("projects") || "[]");

setProjectCount(projects.length);

const totalRevenue = projects.reduce(
  (sum: number, p: any) =>
    sum + Number(p.budget || 0),
  0
);

setRevenue(totalRevenue);
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
          <p className="text-3xl font-bold">
  {leadCount}
</p>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl">
          <h3 className="text-gray-400">Projects</h3>
          <p className="text-3xl font-bold">
  {projectCount}
</p>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl">
          <h3 className="text-gray-400">Revenue</h3>
          <p className="text-3xl font-bold">
  ₹{revenue}
</p>
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

      <div className="flex flex-wrap gap-4">
  <a
    href="/leads"
    className="bg-blue-600 px-4 py-2 rounded-lg"
  >
    Leads
  </a>

  <a
    href="/proposal"
    className="bg-green-600 px-4 py-2 rounded-lg"
  >
    Proposal
  </a>

  <a
    href="/projects"
    className="bg-purple-600 px-4 py-2 rounded-lg"
  >
    Projects
  </a>

  <a
    href="/finance"
    className="bg-yellow-600 px-4 py-2 rounded-lg"
  >
    Finance
  </a>

  <a
    href="/assistant"
    className="bg-cyan-600 px-4 py-2 rounded-lg"
  >
    Assistant
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