export default function ProposalPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        Proposal Generator AI
      </h1>

      <textarea
        className="w-full h-40 bg-gray-900 p-4 rounded-xl"
        placeholder="Enter client requirements..."
      />

      <button className="mt-4 bg-green-600 px-4 py-2 rounded-lg">
        Generate Proposal
      </button>
    </div>
  );
}