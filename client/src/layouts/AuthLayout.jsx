import React from 'react';
import {Outlet} from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="table h-screen min-h-screen w-full">
            <div className="w-full h-full table-cell align-middle">
                <div className="container">
                    <div className="bg-white rounded-lg flex my-7 mx-auto max-w-[800px] min-h-[500px] w-full shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                        <div
                            className="items-center bg-[#18aefa] flex-col justify-end w-[400px] flex bg-blend-multiply relative rounded-l-[8px] rounded-r-[20px]">
                            <img src={`${process.env.PUBLIC_URL}/images/login-icon-01.png`} alt="login icon" className="absolute top-0 left-0 w-[144px] h-[144px]"/>
                            <img src={`${process.env.PUBLIC_URL}/images/login.png`} alt="Logo" className="max-w-full h-auto align-middle"/>
                            <img src={`${process.env.PUBLIC_URL}/images/login-icon-02.png`} alt="login icon" className="absolute top-0 right-0 w-[144px] h-[144px]"/>
                        </div>
                        <div className="items-center flex justify-center p-[40px] w-[400px]">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
