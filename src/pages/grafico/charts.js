import React from 'react';
import { BarChart, Bar, Cell, PieChart, Pie, Tooltip, Legend, XAxis, YAxis } from 'recharts';

const valuesByMonth = {
  Jan: 2000,
  Fev: 2500,
  Mar: 3000,
  Abr: 4000,
  Mai: 5000,
  Jun: 8043,
};


const barData = Object.entries(valuesByMonth).map(([name, Vendas]) => ({ name, Vendas }));

const doughnutData = [
  { name: 'Produto A', value: 300 },
  { name: 'Produto B', value: 200 },
  { name: 'Produto C', value: 150 },
];

const colors = ['#0088FE', '#00C49F', '#FFBB28'];

const BarAndDoughnutChart = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
      <div>
        <h2>Vendas Mensais</h2>
        <BarChart width={600} height={300} data={barData}>
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis />
          <Bar dataKey="Vendas" fill="#8884d8">
            {
              barData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))
            }
          </Bar>
          <Tooltip formatter={(value) => `R$${value}`} />
          <Legend />
        </BarChart>
      </div>
      <div>
        <h2>Vendas por Produto</h2>
        <PieChart width={400} height={300}>
          <Pie
            data={doughnutData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {
              doughnutData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))
            }
          </Pie>
          <Tooltip formatter={(value) => `R$${value}`} />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default BarAndDoughnutChart;
