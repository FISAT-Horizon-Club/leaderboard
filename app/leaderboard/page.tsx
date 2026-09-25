import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leaderboard — LDBoard",
};

const standings = [
  { rank: 1, team: "Team Alpha" },
  { rank: 2, team: "Team Beta" },
  { rank: 3, team: "Team Gamma" },
];

export default function LeaderboardPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Leaderboard</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Placeholder standings. Scores are not calculated yet.
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <table className="w-full min-w-sm border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <th scope="col" className="px-4 py-3 font-medium">
                Rank
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Team
              </th>
              <th scope="col" className="px-4 py-3 text-right font-medium">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            {standings.map((row) => (
              <tr key={row.team} className="border-b border-zinc-200 last:border-b-0 dark:border-zinc-800">
                <td className="px-4 py-3 text-zinc-500 tabular-nums dark:text-zinc-400">
                  {row.rank}
                </td>
                <td className="px-4 py-3 font-medium">{row.team}</td>
                <td className="px-4 py-3 text-right tabular-nums">0</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
