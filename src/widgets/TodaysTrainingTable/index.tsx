import { Card } from "@/components/Card";
import { useWorkoutsByDay } from "@/hooks/api/useWorkoutsByDay";
import { Table } from "@mantine/core";
import styles from "./styles.module.css";
import { RecordedWorkout } from "@/services/api/getWorkoutsByDay";

interface SummedWorkouts {
  [workoutName: string]: RecordedWorkout;
}

export const TodaysTrainingTable = () => {
  // TODO: 日時はJotaiなどの状態管理ライブラリを使って取得する？
  const { workouts } = useWorkoutsByDay(1, "2021-09-01");

  // 同じworkoutNameは重複を削除し、minuteとcaloriesConsumedを合計する
  const summedWorkouts = Array.isArray(workouts) && workouts.length ? sumWorkouts(workouts) : null;

  return (
    <Card>
      <h3 className={styles.title}>今日やったトレーニング🏃‍♂️</h3>
      {summedWorkouts ? <TableContent summedWorkouts={summedWorkouts} /> : <p>トレーニングがありません</p>}
    </Card>
  );
};

const TableContent = ({summedWorkouts }: { summedWorkouts: SummedWorkouts }) => {
  const headers: string[] = ["種目", "時間", "消費カロリー"];

  const headerRows = headers.map((header) => (
    <Table.Th key={header}>{header}</Table.Th>
  ));

  const bodyRows = Object.entries(summedWorkouts).map(([workoutName, workout]) => (
    <Table.Tr key={workoutName}>
      <Table.Td>{workoutName}</Table.Td>
      <Table.Td>{workout.minute}</Table.Td>
      <Table.Td>{workout.caloriesConsumed}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>{headerRows}</Table.Tr>
      </Table.Thead>
      <Table.Tbody>{bodyRows}</Table.Tbody>
    </Table>
  );
};

const sumWorkouts = (workouts: RecordedWorkout[]) => {
  return workouts?.reduce((acc, cur) => {
    if (acc[cur.workoutName]) {
      acc[cur.workoutName].minute += cur.minute;
      acc[cur.workoutName].caloriesConsumed += cur.caloriesConsumed;
    } else {
      acc[cur.workoutName] = { ...cur };
    }
    return acc;
  }, {} as SummedWorkouts);
};