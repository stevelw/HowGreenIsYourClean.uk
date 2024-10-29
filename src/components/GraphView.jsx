import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { fetchNextFortyEightHours } from '../utils/api'

function GraphView({ postcodeArea }) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
    const blankChartData = {
        labels: [],
        datasets: [],
    }

    const [chartData, setChartData] = useState(blankChartData)

    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

    useEffect(() => {
        if (!postcodeArea) {
            setChartData(blankChartData)
        } else {
            fetchNextFortyEightHours(postcodeArea)
                .then(data => {
                    setChartData({
                        labels: data.map(datapoint => {
                            return new Date(datapoint.timestamp).getHours().toString() + ':00'
                        }),
                        datasets: [
                            {
                                fill: true,
                                label: 'Forecast',
                                data: data.map(datapoint => datapoint.intensity),
                                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                pointRadius: 0,
                            }
                        ]
                    })
                })
        }
    }, [postcodeArea])


    return (
        <div id="graph-view">
            <h2>The next 48 hours</h2>
            <Line options={options} data={chartData} />
        </div>
    )
}

export default GraphView
