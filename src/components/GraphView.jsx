import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

function GraphView({ graphData }) {
    const [chartJsData, setChartJsData] = useState({
        labels: [],
        datasets: [
            {
                fill: true,
                label: 'Forecast',
                data: [],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                pointRadius: 0,
            },
        ],
    })
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }

    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

    useEffect(() => {
        setChartJsData({
            labels: graphData.map(datapoint => new Date(datapoint.from).getHours().toString() + ':00'),
            datasets: [
                {
                    fill: true,
                    label: 'Forecast',
                    data: graphData.map(datapoint => datapoint.intensity.forecast),
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    pointRadius: 0,
                },
            ],
        })
    }, [graphData])


    return (
        <div id="graph-view">
            <h2>The next 48 hours</h2>
            <Line options={options} data={chartJsData} />
        </div>
    )
}

export default GraphView
