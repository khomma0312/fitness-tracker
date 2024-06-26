interface WorkoutTime {
  month: string;
  time: number;
}

const workoutTimeHistory: WorkoutTime[] = [
  {
    month: "2024-01",
    time: 100,
  },
  {
    month: "2024-02",
    time: 65,
  },
  {
    month: "2024-03",
    time: 64,
  },
  {
    month: "2024-04",
    time: 63,
  },
  {
    month: "2024-05",
    time: 67,
  },
  {
    month: "2024-06",
    time: 65,
  },
];

export const workoutTimeHistoryMock = () => workoutTimeHistory;
