import React from "react";
import { NavLink } from "react-router-dom";
import Folern from "./Folern.svg";
import "./style.css";

export default function Navbar() {
    return (
        <>
            <nav className="h-full z-10 sticky top-0 w-full border-box transition-all duration-500 linear py-3 px-6 md:px-14 bg-gray-900">
                <div className="navbar-1-4">
                    <div className="mx-auto flex flex-wrap flex-row items-center justify-between">
                        <NavLink to="/" exact="true"  className="text-white mr-4 py-2 text-2xl flex">
                            <img src={Folern} width="40px" height="40px" alt="logo-folern" />
                            &nbsp;Folern
                        </NavLink>
                        <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
                            <svg className="w-6 h-6" fill="none" stroke="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                        <input className="hidden" type="checkbox" id="menu-toggle" />
                        <div className="hidden lg:flex lg:items-center lg:w-auto w-full lg:ml-12 lg:mr-auto flex-wrap items-center text-base justify-center" id="menu">
                            <nav className="lg:space-x-12 space-x-0 lg:flex items-center justify-between text-base pt-8 lg:pt-0 lg:space-y-0 space-y-6">
                                <NavLink to="/about" className="block text-white nav-link">
                                    About
                                </NavLink>
                                <NavLink to="/courses" className="block text-white nav-link">
                                    Courses
                                </NavLink>
                                <NavLink to="/discuss" className="block text-white nav-link">
                                    Discuss
                                </NavLink>
                                <NavLink to="/blog" className="block text-white nav-link">
                                    Blog
                                </NavLink>
                            </nav>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                            <button className="btn-fill text-white items-center border-0 py-3 px-8 focus:outline-none rounded-2xl font-medium text-base mt-6 lg:mt-0">Register</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
