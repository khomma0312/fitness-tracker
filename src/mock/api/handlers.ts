import { delay, http, HttpResponse } from 'msw';
import { workoutTimeHistoryMock } from '../generator/workoutTimeHistory';
import { workoutsDayMock } from '../generator/workoutsDay';

export const handlers = [
  http.get('/user/workout-time-history', async () => {
    await delay(1000);
    return HttpResponse.json(workoutTimeHistoryMock());
  }),

  http.get('/user/workouts/day', async () => {
    await delay(1000);
    return HttpResponse.json(workoutsDayMock());
  }),
];
