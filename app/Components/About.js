import React from 'react'

function About() {
    return (
        <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
            <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
                Ochi is a strategic partner for fast-growing tech businesses
                that need to raise funds, sell products, explain complex
                ideas, and hire great people.
            </h1>
            <div className="w-full flex gap-5 bg-[#CDEA68] border-t-[1px] border-[#a1b562] mt-20 p-10">
                <div className="w-1/2">
                    <h1 className="text-5xl mt-10">Our Approach :</h1>
                    <button className=" flex gap-7 px-10 py-6 items-center uppercase border-zinc-900 mt-10 rounded-full text-white bg-black">Read More
                        <div className=" w-3 h-3 bg-zinc-100 rounded-full "></div>
                    </button>

                </div>
                <div className="w-1/2 h-[70vh] bg-[#92aa3c] rounded-3xl"> </div>
            </div>
        </div>
    );
}

export default About