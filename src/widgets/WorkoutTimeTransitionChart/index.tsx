import { Card } from "@/components/Card";
import { ChartContent } from "@/components/ChartContent";
import { useWorkoutTimeHistory } from "@/hooks/api/useWorkoutTimeHistory";

interface WorkoutTimeTransitionChartProps {
  startYearMonth: string;
  endYearMonth: string;
}

export const WorkoutTimeTransitionChart = ({
  startYearMonth,
  endYearMonth,
}: WorkoutTimeTransitionChartProps) => {
  // TODO: ユーザーIDはuseAuth的なフックから取得する？
  const userId = 1;

  const { workoutTimes } = useWorkoutTimeHistory(
    userId,
    startYearMonth,
    endYearMonth,
  );

  const axisLabels = workoutTimes?.map((item) => item.month) ?? [];
  const chartData = workoutTimes?.map((item) => item.time) ?? [];

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
