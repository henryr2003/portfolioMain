"use client"
import Image from "next/image";
import {useRef} from "react";
import {motion} from "framer-motion";
import portfolioPic from "../img/portfolioPic.png";
import vet from "../img/vet.png";

export default function Projects({projectRef}) {


    


    return (


        <>

            <main ref={projectRef} className="w-full h-auto flex flex-col gap-[32px] row-start-2 items-center sm:items-start bg-gray-800 font-mono">
  
            

                <motion.div className="w-full h-[700px] flex pl-20 gap-30 mt-50"
                
                initial={{
                    opacity: 0,
                    x: "-500px",
                }}

                whileInView={{

                    opacity: 1,
                    x: 0,
                }}

                transition={{
                    default: {duration: 1.5, ease: "easeInOut"}
                }}

                

                viewport={{
                    amount: 0.2,
                    once: true,
                }}



                >

                    <Image alt="Image of this portfolio website" src={portfolioPic} className="w-auto h-[600px] border-2 border-white"/>

                

                    <div className="w-[600px] h-[600px] text-white  ">

                        <h1 className="text-4xl mb-20"> Personal Portfolio Website </h1>
                        <h2 className="text-2xl leading-loose "> My first time using Next.js and Framer Motion for smooth animations. Learned lots about motion and UI/UX and will use what I learned in future projects.</h2>
                    </div>

                </motion.div>


                <motion.div className="w-full h-[700px] flex justify-end pr-20 gap-30 mt-50"
                
                initial={{
                    opacity: 0,
                    x: "500px",
                }}

                whileInView={{

                    opacity: 1,
                    x: 0,
                }}

                transition={{
                    default: {duration: 1.5, ease: "easeInOut"}
                }}

                

                viewport={{
                    amount: 0.3,
                    once: true,
                }}
                >

                    <div className="w-[600px] h-[600px] text-white  ">

                        <h1 className="text-4xl mb-20"> Veterinary Clinic Waitlist </h1>
                        <h2 className="text-2xl leading-loose "> Waitlist for customers who are waiting for their pets' surgery. Gives them updates on their pet's progress and lets them know estimated finish times. Also
                        has login functionality for staff so that they can add and edit information about customers' pets. 
                        </h2>
                    </div>

                    <Image alt="Image of veterinary website" src={vet}className="w-auto h-[600px] border-2 border-white"/>

                    

                    

                </motion.div>


            

                
                

            
            </main>
        </>
    )
}