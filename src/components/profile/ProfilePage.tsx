"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { getFavorites } from "@/lib/favorites";
import Link from "next/link";
import { useEffect } from "react";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
  }, [user, router]);

  if (!user) return null;

  const favorites = getFavorites();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Мій профіль</h1>

      <div className="bg-white shadow rounded-xl p-6 space-y-2">
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Імʼя:</span> {user.firstName}
        </p>
        <p>
          <span className="font-semibold">Прізвище:</span> {user.lastName}
        </p>
        <p>
          <span className="font-semibold">Роль:</span> {user.role}
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">
          Улюблені книги ({favorites.length})
        </h2>

        {favorites.length === 0 ? (
          <p className="text-gray-500">Немає улюблених книг</p>
        ) : (
          <ul className="space-y-2">
            {favorites.map((book) => (
              <li
                key={book.id}
                className="bg-white shadow rounded-lg p-4"
              >
                <Link
                  href={`/books/${book.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {book.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Вийти
      </button>
    </div>
  );
}
