import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import { StudentList } from "./pages/Student/StudentList";
import AddStudent from "./pages/Student/AddStudent";
import TimeTable from "./pages/TimeTable/TimeTable";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/teachers" element={<>Teacher</>} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/add" element={<AddStudent/>} />
        <Route path="/time-table" element={<TimeTable/>} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
}

export default App;
