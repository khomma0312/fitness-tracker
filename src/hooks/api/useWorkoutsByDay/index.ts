import { getWorkoutsByDay } from "@/services/api/getWorkoutsByDay";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";

export const useWorkoutsByDay = (userId: number, date: string) => {
  const { showBoundary } = useErrorBoundary();

  const { data, isLoading, error } = useSuspenseQuery({
    queryKey: ["getTodaysTraining"],
    queryFn: () => getWorkoutsByDay(userId, date),
  });

  useEffect(() => {
    if (error) showBoundary(error);
  }, [error, showBoundary]);

  return { workouts: data, isLoading };
};
