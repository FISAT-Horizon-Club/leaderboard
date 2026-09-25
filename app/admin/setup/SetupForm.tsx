"use client";

import { useState, type FormEvent } from "react";

const STORAGE_KEY = "ldboard.competition";

const inputClass =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-zinc-100";

export default function SetupForm() {
  const [competitionName, setCompetitionName] = useState("");
  const [rounds, setRounds] = useState("3");
  const [saved, setSaved] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ competitionName, rounds: Number(rounds) || 0 }),
    );
    setSaved("Configuration saved locally. Supabase persistence comes later.");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-5">
      <div className="space-y-1">
        <label htmlFor="competitionName" className="text-sm font-medium">
          Competition Name
        </label>
        <input
          id="competitionName"
          name="competitionName"
          type="text"
          required
          placeholder="Spring Championship"
          value={competitionName}
          onChange={(e) => setCompetitionName(e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="rounds" className="text-sm font-medium">
          Number of Rounds
        </label>
        <input
          id="rounds"
          name="rounds"
          type="number"
          min={1}
          required
          value={rounds}
          onChange={(e) => setRounds(e.target.value)}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
      >
        Save Configuration
      </button>

      {saved && <p className="text-sm text-zinc-600 dark:text-zinc-400">{saved}</p>}
    </form>
  );
}
