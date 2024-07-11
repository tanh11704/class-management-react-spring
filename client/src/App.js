import "./App.css";
import {NavLink, Route, Routes} from "react-router-dom";
import {
    FaBars, FaBook,
    FaBuilding, FaCalendarDay,
    FaClipboard, FaClipboardList,
    FaFileInvoiceDollar,
    FaGraduationCap,
    FaHollyBerry, FaNewspaper, FaTable,
} from "react-icons/fa6";
import {FaBookReader, FaChalkboardTeacher, FaChevronRight, FaCog, FaSearch} from "react-icons/fa";
import {FiGrid} from "react-icons/fi";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
    return (
        <div className="w-full h-screen min-h-screen bg-[#f7f7fa]">
            {/*Header*/}
            <div className="z-10 bg-white border-b border-solid border-[#f3f3f4] fixed left-0 right-0 top-0 h-[60px]">
                <div
                    className="float-left h-[60px] py-0 px-[20px] relative w-[259px] flex items-center bg-white shadow-[rgba(0,0,0,0.03)]">
                    <NavLink to="/" className="inline-block leading-[60px]">
                        <img src="./images/logo.png" alt="logo" className="max-h-[40px] w-auto"/>
                    </NavLink>
                </div>
                <div className="relative flex">
                    <button onClick={() => {}} className="items-center text-white inline-flex float-left text-[18px] h-[40px] w-[40px] bg-[#3D5EE1] justify-center py-0 px-[12px] rounded-[10px] absolute left-[-22px] top-[10px] shadow">
                        <FaBars/>
                    </button>
                </div>
                <div className="float-left ml-[55px]">
                    <form action="" className="mt-[10px] relative w-[300px]">
                        <input type="text" placeholder="Search here"
                               className="bg-[#F5F5F5] border border-solid border-[#D7D9DE] rounded-[8px] text-[#6c757d] h-[40px] py-[10px] pr-[15px] pl-[40px]"/>
                        <button className="bg-transparent border-transparent text-[rgba(17,17,17,0.32)] min-h-[40px] py-[7px] px-[15px] absolute left-0 top-0" type="submit">
                            <FaSearch/>
                        </button>
                    </form>
                </div>
                {/*User Menu*/}
            </div>
            {/*SideBar*/}
            <div className="bottom-0 left-0 mt-0 fixed top-[60px] w-[259px] bg-white">
                <div className="relative overflow-hidden w-full h-[calc(100vh-60px)]">
                    <div className="overflow-auto w-full h-full min-h-full">
                        <div className="p-[15px]">
                            <ul className="text-[15px] list-none m-0 p-0 relative">
                                <li className="mb-[3px] relative text-[#9e9e9e] flex text-[14px] opacity-[1] py-[5px] px-[15px] whitespace-nowrap">
                                    <span>Main Menu</span>
                                </li>
                                <li className="mb-[3px] relative">
                                    <NavLink to="javascript:void(0);"
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
                                    <NavLink to="javascript:void(0);"
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
                                    <NavLink to="javascript:void(0);"
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
                                    <NavLink to="javascript:void(0);"
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
                                    <NavLink to="javascript:void(0);"
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
                                    <NavLink to="javascript:void(0);"
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
                                    <NavLink to="javascript:void(0);"
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
                                    <NavLink to="javascript:void(0);"
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
                                    <NavLink to="javascript:void(0);"
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
                                    <NavLink to="javascript:void(0);"
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
                                    <NavLink to="javascript:void(0);"
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
                                    <NavLink to="javascript:void(0);"
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
                                    <NavLink to="javascript:void(0);"
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
                                    <NavLink to="javascript:void(0);"
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
