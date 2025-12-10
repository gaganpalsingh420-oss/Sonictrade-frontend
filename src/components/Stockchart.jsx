import { Line } from "react-chartjs-2";
import { Chart, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";

Chart.register(LineElement, PointElement, CategoryScale, LinearScale);

export default function StockChart({ history }) {
  const data = {
    labels: history.map(h => h.time),
    datasets: [
      {
        label: "Price Movement",
        data: history.map(h => h.price),
        borderColor: "#22c55e",
        tension: 0.3
      }
    ]
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl mt-4">
      <Line data={data} />
    </div>
  );
}
