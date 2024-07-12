import "./App.css";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    return (
        <div className="w-full h-screen min-h-screen bg-[#f7f7fa]">
            <Header click={() => {console.log("1")}}/>
            <Sidebar/>
            <div className="ml-[259px] pt-[60px] relative transition-all duration-500 ease-in-out min-h-[calc(100vh-60px)]">
                <div className="pb-0 p-7 w-full mx-auto">
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
