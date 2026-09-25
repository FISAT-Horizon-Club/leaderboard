import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Login — LDBoard",
};

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Sign in with your username and password.
        </p>
      </div>
      <LoginForm />
    </div>
  );
}
