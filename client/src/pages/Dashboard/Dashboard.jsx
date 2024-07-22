import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="mb-7">
        <div className="flex">
          <div className="w-full flex items-center">
            <h3 className="text-[22px] font-medium text-[#2C323F] mb-[5px]">
              Blank Page
            </h3>
            <ul className="bg-transparent text-[#6c757d] text-base font-medium mb-0 p-0 ml-auto flex list-none rounded">
              <li className="text-black">
                <NavLink to="index.html">Dashboard</NavLink>
              </li>
              <li className="pl-2 before:content-['/'] before:pr-2 before:float-left before:text-[#565A5D]">
                Blank Page
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">Contents here</div>
      </div>
    </div>
  );
};

export default Dashboard;
