import { WorkoutTimeTransitionChart } from '@/widgets/WorkoutTimeTransitionChart';
import styles from './styles.module.css';
import { TodaysTrainingTable } from '@/widgets/TodaysTrainingTable';
import { Title } from '@mantine/core';
import { useTitleDateValue } from '@/store/dashboard-date';

export const Home = () => {
  const date = useTitleDateValue();
  const titleDate = date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  });

  return (
    <main className={styles.dashboard}>
      <Title order={2} className={styles.title}>
        {titleDate}
      </Title>
      <div className={styles.container}>
        <WorkoutTimeTransitionChart />
        <TodaysTrainingTable />
      </div>
    </main>
  );
};
