import React from 'react';
import { Youtube, MessageCircle, Search } from 'lucide-react';
import type { Research } from '../types/research';

const mockResearch: Research[] = [
  {
    id: '1',
    title: 'Competitor Content Strategy Analysis',
    source: 'competitor',
    date: '2024-03-15',
    insights: ['Strong focus on video content', 'Regular posting schedule'],
    metrics: {
      views: 15000,
      engagement: 8.5,
    },
  },
  {
    id: '2',
    title: 'Social Media Sentiment Analysis',
    source: 'social',
    date: '2024-03-14',
    insights: ['Positive brand perception', 'High engagement on tutorials'],
    metrics: {
      sentiment: 0.8,
      engagement: 12.3,
    },
  },
  {
    id: '3',
    title: 'YouTube Channel Performance Review',
    source: 'youtube',
    date: '2024-03-13',
    insights: ['Growing subscriber base', 'High watch time'],
    metrics: {
      views: 25000,
      engagement: 9.2,
    },
  },
];

const SourceIcon = ({ source }: { source: Research['source'] }) => {
  switch (source) {
    case 'youtube':
      return <Youtube size={16} className="text-red-500" />;
    case 'social':
      return <MessageCircle size={16} className="text-blue-500" />;
    case 'competitor':
      return <Search size={16} className="text-purple-500" />;
  }
};

export const ResearchTable: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="font-semibold text-gray-900">Recent Research</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Source
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Key Insights
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Metrics
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockResearch.map((research) => (
              <tr key={research.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <SourceIcon source={research.source} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {research.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(research.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <ul className="list-disc list-inside">
                    {research.insights.map((insight, index) => (
                      <li key={index}>{insight}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {research.metrics.views && (
                    <div>Views: {research.metrics.views.toLocaleString()}</div>
                  )}
                  {research.metrics.engagement && (
                    <div>Engagement: {research.metrics.engagement}%</div>
                  )}
                  {research.metrics.sentiment && (
                    <div>Sentiment: {(research.metrics.sentiment * 100).toFixed(1)}%</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};