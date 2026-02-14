import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function CatalogSearch({ value, onChange }: Props) {
  return (
    <div className="relative max-w-md">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />
      <input
        className="w-full bg-gray-200 border border-gray-300 text-gray-900 rounded-xl pl-10 pr-4 py-3 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
        placeholder="Пошук назви або автора..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
