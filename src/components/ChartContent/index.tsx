import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import styles from "./styles.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
);

type ChartContentProps = {
  title: string;
  axisLabels: string[];
  chartData: number[];
};

export const ChartContent = ({
  title,
  axisLabels,
  chartData,
}: ChartContentProps) => {
  const data: ChartData = {
    labels: axisLabels,
    datasets: [
      {
        label: title,
        data: chartData,
        fill: false,
        borderColor: "#20d6f7",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Chart
        width={500}
        options={{ maintainAspectRatio: false }}
        type="line"
        data={data}
      />
    </div>
  );
};
