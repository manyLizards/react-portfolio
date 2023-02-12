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
        <main>
            <Header />
            <Content />
            <Projects />
            <Footer />
        </main>
    );
}