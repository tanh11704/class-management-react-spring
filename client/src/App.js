import "./App.css";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/teachers" element={<>Teacher</>}/>
            </Route>
            <Route path="auth" element={<AuthLayout/>}>
                {/*<Route/>*/}
            </Route>
        </Routes>
    );
}

export default App;
