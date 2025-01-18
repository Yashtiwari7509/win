import React, { useState } from "react";
import { Youtube, MessageCircle, Search } from "lucide-react";
import { KeywordTable } from "./KeywordTable";

interface SourceOption {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const sources: SourceOption[] = [
  {
    id: "youtube",
    icon: <Youtube size={24} className="text-red-500" />,
    title: "YouTube Analysis",
    description: "Analyze YouTube channels, videos, and audience engagement.",
  },
  {
    id: "social",
    icon: <MessageCircle size={24} className="text-blue-500" />,
    title: "Social Listening",
    description: "Monitor social media conversations and sentiment.",
  },
  {
    id: "competitor",
    icon: <Search size={24} className="text-purple-500" />,
    title: "Competitor Research",
    description: "Analyze competitor strategies and performance.",
  },
];

export const NewResearch: React.FC = () => {
  const [selectedSource, setSelectedSource] = useState<string | null>(null);

  return (
    <div className="p-8">
      <KeywordTable />
      <h1 className="text-2xl font-bold text-gray-900 mb-8">New Research</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sources.map((source) => (
          <button
            key={source.id}
            onClick={() => setSelectedSource(source.id)}
            className={`p-6 rounded-xl border transition-all ${
              selectedSource === source.id
                ? "border-indigo-500 bg-indigo-50"
                : "border-gray-200 hover:border-indigo-200 hover:bg-gray-50"
            }`}
          >
            <div className="flex flex-col items-center text-center">
              {source.icon}
              <h3 className="mt-4 font-semibold text-gray-900">
                {source.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{source.description}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedSource && (
        <div className="mt-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Configure Research
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Research Title
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter research title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  rows={3}
                  placeholder="Enter research description"
                />
              </div>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Start Research
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
