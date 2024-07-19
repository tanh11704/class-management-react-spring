import React from 'react';
import {Link} from "react-router-dom";
import {FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter} from "react-icons/fa6";
import {FaUserCircle} from "react-icons/fa";

const AuthLayout = () => {
    return (
        <div className="table h-screen min-h-screen w-full">
            <div className="w-full h-full table-cell align-middle">
                <div className="container">
                    <div className="bg-white rounded-lg flex my-7 mx-auto max-w-[800px] min-h-[500px] w-full shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                        <div
                            className="items-center bg-[#18aefa] flex-col justify-end w-[400px] flex bg-blend-multiply relative rounded-l-[8px] rounded-r-[20px]">
                            <img src="./images/login-icon-01.png" alt="login icon" className="absolute top-0 left-0 w-[144px] h-[144px]"/>
                            <img src="./images/login.png" alt="Logo" className="max-w-full h-auto align-middle"/>
                            <img src="./images/login-icon-02.png" alt="login icon" className="absolute top-0 right-0 w-[144px] h-[144px]"/>
                        </div>
                        <div className="items-center flex justify-center p-[40px] w-[400px]">
                            <div className="max-w-full grow-0 shrink-0 basis-full">
                                <h1 className="text-[25px] font-bold mb-[5px] text-left">Welcome to Preskool</h1>
                                <p className="text-[#AAAAAA] text-[16px] mb-7 text-left">
                                    Need an account?
                                    <Link to="register" className="text-[#18AEFA]"> Sign Up </Link>
                                </p>
                                <h2 className="text-[23px] font-medium text-black mb-7">Sign in</h2>
                                <form action="">
                                    <div className="relative mb-5">
                                        <label htmlFor=""
                                               className="text-[13px] text-[#ABABAB] font-bold absolute top-[-10px] left-[10px] bg-white mb-0 py-0 px-[5px]">
                                            Username
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            className="border rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 font-normal bg-white"
                                            type="text"/>
                                        <span className="absolute right-[17px] top-1/2 -translate-y-1/2">
                                            <FaUserCircle/>
                                        </span>
                                    </div>
                                    <div className="relative mb-5">
                                        <label htmlFor=""
                                               className="text-[13px] text-[#ABABAB] font-bold absolute top-[-10px] left-[10px] bg-white mb-0 py-0 px-[5px]">
                                            Password
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            className="border rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 font-normal bg-white"
                                            type="password"/>
                                        <span className="absolute right-[17px] top-1/2 -translate-y-1/2">
                                            <FaUserCircle/>
                                        </span>
                                    </div>
                                </form>
                                <div className="text-[#a0a0a0] my-5 py-3 relative">
                                    <span className="bg-[#e5e5e5] h-[1px] my-0 block"></span>
                                    <span
                                        className="bg-white block absolute top-0 left-1/2 ml-[-20px] text-center uppercase w-[42px]">or</span>
                                </div>
                                <div className="text-center">
                                    <button
                                        className="bg-[#ccc] rounded inline-block h-[32px] leading-8 mr-[6px] w-[32px] hover:bg-[#3d5ee1] hover:text-white duration-400 ease-linear transition-all">
                                        <FaGooglePlusG className="w-full h-full p-1"/>
                                    </button>
                                    <button
                                        className="bg-[#ccc] rounded inline-block h-[32px] leading-8 mr-[6px] w-[32px] hover:bg-[#3d5ee1] hover:text-white duration-400 ease-linear transition-all">
                                        <FaFacebookF className="w-full h-full p-2"/>
                                    </button>
                                    <button className="bg-[#ccc] rounded inline-block h-[32px] leading-8 mr-[6px] w-[32px] hover:bg-[#3d5ee1] hover:text-white duration-400 ease-linear transition-all">
                                        <FaTwitter className="w-full h-full p-2"/>
                                    </button>
                                    <button className="bg-[#ccc] rounded inline-block h-[32px] leading-8 mr-[6px] w-[32px] hover:bg-[#3d5ee1] hover:text-white duration-400 ease-linear transition-all">
                                        <FaLinkedinIn className="w-full h-full p-2"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
