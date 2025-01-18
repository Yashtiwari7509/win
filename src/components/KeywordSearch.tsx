import React, { useState } from "react";
import { Search } from "lucide-react";

interface KeywordSearchProps {
  onSearch: (query: string) => void;
}

const initialOptions = [
  "Digital Marketing",
  "SEO",
  "Social Media",
  "Content Strategy",
  "PPC Advertising",
];

export const KeywordSearch: React.FC<KeywordSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleSearch} className="flex items-center">
        <div className="relative flex-grow">
          <input
            type="text"
            className="w-full px-4 py-2 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search keywords..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-blue-500"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </form>
      <div className="mt-2 flex flex-wrap gap-2">
        {initialOptions.map((option) => (
          <button
            key={option}
            onClick={() => {
              setQuery(option);
              onSearch(option);
            }}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
