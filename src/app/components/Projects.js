"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import portfolioPic from "../img/portfolioPic.png";
import vet from "../img/vet.png";

import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Projects({ projectRef }) {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <>
            <main
                ref={projectRef}
                className="w-full h-auto relative overflow-hidden flex flex-col gap-15 pb-50 items-center sm:items-start bg-gray-800 font-mono 3xl:gap-[32px] "
            >


                <motion.div
                    className="w-full h-auto gap-10 flex flex-col justify-center items-center  3xl:mt-50 md:flex-row md:pl-20 md:gap-20 "
                    initial={{
                        opacity: 0,
                        x: "-300px",
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        default: { duration: 1.5, ease: "easeInOut" },
                    }}
                    viewport={{
                        amount: 0.3,
                        once: true,
                    }}
                >
                    {isMobile && (
                        <h3 className="text-md text-white md:text-4xl">
                            {" "}
                            Personal Portfolio Website{" "}
                        </h3>
                    )}
               
                        <Image
                        alt="Image of this portfolio website"
                        src={portfolioPic}
                        className="w-auto h-[600px] border-2 border-white md:h-[400px] 3xl:h-[600px]  "
                        />
              
                    

                    <div className=" w-[90%] text-center h-auto mb-20 text-white md:w-[600px] md:h-[400px] 3xl:h-[600px] lg:mt-20">
                        {!isMobile && (
                            <h3 className="text-md mb-20 md:text-2xl 3xl:text-4xl ">
                                {" "}
                                Personal Portfolio Website{" "}
                            </h3>
                        )}

                        <h2 className="text-sm leading-loose md:text-xl 3xl:text-2xl">
                            {" "}
                            My first time using Next.js and Framer Motion for
                            smooth animations. Learned lots about motion and
                            UI/UX and will use what I learned in future
                            projects.
                        </h2>
                    </div>
                </motion.div>

                <motion.div
                    className="w-full h-auto flex  justify-center items-center text-center flex-col md:flex-row md:gap-20 md:pr-20  "
                    initial={{
                        opacity: 0,
                        x: "300px",
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        default: { duration: 1.5, ease: "easeInOut" },
                    }}
                    viewport={{
                        amount: 0.2,
                        once: true,
                    }}
                >
                    <div className=" w-[90%] text-center h-auto  text-white md:w-[600px] md:h-[400px] 3xl:h-[600px]  ">
                        <h3 className="text-md  mb-20 md:text-2xl 3xl:text-4xl">
                         
                            Veterinary Clinic Waitlist
                        </h3>
                        <h2 className="text-md  leading-loose md:text-xl 3xl:text-2xl">
                          
                            Waitlist for customers who are waiting for their
                            pets&apos; surgery. Gives them updates on their
                            pet&apos;s progress and lets them know estimated
                            finish times. Also has login functionality for staff
                            so that they can add and edit information about
                            customers&apos; pets.
                        </h2>
                    </div>

                    <Image
                        alt="Image of veterinary website"
                        src={vet}
                        className="w-auto h-[600px] border-2 border-white md:h-[400px] 3xl:h-[600px] "
                    />
                </motion.div>
            </main>
        </>
    );
}
