import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js"
import React from "react"

import { DataList } from "../types"
import { Pie } from "react-chartjs-2"

Chart.register(CategoryScale)
const HornChart: React.FC<DataList> = ({ data }) => {
    // Extracting horn types and counting occurrences
    const hornTypes = data.reduce((acc: Record<string, number>, item) => {
        acc[item.horns] = (acc[item.horns] || 0) + 1;
        return acc;
    }, {});
    const chartData = {
        labels: Object.keys(hornTypes),
        datasets: [
            {
                label: 'Horn Types',
                data: Object.values(hornTypes),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    // Add more colors if you have more horn types
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    // Add more border colors if needed
                ],
                borderWidth: 1,
            },
        ],

    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Horn Types Distribution',
            },
        },
    };

    return (
        <div className="flex justify-center items-center h-2/6 w-2/6">
            <Pie data={chartData} options={options} />
        </div>
    )
}

export default HornChart;