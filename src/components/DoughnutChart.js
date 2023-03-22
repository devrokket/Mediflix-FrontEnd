import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// ChartJS.register(ArcElement, Tooltip, Legend, Title);

// const data1 = {
//     labels: ['신경의학과', '피부과', '내과', '산부인과', '그 외'],
//     datasets: [
//         {
//             label: '%',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 '#FF0000',
//                 '#FA7B7B',
//                 '#D9D9D9',
//                 '#F9ACAC',
//                 '#FFFFFF',
//             ],
//             borderColor: [
//                 'gray'
//             ],
//             borderWidth: 0.2,
//             cutout: "80%"
//         },
//     ],
// };

// const options = {
//     plugins: {
//         legend: { //범례 스타일링
//             display: true,
//             labels: {
//                 color: 'black',
//                 usePointStyle: true,
//                 font: {
//                     size: 10,
//                 }
//             }
//         },
//         title: {
//             position: 'bottom',
//             display: 'true',
//             text: 'MEDIFLIX 회원의 전공별 분포',
//             color: 'black',
//             padding: {
//                 bottom: 0,
//                 top: 10
//             }
//         }
//     }
// }

export default function DoughnutChart({ data, option }) {
    return <Doughnut data={data} options={option} />;
}
