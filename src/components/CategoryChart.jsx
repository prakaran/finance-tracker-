import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc659'];

const CategoryChart = ({ transactions }) => {
  // Filter for expenses and aggregate by category
  const categoryData = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => {
      const category = curr.category || 'other';
      acc[category] = (acc[category] || 0) + curr.amount;
      return acc;
    }, {});

  // Transform to Recharts format: [{ name: 'category', value: total }]
  const data = Object.keys(categoryData).map(category => ({
    name: category,
    value: categoryData[category]
  }));

  if (data.length === 0) {
    return (
      <div className="category-chart-empty">
        <p>No expense data available for the chart.</p>
      </div>
    );
  }

  return (
    <div className="category-chart-container" style={{ marginTop: '2rem', padding: '1rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3>Spending by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;
