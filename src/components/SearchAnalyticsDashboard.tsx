import React, { useState, useEffect } from 'react';
import { analyticsService } from '../services/analytics';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const SearchAnalyticsDashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'day' | 'week' | 'month'>('day');
  const [popularSearches, setPopularSearches] = useState<Array<{ query: string; count: number }>>([]);
  const [categoryData, setCategoryData] = useState<Array<{ name: string; count: number }>>([]);
  const [searchVolume, setSearchVolume] = useState<Array<{ time: string; searches: number }>>([]);

  useEffect(() => {
    // Get popular searches
    const topSearches = analyticsService.getPopularSearches(5);
    setPopularSearches(topSearches);

    // Get category distribution
    const categories = ['Services', 'Products', 'Company', 'Technologies'];
    const categoryStats = categories.map(category => ({
      name: category,
      count: analyticsService.getSearchesByCategory(category).length
    }));
    setCategoryData(categoryStats);

    // Get search volume data
    const volumeData = analyticsService.getSearchVolumeByTimeRange(timeRange);
    setSearchVolume(volumeData);
  }, [timeRange]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Search Analytics</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setTimeRange('day')}
            className={`px-4 py-2 rounded-lg ${
              timeRange === 'day'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Day
          </button>
          <button
            onClick={() => setTimeRange('week')}
            className={`px-4 py-2 rounded-lg ${
              timeRange === 'week'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setTimeRange('month')}
            className={`px-4 py-2 rounded-lg ${
              timeRange === 'month'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Month
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Popular Searches */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Popular Searches</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={popularSearches}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="query" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#0088FE" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Category Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="count"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Search Volume Over Time */}
        <div className="bg-gray-50 p-6 rounded-xl lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Search Volume</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={searchVolume}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="searches" stroke="#0088FE" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Analytics Summary */}
        <div className="bg-gray-50 p-6 rounded-xl lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-sm text-gray-500">Total Searches</div>
              <div className="text-2xl font-bold text-gray-900">
                {analyticsService.getTotalSearchCount()}
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-sm text-gray-500">Average Results</div>
              <div className="text-2xl font-bold text-gray-900">
                {analyticsService.getAverageResultsCount().toFixed(1)}
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-sm text-gray-500">Unique Queries</div>
              <div className="text-2xl font-bold text-gray-900">
                {analyticsService.getUniqueSearchCount()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAnalyticsDashboard; 