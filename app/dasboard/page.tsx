export default function DashboardPage() {
return ( <div className="min-h-screen bg-black p-8 text-white"> <h1 className="text-4xl font-bold text-cyan-400">
Rakshanova Dashboard </h1>

```
  <div className="mt-8 grid gap-6 md:grid-cols-3">
    <div className="rounded-xl bg-slate-900 p-6">
      <h2 className="text-xl font-bold">Security Score</h2>
      <p className="mt-2 text-3xl text-green-400">92/100</p>
    </div>

    <div className="rounded-xl bg-slate-900 p-6">
      <h2 className="text-xl font-bold">Shield Status</h2>
      <p className="mt-2 text-green-400">Active</p>
    </div>

    <div className="rounded-xl bg-slate-900 p-6">
      <h2 className="text-xl font-bold">Threat Alerts</h2>
      <p className="mt-2 text-yellow-400">0 Critical</p>
    </div>
  </div>
</div>
```

);
}
