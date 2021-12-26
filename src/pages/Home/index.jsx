import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

// lemmay Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";
// install Swiper modules
SwiperCore.use([Navigation]);

// render
export default function Home() {
    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["HTML", "CSS", "Javascript", "Python", "Java", "SQL", "Solidity"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 60,
            backSpeed: 60,
            backDelay: 100,
            loop: true,
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <section className="bg-black">
                <div className="w-full max-h-xl bg-customize text-center px-3 md:px-14">
                    <div className="text-white py-28 text-center">
                        <h1 className="animation-pulse w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-none font-extrabold tracking-tight">
                            Jelajahi pengetahuan baru tentang bahasa pemrograman dengan gratis
                        </h1>
                        <h1 className="animation-pulse w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-none font-extrabold tracking-tight">
                            <span ref={el}></span>
                        </h1>
                        <p className=" my-6 text-md sm:text-lg md:text-xl lg:text-3xl text-gray-300 text-center max-w-4xl mx-auto">
                            Dirancang untuk pemula yang baru belajar dari awal dengan bantuan materi, bantuan komunitas dan mentor kami
                        </p>
                        <div className="mt-8 mx-auto inline sm:flex justify-center">
                            <NavLink to="/about" className="mr-0 sm:mr-4 bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto">
                                Get started
                            </NavLink>
                            <button className="mt-2 sm:mt-0 ml-0 sm:ml-4 bg-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto">
                                Testimoni
                            </button>
                        </div>
                    </div>
                </div>
                <Swiper navigation={true} className="mySwiper mt-24 w-full sm:w-2/3 bg-slate-900 rounded-xl">
                    <SwiperSlide className="text-center m-auto">
                        <div className="cursor-default relative my-6 mx-12 w-16 h-24 inline-block badge primary-element">
                            <div className="w-16 h-16 absolute bg-white rounded-full z-10 inset-0 m-auto">
                                <i className="text-gray-900 text-3xl mt-2 fab fa-html5"></i>
                            </div>
                            <div className="absolute rounded px-3 z-20 left-1/2 bottom-3 bg-gray-500 -ml-7 text-white text-uppercase">html</div>
                        </div>
                        <div className="cursor-default relative my-6 mx-12 w-16 h-24 inline-block badge primary-element">
                            <div className="w-16 h-16 absolute bg-white rounded-full z-10 inset-0 m-auto">
                                <i className="text-gray-900 text-3xl mt-2 fab fa-html5"></i>
                            </div>
                            <div className="absolute rounded px-3 z-20 left-1/2 bottom-3 bg-gray-500 -ml-7 text-white text-uppercase">html</div>
                        </div>
                        <div className="cursor-default relative my-6 mx-12 w-16 h-24 inline-block badge primary-element">
                            <div className="w-16 h-16 absolute bg-white rounded-full z-10 inset-0 m-auto">
                                <i className="text-gray-900 text-3xl mt-2 fab fa-html5"></i>
                            </div>
                            <div className="absolute rounded px-3 z-20 left-1/2 bottom-3 bg-gray-500 -ml-7 text-white text-uppercase">html</div>
                        </div>
                        <div className="cursor-default relative my-6 mx-12 w-16 h-24 inline-block badge primary-element">
                            <div className="w-16 h-16 absolute bg-white rounded-full z-10 inset-0 m-auto">
                                <i className="text-gray-900 text-3xl mt-2 fab fa-html5"></i>
                            </div>
                            <div className="absolute rounded px-3 z-20 left-1/2 bottom-3 bg-gray-500 -ml-7 text-white text-uppercase">html</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="text-center m-auto">
                        <div className="cursor-default relative my-6 mx-12 w-16 h-24 inline-block badge primary-element">
                            <div className="w-16 h-16 absolute bg-white rounded-full z-10 inset-0 m-auto">
                                <i className="text-gray-900 text-3xl mt-2 fab fa-html5"></i>
                            </div>
                            <div className="absolute rounded px-3 z-20 left-1/2 bottom-3 bg-gray-500 -ml-7 text-white text-uppercase">html</div>
                        </div>
                        <div className="cursor-default relative my-6 mx-12 w-16 h-24 inline-block badge primary-element">
                            <div className="w-16 h-16 absolute bg-white rounded-full z-10 inset-0 m-auto">
                                <i className="text-gray-900 text-3xl mt-2 fab fa-html5"></i>
                            </div>
                            <div className="absolute rounded px-3 z-20 left-1/2 bottom-3 bg-gray-500 -ml-7 text-white text-uppercase">html</div>
                        </div>
                        <div className="cursor-default relative my-6 mx-12 w-16 h-24 inline-block badge primary-element">
                            <div className="w-16 h-16 absolute bg-white rounded-full z-10 inset-0 m-auto">
                                <i className="text-gray-900 text-3xl mt-2 fab fa-html5"></i>
                            </div>
                            <div className="absolute rounded px-3 z-20 left-1/2 bottom-3 bg-gray-500 -ml-7 text-white text-uppercase">html</div>
                        </div>
                        <div className="cursor-default relative my-6 mx-12 w-16 h-24 inline-block badge primary-element">
                            <div className="w-16 h-16 absolute bg-white rounded-full z-10 inset-0 m-auto">
                                <i className="text-gray-900 text-3xl mt-2 fab fa-html5"></i>
                            </div>
                            <div className="absolute rounded px-3 z-20 left-1/2 bottom-3 bg-gray-500 -ml-7 text-white text-uppercase">html</div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* <div className="px-3 md:px-14 text-center">
                    <div className="w-11/12 max-w-4xl m-auto text-center">
                        <div className="cursor-default relative my-6 mx-12 w-16 h-24 inline-block badge primary-element">
                            <div className="w-16 h-16 absolute bg-white rounded-full z-10 inset-0 m-auto">
                                <i className="text-gray-900 text-3xl mt-2 fab fa-html5"></i>
                            </div>
                            <div className="absolute rounded py-1.5 px-3 z-20 left-1/2 bottom-3 bg-gray-500 -ml-13 text-white text-uppercase">html</div>
                        </div>
                    </div>
                </div> */}
            </section>
        </>
    );
}
