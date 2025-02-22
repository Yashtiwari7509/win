import React, { useState, useMemo } from "react";
import type { Keyword } from "../types/keyword";
import { TrendingUp, TrendingDown } from "lucide-react";
import { KeywordSearch } from "./KeywordSearch";

interface KeywordTableProps {
  keywords?: Keyword[];
}

export const KeywordTable: React.FC<KeywordTableProps> = ({
  keywords = [],
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredKeywords = useMemo(() => {
    if (!keywords || keywords.length === 0) return [];
    return keywords.filter((keyword) =>
      keyword.term.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [keywords, searchQuery]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4">Top Keywords</h3>
        <KeywordSearch onSearch={setSearchQuery} />
      </div>
      {filteredKeywords.length === 0 && (
        <div className="px-6 py-4 text-gray-500 text-center">
          No keywords found. Try a different search term or add some keywords.
        </div>
      )}
      {filteredKeywords.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Keyword
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Search Volume
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Difficulty
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Competition
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CTR
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredKeywords.map((keyword) => (
                <tr key={keyword.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {keyword.term}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {keyword.searchVolume.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {keyword.difficulty}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {keyword.competition}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {keyword.ctr}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {keyword.trend[keyword.trend.length - 1] >
                    keyword.trend[keyword.trend.length - 2] ? (
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-red-500" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
