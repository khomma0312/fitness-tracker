import { useEffect } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useErrorBoundary } from "react-error-boundary";
import { getWorkoutTimeHistory } from "@/services/api/getWorkoutTimeHistory";

export const useWorkoutTimeHistory = (
  userId: number,
  startYearMonth: string,
  endYearMonth: string,
) => {
  const { showBoundary } = useErrorBoundary();

  const { data, isLoading, error } = useSuspenseQuery({
    queryKey: ["getWorkoutTimeHistory"],
    queryFn: () => getWorkoutTimeHistory(userId, startYearMonth, endYearMonth),
  });

  useEffect(() => {
    if (error) showBoundary(error);
  }, [error, showBoundary]);

  return { workoutTimes: data, isLoading };
};
