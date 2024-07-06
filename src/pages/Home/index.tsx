import { WorkoutTimeTransitionChart } from "@/widgets/WorkoutTimeTransitionChart";
import styles from "./styles.module.css";
import { TodaysTrainingTable } from "@/widgets/TodaysTrainingTable";
import { Title } from "@mantine/core";
import { useTitleDateStrValue } from "@/store/dashboard-date";

export const Home = () => {
  const titleDate = useTitleDateStrValue();

  return (
    <main className={styles.dashboard}>
      <Title order={2} className={styles.title}>{titleDate}</Title>
      <div className={styles.container}>
        <WorkoutTimeTransitionChart />
        <TodaysTrainingTable />
      </div>
    </main>
  );
};
