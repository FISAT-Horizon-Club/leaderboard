import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Leaderboard + Judging</h1>
        <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
          Starter boilerplate for a competition leaderboard and judging system. The judging
          logic is not built yet — this is just the project skeleton.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/leaderboard"
          className="rounded-lg border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
        >
          <h2 className="font-medium">Public Leaderboard</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            View current team standings.
          </p>
        </Link>
        <Link
          href="/admin"
          className="rounded-lg border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
        >
          <h2 className="font-medium">Admin Dashboard</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Configure the competition and manage judging.
          </p>
        </Link>
      </section>
    </div>
  );
}
