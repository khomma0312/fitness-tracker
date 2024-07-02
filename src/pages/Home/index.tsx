import { WorkoutTimeTransitionChart } from "@/widgets/WorkoutTimeTransitionChart";
import styles from "./styles.module.css";
import { TodaysTrainingTable } from "@/widgets/TodaysTrainingTable";

export const Home = () => {
  // TODO: Jotaiなどの状態管理ライブラリを使ってstoreからstartYearMonth, endYearMonth, dateを取得する
  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <WorkoutTimeTransitionChart startYearMonth="2021-03" endYearMonth="2021-08" />
        <TodaysTrainingTable />
      </div>
    </div>
  );
};
