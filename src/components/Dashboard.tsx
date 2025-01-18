import React from 'react';
import { BarChart2, Users, TrendingUp, Target } from 'lucide-react';
import { OverviewCard } from './OverviewCard';
import { TrendChart } from './charts/TrendChart';
import { ResearchTable } from './ResearchTable';

const trendData = [
  { date: 'Jan', volume: 65 },
  { date: 'Feb', volume: 72 },
  { date: 'Mar', volume: 68 },
  { date: 'Apr', volume: 85 },
  { date: 'May', volume: 78 },
  { date: 'Jun', volume: 90 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <OverviewCard
          title="Total Research"
          value="156"
          change={12}
          icon={<BarChart2 size={20} />}
        />
        <OverviewCard
          title="Active Users"
          value="2.4k"
          change={8}
          icon={<Users size={20} />}
        />
        <OverviewCard
          title="Trending Topics"
          value="86"
          change={-5}
          icon={<TrendingUp size={20} />}
        />
        <OverviewCard
          title="Pain Points"
          value="24"
          change={15}
          icon={<Target size={20} />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <TrendChart data={trendData} />
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-900 font-semibold mb-6">
            Research Distribution
          </h3>
          {/* Add distribution chart here */}
        </div>
      </div>

      <ResearchTable />
    </div>
  );
};