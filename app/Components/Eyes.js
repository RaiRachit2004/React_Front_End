import React, { useState, useEffect } from 'react'; // Correct import statement for useState and useEffect

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle-180); // Set the rotate state with the calculated angle
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []); // Empty dependency array to run effect only once 

    return (
        <div className="eyes w-full h-screen overflow-hidden">
            <div data-scroll data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
                <div className="absolute pt-5 flex top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-70 gap-10">
                    <div className="flex w-[15vw] h-[15vw] justify-center items-center rounded-full bg-white">
                        <div className="relative w-[10vw] h-[10vw] rounded-full bg-black">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                                <div className="w-10 h-10 rounded-full bg-white"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[15vw] h-[15vw] justify-center items-center rounded-full bg-white">
                        <div className="relative w-[10vw] h-[10vw] rounded-full bg-black">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                                <div className="w-10 h-10 rounded-full bg-white"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eyes;
