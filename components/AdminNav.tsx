"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/setup", label: "Setup" },
  { href: "/leaderboard", label: "Leaderboard" },
] as const;

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-800">
      <ul className="flex flex-wrap items-center gap-1 text-sm">
        {links.map((link) => {
          const isActive =
            link.href === "/admin" ? pathname === "/admin" : pathname.startsWith(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-block rounded-md px-3 py-2 transition-colors ${
                  isActive
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
        <li>
          <ResetCompetitionButton />
        </li>
      </ul>
    </nav>
  );
}

function ResetCompetitionButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (!window.confirm("Start a new competition? This clears the local setup.")) return;
        window.localStorage.removeItem("ldboard.competition");
        router.push("/admin/setup");
      }}
      className="inline-block rounded-md px-3 py-2 text-zinc-600 transition-colors hover:bg-red-50 hover:text-red-700 dark:text-zinc-400 dark:hover:bg-red-950/40 dark:hover:text-red-400"
    >
      Reset / New Competition
    </button>
  );
}
