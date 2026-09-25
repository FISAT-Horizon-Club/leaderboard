"use client";

import { useState, type FormEvent } from "react";
import { isSupabaseConfigured, getSupabase } from "@/lib/supabase";

const inputClass =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-zinc-100";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    const supabase = getSupabase();
    if (!supabase) {
      setMessage("Supabase is not configured yet. Add the values from .env.example to .env.local.");
      return;
    }

    setPending(true);
    const { error } = await supabase.auth.signInWithPassword({ email: username, password });
    setPending(false);

    setMessage(error ? error.message : "Signed in. (Auth wiring is still a placeholder.)");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!isSupabaseConfigured && (
        <p className="rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300">
          Supabase is not configured. Copy <code className="font-mono">.env.example</code> to{" "}
          <code className="font-mono">.env.local</code> and fill in your project URL and anon key.
        </p>
      )}

      <div className="space-y-1">
        <label htmlFor="username" className="text-sm font-medium">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-60 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
      >
        {pending ? "Signing in…" : "Sign In"}
      </button>

      {message && <p className="text-sm text-zinc-600 dark:text-zinc-400">{message}</p>}

      <p className="text-xs text-zinc-500 dark:text-zinc-500">
        Note: Supabase Auth authenticates with email addresses, so the username field will expect
        an email once auth is fully wired up.
      </p>
    </form>
  );
}
