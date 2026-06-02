export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-96 rounded-xl bg-slate-900 p-6">
        <h1 className="mb-4 text-2xl font-bold">Create Account</h1>

        <input
          type="text"
          placeholder="Full Name"
          className="mb-3 w-full rounded bg-slate-800 p-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="mb-3 w-full rounded bg-slate-800 p-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-3 w-full rounded bg-slate-800 p-3"
        />

        <button className="w-full rounded bg-cyan-500 p-3 font-bold text-black">
          Create Account
        </button>
      </div>
    </div>
  );
}