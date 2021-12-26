import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/index";
import About from "./pages/About";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Discuss from "./pages/Discuss";
import Blog from "./pages/Blog";

export default function App() {
    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route exact="+true" path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/courses" element={<Courses />}></Route>
                    <Route path="/discuss" element={<Discuss />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                </Routes>
            </main>
        </Router>
    );
};


