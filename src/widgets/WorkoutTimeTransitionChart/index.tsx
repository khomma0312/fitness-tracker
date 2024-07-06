import { Card } from "@/components/Card";
import { ChartContent } from "@/components/ChartContent";
import { useWorkoutTimeHistory } from "@/hooks/api/useWorkoutTimeHistory";
import { useEndDateStrValue, useStartDateStrValue } from "@/store/dashboard-date";

export const WorkoutTimeTransitionChart = () => {
  // TODO: ユーザーIDはuseAuth的なフックから取得する？
  const userId = 1;

  const startDateStr = useStartDateStrValue();
  const endDateStr = useEndDateStrValue();

  const { workoutTimes } = useWorkoutTimeHistory(
    userId,
    startDateStr,
    endDateStr,
  );

  const axisLabels = workoutTimes ? workoutTimes.map((item) => item.month) : [];
  const chartData = workoutTimes ? workoutTimes.map((item) => item.time) : [];

  return (
    <Card>
      <ChartContent
        title="トレーニング時間(h)"
        axisLabels={axisLabels}
        chartData={chartData}
      />
    </Card>
  );
};
