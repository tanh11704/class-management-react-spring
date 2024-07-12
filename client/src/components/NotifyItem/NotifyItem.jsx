import React from 'react';

const NotifyItem = (props) => {
    return (
        <li className="mt-0 border-b border-solid border-[#f5f5f5]">
            <button className="block py-[10px] px-[15px] rounded-[12px]">
                <div className="flex mt-0">
                    <span className="mr-[10px] w-10 h-10 relative inline-block">
                        <img src={props.image} alt="" className="w-full h-full object-cover rounded-[50%]"/>
                    </span>
                    <div className="text-start">
                        <p className="text-[#989c9e] mb-0">
                            <p className="noti-details">
                                <span className="text-[#333]">{props.user}</span>
                                <span> {props.action} </span>
                                <span className="text-[#333]">{props.content}</span>
                            </p>
                        </p>
                        <p className="m-0">
                            <span className="text-[12px] leading-[1.35] text-[#bdbdbd]">{props.time}</span>
                        </p>
                    </div>
                </div>
            </button>
        </li>
    );
};

export default NotifyItem;
