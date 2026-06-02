"use client";

import { useEffect, useState } from "react";

export default function FinancePage() {
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const savedIncome =
      Number(localStorage.getItem("income") || 0);

    const savedExpense =
      Number(localStorage.getItem("expense") || 0);

    setTotalIncome(savedIncome);
    setTotalExpense(savedExpense);
  }, []);

  function saveFinance() {
    const newIncome =
      totalIncome + Number(income || 0);

    const newExpense =
      totalExpense + Number(expense || 0);

    localStorage.setItem(
      "income",
      String(newIncome)
    );

    localStorage.setItem(
      "expense",
      String(newExpense)
    );

    setTotalIncome(newIncome);
    setTotalExpense(newExpense);

    setIncome("");
    setExpense("");

    alert("Finance Saved!");
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        Finance Tracker AI
      </h1>

      <div className="bg-gray-900 p-5 rounded-xl max-w-xl">
        <input
          className="w-full mb-3 p-3 rounded bg-gray-800"
          placeholder="Income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />

        <input
          className="w-full mb-3 p-3 rounded bg-gray-800"
          placeholder="Expense"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />

        <button
          onClick={saveFinance}
          className="bg-green-600 px-4 py-2 rounded-lg"
        >
          Save Finance
        </button>

        <div className="mt-6">
          <p>Total Income: ₹{totalIncome}</p>
          <p>Total Expense: ₹{totalExpense}</p>
          <p>
            Profit: ₹
            {totalIncome - totalExpense}
          </p>
        </div>
      </div>
    </div>
  );
}