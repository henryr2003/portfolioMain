'use client'
import Image from "next/image";
import {useState, useRef, useEffect} from "react";
import {motion} from "framer-motion"

export default function Home() {

  window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 20){
      nav.classList.add("bg-white")
    }
    else{
      nav.classList.remove("bg-white")
    }

  })

  const getScroll = () => console.log(window.scrollY)

  return (
    <>
      <nav className="fixed w-full h-15 transition duration-700 ease-in-out ">

      </nav>

      <header className="w-full h-100 bg-amber-200 flex flex-col gap-5  md:h-[600px] "> 

        <motion.div className="border-1 h-1 w-1 bg-black"

          initial={{
            width: "1px"
          }}

          animate={{
            width: "100%"
          }}

          transition={{
            duration: 1,
            ease: "backInOut"
          }}
        >
        </motion.div>


        <motion.div className="border-1 h-1 w-1 bg-black"

          initial={{
            width: "0px",
            translateX: "100%"
          }}

          animate={{
            width: "100%",
            translateX: "0%"
          }}

          transition={{
            duration: 1,
            ease: "backInOut"
          }}
        >
        </motion.div>


        {/* <Image alt="Photo of Henry Rodas" className="border-2 h-40 w-40" /> */}
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <div className="w-full h-40 bg-red-200">

          <h1> About Me </h1> 
        </div>

        <div className="w-full h-40 bg-red-200">

            <h1> Projects </h1> 
        </div>

        <div className="w-full h-40 bg-red-200">

            <h1> Contact Me </h1> 
        </div>

        

       
      </main>
      
    </>
  );
}
