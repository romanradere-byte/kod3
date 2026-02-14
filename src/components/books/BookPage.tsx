"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { isFavorite, toggleFavorite } from "@/lib/favorites";
import { ArrowLeft, Bookmark } from "lucide-react";

interface Book {
  id: number;
  title: string;
  description: string;
  year: number;
  coverUrl: string;
  authorId: number;
}

export default function BookPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [book, setBook] = useState<Book | null>(null);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    async function fetchBook() {
      try {
        const { data } = await api.get(`/resources/${id}`);
        setBook(data);
        setFav(isFavorite(data.id));
      } catch (err) {
        console.error(err);
      }
    }

    if (id) fetchBook();
  }, [id]);

  if (!book) {
    return <div className="p-10 text-center">Завантаження...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-500 hover:text-black"
      >
        <ArrowLeft size={20} /> Назад
      </button>

      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <img
            src={book.coverUrl}
            className="rounded-xl shadow"
            alt={book.title}
          />
        </div>

        <div className="md:col-span-2 space-y-4">
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl font-bold">{book.title}</h1>
              <p className="text-gray-500">{book.year}</p>
            </div>

            <button
              onClick={() => {
                toggleFavorite(book);
                setFav(!fav);
              }}
              className={`p-3 rounded-xl border ${
                fav ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              <Bookmark size={22} fill={fav ? "currentColor" : "none"} />
            </button>
          </div>

          <p className="text-gray-700">{book.description}</p>
        </div>
      </div>
    </div>
  );
}
