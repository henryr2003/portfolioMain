'use client'
import Image from "next/image";
import {useState, useRef, useEffect} from "react";
import {motion} from "framer-motion"
import Test from "./Test"
import arrow from "../img/arrow.svg"
import vet from "../img/vet.png"
import gradPhoto from "../img/gradPhoto.webp"
import github from "../img/github-mark.svg"
import linkedIn from "../img/linkedIn.svg"
import mail from "../img/mail.svg"
import html from "../img/html.svg"
import css from "../img/css.svg"
import js from "../img/js.svg"

import react from "../img/react.svg"
import supabase from "../img/supabase.svg"
import tailwind from "../img/tailwind.svg"
import nextLogo from "../img/nextLogo.svg"
import motionLogo from "../img/motionLogo.svg"
import portfolioPic from "../img/portfolioPic.png"

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

  return (
    <>
      <nav className="fixed w-full h-15 transition duration-700 ease-in-out ">

      </nav>

      <header className="w-full h-full bg-gray-800 flex flex-col justify-center md:h-[100vh] "> 

        <motion.div className="border-1 h-1 w-1 bg-white"

          initial={{
            width: "1px",
            y: "0px",
          }}

          animate={{
            width: "100%",
            
          }}

          transition={{
            width: {duration: 1, ease: "easeInOut"},
         
          }}
        >
        </motion.div>

        


        
          <motion.div className="w-full h-[60px] text-center flex  flex-col items-center overflow-hidden" 
          
          initial={{

           
        
            height: "50px",
            padding: "0px",
          }}

          animate={{
            
            
            height: "85%",
            padding: "50px",
          }}
          
          transition={{
  
          
        
            default: {delay: 2.25, duration: 2, ease: "easeInOut"},
          }}
          >


            
            <motion.div className="w-auto h-[70px] text-white font-mono text-3xl flex items-center"
              layout
              initial={{

                y: "40px",
                opacity: 0,
                x: 0,
              }}

              animate={{
                y: "5px",
                opacity: "100%",
                x: "-35vw",
              }}


              transition={{

                y: {delay: 0.1, duration: 1, ease: "easeInOut"},
                opacity: {delay: 0.1, duration: 1, ease: "easeInOut"},
                x: {delay: 2.25, duration: 2, ease: "easeInOut"},
              }}

              
            > 
            <p className="">Hello, I'm Henry Rodas </p>
                <motion.div className="flex "
                
                initial={{
                  opacity: 0, 
                  display: "none",
                  x: "100vw"
                
                }}

                animate={{
                  
                  opacity: 1,
                  display: "flex",
                  x: 0,
                
                }}

                transition={{
                  
                  opacity:{delay: 4.5, duration: 1, ease:"easeInOut"},
                  x:{delay: 4, duration: 2, type: "spring"}

              }}
                >

                 
                </motion.div>
            </motion.div>


            <motion.div
          className="w-full h-auto flex "

          initial={{
            opacity: 0,
     

          }}

          animate={{
            opacity: 1,
         

          }}

          transition={{
              opacity: {delay: 2.75, duration: 2.5, ease: "easeInOut"},
              

          }}
        >


            <Image alt="Image of Henry Rodas in university graduation clothing" className="border-2 mt-5 w-[600px] h-auto lg: ml-50 w-[600px] h-auto " src={gradPhoto}/>



  

            <motion.div className=" flex flex-col items-center gap-30 text-white font-mono text-2xl pt-25 lg: w-[auto] "
            
            
            initial={{
              x: "1000px"
            }}
            
            animate={{
              x:0
            
            }}

            transition={{

              x: {delay: 2, duration: 2, ease:"easeInOut"}
            }}
            >
                <div className="flex gap-15 text-black">

                  <Image alt="Github logo" className="w-15 h-15 cursor-pointer" src={github}/>
                  <Image alt="LinkedIn logo" className="w-15 h-15 cursor-pointer" src={linkedIn}/>
                  <Image alt="mail logo" className="w-auto h-20 flex items-start -translate-y-2 cursor-pointer" src={mail}/>
                </div>
                <h1 className="w-[55%]"> I am a cracked front-end developer who loves to make things look nice and make things work.</h1> 


                <div className="flex gap-15 text-black">

                    <Image alt="html logo" className="w-auto h-20 flex items-start -translate-y-2 cursor-pointer" src={html}/>
                    <Image alt="css logo" className="w-auto h-20 flex items-start -translate-y-2 cursor-pointer" src={css}/>
                    <Image alt="js logo" className="w-auto h-20 flex items-start -translate-y-2 cursor-pointer" src={js}/>
                </div>


                <div className="flex gap-15 text-black">

                  <Image alt="react logo" className="w-15 h-15 flex items-start -translate-y-2 cursor-pointer" src={react}/>
                  <Image alt="next logo" className="w-15 h-15 flex items-start -translate-y-2 cursor-pointer" src={nextLogo}/>
                  <Image alt="tailwind logo" className="w-15 h-15 flex items-start -translate-y-2 cursor-pointer" src={tailwind}/>
                  <Image alt=" motion" className="w-15 h-15 flex items-start -translate-y-2 cursor-pointer" src={motionLogo}/>
                  <Image alt="supabase logo" className="w-15 h-15 flex items-start -translate-y-2 cursor-pointer" src={supabase}/>
                </div>


            </motion.div>

        </motion.div>
          </motion.div>

        

        




        <div className="flex justify-end">
          <motion.div className="border-1 h-1 w-1 bg-white "

            initial={{
              width: "0px",
              x: "100%",
             
              
            }}

            animate={{
              width: "100%",
              x: "0%",
              
            }}

            transition={{
              width: {duration: 1, ease: "easeInOut"},
              y: {delay: 2.25, duration: 3, ease: "easeInOut", times: [0, 2, 3]},
              
            }}
          >
          </motion.div>


          


         </div>
        
        <motion.div className="w-full h-auto flex justify-center items-center"
        
        initial={{

          opacity: 0,
        }}

        animate={{

          opacity: 1,
        }}

        transition={{

          opacity:{delay: 4, duration: 1, ease:"easeInOut"}
        }}
        >
          
          <Image  alt="Arrow to press to scroll down" className="w-25 h-auto animate-bounce translate-y-10 cursor-pointer" src={arrow}  />


        </motion.div>


      </header>
      
      <main className="w-full h-auto flex flex-col gap-[32px] row-start-2 items-center sm:items-start bg-gray-800 font-mono">
  
       

        <div className="w-full h-[700px] flex pl-20 gap-30 mt-50">

            <Image alt="Image of this portfolio website" src={portfolioPic} className="w-auto h-[600px] border-2 border-white"/>

           

            <div className="w-[600px] h-[600px] text-white  ">

                <h1 className="text-4xl mb-20"> Personal Portfolio Website </h1>
                <h2 className="text-2xl leading-loose "> My first time using Next.js and Framer Motion for smooth animations. Learned lots about motion and UI/UX and will use what I learned in future projects.</h2>
            </div>

        </div>


        <div className="w-full h-[700px] flex justify-end pr-20 gap-30 mt-50">

            <div className="w-[600px] h-[600px] text-white  ">

                <h1 className="text-4xl mb-20"> Veterinary Clinic Waitlist </h1>
                <h2 className="text-2xl leading-loose "> Waitlist for customers who are waiting for their pets' surgery. Gives them updates on their pet's progress and lets them know estimated finish times. Also
                  has login functionality for staff so that they can add and edit information about customers' pets. 
                </h2>
            </div>

            <Image alt="Image of veterinary website" src={vet}className="w-auto h-[600px] "/>

            

            

        </div>


       

        
        

       
      </main>


      <footer>


      </footer>
      
    </>
  );
}
