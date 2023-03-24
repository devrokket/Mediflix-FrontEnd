import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

function AreaChart() {
  const [chartData, setChartData] = useState({
    labels: ['7일전', '6일전', '5일전', '4일전', '3일전', '2일전', '1일전'],
    datasets: [
      {
        label: '페이지 방문 횟수',
        data: [10, 23, 40, 15, 34, 21, 47],
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: '접속유지수',
        data: [30, 10, 25, 20, 45, 12, 27],
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: '시청완주수',
        data: [5, 18, 30, 25, 20, 32, 16],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  return (
    <div>
      <Line data={chartData} options={{ responsive: true }} />
    </div>
  );
}

export default AreaChart;
