import React from "react";

//import sections
import Header from "./components/Header";
import Content from "./components/Content";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
//import tailwind
import "tailwindcss/tailwind.css";

export default function App() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Header />
            <Navbar />
            <Content />
            <Projects />
            <Footer />
        </main>
    );
}