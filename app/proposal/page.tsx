"use client";

import { useState } from "react";

export default function ProposalPage() {
  const [requirement, setRequirement] = useState("");
  const [proposal, setProposal] = useState("");

  function generateProposal() {
    setProposal(`
Dear Client,

Thank you for your interest.

Project Requirement:
${requirement}

We can complete this project professionally.

Timeline: 7 Days
Status: Ready to Start

Regards,
Rakshanova AI
    `);
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        Proposal Generator AI
      </h1>

      <textarea
        value={requirement}
        onChange={(e) => setRequirement(e.target.value)}
        className="w-full h-40 bg-gray-900 p-4 rounded-xl"
        placeholder="Enter client requirements..."
      />

      <button
        onClick={generateProposal}
        className="mt-4 bg-green-600 px-4 py-2 rounded-lg"
      >
        Generate Proposal
      </button>

      {proposal && (
        <div className="mt-6 bg-gray-900 p-4 rounded-xl whitespace-pre-wrap">
          {proposal}
        </div>
      )}
    </div>
  );
}