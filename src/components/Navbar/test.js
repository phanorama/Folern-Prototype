import { Link, NavLink } from "react-router-dom";

export default function Navbar({ fixed }) {
    let [navscroll, setNavscroll] = React.useState(false);

    let handleScroll = () => {
        if (window.scrollY >= 15) {
            setNavscroll(true);
        } else {
            setNavscroll(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between bg-white md:bg-gray-900 py-2 px-3 md:px-14 mb-3">
                <div className="w-full flex items-center justify-between mx-auto">
                    <div className="w-full lg:w-3/5">
                        <div className="text-black md:text-white mr-4 py-2 text-2xl flex">
                            <img src={Folern} width="40px" height="40px" alt="logo-folern" />&nbsp;Folern
                        </div>
                    </div>
                    <div className="w-full lg:w-2/6 justify-between text-lg hidden md:flex text-white font-light">
                        <NavLink exact="true" to="/">
                            Home
                        </NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/courses">Courses</NavLink>
                        <NavLink to="/discuss">Discuss</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                    </div>
                </div>
            </nav>

            {/* mobile nav */}
            <nav className="fixed flex md:hidden mx-auto justify-between bottom-0 left-0 right-0 w-full z-10 bg-gray-900 text-white">
                <div className="nav-link w-full flex justify-between text-lg ">
                    <NavLink exact="true" to="/" className="flex flex-col items-center w-2/6  px-3 py-3 text-xs">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            ></path>
                        </svg>
                        home
                    </NavLink>

                    <NavLink to="/about" className="flex flex-col w-2/6   items-center px-3 py-3 text-xs">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        About
                    </NavLink>

                    <NavLink to="/courses" className="flex flex-col w-2/6   items-center  px-3 py-3 text-xs ">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            ></path>
                        </svg>
                        Courses
                    </NavLink>

                    <NavLink to="/discuss" className="flex w-2/6  flex-col items-center  px-3 py-3 text-xs">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                            ></path>
                        </svg>
                        Discuss
                    </NavLink>

                    <NavLink to="/blog" className="flex flex-col w-2/6   items-center px-3 py-3 text-xs">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Blog
                    </NavLink>
                </div>
            </nav>
        </>
    );
}
