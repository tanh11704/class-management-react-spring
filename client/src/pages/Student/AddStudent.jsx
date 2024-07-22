import React from 'react';
import {NavLink} from "react-router-dom";
import {IoMdMore} from "react-icons/io";

const AddStudent = () => {
    return (
        <div>
            <div className="mb-7">
                <div className="flex">
                    <div className="w-full flex items-center">
                        <h3 className="text-[22px] font-medium text-[#2C323F] mb-[5px]">
                            Students
                        </h3>
                        <ul className="bg-transparent text-[#6c757d] text-base font-medium mb-0 p-0 ml-auto flex list-none rounded">
                            <li className="text-black">
                                <NavLink to="/">Student</NavLink>
                            </li>
                            <li className="pl-2 before:content-['/'] before:pr-2 before:float-left before:text-[#565A5D]">
                                Add Students
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="bg-white rounded-2xl mb-7 w-full">
                    <div className="relative p-6">
                        <form action="" className="w-full">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <h5 className="flex items-center justify-between w-full text-lg text-[#333] relative mb-7">
                                        Student Information
                                        <span className="pr-2 bg-white inline-block z-10 relative">
                                            <button className="text-2xl">
                                                <IoMdMore/>
                                            </button>
                                        </span>
                                    </h5>
                                </div>
                                <div className="w-1/3 px-3">
                                    <div className="relative mb-10">
                                        <label
                                            htmlFor=""
                                            className="text-[13px] text-[#ABABAB] font-bold absolute top-[-10px] left-[10px] bg-white mb-0 py-0 px-[5px]"
                                        >
                                            First Name
                                            <span className="text-red-500"> * </span>
                                        </label>
                                        <input
                                            className="border rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 font-normal bg-white placeholder:text-black"
                                            type="text"
                                            placeholder={"Enter First Name"}
                                        />
                                    </div>
                                </div>
                                <div className="w-1/3 px-3">
                                    <div className="relative mb-10">
                                        <label
                                            htmlFor=""
                                            className="text-[13px] text-[#ABABAB] font-bold absolute top-[-10px] left-[10px] bg-white mb-0 py-0 px-[5px]"
                                        >
                                            Last Name
                                            <span className="text-red-500"> * </span>
                                        </label>
                                        <input
                                            className="border rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 font-normal bg-white placeholder:text-black"
                                            type="text"
                                            placeholder={"Enter Last Name"}
                                        />
                                    </div>
                                </div>
                                <div className="w-1/3 px-3">
                                    <div className="relative mb-10">
                                        <label
                                            htmlFor=""
                                            className="text-[13px] text-[#ABABAB] font-bold absolute top-[-10px] left-[10px] bg-white mb-0 py-0 px-[5px]"
                                        >
                                            Last Name
                                            <span className="text-red-500"> * </span>
                                        </label>
                                        <select name="" id=""
                                                className="border rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 font-normal bg-white placeholder:text-black"
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="0">Female</option>
                                            <option value="1">Male</option>
                                            <option value="2">Others</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-1/3 px-3">
                                    <div className="relative mb-10">
                                        <label
                                            htmlFor=""
                                            className="text-[13px] text-[#ABABAB] font-bold absolute top-[-10px] left-[10px] bg-white mb-0 py-0 px-[5px]"
                                        >
                                            Date Of Birth
                                            <span className="text-red-500"> * </span>
                                        </label>
                                        <input
                                            className="border rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 font-normal bg-white placeholder:text-black"
                                            type="date"
                                        />
                                    </div>
                                </div>
                                <div className="w-1/3 px-3">
                                    <div className="relative mb-10">
                                        <label
                                            htmlFor=""
                                            className="text-[13px] text-[#ABABAB] font-bold absolute top-[-10px] left-[10px] bg-white mb-0 py-0 px-[5px]"
                                        >
                                            Roll
                                        </label>
                                        <input
                                            className="border rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 font-normal bg-white placeholder:text-black"
                                            type="text"
                                            placeholder={"Enter Roll Number"}
                                        />
                                    </div>
                                </div>
                                <div className="w-1/3 px-3">
                                    <div className="relative mb-10">
                                        <label
                                            htmlFor=""
                                            className="text-[13px] text-[#ABABAB] font-bold absolute top-[-10px] left-[10px] bg-white mb-0 py-0 px-[5px]"
                                        >
                                            Blood Group
                                            <span className="text-red-500"> * </span>
                                        </label>
                                        <select name="" id=""
                                                className="border rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 font-normal bg-white placeholder:text-black"
                                        >
                                            <option value="">Please Select Group</option>
                                            <option value="0">B+</option>
                                            <option value="1">A+</option>
                                            <option value="2">O+</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-1/3 px-3">
                                    <div className="relative mb-10">
                                        <label
                                            htmlFor=""
                                            className="text-[13px] text-[#ABABAB] font-bold absolute top-[-10px] left-[10px] bg-white mb-0 py-0 px-[5px]"
                                        >
                                            Religion
                                            <span className="text-red-500"> * </span>
                                        </label>
                                        <select name="" id=""
                                                className="border rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 font-normal bg-white placeholder:text-black"
                                        >
                                            <option value="">Please Select Religion</option>
                                            <option value="0">Viet Nam</option>
                                            <option value="1">Japan</option>
                                            <option value="2">Korea</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-1/3 px-3">
                                    <div className="relative mb-10">
                                        <label
                                            htmlFor=""
                                            className="text-[13px] text-[#ABABAB] font-bold absolute top-[-10px] left-[10px] bg-white mb-0 py-0 px-[5px]"
                                        >
                                            E-Mail
                                            <span className="text-red-500"> * </span>
                                        </label>
                                        <input
                                            className="border rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 font-normal bg-white placeholder:text-black"
                                            type="text"
                                            placeholder={"Enter Email Address"}
                                        />
                                    </div>
                                </div>
                                <div className="w-1/3 px-3">
                                    <div className="relative mb-10">
                                        <label
                                            htmlFor=""
                                            className="text-[13px] text-[#ABABAB] font-bold absolute top-[-10px] left-[10px] bg-white mb-0 py-0 px-[5px]"
                                        >
                                            Class
                                            <span className="text-red-500"> * </span>
                                        </label>
                                        <select name="" id=""
                                                className="border rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 font-normal bg-white placeholder:text-black"
                                        >
                                            <option value="">Please Select Class</option>
                                            <option value="0">10</option>
                                            <option value="1">11</option>
                                            <option value="2">12</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-1/3 px-3">
                                    <div className="relative mb-10">
                                        <label
                                            htmlFor=""
                                            className="text-[13px] text-[#ABABAB] font-bold absolute top-[-10px] left-[10px] bg-white mb-0 py-0 px-[5px]"
                                        >
                                            Section
                                            <span className="text-red-500"> * </span>
                                        </label>
                                        <select name="" id=""
                                                className="border rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 font-normal bg-white placeholder:text-black"
                                        >
                                            <option value="">Please Select Section</option>
                                            <option value="0">A</option>
                                            <option value="1">B</option>
                                            <option value="2">C</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-1/3 px-3">
                                    <div className="relative mb-10">
                                        <label
                                            htmlFor=""
                                            className="text-[13px] text-[#ABABAB] font-bold absolute top-[-10px] left-[10px] bg-white mb-0 py-0 px-[5px]"
                                        >
                                            Admission ID
                                        </label>
                                        <input
                                            className="border rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 font-normal bg-white placeholder:text-black"
                                            type="text"
                                            placeholder={"Enter Admission ID"}
                                        />
                                    </div>
                                </div>
                                <div className="w-1/3 px-3">
                                    <div className="relative mb-10">
                                        <label
                                            htmlFor=""
                                            className="text-[13px] text-[#ABABAB] font-bold absolute top-[-10px] left-[10px] bg-white mb-0 py-0 px-[5px]"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            className="border rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 font-normal bg-white placeholder:text-black"
                                            type="text"
                                            placeholder={"Enter Phone Number"}
                                        />
                                    </div>
                                </div>
                                <div className="w-1/3 px-3">
                                    <div className="relative mb-10">
                                        <label>Upload Student Photo (150px X 150px)</label>
                                        <div className="mt-3">
                                            <label className="bg-[#444] rounded-lg text-white py-1.5 px-5 cursor-pointer relative">
                                                Choose File
                                                <input type="file" className="absolute top-0 right-0 size-full text-[100px] opacity-0 block cursor-pointer outline-0"/>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-3">
                                    <div>
                                        <button className={"min-w-[160px] rounded-lg bg-[#3D5EE1] text-white text-lg px-3 py-1.5"}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;
