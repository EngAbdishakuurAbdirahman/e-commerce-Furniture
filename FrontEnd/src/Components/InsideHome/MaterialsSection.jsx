
import React from 'react';
import { motion } from 'framer-motion';
//import Mt from "../../assets/Mt.png"

const stats = [
    { label: "Years of experience", value: "20+" },
    { label: "Happy clients", value: "48k" },
    { label: "Our Products", value: "150k+" }
];

const MaterialsSection = () => {
    return (
        <div className="bg-gray-200 h-[580px] p-5 md:p-10 shadow-md rounded-lg mt-16 w-[90%] ml-16 ">
            <div className="container  flex flex-col w-[900px] md:flex-row items-center justify-between gap-24">
                <div className="w-[690px]  h-70">
                    <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-7 w-[600px]"
                    >
                        <h2 className="text-4xl md:text-4xl font-medium  text-gray-800 ml-5"> We Produce High-quality Materials.</h2>
                        <p className="text-gray-600 ml-6"> Our commitment to the careful selection of top-quality materials and suppliers who ensure reliability and care in their work allows Furniture customers to have a wide range of options.
                        </p>
                        <button className="bg-[#183b50] hover:bg-[#183b50] focus:ring-green-500 focus:ring-opacity-50 text-white font-semibold rounded-lg text-sm px-10 py-2.5 transition duration-300 ease-in-out ml-4">
                            Learn more
                        </button>
                    </motion.div>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                    <motion.div 
                        className="w-full" 
                        initial={{ opacity: 0, x: 100 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.5 }}
                    >
                        <img src="https://i.pinimg.com/736x/f3/25/a8/f325a8817bf8d16440d95455c21be39a.jpg" alt="Interior" className="max-w-sm md:max-w-sm rounded-lg shadow-xl h-[450px] w-[560px]"/>
                    </motion.div>
                </div>
            </div>
            <div className="flex justify-around p-5 text-center">
                {stats.map(stat => (
                    <motion.div 
                        key={stat.label} 
                        initial={{ y: 20, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <h3 className="text-2xl font-bold text-green-600">{stat.value}</h3>
                        <p className="text-gray-800">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MaterialsSection;
