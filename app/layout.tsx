import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import AppShell from "@/components/layout/AppShell";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="min-h-screen">
        <AuthProvider>
          <AppShell>{children}</AppShell>
        </AuthProvider>
      </body>
    </html>
  );
}
