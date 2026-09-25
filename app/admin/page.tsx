import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin — LDBoard",
};

const details = [
  { label: "Competition", value: "Not Configured" },
  { label: "Rounds", value: "-" },
  { label: "Status", value: "Setup Required" },
];

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Admin Dashboard</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Competition overview. Values below are placeholders until Supabase is connected.
        </p>
      </div>

      <dl className="overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        {details.map((detail) => (
          <div
            key={detail.label}
            className="flex items-center justify-between gap-4 border-b border-zinc-200 px-4 py-3 last:border-b-0 dark:border-zinc-800"
          >
            <dt className="text-sm text-zinc-600 dark:text-zinc-400">{detail.label}</dt>
            <dd className="text-sm font-medium">{detail.value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/admin/setup"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
        >
          Configure Competition
        </Link>
        <Link
          href="/admin/setup"
          className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
        >
          Reset / New Competition
        </Link>
      </div>
    </div>
  );
}
