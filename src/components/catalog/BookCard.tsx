"use client";

import { Book } from "@/types/book";
import Link from "next/link";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { getStats } from "@/lib/reactions";
import { useEffect, useState } from "react";

type Props = {
  book: Book;
};

export default function BookCard({ book }: Props) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const stats = getStats(book.id);
    setRating(stats.rating);
  }, [book.id]);

  return (
    <Link
      href={`/books/${book.id}`}
      className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      {/* IMAGE */}
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">
        <div className="font-semibold line-clamp-2">{book.title}</div>
        <div className="text-sm text-gray-500">{book.author}</div>

        <div className="flex items-center justify-between pt-2 text-sm">
          <div className="flex items-center gap-1 text-gray-600">
            <ThumbsUp size={14} />
            <ThumbsDown size={14} />
            <span className="ml-1 font-medium">{rating}</span>
          </div>

          <div className="text-xs px-2 py-1 bg-gray-100 rounded-full">
            {book.category}
          </div>
        </div>
      </div>
    </Link>
  );
}
