import React from 'react';
import {NavLink} from "react-router-dom";
import {FiGrid} from "react-icons/fi";
import {FaBookReader, FaChalkboardTeacher, FaChevronRight, FaCog} from "react-icons/fa";
import {
    FaBook,
    FaBuilding, FaCalendarDay,
    FaClipboard,
    FaClipboardList,
    FaFileInvoiceDollar,
    FaGraduationCap,
    FaHollyBerry, FaNewspaper, FaTable
} from "react-icons/fa6";

const Sidebar = (props) => {
    return (
        <div className="bottom-0 left-0 mt-0 fixed top-[60px] w-[259px] bg-white">
            <div className="relative overflow-hidden w-full h-[calc(100vh-60px)]">
                <div className="overflow-auto w-full h-full min-h-full">
                    <div className="p-[15px]">
                        <ul className="text-[15px] list-none m-0 p-0 relative">
                            <li className="mb-[3px] relative text-[#9e9e9e] flex text-[14px] opacity-[1] py-[5px] px-[15px] whitespace-nowrap">
                                <span>Main Menu</span>
                            </li>
                            <li className="mb-[3px] relative">
                                <NavLink to="/"
                                         className="items-center flex justify-start py-[12px] px-[15px] relative text-[#6f6f6f] text-[16px] h-auto hover:bg-white hover:text-[#3D5EE1] hover:mx-[-15px] hover:pl-[30px] transition-all ease-in-out duration-200">
                                    <FiGrid
                                        className="inline-block text-[16px] leading-[24px] text-left align-middle w-[20px]"/>
                                    <span className="inline-block ml-[10px] whitespace-nowrap">Dashboard</span>
                                    <span
                                        className="inline-block ml-[10px] whitespace-nowrap absolute right-[15px] top-[14px] leading-[18px] text-[16px]">
                                            <FaChevronRight/>
                                        </span>
                                </NavLink>
                            </li>
                            <li className="mb-[3px] relative">
                                <NavLink to="/students"
                                         className="items-center flex justify-start py-[12px] px-[15px] relative text-[#6f6f6f] text-[16px] h-auto hover:bg-white hover:text-[#3D5EE1] hover:mx-[-15px] hover:pl-[30px] transition-all ease-in-out duration-200">
                                    <FaGraduationCap
                                        className="inline-block text-[16px] leading-[24px] text-left align-middle w-[20px]"/>
                                    <span className="inline-block ml-[10px] whitespace-nowrap">Students</span>
                                    <span
                                        className="inline-block ml-[10px] whitespace-nowrap absolute right-[15px] top-[14px] leading-[18px] text-[16px]">
                                            <FaChevronRight/>
                                        </span>
                                </NavLink>
                            </li>
                            <li className="mb-[3px] relative">
                                <NavLink to="/teachers"
                                         className="items-center flex justify-start py-[12px] px-[15px] relative text-[#6f6f6f] text-[16px] h-auto hover:bg-white hover:text-[#3D5EE1] hover:mx-[-15px] hover:pl-[30px] transition-all ease-in-out duration-200">
                                    <FaChalkboardTeacher
                                        className="inline-block text-[16px] leading-[24px] text-left align-middle w-[20px]"/>
                                    <span className="inline-block ml-[10px] whitespace-nowrap">Teachers</span>
                                    <span
                                        className="inline-block ml-[10px] whitespace-nowrap absolute right-[15px] top-[14px] leading-[18px] text-[16px]">
                                            <FaChevronRight/>
                                        </span>
                                </NavLink>
                            </li>
                            <li className="mb-[3px] relative">
                                <NavLink to="/departments"
                                         className="items-center flex justify-start py-[12px] px-[15px] relative text-[#6f6f6f] text-[16px] h-auto hover:bg-white hover:text-[#3D5EE1] hover:mx-[-15px] hover:pl-[30px] transition-all ease-in-out duration-200">
                                    <FaBuilding
                                        className="inline-block text-[16px] leading-[24px] text-left align-middle w-[20px]"/>
                                    <span className="inline-block ml-[10px] whitespace-nowrap">Departments</span>
                                    <span
                                        className="inline-block ml-[10px] whitespace-nowrap absolute right-[15px] top-[14px] leading-[18px] text-[16px]">
                                            <FaChevronRight/>
                                        </span>
                                </NavLink>
                            </li>
                            <li className="mb-[3px] relative">
                                <NavLink to="/subjects"
                                         className="items-center flex justify-start py-[12px] px-[15px] relative text-[#6f6f6f] text-[16px] h-auto hover:bg-white hover:text-[#3D5EE1] hover:mx-[-15px] hover:pl-[30px] transition-all ease-in-out duration-200">
                                    <FaBookReader
                                        className="inline-block text-[16px] leading-[24px] text-left align-middle w-[20px]"/>
                                    <span className="inline-block ml-[10px] whitespace-nowrap">Subject</span>
                                    <span
                                        className="inline-block ml-[10px] whitespace-nowrap absolute right-[15px] top-[14px] leading-[18px] text-[16px]">
                                            <FaChevronRight/>
                                        </span>
                                </NavLink>
                            </li>
                            <li className="mb-[3px] relative">
                                <NavLink to="/invoices"
                                         className="items-center flex justify-start py-[12px] px-[15px] relative text-[#6f6f6f] text-[16px] h-auto hover:bg-white hover:text-[#3D5EE1] hover:mx-[-15px] hover:pl-[30px] transition-all ease-in-out duration-200">
                                    <FaClipboard
                                        className="inline-block text-[16px] leading-[24px] text-left align-middle w-[20px]"/>
                                    <span className="inline-block ml-[10px] whitespace-nowrap">Invoices</span>
                                    <span
                                        className="inline-block ml-[10px] whitespace-nowrap absolute right-[15px] top-[14px] leading-[18px] text-[16px]">
                                            <FaChevronRight/>
                                        </span>
                                </NavLink>
                            </li>
                            <li className="mb-[3px] relative text-[#9e9e9e] flex text-[14px] opacity-[1] py-[5px] px-[15px] whitespace-nowrap">
                                <span>Management</span>
                            </li>
                            <li className="mb-[3px] relative">
                                <NavLink to="account"
                                         className="items-center flex justify-start py-[12px] px-[15px] relative text-[#6f6f6f] text-[16px] h-auto hover:bg-white hover:text-[#3D5EE1] hover:mx-[-15px] hover:pl-[30px] transition-all ease-in-out duration-200">
                                    <FaFileInvoiceDollar
                                        className="inline-block text-[16px] leading-[24px] text-left align-middle w-[20px]"/>
                                    <span className="inline-block ml-[10px] whitespace-nowrap">Accounts</span>
                                    <span
                                        className="inline-block ml-[10px] whitespace-nowrap absolute right-[15px] top-[14px] leading-[18px] text-[16px]">
                                            <FaChevronRight/>
                                        </span>
                                </NavLink>
                            </li>
                            <li className="mb-[3px] relative">
                                <NavLink to="holidies"
                                         className="items-center flex justify-start py-[12px] px-[15px] relative text-[#6f6f6f] text-[16px] h-auto hover:bg-white hover:text-[#3D5EE1] hover:mx-[-15px] hover:pl-[30px] transition-all ease-in-out duration-200">
                                    <FaHollyBerry
                                        className="inline-block text-[16px] leading-[24px] text-left align-middle w-[20px]"/>
                                    <span className="inline-block ml-[10px] whitespace-nowrap">Holiday</span>
                                    <span
                                        className="inline-block ml-[10px] whitespace-nowrap absolute right-[15px] top-[14px] leading-[18px] text-[16px]">
                                            <FaChevronRight/>
                                        </span>
                                </NavLink>
                            </li>
                            <li className="mb-[3px] relative">
                                <NavLink to="/lists"
                                         className="items-center flex justify-start py-[12px] px-[15px] relative text-[#6f6f6f] text-[16px] h-auto hover:bg-white hover:text-[#3D5EE1] hover:mx-[-15px] hover:pl-[30px] transition-all ease-in-out duration-200">
                                    <FaClipboardList
                                        className="inline-block text-[16px] leading-[24px] text-left align-middle w-[20px]"/>
                                    <span className="inline-block ml-[10px] whitespace-nowrap">Exam list</span>
                                    <span
                                        className="inline-block ml-[10px] whitespace-nowrap absolute right-[15px] top-[14px] leading-[18px] text-[16px]">
                                            <FaChevronRight/>
                                        </span>
                                </NavLink>
                            </li>
                            <li className="mb-[3px] relative">
                                <NavLink to="/events"
                                         className="items-center flex justify-start py-[12px] px-[15px] relative text-[#6f6f6f] text-[16px] h-auto hover:bg-white hover:text-[#3D5EE1] hover:mx-[-15px] hover:pl-[30px] transition-all ease-in-out duration-200">
                                    <FaCalendarDay
                                        className="inline-block text-[16px] leading-[24px] text-left align-middle w-[20px]"/>
                                    <span className="inline-block ml-[10px] whitespace-nowrap">Events</span>
                                    <span
                                        className="inline-block ml-[10px] whitespace-nowrap absolute right-[15px] top-[14px] leading-[18px] text-[16px]">
                                            <FaChevronRight/>
                                        </span>
                                </NavLink>
                            </li>
                            <li className="mb-[3px] relative">
                                <NavLink to="time-table"
                                         className="items-center flex justify-start py-[12px] px-[15px] relative text-[#6f6f6f] text-[16px] h-auto hover:bg-white hover:text-[#3D5EE1] hover:mx-[-15px] hover:pl-[30px] transition-all ease-in-out duration-200">
                                    <FaTable
                                        className="inline-block text-[16px] leading-[24px] text-left align-middle w-[20px]"/>
                                    <span className="inline-block ml-[10px] whitespace-nowrap">Time Table</span>
                                    <span
                                        className="inline-block ml-[10px] whitespace-nowrap absolute right-[15px] top-[14px] leading-[18px] text-[16px]">
                                            <FaChevronRight/>
                                        </span>
                                </NavLink>
                            </li>
                            <li className="mb-[3px] relative">
                                <NavLink to="/libraries"
                                         className="items-center flex justify-start py-[12px] px-[15px] relative text-[#6f6f6f] text-[16px] h-auto hover:bg-white hover:text-[#3D5EE1] hover:mx-[-15px] hover:pl-[30px] transition-all ease-in-out duration-200">
                                    <FaBook
                                        className="inline-block text-[16px] leading-[24px] text-left align-middle w-[20px]"/>
                                    <span className="inline-block ml-[10px] whitespace-nowrap">Library</span>
                                    <span
                                        className="inline-block ml-[10px] whitespace-nowrap absolute right-[15px] top-[14px] leading-[18px] text-[16px]">
                                            <FaChevronRight/>
                                        </span>
                                </NavLink>
                            </li>
                            <li className="mb-[3px] relative">
                                <NavLink to="/blogs"
                                         className="items-center flex justify-start py-[12px] px-[15px] relative text-[#6f6f6f] text-[16px] h-auto hover:bg-white hover:text-[#3D5EE1] hover:mx-[-15px] hover:pl-[30px] transition-all ease-in-out duration-200">
                                    <FaNewspaper
                                        className="inline-block text-[16px] leading-[24px] text-left align-middle w-[20px]"/>
                                    <span className="inline-block ml-[10px] whitespace-nowrap">Blogs</span>
                                    <span
                                        className="inline-block ml-[10px] whitespace-nowrap absolute right-[15px] top-[14px] leading-[18px] text-[16px]">
                                            <FaChevronRight/>
                                        </span>
                                </NavLink>
                            </li>
                            <li className="mb-[3px] relative">
                                <NavLink to="/settings"
                                         className="items-center flex justify-start py-[12px] px-[15px] relative text-[#6f6f6f] text-[16px] h-auto hover:bg-white hover:text-[#3D5EE1] hover:mx-[-15px] hover:pl-[30px] transition-all ease-in-out duration-200">
                                    <FaCog
                                        className="inline-block text-[16px] leading-[24px] text-left align-middle w-[20px]"/>
                                    <span className="inline-block ml-[10px] whitespace-nowrap">Settings</span>
                                    <span
                                        className="inline-block ml-[10px] whitespace-nowrap absolute right-[15px] top-[14px] leading-[18px] text-[16px]">
                                            <FaChevronRight/>
                                        </span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
