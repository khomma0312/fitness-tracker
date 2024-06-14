import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Workout } from "@/pages/Workout";
import { Workouts } from "@/pages/Workouts";
import { Signin } from "@/pages/Signin";
import { Signup } from "@/pages/Signup";
import { Mypage } from "@/pages/Mypage";
import { CustomWorkouts } from "@/pages/CustomWorkouts";
import { EditCustomWorkouts } from "@/pages/EditCustomWorkouts";
import { ChangePassword } from "@/pages/ChangePassword";
import { History } from "@/pages/History";
import { Layout } from "@/Layout";

function App() {
  return (
    <Routes>
      {/* TODO: ログインしていない時はリダイレクトするようProtectedRouteで囲う */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workout/:id" element={<Workout />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/custom-workouts" element={<CustomWorkouts />} />
        <Route path="/custom-workouts" element={<CustomWorkouts />} />
        <Route
          path="/edit/custom-workouts/:id"
          element={<EditCustomWorkouts />}
        />
        <Route path="/history" element={<History />} />
      </Route>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/change-password" element={<ChangePassword />} />
    </Routes>
  );
}

export default App;
