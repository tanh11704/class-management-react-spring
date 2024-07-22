import React from "react";
import {Link, NavLink} from "react-router-dom";
import {FaDownload, FaListUl, FaPlus, FaRegEye} from "react-icons/fa6";
import {IoGridOutline} from "react-icons/io5";
import {FaEdit} from "react-icons/fa";

export const StudentList = () => {
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
                                All Students
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex">
                    <div className="w-1/4">
                        <div className="mb-5">
                            <input
                                className="border border-solid border-[#ddd] rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 bg-white placeholder:text-[#585C5E]"
                                type="text"
                                placeholder="Search by ID ..."
                            />
                        </div>
                    </div>
                    <div className="w-1/4 px-3">
                        <div className="mb-5">
                            <input
                                className="border border-solid border-[#ddd] rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 bg-white placeholder:text-[#585C5E]"
                                type="text"
                                placeholder="Search by Name ..."
                            />
                        </div>
                    </div>
                    <div className="w-1/3 px-3">
                        <div className="mb-5">
                            <input
                                className="border border-solid border-[#ddd] rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 bg-white placeholder:text-[#585C5E]"
                                type="text"
                                placeholder="Search by Phone ..."
                            />
                        </div>
                    </div>
                    <div className="w-1/6 px-3">
                        <button
                            className="min-w-[135px] font-bold h-[45px] uppercase py-3 px-4 bg-[#3d5ee1] text-white rounded">Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="w-full">
                    <div
                        className="bg-white border-none rounded-[15px] mb-7 relative flex flex-col text-[#212529] break-words">
                        <div className="relative p-[25px] flex-grow flex-shrink basis-auto">
                            <div className="mb-7">
                                <div className="flex items-center">
                                    <div className="flex items-center flex-grow shrink-0 basis-0">
                                        <h3 className="text-[22px] text-[#2C323F] mb-1">Students</h3>
                                    </div>
                                    <div className="text-end float-end ms-auto w-auto grow-0 shrink-0 basis-auto">
                                        <button
                                            className="bg-[#3d5ee1] text-white me-2 size-[38px] border-2 border-solid border-[#3d5ee1] inline-flex rounded-lg items-center">
                                            <FaListUl className="mx-auto"/>
                                        </button>
                                        <button
                                            className="bg-white text-black me-2 size-[38px] border-2 border-solid border-[#EDF1F1] inline-flex rounded-lg items-center">
                                            <IoGridOutline className="mx-auto"/>
                                        </button>
                                        <button
                                            className="bg-[#3d5ee1] text-white me-2 h-[38px] px-3 border-2 border-solid border-[#3d5ee1] inline-flex rounded-lg items-center">
                                            <FaDownload className="mx-auto"/>
                                            <span className="ml-2">Download</span>
                                        </button>
                                        <Link
                                            to="add"
                                            className="bg-[#3d5ee1] text-white me-2 size-[38px] border-2 border-solid border-[#3d5ee1] inline-flex rounded-lg items-center">
                                            <FaPlus className="mx-auto"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="whitespace-nowrap overflow-x-auto">
                                <div className="relative clear-both">
                                    <table className="table border-collapse w-full max-w-full text-left mb-5">
                                        <thead className="bg-[#F8F9FA] w-[1200px]">
                                            <tr>
                                                <th className="py-4 px-3">ID</th>
                                                <th className="py-4 px-3">Name</th>
                                                <th className="py-4 px-3">Class</th>
                                                <th className="py-4 px-3">Dob</th>
                                                <th className="py-4 px-3">Parent Name</th>
                                                <th className="py-4 px-3">Mobile Number</th>
                                                <th className="py-4 px-3">Address</th>
                                                <th className="py-4 px-3">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="text-[#666] font-normal">
                                            <td className="py-4 px-3">PRE2153</td>
                                            <td className="py-4 px-3">
                                                <h2 className="inline-flex items-center m-0 p-0 align-middle">
                                                    <Link to="/student/detail"
                                                          className="size-10 relative inline-block mr-2">
                                                        <img src="./images/avatars/avatar-05.jpg" alt=""
                                                             className="size-full object-cover"
                                                             style={{borderRadius: "50%"}}/>
                                                    </Link>
                                                    <Link to="/student/detail">Calvin</Link>
                                                </h2>
                                            </td>
                                            <td className="py-4 px-3">9 B</td>
                                            <td className="py-4 px-3">8 Dec 2003</td>
                                            <td className="py-4 px-3">Minnie&nbsp;J&nbsp;Shaffer</td>
                                            <td className="py-4 px-3">701 753 3810</td>
                                            <td className="py-4 px-3">1900 Hidden Meadow Drive, Crete</td>
                                            <td className="text-end py-4 px-3">
                                                <div className="flex justify-end">
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px] me-2">
                                                        <FaRegEye/>
                                                    </button>
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px]">
                                                        <FaEdit/>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="text-[#666] font-normal bg-[#FAFAFA]">
                                            <td className="py-4 px-3">PRE2153</td>
                                            <td className="py-4 px-3">
                                                <h2 className="inline-flex items-center m-0 p-0 align-middle">
                                                    <Link to="/student/detail"
                                                          className="size-10 relative inline-block mr-2">
                                                        <img src="./images/avatars/avatar-05.jpg" alt=""
                                                             className="size-full object-cover"
                                                             style={{borderRadius: "50%"}}/>
                                                    </Link>
                                                    <Link to="/student/detail">John Chambers</Link>
                                                </h2>
                                            </td>
                                            <td className="py-4 px-3">9 B</td>
                                            <td className="py-4 px-3">8 Dec 2003</td>
                                            <td className="py-4 px-3">Minnie&nbsp;J&nbsp;Shaffer</td>
                                            <td className="py-4 px-3">701 753 3810</td>
                                            <td className="py-4 px-3">Bacardi Rd P.O. Box N-4880, New Providence</td>
                                            <td className="text-end py-4 px-3">
                                                <div className="flex justify-end">
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px] me-2">
                                                        <FaRegEye/>
                                                    </button>
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px]">
                                                        <FaEdit/>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="text-[#666] font-normal">
                                            <td className="py-4 px-3">PRE2153</td>
                                            <td className="py-4 px-3">
                                                <h2 className="inline-flex items-center m-0 p-0 align-middle">
                                                    <Link to="/student/detail"
                                                          className="size-10 relative inline-block mr-2">
                                                        <img src="./images/avatars/avatar-05.jpg" alt=""
                                                             className="size-full object-cover"
                                                             style={{borderRadius: "50%"}}/>
                                                    </Link>
                                                    <Link to="/student/detail">Calvin</Link>
                                                </h2>
                                            </td>
                                            <td className="py-4 px-3">9 B</td>
                                            <td className="py-4 px-3">8 Dec 2003</td>
                                            <td className="py-4 px-3">Minnie&nbsp;J&nbsp;Shaffer</td>
                                            <td className="py-4 px-3">701 753 3810</td>
                                            <td className="py-4 px-3">1900 Hidden Meadow Drive, Crete</td>
                                            <td className="text-end py-4 px-3">
                                                <div className="flex justify-end">
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px] me-2">
                                                        <FaRegEye/>
                                                    </button>
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px]">
                                                        <FaEdit/>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="text-[#666] font-normal bg-[#FAFAFA]">
                                            <td className="py-4 px-3">PRE2153</td>
                                            <td className="py-4 px-3">
                                                <h2 className="inline-flex items-center m-0 p-0 align-middle">
                                                    <Link to="/student/detail"
                                                          className="size-10 relative inline-block mr-2">
                                                        <img src="./images/avatars/avatar-05.jpg" alt=""
                                                             className="size-full object-cover"
                                                             style={{borderRadius: "50%"}}/>
                                                    </Link>
                                                    <Link to="/student/detail">John Chambers</Link>
                                                </h2>
                                            </td>
                                            <td className="py-4 px-3">9 B</td>
                                            <td className="py-4 px-3">8 Dec 2003</td>
                                            <td className="py-4 px-3">Minnie&nbsp;J&nbsp;Shaffer</td>
                                            <td className="py-4 px-3">701 753 3810</td>
                                            <td className="py-4 px-3">Bacardi Rd P.O. Box N-4880, New Providence</td>
                                            <td className="text-end py-4 px-3">
                                                <div className="flex justify-end">
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px] me-2">
                                                        <FaRegEye/>
                                                    </button>
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px]">
                                                        <FaEdit/>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="text-[#666] font-normal">
                                            <td className="py-4 px-3">PRE2153</td>
                                            <td className="py-4 px-3">
                                                <h2 className="inline-flex items-center m-0 p-0 align-middle">
                                                    <Link to="/student/detail"
                                                          className="size-10 relative inline-block mr-2">
                                                        <img src="./images/avatars/avatar-05.jpg" alt=""
                                                             className="size-full object-cover"
                                                             style={{borderRadius: "50%"}}/>
                                                    </Link>
                                                    <Link to="/student/detail">Calvin</Link>
                                                </h2>
                                            </td>
                                            <td className="py-4 px-3">9 B</td>
                                            <td className="py-4 px-3">8 Dec 2003</td>
                                            <td className="py-4 px-3">Minnie&nbsp;J&nbsp;Shaffer</td>
                                            <td className="py-4 px-3">701 753 3810</td>
                                            <td className="py-4 px-3">1900 Hidden Meadow Drive, Crete</td>
                                            <td className="text-end py-4 px-3">
                                                <div className="flex justify-end">
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px] me-2">
                                                        <FaRegEye/>
                                                    </button>
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px]">
                                                        <FaEdit/>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="text-[#666] font-normal bg-[#FAFAFA]">
                                            <td className="py-4 px-3">PRE2153</td>
                                            <td className="py-4 px-3">
                                                <h2 className="inline-flex items-center m-0 p-0 align-middle">
                                                    <Link to="/student/detail"
                                                          className="size-10 relative inline-block mr-2">
                                                        <img src="./images/avatars/avatar-05.jpg" alt=""
                                                             className="size-full object-cover"
                                                             style={{borderRadius: "50%"}}/>
                                                    </Link>
                                                    <Link to="/student/detail">John Chambers</Link>
                                                </h2>
                                            </td>
                                            <td className="py-4 px-3">9 B</td>
                                            <td className="py-4 px-3">8 Dec 2003</td>
                                            <td className="py-4 px-3">Minnie&nbsp;J&nbsp;Shaffer</td>
                                            <td className="py-4 px-3">701 753 3810</td>
                                            <td className="py-4 px-3">Bacardi Rd P.O. Box N-4880, New Providence</td>
                                            <td className="text-end py-4 px-3">
                                                <div className="flex justify-end">
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px] me-2">
                                                        <FaRegEye/>
                                                    </button>
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px]">
                                                        <FaEdit/>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="text-[#666] font-normal">
                                            <td className="py-4 px-3">PRE2153</td>
                                            <td className="py-4 px-3">
                                                <h2 className="inline-flex items-center m-0 p-0 align-middle">
                                                    <Link to="/student/detail"
                                                          className="size-10 relative inline-block mr-2">
                                                        <img src="./images/avatars/avatar-05.jpg" alt=""
                                                             className="size-full object-cover"
                                                             style={{borderRadius: "50%"}}/>
                                                    </Link>
                                                    <Link to="/student/detail">Calvin</Link>
                                                </h2>
                                            </td>
                                            <td className="py-4 px-3">9 B</td>
                                            <td className="py-4 px-3">8 Dec 2003</td>
                                            <td className="py-4 px-3">Minnie&nbsp;J&nbsp;Shaffer</td>
                                            <td className="py-4 px-3">701 753 3810</td>
                                            <td className="py-4 px-3">1900 Hidden Meadow Drive, Crete</td>
                                            <td className="text-end py-4 px-3">
                                                <div className="flex justify-end">
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px] me-2">
                                                        <FaRegEye/>
                                                    </button>
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px]">
                                                        <FaEdit/>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="text-[#666] font-normal bg-[#FAFAFA]">
                                            <td className="py-4 px-3">PRE2153</td>
                                            <td className="py-4 px-3">
                                                <h2 className="inline-flex items-center m-0 p-0 align-middle">
                                                    <Link to="/student/detail"
                                                          className="size-10 relative inline-block mr-2">
                                                        <img src="./images/avatars/avatar-05.jpg" alt=""
                                                             className="size-full object-cover"
                                                             style={{borderRadius: "50%"}}/>
                                                    </Link>
                                                    <Link to="/student/detail">John Chambers</Link>
                                                </h2>
                                            </td>
                                            <td className="py-4 px-3">9 B</td>
                                            <td className="py-4 px-3">8 Dec 2003</td>
                                            <td className="py-4 px-3">Minnie&nbsp;J&nbsp;Shaffer</td>
                                            <td className="py-4 px-3">701 753 3810</td>
                                            <td className="py-4 px-3">Bacardi Rd P.O. Box N-4880, New Providence</td>
                                            <td className="text-end py-4 px-3">
                                                <div className="flex justify-end">
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px] me-2">
                                                        <FaRegEye/>
                                                    </button>
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px]">
                                                        <FaEdit/>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="text-[#666] font-normal">
                                            <td className="py-4 px-3">PRE2153</td>
                                            <td className="py-4 px-3">
                                                <h2 className="inline-flex items-center m-0 p-0 align-middle">
                                                    <Link to="/student/detail"
                                                          className="size-10 relative inline-block mr-2">
                                                        <img src="./images/avatars/avatar-05.jpg" alt=""
                                                             className="size-full object-cover"
                                                             style={{borderRadius: "50%"}}/>
                                                    </Link>
                                                    <Link to="/student/detail">Calvin</Link>
                                                </h2>
                                            </td>
                                            <td className="py-4 px-3">9 B</td>
                                            <td className="py-4 px-3">8 Dec 2003</td>
                                            <td className="py-4 px-3">Minnie&nbsp;J&nbsp;Shaffer</td>
                                            <td className="py-4 px-3">701 753 3810</td>
                                            <td className="py-4 px-3">1900 Hidden Meadow Drive, Crete</td>
                                            <td className="text-end py-4 px-3">
                                                <div className="flex justify-end">
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px] me-2">
                                                        <FaRegEye/>
                                                    </button>
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px]">
                                                        <FaEdit/>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="text-[#666] font-normal bg-[#FAFAFA]">
                                            <td className="py-4 px-3">PRE2153</td>
                                            <td className="py-4 px-3">
                                                <h2 className="inline-flex items-center m-0 p-0 align-middle">
                                                    <Link to="/student/detail"
                                                          className="size-10 relative inline-block mr-2">
                                                        <img src="./images/avatars/avatar-05.jpg" alt=""
                                                             className="size-full object-cover"
                                                             style={{borderRadius: "50%"}}/>
                                                    </Link>
                                                    <Link to="/student/detail">John Chambers</Link>
                                                </h2>
                                            </td>
                                            <td className="py-4 px-3">9 B</td>
                                            <td className="py-4 px-3">8 Dec 2003</td>
                                            <td className="py-4 px-3">Minnie&nbsp;J&nbsp;Shaffer</td>
                                            <td className="py-4 px-3">701 753 3810</td>
                                            <td className="py-4 px-3">Bacardi Rd P.O. Box N-4880, New Providence</td>
                                            <td className="text-end py-4 px-3">
                                                <div className="flex justify-end">
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px] me-2">
                                                        <FaRegEye/>
                                                    </button>
                                                    <button
                                                        className="size-8 flex items-center justify-center bg-[#F7F7FA] rounded-[50px]">
                                                        <FaEdit/>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="flex justify-between items-center">
                                        <div>Showing 1 to 10 of 11 entries</div>
                                        <div className="flex items-center">
                                            <button
                                                className="py-1.5 px-3 text-[#666] border border-solid border-[#dee2e6] rounded-l hover:text-[#3d5ee1] hover:bg-[#e9ecef] hover:border-[#e9ecef]">Previous
                                            </button>
                                            <span>
                                                <button
                                                    className="py-1.5 px-3 border border-solid bg-[#3d5ee1] border-[#3d5ee1] text-white">1</button>
                                                <button
                                                    className="py-1.5 px-3 text-[#666] border border-solid border-[#dee2e6] hover:text-[#3d5ee1] hover:bg-[#e9ecef] hover:border-[#e9ecef]">2</button>
                                            </span>
                                            <button
                                                className="py-1.5 px-3 text-[#666] border border-solid border-[#dee2e6] rounded-r hover:text-[#3d5ee1] hover:bg-[#e9ecef] hover:border-[#e9ecef]">Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
