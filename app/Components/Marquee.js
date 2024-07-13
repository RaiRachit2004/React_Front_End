import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full h-[60vh] bg-[#004D43] py-8 rounded-3xl" >
        <div className="text border-t-2 border-b-2  border-zinc-400 flex whitespace-nowrap gap-10 overflow-hidden ">
            <motion.h1
             initial ={{x: "0"}}
             animate ={{x: "-100%"}}
             transition={{repeat: Infinity, ease: "linear", duration: 5}} 
             className='text-[16vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase p-10 mb-1 pr-20'>We Are Ochi</motion.h1>

            <motion.h1
             initial ={{x: "0"}}
             animate ={{x: "-100%"}}
             transition={{repeat: Infinity, ease: "linear", duration: 5}} 
             className='text-[16vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase p-10 mb-1 pr-20 '>We are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee