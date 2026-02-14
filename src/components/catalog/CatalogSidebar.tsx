type Props = {
  tags: string[];
  selectedTag: string | null;
  onSelect: (tag: string | null) => void;
};

export default function CatalogSidebar({ tags, selectedTag, onSelect }: Props) {
  return (
    <aside className="w-full md:w-56 shrink-0">
      <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 space-y-2 sticky top-6">
        <div className="font-bold text-gray-700 mb-4 px-3 uppercase text-xs tracking-wider">
          Категорії
        </div>

        <button
          onClick={() => onSelect(null)}
          className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
            selectedTag === null
              ? "bg-blue-600 text-white shadow-md"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Всі книги
        </button>

        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onSelect(tag)}
            className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
              selectedTag === tag
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </aside>
  );
}
