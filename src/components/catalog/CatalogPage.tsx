"use client";

import { useEffect, useMemo, useState } from "react";
import CatalogSidebar from "./CatalogSidebar";
import CatalogSearch from "./CatalogSearch";
import BookGrid from "./BookGrid";

import {
  getResources,
  ResourceResponseDto,
} from "@/services/resources.service";
import { mapResourceToUiBook } from "@/adapters/resource.adapter";
import { UiBook } from "@/types/ui-book";

export default function CatalogPage() {
  const [books, setBooks] = useState<UiBook[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data: ResourceResponseDto[] = await getResources(0, 20);
        const mapped = data.map(mapResourceToUiBook);
        setBooks(mapped);
      } catch (error) {
        console.error("Failed to fetch resources:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Якщо в тебе немає тегів у бекенді — просто залишаємо All
  const tags = useMemo(() => {
    return ["All"];
  }, []);

  const filteredBooks = useMemo(() => {
    let filtered = books;

    // Фільтр по тегу (якщо вибраний)
    if (selectedTag) {
      filtered = filtered.filter((book: any) =>
        book.tags?.includes(selectedTag)
      );
    }

    // Фільтр по пошуку
    if (search) {
      filtered = filtered.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filtered;
  }, [books, search, selectedTag]);

  if (loading) {
    return (
      <div className="p-6 text-center text-lg">
        Loading books...
      </div>
    );
  }

  return (
    <div className="flex">
      <CatalogSidebar
        tags={tags}
        selectedTag={selectedTag}
        onSelect={setSelectedTag}
      />

      <div className="flex-1 p-6">
        <CatalogSearch value={search} onChange={setSearch} />
        <BookGrid books={filteredBooks} />
      </div>
    </div>
  );
}
