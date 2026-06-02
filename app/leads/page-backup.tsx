"use client";

import { useState } from "react";

export default function LeadsPage() {
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");

  function saveLead() {
    const lead = {
      company,
      email,
      service,
    };

    const existing =
      JSON.parse(localStorage.getItem("leads") || "[]");

    existing.push(lead);

    localStorage.setItem(
      "leads",
      JSON.stringify(existing)
    );

    alert("Lead Saved!");

    setCompany("");
    setEmail("");
    setService("");
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        Lead Hunter AI
      </h1>

      <div className="bg-gray-900 p-5 rounded-xl max-w-xl">
        <input
          className="w-full mb-3 p-3 rounded bg-gray-800"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          className="w-full mb-3 p-3 rounded bg-gray-800"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-3 p-3 rounded bg-gray-800"
          placeholder="Service Needed"
          value={service}
          onChange={(e) => setService(e.target.value)}
        />

        <button
          onClick={saveLead}
          className="bg-blue-600 px-4 py-2 rounded-lg"
        >
          Save Lead
        </button>
      </div>
    </div>
  );
}