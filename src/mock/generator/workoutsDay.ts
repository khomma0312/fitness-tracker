import { RecordedWorkout } from '@/services/api/getWorkoutsByDay';

const workoutsDay: RecordedWorkout[] = [
  {
    workoutName: 'ベンチプレス',
    minute: 30,
    caloriesConsumed: 100,
  },
  {
    workoutName: 'スクワット',
    minute: 15,
    caloriesConsumed: 50,
  },
  {
    workoutName: 'デッドリフト',
    minute: 20,
    caloriesConsumed: 70,
  },
  {
    workoutName: 'スクワット',
    minute: 45,
    caloriesConsumed: 150,
  },
];

export const workoutsDayMock = () => workoutsDay;
