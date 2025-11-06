"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, animate } from "framer-motion";

import Header from "./components/Header.js";
import Projects from "./components/Projects.js";

export default function Home() {
    const [status, setStatus] = useState("");

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Henry Rodas",
        jobTitle: "Front-End Developer",
        url: "https://henryrodas.com",
        sameAs: [
            "https://www.linkedin.com/in/henryrodas",
            "https://github.com/henryrodas",
            "https://x.com/<your-handle>",
        ],
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("Sending...");
        const form = e.target;

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            setStatus("Please fill out all fields!");
            return;
        }
        const formData = new FormData(e.target);
        console.log(formData);
        const response = await fetch("https://formspree.io/f/mgvnrogb", {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
        });

        if (response.ok) {
            setStatus("Message Sent!");
        } else {
            setStatus("Something went wrong.");
        }

        e.target.reset();
    };

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector("nav");

            if (window.scrollY > 20) {
                nav.classList.add("bg-white");
            } else {
                nav.classList.remove("bg-white");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return window.removeEventListener("scroll", handleScroll);
    }, []);

    const getScroll = () => console.log(window.scrollY);

    const projectRef = useRef(null);

    const handleScroll = () => {
        const targetY =
            projectRef.current.getBoundingClientRect().top + window.scrollY;
        const startY = window.scrollY;

        animate(startY, targetY, {
            duration: 2,
            ease: "easeInOut",
            onUpdate: (value) => window.scrollTo(0, value),
        });
    };

    return (
        <>  
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <nav className="fixed w-full h-15 transition duration-700 ease-in-out "></nav>

            <Header handleScroll={handleScroll} />

            <Projects projectRef={projectRef} />

            <footer className="w-full h-[50vh] bg-gray-800 text-white font-mono flex justify-center gap-50">
                <div className="w-[600px]">
                    <h2 className=" flex justify-center text-4xl mb-15">
                        {" "}
                        Contact Me{" "}
                    </h2>
                    <h3 className="text-2xl mb-5">
                        {" "}
                        If you would like to ask me any questions or set up a
                        meeting with me, I would be glad to!
                    </h3>
                    <h3 className="text-2xl">
                        Enter your information in the form or send an email to
                        henryrodas2003@gmail.com
                    </h3>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="w-[20%] h-[400px] flex flex-col justify-center items-center gap-5 border-1 border-white bg-gray-500 rounded-4xl"
                    action="https://formspree.io/f/mgvnrogb"
                    method="POST"
                >
                    <input
                        className="border-1 text-white rounded-2xl h-10 pl-2"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                    />
                    <input
                        className="border-1 rounded-2xl h-10 pl-2"
                        type="email"
                        name="email"
                        placeholder="Email"
                    />

                    <textarea
                        className="border-1 rounded-2xl h-30 pl-2 pt-1"
                        name="message"
                        placeholder="Enter your message here"
                    ></textarea>

                    <button
                        className="border-1 rounded-4xl h-10 w-20 cursor-pointer focus:bg-gray-700"
                        type="submit"
                    >
                        Send
                    </button>

                    <h2> {status} </h2>
                </form>
            </footer>
        </>
    );
}
