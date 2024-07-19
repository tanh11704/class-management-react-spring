import React from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="w-full h-screen min-h-screen bg-[#f7f7fa]">
            <Header/>
            <Sidebar/>
            <div
                className="ml-[259px] pt-[60px] relative transition-all duration-500 ease-in-out min-h-[calc(100vh-60px)]">
                <div className="pb-0 p-7 w-full mx-auto">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
