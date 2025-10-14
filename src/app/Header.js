"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import arrow from "../img/arrow.svg";

import gradPhoto from "../img/gradPhoto.webp";
import github from "../img/github-mark.svg";
import linkedIn from "../img/linkedIn.svg";
import mail from "../img/mail.svg";
import html from "../img/html.svg";
import css from "../img/css.svg";
import js from "../img/js.svg";

import react from "../img/react.svg";
import supabase from "../img/supabase.svg";
import tailwind from "../img/tailwind.svg";
import nextLogo from "../img/nextLogo.svg";
import motionLogo from "../img/motionLogo.svg";

import { useMediaQuery } from "./hooks/useMediaQuery";

export default function Header({ handleScroll }) {

    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <>


            <header className="w-full h-[1800px] bg-gray-800 flex flex-col justify-start  md:justify-center md:h-[100vh] ">
                <motion.div
                    className="border-1 h-1 w-1 bg-white"
                    initial={{
                        width: "1px",
                        y: "0px",
                    }}
                    animate={{
                        width: "100%",
                    }}
                    transition={{
                        width: { duration: 1, ease: "easeInOut" },
                    }}
                ></motion.div>

                <motion.div
                    className="w-full h-[60px] text-center flex  flex-col items-center overflow-hidden"
                    initial={{
                        height: "50px",
                        padding: "0px",
                    }}
                    animate={{
                        height: isMobile ? "200%" : "85%",
                        padding: "50px",
                    }}
                    transition={{
                        default: {
                            delay: 2.25,
                            duration: 2,
                            ease: "easeInOut",
                        },
                    }}
                >
                    <motion.div
                        className="w-full h-[70px] text-white font-mono text-xl text-center flex justify-center items-center md:text-3xl"
                        layout
                        initial={{
                            y: "40px",
                            opacity: 0,
                            x: 0,
                        }}
                        animate={{
                            y: "5px",
                            opacity: "100%",
                            x: isMobile ? 0 : "-35vw",
                        }}
                        transition={{
                            y: { delay: 0.1, duration: 1, ease: "easeInOut" },
                            opacity: {
                                delay: 0.1,
                                duration: 1,
                                ease: "easeInOut",
                            },
                            x: { delay: 2.25, duration: 2, ease: "easeInOut" },
                        }}
                    >
                        <p className="">Hello, I'm Henry Rodas </p>
                        <motion.div
                            className="flex "
                            initial={{
                                opacity: 0,
                                display: "none",
                                x: "100vw",
                            }}
                            animate={{
                                opacity: 1,
                                display: "flex",
                                x: 0,
                            }}
                            transition={{
                                opacity: {
                                    delay: 4.5,
                                    duration: 1,
                                    ease: "easeInOut",
                                },
                                x: { delay: 4, duration: 2, type: "spring" },
                            }}
                        ></motion.div>
                    </motion.div>

                    <motion.div
                        className="w-full h-auto flex flex-col md:flex-row"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            opacity: {
                                delay: 2.75,
                                duration: 2.5,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        <Image
                            alt="Image of Henry Rodas in university graduation clothing"
                            className="border-2 mt-5 w-[600px] h-auto rounded-lg lg:ml-50  "
                            src={gradPhoto}
                        />

                        <motion.div
                            className=" flex flex-col items-center gap-30 text-white font-mono text-2xl pt-25 lg: w-[auto] "
                            initial={{
                                x: "1000px",
                            }}
                            animate={{
                                x: 0,
                            }}
                            transition={{
                                x: { delay: 2, duration: 2, ease: "easeInOut" },
                            }}
                        >
                            <div className="flex gap-15 text-black">
                                <Image
                                    alt="Github logo"
                                    className="w-15 h-15 cursor-pointer"
                                    src={github}
                                />
                                <Image
                                    alt="LinkedIn logo"
                                    className="w-15 h-15 cursor-pointer"
                                    src={linkedIn}
                                />
                                <Image
                                    alt="mail logo"
                                    className="w-auto h-20 flex items-start -translate-y-2 cursor-pointer"
                                    src={mail}
                                />
                            </div>
                            <h1 className=" w-auto md:w-[55%]">
                                {" "}
                                I am a cracked front-end developer who loves to
                                make things look nice and make things work.
                            </h1>

                            <div className="flex gap-5 justify-center pl-5 text-black w-full md:gap-15 md:pl-0">
                                <Image
                                    alt="html logo"
                                    className="w-auto h-20 flex items-start -translate-y-2 cursor-pointer"
                                    src={html}
                                />
                                <Image
                                    alt="css logo"
                                    className="w-auto h-20 flex items-start -translate-y-2 cursor-pointer"
                                    src={css}
                                />
                                <Image
                                    alt="js logo"
                                    className="w-auto h-20 flex items-start -translate-y-2 cursor-pointer -translate-x-2 md:translate-x-0"
                                    src={js}
                                />
                            </div>

                            <div className="flex flex-col gap-15 text-black md:flex-row">
                                <div className="flex gap-15 justify-center">
                                    <Image
                                    alt="react logo"
                                    className="w-15 h-15 flex items-start -translate-y-2 cursor-pointer"
                                    src={react}
                                />
                                    <Image
                                        alt="next logo"
                                        className="w-15 h-15 flex items-start -translate-y-2 cursor-pointer"
                                        src={nextLogo}
                                    />
                                </div>

                                <div className="flex gap-15 justify-center">
                                    <Image
                                    alt="tailwind logo"
                                    className="w-15 h-15 flex items-start -translate-y-2 cursor-pointer"
                                    src={tailwind}
                                />
                                    <Image
                                        alt=" motion"
                                        className="w-15 h-15 flex items-start -translate-y-2 cursor-pointer"
                                        src={motionLogo}
                                    />
                                    <Image
                                        alt="supabase logo"
                                        className="w-15 h-15 flex items-start -translate-y-2 cursor-pointer"
                                        src={supabase}
                                    />

                                </div>
                                
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <div className="flex justify-end">
                    <motion.div
                        className="border-1 h-1 w-1 bg-white "
                        initial={{
                            width: "0px",
                            x: "100%",
                        }}
                        animate={{
                            width: "100%",
                            x: "0%",
                        }}
                        transition={{
                            width: { duration: 1, ease: "easeInOut" },
                            y: {
                                delay: 2.25,
                                duration: 3,
                                ease: "easeInOut",
                                times: [0, 2, 3],
                            },
                        }}
                    ></motion.div>
                </div>

                <motion.div
                    className="w-full h-auto flex justify-center items-center"
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        opacity: { delay: 4, duration: 1, ease: "easeInOut" },
                    }}
                >
                    <Image
                        onClick={handleScroll}
                        alt="Arrow to press to scroll down"
                        className="w-25 h-auto animate-bounce translate-y-10 cursor-pointer"
                        src={arrow}
                    />
                </motion.div>
            </header>
        </>
    );
}
