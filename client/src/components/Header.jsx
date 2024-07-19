import React from 'react';
import {NavLink} from "react-router-dom";
import {FaBars} from "react-icons/fa6";
import {FaAngleDown, FaSearch} from "react-icons/fa";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {IoIosNotificationsOutline} from "react-icons/io";
import {MdNotificationsNone} from "react-icons/md";
import NotifyItem from "./NotifyItem/NotifyItem";

const Header = (props) => {
    const notifies = [
        {
            avatar: "./images/avatar.jpg",
            user: "Carlson Tech",
            action: "has approved",
            content: "your estimate",
            time: "4 mins ago"
        },
        {
            avatar: "./images/avatar.jpg",
            user: "International Software Inc",
            action: "has sent you a invoice in the amount of",
            content: "$218",
            time: "6 mins ago"
        },
        {
            avatar: "./images/avatar.jpg",
            user: "John Hendry",
            action: "sent a cancellation request",
            content: "Apple iPhone XR",
            time: "8 mins ago"
        },
        {
            avatar: "./images/avatar.jpg",
            user: "Mercury Software Inc",
            action: "added a new product",
            content: "Apple MacBook Pro",
            time: "12 mins ago"
        }
    ]

    return (
        <div className="z-10 bg-white border-b border-solid border-[#f3f3f4] fixed left-0 right-0 top-0 h-[60px]">
            <div
                className="float-left h-[60px] py-0 px-[20px] relative w-[259px] flex items-center bg-white shadow-[rgba(0,0,0,0.03)]">
                <NavLink to="/" className="inline-block leading-[60px]">
                    <img src="./images/logo.png" alt="logo" className="max-h-[40px] w-auto"/>
                </NavLink>
            </div>
            <div className="relative flex">
                <button
                        className="items-center text-white inline-flex float-left text-[18px] h-[40px] w-[40px] bg-[#3D5EE1] justify-center py-0 px-[12px] rounded-[10px] absolute left-[-22px] top-[10px] shadow">
                    <FaBars/>
                </button>
            </div>
            <div className="float-left ml-[55px]">
                <form action="" className="mt-[10px] relative w-[300px]">
                    <input type="text" placeholder="Search here"
                           className="bg-[#F5F5F5] border border-solid border-[#D7D9DE] rounded-[8px] text-[#6c757d] h-[40px] py-[10px] pr-[15px] pl-[40px] w-full outline-0"/>
                    <button
                        className="bg-transparent border-transparent text-[rgba(17,17,17,0.32)] min-h-[40px] py-[7px] px-[15px] absolute left-0 top-0"
                        type="submit">
                        <FaSearch/>
                    </button>
                </form>
            </div>
            <ul className="float-right m-0 relative z-9 pr-[15px] items-center flex list-none h-full">
                <li className="me-2">
                    <Menu>
                        <MenuButton className="w-[40px] h-[40px] bg-[#F7F7FA] rounded-[50px] p-0 flex items-center text-[#a0a0a0] text-[14px] leading-[58px] justify-center">
                            <img src="./images/header-icon-01.svg" alt="header icon" className="align-middle"/>
                        </MenuButton>
                        <MenuItems anchor="bottom end" className="bg-white w-[200px] border border-solid border-white-100 z-10">
                            <MenuItem>
                                <div className="border-t border-solid border-[#e3e3e3]">
                                    <button
                                        className="flex items-center py-[10px] px-[15px] font-normal w-full">
                                        <img src="./images/lr.png" alt="usa"
                                             className="w-6 h-6 inline-block align-bottom me-2"/>
                                        English
                                    </button>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className="border-t border-solid border-[#e3e3e3]">
                                    <button
                                        className="flex items-center py-[10px] px-[15px] font-normal w-full">
                                        <img src="./images/france-flag.png" alt="usa"
                                             className="w-6 h-6 inline-block align-bottom me-2"/>
                                        France
                                    </button>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className="border-t border-solid border-[#e3e3e3] w-full">
                                    <button
                                        className="flex items-center py-[10px] px-[15px] font-normal">
                                        <img src="./images/vietnam-flag.png" alt="usa"
                                             className="w-6 h-6 inline-block align-bottom me-2"/>
                                        Viet Nam
                                    </button>
                                </div>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </li>
                <li className="me-2">
                    <Menu>
                        <MenuButton className="w-[40px] h-[40px] bg-[#F7F7FA] rounded-[50px] p-0 flex items-center text-[#a0a0a0] text-[14px] leading-[58px] justify-center">
                            <IoIosNotificationsOutline className="align-middle text-[20px] text-black font-normal"/>
                        </MenuButton>
                        <MenuItems anchor="bottom" className="m-0 p-0 min-w-[200px] text-[14px] border border-solid border-[#0000001a] rounded-[3px] shadow-inherit bg-white z-10">
                            <MenuItem>
                                <div
                                    className="text-[14px] h-[40px] px-[15px] border-b border-solid border-[#eee] text-center font-normal">
                                    <span className="text-[#333] flex items-center h-full float-left text-[14px]">Notifications</span>
                                    <button className="text-[#18aefa] float-right uppercase flex items-center h-full"> Clear All </button>
                                </div>
                            </MenuItem>
                            <div className="h-[290px] w-[350px] overflow-y-auto relative">
                                <ul className="list-none p-0 m-0">
                                    {notifies.map((notify, index) => (
                                        <MenuItem>
                                            <NotifyItem
                                                key={index}
                                                image={notify.avatar}
                                                user={notify.user}
                                                action={notify.action}
                                                content={notify.content}
                                                time={notify.time}
                                            />
                                        </MenuItem>
                                    ))}
                                </ul>
                            </div>
                            <MenuItem>
                                <div
                                    className="text-[14px] leading-[40px] h-[40px] px-[15px] border-t border-solid border-[#eee] text-center font-normal">
                                    <button>View all Notifications</button>
                                </div>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </li>
                <li className="me-2">
                    <button className="w-[40px] h-[40px] bg-[#F7F7FA] rounded-[50px] p-0 flex items-center justify-center text-[#a0a0a0] text-[14px] leading-[58px]">
                        <img src="./images/header-icon-04.svg" alt="header-icon-04" className="align-middle"/>
                    </button>
                </li>
                <li className="relative">
                    <Menu>
                        <MenuButton className="text-[#a0a0a0] text-[14px] leading-[58px] py-0 px-[15px] h-[60px] flex items-center whitespace-nowrap">
                            <div className="mr-[3px] relative inline-flex items-center h-[60px]">
                                <img src="./images/avatar.jpg" alt="avatar" className="w-10 h-10 border-1 border-solid border-[#E6E6E6] p-[2px] rounded-[50%] align-middle"/>
                                <div className="my-0 mx-[8px] h-full">
                                    <span className="text-[14px] text-[#1d1d1d] mb-[3px]">Ryan Taylor</span>
                                    {/*<p className="leading-[1.2] text-[12px] text-[#3D5EE1] mb-0">Administrator</p>*/}
                                </div>
                            </div>
                            <div className="h-[8px] w-[8px] text-[#7E84A3] -translate-y-1">
                                <FaAngleDown/>
                            </div>
                        </MenuButton>
                        <MenuItems anchor="bottom" className="ml-[-15px] m-0 p-0 min-w-[200px] text-[14px] border border-solid border-[#0000001a] rounded-[3px] shadow-inherit bg-white z-10">
                            <MenuItem>
                                <div className="bg-[#f9f9f9] flex py-[10px] px-[15px]">
                                    <div className="relative inline-block w-10 h-10">
                                        <img src="./images/avatar.jpg" alt="" className="w-full h-full object-cover rounded-[50%]"/>
                                    </div>
                                    <div className="ml-[10px]">
                                        <span className="text-[14px] text-base font-bold text-[#1d1d1d] mb-[2px]">Ryan Taylor</span>
                                        <p className="leading-[1.2] text-[12px] text-[#757575] mb-0">Administrator</p>
                                    </div>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <NavLink to="/" className="flex items-center py-[10px] px-[15px] border-t border-solid border-[#e3e3e3] hover:text-[#3d5ee1] hover:bg-[#f9f9f9]">My Profile</NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink to="/" className="flex items-center py-[10px] px-[15px] border-t border-solid border-[#e3e3e3] hover:text-[#3d5ee1] hover:bg-[#f9f9f9]">Inbox</NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink to="/" className="flex items-center py-[10px] px-[15px] border-t border-solid border-[#e3e3e3] hover:text-[#3d5ee1] hover:bg-[#f9f9f9]">Logout</NavLink>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </li>
            </ul>
        </div>
    );
};

export default Header;
