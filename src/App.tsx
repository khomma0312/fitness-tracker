import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Workout } from '@/pages/Workout';
import { Workouts } from '@/pages/Workouts';
import { Signin } from '@/pages/Signin';
import { Signup } from '@/pages/Signup';
import { Mypage } from '@/pages/Mypage';
import { CustomWorkouts } from '@/pages/CustomWorkouts';
import { EditCustomWorkouts } from '@/pages/EditCustomWorkouts';
import { ChangePassword } from '@/pages/ChangePassword';
import { History } from '@/pages/History';
import { AddWorkout } from '@/pages/AddWorkout';
import { Layout } from '@/Layout';
import { paths } from './services/utils/paths';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate replace to="/dashboard" />} />
        <Route path={paths.dashboard} element={<Home />} />
        <Route path={paths.workouts} element={<Workouts />} />
        <Route path={paths.workout} element={<Workout />} />
        <Route path={paths.addWorkout} element={<AddWorkout />} />
        <Route path={paths.mypage} element={<Mypage />} />
        <Route path={paths.customWorkouts} element={<CustomWorkouts />} />
        <Route
          path={paths.editCustomWorkouts}
          element={<EditCustomWorkouts />}
        />
        <Route path={paths.history} element={<History />} />
      </Route>
      <Route path={paths.signin} element={<Signin />} />
      <Route path={paths.signup} element={<Signup />} />
      <Route path={paths.changePassword} element={<ChangePassword />} />
    </Routes>
  );
}

export default App;
