import React from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

const Button = () => {
    return (
        <div className="md:flex md:w-[160px] md:justify-between  hidden ">
            <FaSearch className=" w-4 h-10 mr-3" />
            <FaUser className=" w-4 h-10 mr-3" />
            <div className="flex-col items-center justify-center h-10 w-10 ">
                <span className="bg-orange-500 rounded-full px-2 py-1 text-[9px]">
                    1
                </span>
                <FaHeart className="-my-2 pl-2  w-6" />
            </div>
            <div className="flex-col items-center justify-center h-10 w-12 ">
                <span className="bg-orange-500 rounded-full px-2 py-1 text-[9px] ">
                    1
                </span>
                <FaShoppingCart className="-my-2 pl-2  w-6" />
            </div>
        </div>
    );
};

export default Button;
