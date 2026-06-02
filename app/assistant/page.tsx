"use client";

import { useState } from "react";

export default function AssistantPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  function askAI() {
    const text = message.toLowerCase();

    if (text.includes("proposal")) {
      setReply(
        "Proposal AI Ready: Timeline 7 Days | Status Ready To Start"
      );
    } else if (text.includes("project")) {
      setReply(
        "Project Manager AI: Active projects detected."
      );
    } else if (text.includes("finance")) {
      setReply(
        "Finance AI: Check income, expenses and profit."
      );
    } else {
      setReply(
        "Rakshanova AI: Command received."
      );
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        Rakshanova AI Assistant
      </h1>

      <input
        className="w-full p-3 rounded bg-gray-800 mb-4"
        placeholder="Ask Rakshanova AI..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={askAI}
        className="bg-cyan-500 text-black px-4 py-2 rounded-lg"
      >
        Send
      </button>

      <div className="mt-6 bg-gray-900 p-4 rounded-xl">
        {reply}
      </div>
    </div>
  );
}