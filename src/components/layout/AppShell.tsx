"use client";

import { useAuth } from "@/context/AuthContext";
import Header from "./Header";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="p-10">Завантаження...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {user && <Header />}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
