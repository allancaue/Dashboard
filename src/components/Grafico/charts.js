import React from 'react';
import { Cell, PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../../styles/barchart.css';

let valoresPorTipoCnpj = {
  "SLU": 300,
  "EI": 200,
  "MEI": 150,
};

let clientesPorEstado = {
  "BA": 43,
  "AL": 23,
  "PE": 20,
}


const cores = ['#0088FE', '#00C49F', '#FFBB28'];

const GraficoDeBarrasEDoughnut = () => {

  const dadosDeRosca = Object.entries(valoresPorTipoCnpj).map(([tipoCnpj, vendas]) => ({ tipoCnpj, vendas }));
  const dadosEstados = Object.entries(clientesPorEstado).map(([estado, clientes]) => ({ estado, clientes }));

  return (
    <ResponsiveContainer width="100%" height='100%'>
      <div className="chart-container">
      <div className="pie-chart" style={{ width: '50%', height: '500px', flex: '1 1 45%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Clientes por Estado</h2>
          <PieChart width={400} height={500}>
            <Pie
              data={dadosEstados}
              dataKey="clientes"
              nameKey="estado"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {
                dadosDeRosca.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={cores[index % cores.length]} />
                ))
              }
            </Pie>
            <Tooltip formatter={(value) => `${value}`} />
            <Legend />
          </PieChart>
        </div>

        <div className="pie-chart" style={{ width: '50%', height: '500px', flex: '1 1 45%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Clientes por Tipo de CNPJ</h2>
          <PieChart width={400} height={500}>
            <Pie
              data={dadosDeRosca}
              dataKey="vendas"
              nameKey="tipoCnpj"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {
                dadosDeRosca.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={cores[index % cores.length]} />
                ))
              }
            </Pie>
            <Tooltip formatter={(value) => `${value}`} />
            <Legend />
          </PieChart>
        </div>
      </div>
    </ResponsiveContainer>
  );
};

export default GraficoDeBarrasEDoughnut;
