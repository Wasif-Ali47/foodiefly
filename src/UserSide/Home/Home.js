import React, { useState, useEffect } from "react";
import slide1 from "../../Assets/cover.jpg"
import CategoryProducts from "../CategoryProducts";
import { motion } from 'framer-motion';

const FirstSection = () => {
    const images = [
        slide1,
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div
            className=" relative  w-full flex items-center justify-center bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: `url(${images[currentIndex]})`, height: "250px" }}
        >




            <div className="absolute z-10 p-6 bg-white bg-opacity-90 rounded-lg shadow-lg text-center space-y-4" style={{ marginTop: "200px" }}>

                <motion.div
                    className="text-6xl md:text-9xl font-bold drop-shadow-md text-dark well-background"
                    style={{ fontWeight: "800" }}
                    initial={{ y: -500 }}
                    animate={{ y: [-500, 500, 0] }}
                    transition={{ type: 'spring', stiffness: 30 }}
                >
                    FOODIE FLY
                </motion.div>



                <p className="text-lg md:text-2xl drop-shadow-md text-mute">
                    Taste the Speed, Love the Flavor!
                </p>



            </div>
        </div>
    );
};







// Home Component
const Home = () => {
    return (
        <>
            <div style={{ backgroundColor: "#fafafa" }}>
                <FirstSection />
            </div>
            <CategoryProducts />
        </>
    );
};

export default Home;
