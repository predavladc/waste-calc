import { getMonthlyStats } from "../../State/calculator";
import { createSignal } from "solid-js";
import SolidChart from "solid-chart.js";
import * as Utils from "./chart.js";

const currentYear = new Date().getFullYear()
const monthlyValTotals = Object.values(getMonthlyStats()[currentYear]).map(m => Object.values(m).reduce((a, b) => a + b, 0))
const labels = Utils.months({ count: monthlyValTotals.length });

function Example() {
  const settings = {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "My First Dataset",
          data: monthlyValTotals,
          backgroundColor: new Array(monthlyValTotals.length).fill(0).map((e, i) => `hsl(${150 + i * 36}, 80%, 60%)`),
          borderColor: new Array(monthlyValTotals.length).fill(0).map((e, i) => `hsl(${150 + i * 36}, 80%, 20%)`),
          borderWidth: 3,
        },
      ],
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: "SOLID CHART",
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  const [chart, setChart] = createSignal(settings);

  return (
    <div
      class="w-screen flex justify-center chart-container"
    >
      <div>{JSON.stringify(getMonthlyStats())}</div>
      <div>{JSON.stringify([
        {
          label: "My First Dataset",
          data: monthlyValTotals,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ])}</div>
      <SolidChart
        {...chart}
        canvasOptions={{
          width: window.innerWidth / 2,
          height: window.innerHeight - 52,
        }}
      />
    </div>
  );
}
function Statistics() {
  return <div>{JSON.stringify(getMonthlyStats())}</div>;
}

export default Example;
