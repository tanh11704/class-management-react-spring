import React from "react";
import { FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="max-w-full grow-0 shrink-0 basis-full">
      <h1 className="text-[25px] font-bold mb-[5px] text-left">
        Reset Password
      </h1>
      <p className="text-[#AAAAAA] text-[16px] mb-7 text-left">
        Let Us Help You
      </p>
      <form action="">
        <div className="relative mb-5">
          <label
            htmlFor=""
            className="text-[13px] text-[#ABABAB] font-bold absolute top-[-10px] left-[10px] bg-white mb-0 py-0 px-[5px]"
          >
            Enter your registered email address
            <span className="text-red-500">*</span>
          </label>
          <input
            className="border rounded text-black text-[15px] h-[45px] w-full py-1.5 px-3 leading-1.5 font-normal bg-white"
            type="text"
          />
          <span className="absolute right-[17px] top-1/2 -translate-y-1/2">
            <FaEnvelope />
          </span>
        </div>
        <div className="relative mb-5">
          <button className="w-full bg-[#3d5ee1] border-solid py-1.5 text-white rounded-[6px] hover:bg-[#18aefa] transition-all duration-400">
            Reset My Password
          </button>
        </div>
        <div className="relative mb-5">
          <button className="w-full bg-[#18aefa] border-solid py-1.5 text-white rounded-[6px] hover:bg-[#3d5ee1] transition-all duration-400">
            <Link to="/auth/login">Login</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
