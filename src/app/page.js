'use client'
import Image from "next/image";
import {useState, useRef, useEffect} from "react";
import {motion, animate} from "framer-motion"



import Header from "../app/Header.js"
import Projects from "../app/Projects.js"

export default function Home() {

  useEffect( () => {

      const handleScroll = () => {
        const nav = document.querySelector("nav");

        if(window.scrollY > 20){
          nav.classList.add("bg-white")
        }
        else{
          nav.classList.remove("bg-white")
        }
      };

      window.addEventListener("scroll", handleScroll)

      

      return window.removeEventListener("scroll", handleScroll);
      


    }, [])



  const getScroll = () => console.log(window.scrollY)

  
  const projectRef = useRef(null);

  const handleScroll = () => {

    const targetY = projectRef.current.getBoundingClientRect().top + window.scrollY;
    const startY = window.scrollY

    animate(startY, targetY, {

      duration: 2,
      ease: "easeInOut",
      onUpdate: (value) => window.scrollTo(0,value),
    })
  }


  return (
    <>
      <nav className="fixed w-full h-15 transition duration-700 ease-in-out ">

      </nav>


      <Header handleScroll={handleScroll}/>
      
      
      <Projects projectRef={projectRef}/>


      <footer>


      </footer>
      
    </>
  );
}
