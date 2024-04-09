import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js"
import React from "react"

import { DataList } from "../types"
import { Bar } from "react-chartjs-2"

Chart.register(CategoryScale)
const WeightHightChart: React.FC<DataList> = ({ data }) => {
    // Extracting horn types and counting occurrences
    const labels = data.map(data => data.name);
    const barData = data.map(data => (data.weight / data.height).toFixed(2))
    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Weight/Height Ratio',
            data: barData,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        }],

    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false, // Set to true if you wish to display the legend
            },
            title: {
                display: true,
                text: 'Animal Weight/Height Ratio',
            },
        },
    };


    return (
        <div className="flex justify-center items-center h-2/6 w-2/6">
            <Bar data={chartData} options={options} />
        </div>
    )
}

export default WeightHightChart;