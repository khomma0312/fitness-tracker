import axios from "axios";

export interface RecordedWorkout {
  workoutName: string;
  minute: number;
  caloriesConsumed: number;
}

export const getWorkoutsByDay = async (userId: number, date: string) => {
  const res = await axios.get<RecordedWorkout[] | undefined>(
    "/user/workouts/day",
    {
      params: {
        userId,
        date,
      },
    },
  );
  return res.data;
};
