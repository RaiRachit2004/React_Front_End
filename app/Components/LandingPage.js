import { motion } from 'framer-motion';
import React from 'react';

function LandingPage() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-2">
            <div className="textstructure mt-35">
                {["We Create", "Eye Opening", "Presentation"].map((item, index) => (
                    <div key={index} className="masker">
                        <div className="w-fit flex items-end overflow-hidden">
                            
                            {index === 1 && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "11vw" }}  
                                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
                                    className="w-[20vh] h-[17vh] relative top-[1vh] bg-red-500 left-[6vh]"
                                    >
                                        <img
                                        src="https://i.pinimg.com/736x/f4/99/31/f4993163a1654e1082b9ca77a38e271a.jpg"
                                        alt="Your Image Alt Text"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            )}
                            <h1 className="uppercase text-8xl font-bold text-white leading-44 tracking-tighter px-9">
                                {item}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between py-5 px-20">
                {["For public and private companies", "From the pitch of PIO"].map((item, index) => (
                    <p key={index} className="text-md font-light tracking-tight leading-none">{item}</p>
                ))}
                <div className="start">
                    <div className="px-2 py-1 border-[3px] border-zinc-500 font-light text-sm rounded-full capitalize">Start the Project</div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
