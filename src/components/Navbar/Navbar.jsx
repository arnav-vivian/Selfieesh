import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import NavLinks from "./NavLinks";
import { FaBell, FaListAlt, FaXbox } from "react-icons/fa";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className="bg-gray-100">
                <div className="bg-gray-100 text-black  items-center md:justify-between py-3 px-7 drop-shadow-sm hidden md:flex">
                    <div className="flex items-center justify-start px-3 text-[10px] ">
                        <p>heloo@gmail.com</p>
                        <p className=" px-1">|</p>
                        <p>1234567</p>
                        <p className=" px-1">|</p>
                        <p>Mon-Fri&08H30-17h50</p>
                    </div>
                    <div className="flex flex-row items-center justify-end text-[10px]">
                        <div>TRACK MY ORDER</div>
                        <div className=" px-3">|</div>
                        <div>TERM OF USE</div>
                        <div className=" px-3">|</div>

                        <div>OUR LOCATION</div>
                    </div>
                </div>
                <div>
                </div>
                <div className="md:flex hidden items-center font-medium justify-around">
                    <img src="" alt="logo" className="md:cursor-pointer h-9 hidden md:inline-block" />
                    <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
                        <li>
                            <Link to="/" className="py-7 px-3 inline-block">
                                Home
                            </Link>
                        </li>
                        <NavLinks />
                    </ul>
                    <div className="md:block hidden">
                        <Button />
                    </div>
                    {/* Mobile nav */}
                    <ul
                        className={`
                        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 
                        duration-500 ${open ? "left-0" : "left-[-100%]"}
                            `}
                    >
                        <li>
                            <Link to="/" className="py-7 px-3 inline-block">
                                Home
                            </Link>
                        </li>
                        <NavLinks />
                        <div className="py-5">
                            <Button />
                        </div>
                    </ul>
                </div>
            </nav>
            <div>
                <div className="z-50 md:p-5 p-1 w-[100vw] flex md:hidden justify-between ">

                    <div className="text-xl md:hidden flex item-center px-21" onClick={() => setOpen(!open)}>
                        {open ? <FaXbox /> : <FaListAlt />}


                    </div>
                    <h6 className="md:hidden">SELFIEESH</h6>
                    <FaBell className="md:hidden bg-white rounded-sm  mx-4" />
                </div>
                <div>
                    <ul
                        className={`
                        md:hidden bg-gray-100 fixed w-full top-8
                         overflow-y-auto bottom-0 py-24 pl-4
                        duration-500 ${open ? "left-0" : "left-[-100%]"}
                            `}
                    >
                        <li>
                            <Link to="/" className="py-7 px-3 inline-block">
                                Home
                            </Link>
                        </li>
                        <NavLinks />
                        <div className="py-5">
                            <Button />
                        </div>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default Navbar;