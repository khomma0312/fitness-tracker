import { delay, http, HttpResponse } from "msw";
import { workoutTimeHistoryMock } from "../generator/workoutTimeHistory";

export const handlers = [
  http.get("/user/workout-time-history", async () => {
    await delay(1000);
    return HttpResponse.json(workoutTimeHistoryMock());
  }),
];
