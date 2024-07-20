import React, {useState} from 'react';
import {
    FaEnvelope,
    FaFacebookF,
    FaGooglePlusG,
    FaLinkedinIn,
    FaRegEye,
    FaRegEyeSlash,
    FaTwitter
} from "react-icons/fa6";
import {FaUserCircle} from "react-icons/fa";
import {Link} from "react-router-dom";

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <div className="max-w-full grow-0 shrink-0 basis-full">
            <h1 className="text-[25px] font-bold mb-[5px] text-left">Sign Up</h1>
            <p className="text-[#AAAAAA] text-[16px] mb-7 text-left">
                Enter details to create your account
            </p>
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
                        Email
                        <span className="text-red-500">*</span>
                    </label>
                    <input
                        className="border rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 font-normal bg-white"
                        type="text"/>
                    <span className="absolute right-[17px] top-1/2 -translate-y-1/2">
                        <FaEnvelope/>
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
                        type={passwordVisible === false ? "password" : "text"}/>
                    <span className="absolute right-[17px] top-1/2 -translate-y-1/2">
                        {passwordVisible === false ? <FaRegEye onClick={() => setPasswordVisible(!passwordVisible)}/> :
                            <FaRegEyeSlash onClick={() => setPasswordVisible(!passwordVisible)}/>}
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
                        type={confirmPasswordVisible === false ? "password" : "text"}/>
                    <span className="absolute right-[17px] top-1/2 -translate-y-1/2">
                        {confirmPasswordVisible === false ?
                            <FaRegEye onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}/> :
                            <FaRegEyeSlash onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}/>}
                    </span>
                </div>
                <div className="text-[#a0a0a0] my-5">
                    Already Registered?
                    <Link to="/auth/login" className="text-[#18AEFA]"> Login</Link>
                </div>
                <div className="relative mb-5">
                    <button
                        className="w-full bg-[#3d5ee1] border-solid py-1.5 text-white rounded-[6px] hover:bg-[#18aefa] transition-all duration-400">
                        Register
                    </button>
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
                <button
                    className="bg-[#ccc] rounded inline-block h-[32px] leading-8 mr-[6px] w-[32px] hover:bg-[#3d5ee1] hover:text-white duration-400 ease-linear transition-all">
                    <FaTwitter className="w-full h-full p-2"/>
                </button>
                <button
                    className="bg-[#ccc] rounded inline-block h-[32px] leading-8 mr-[6px] w-[32px] hover:bg-[#3d5ee1] hover:text-white duration-400 ease-linear transition-all">
                    <FaLinkedinIn className="w-full h-full p-2"/>
                </button>
            </div>
        </div>
    );
};

export default Register;
