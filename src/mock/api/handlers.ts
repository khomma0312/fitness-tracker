import { http, HttpResponse } from "msw";
import { workoutTimeHistoryMock } from "../generator/workoutTimeHistory";

export const handlers = [
  http.get("/user/workout-time-history", () => {
    return HttpResponse.json({
      data: workoutTimeHistoryMock(),
    });
  }),
];
