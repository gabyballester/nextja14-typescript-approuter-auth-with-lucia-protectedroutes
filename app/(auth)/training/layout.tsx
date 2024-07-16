import { ReactNode } from "react";
import type { Metadata } from "next";

import "../../globals.css";
import { logoutAction } from "@/actions";

export const metadata: Metadata = {
  title: "Next Auth",
  description: "Next.js Authentication",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header id="auth-header">
        <p>Welcome back!</p>
        <form action={logoutAction}>
          <button>Logout</button>
        </form>
      </header>
      {children}
    </>
  );
}
