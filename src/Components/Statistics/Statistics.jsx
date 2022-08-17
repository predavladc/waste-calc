import { getMonthlyStats } from "../../State/calculator";
import { createEffect, createSignal } from "solid-js";
import SolidChart from "solid-chart.js";
import * as Utils from "./chart.js";
const edges = 6;
const labels = Utils.months({ count: 7 });
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};
function Example() {
  const settings = {
    type: "bar",
    data: data,
    options: {
      responsive: true,
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
      class="chart-container"
      style="position: relative; height:40vh; width:80vw"
    >
      <SolidChart
        {...chart}
        canvasOptions={{
          width: 50,
          height: 50,
        }}
      />
    </div>
  );
}
function Statistics() {
  return <div>{JSON.stringify(getMonthlyStats())}</div>;
}

export default Example;
