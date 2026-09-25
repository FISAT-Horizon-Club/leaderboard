import type { Metadata } from "next";
import SetupForm from "./SetupForm";

export const metadata: Metadata = {
  title: "Competition Setup — LDBoard",
};

export default function AdminSetupPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Competition Setup</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Basic competition configuration. Saved to local state for now; this will be persisted to
          Supabase later.
        </p>
      </div>
      <SetupForm />
    </div>
  );
}
