import axios from 'axios';

export interface WorkoutTime {
  month: string;
  time: number;
}

export const getWorkoutTimeHistory = async (
  userId: number,
  startYearMonth: string,
  endYearMonth: string,
) => {
  const res = await axios.get<WorkoutTime[] | undefined>(
    '/user/workout-time-history',
    {
      params: {
        userId,
        startYearMonth,
        endYearMonth,
      },
    },
  );
  return res.data;
};
