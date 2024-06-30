import { Card } from "@/components/Card";
import styles from "./styles.module.css";
import { WorkoutTimeTransitionChart } from "@/widgets/WorkoutTimeTransitionChart";

export const Home = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <WorkoutTimeTransitionChart />
        <Card>テスト</Card>
      </div>
    </div>
  );
};
