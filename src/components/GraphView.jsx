import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { fetchNextFortyEightHours } from "../utils/api";

function GraphView({ postcodeArea }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  const blankChartData = {
    labels: [],
    datasets: [],
  };

  const [chartData, setChartData] = useState(blankChartData);
  const [isLoading, setIsLoading] = useState(false);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  useEffect(() => {
    if (!postcodeArea) {
      setChartData(blankChartData);
    } else {
      setIsLoading(true);
      fetchNextFortyEightHours(postcodeArea)
        .then((data) => {
          setChartData({
            labels: data.map((datapoint) => {
              return (
                new Date(datapoint.timestamp).getHours().toString() + ":00"
              );
            }),
            datasets: [
              {
                fill: true,
                label: "Forecast",
                data: data.map((datapoint) => datapoint.intensity),
                backgroundColor: "rgba(53, 162, 235, 0.5)",
                pointRadius: 0,
              },
            ],
          });
        })
        .then(() => {
          setIsLoading(false);
        });
    }
  }, [postcodeArea]);

  return (
    // TODO: add loading
    <div id="graph-view" style={{ gridArea: "two-days" }}>
      <h2>The next 48 hours</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ width: "90%", padding: "0 auto" }}>
          <Line options={options} data={chartData} />
        </div>
      )}
    </div>
  );
}

export default GraphView;
