// // import React from 'react';
// // import { Link } from "react-router-dom";
// // import { motion } from "framer-motion";
// // // import Product from "./items/Product";
// // import world from "../assets/world.png";
// // import wow from "../assets/wow.jpg";
// // import ImageGallery from '../Components/ImageGallery';
// // import TestimonialCards from '../Components/InsideHome/TestimonialCards';
// // import MaterialsSection from '../Components/InsideHome/MaterialsSection';
// // import ProductsGrid from '../Components/InsideHome/ProductsGrid';

// // const videoSrc = "https://img.freepik.com/free-photo/view-futuristic-lighting-lamp-design_23-2151037504.jpg?t=st=1742048777~exp=1742052377~hmac=814b81a39b348948f2d01a97939f87fd68f01ab8cd1d317425e2ef1cd193d274&w=1380"; // Replace with actual supermarket discount video URL

// // function Home ()  {
// //     return (
// //         <>
// //             {/* Header Component - Visible First */}
// //             {/* <Header /> */}

// //             {/* Video Background Section - Below Header */}
// //             <div className="relative w-full h-screen overflow-hidden mt-16"> {/* Added margin-top to ensure header is above */}
// //                 <video autoPlay  loop  muted  playsInline  className="w-full h-full object-cover">
// //                     <source src={videoSrc} type="video/mp4" /> Your browser does not support the video tag. </video>


// //         {/* Left Section */}
// //         {/* <motion.div 
// //           className="md:w-1/2 text-center md:text-left"
// //           initial={{ opacity: 0, x: -100 }} // Adjusted for more noticeable entry
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.5 }} // Slightly faster transition
// //         >
// //           <h5 className="text-[#023047] font-thin mb-2 animate-pulse">Online Shopping</h5>
// //           <h1 className='font-semibold text-2xl md:text-4xl leading-tight text-[#183b50]'>
// //             If You Like Our Item, Just Request Any Product You Want
// //           </h1>
// //           <p className="pt-6 text-gray-600 leading-7">
// //             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt libero sequi reprehenderit commodi maiores sed in placeat, debitis quod, necessitatibus provident voluptates quidem natus facere excepturi esse dolorem modi pariatur voluptatibus? Quidem amet eveniet non optio! Eum recusandae delectus iusto!
// //           </p>
// //           <motion.a href="/product" className="inline-block mt-9" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
// //             <button className="bg-[#183b50] text-[#fdf0d5] font-semibold px-6 py-3 text-lg md:text-xl rounded-xl">
// //               Add To Cart <i className="fa-solid fa-cart-shopping"></i>
// //             </button>
// //           </motion.a>
// //         </motion.div> */}

// //         {/* Right Section */}
// //         {/* <motion.div  
// //           className="md:w-1/2 flex justify-center relative"
// //           initial={{ opacity: 0, x: 100 }} // Adjusted for more noticeable entry
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.5 }} // Slightly faster transition
// //         >
// //           <img className="w-[520px] h-[360px] rounded-xl shadow-lg ml-28 -mt-12" src={wow} alt="Product Display" />
// //           <motion.img 
// //             className="absolute top-10 right-0 w-[300px] opacity-80" 
// //             src={world} 
// //             alt="World Background" 
// //             animate={{ rotate: [0, 360] }}
// //             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
// //           />
// //         </motion.div> */}

        
// //       </div>

// //       <ProductsGrid />

// //       <MaterialsSection />

// //       <TestimonialCards />

// //       {/* <Product /> */}
// //       <ImageGallery />
// //     </>
// //   );
// // }

// // export default Home;



// import React from 'react';
// import ImageGallery from '../Components/ImageGallery';
// import TestimonialCards from '../Components/InsideHome/TestimonialCards';
// import MaterialsSection from '../Components/InsideHome/MaterialsSection';
// import ProductsGrid from '../Components/InsideHome/ProductsGrid';

// // Image to replace video
// const heroImage = "https://img.freepik.com/free-photo/view-futuristic-lighting-lamp-design_23-2151037504.jpg?t=st=1742048777~exp=1742052377~hmac=814b81a39b348948f2d01a97939f87fd68f01ab8cd1d317425e2ef1cd193d274&w=1380"; 

// function Home() {
//     return (
//         <>
//             {/* Hero Image Section - Replaces Video */}
//             <div className="relative w-full h-screen overflow-hidden mt-16">
//                 <img src={heroImage} alt="Furniture Banner" className="w-full h-full object-cover" />
//             </div>

//             {/* Sections Below the Hero Image */}
//             <ProductsGrid />
//             <MaterialsSection />
//             <TestimonialCards />
//             <ImageGallery />
//         </>
//     );
// }

// export default Home;




// import { motion } from "framer-motion";
// import { NavLink } from "react-router-dom";
// import ImageGallery from '../Components/ImageGallery';
// import TestimonialCards from '../Components/InsideHome/TestimonialCards';
// import MaterialsSection from '../Components/InsideHome/MaterialsSection';
// import ProductsGrid from '../Components/InsideHome/ProductsGrid';

// // Supermarket Discount Video
// const heroImage = "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/d8c472845fca4684b14a74e08194723037990a43"; 

// const Home = () => {
//     return (
//         <>
//             {/* Header Component - Visible First */}
//             {/* <Header /> */}

//             {/* Video Background Section - Below Header */}
//             <div className="relative w-full h-screen overflow-hidden "> {/* Added margin-top to ensure header is above */}
//             <div className="relative w-full h-screen overflow-hidden mt-16">
//                 <img src={heroImage} alt="Furniture Banner" className="w-full h-full object-cover" />
//             </div>
//                 {/* Overlay Content */}
//                 <div className="absolute top-0 left-0 w-full h-full bg-gray-00 bg-opacity-40 flex flex-col justify-center items-center text-center px-6">
//                     <motion.h1
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 1 }}
//                         className="text-white text-5xl md:text-7xl font-bold"
//                     >
//                         HaYaT Supermarket 🛒
//                     </motion.h1>

//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.5, duration: 1 }}
//                         className="text-white text-lg md:text-2xl mt-4"
//                     >
//                         Save big with our exclusive discounts!
//                     </motion.p>

//                     {/* "Shop Now" Button - Links to Products Page */}
//                     <NavLink to="/products">
//                         <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             className="bg-red-600 text-white px-6 py-3 mt-6 text-lg font-semibold rounded-lg hover:bg-red-700 transition"
//                         >
//                             Shop Now
//                         </motion.button>
//                     </NavLink>
//                 </div>
//             </div>
//  {/* Sections Below the Hero Image */}
//             <ProductsGrid />
//             <MaterialsSection />
//             <TestimonialCards />
//             <ImageGallery />
//         </>
//     );
// };

// export default Home


// import { motion } from "framer-motion";
// import { NavLink } from "react-router-dom";
// import ImageGallery from '../Components/ImageGallery';
// import TestimonialCards from '../Components/InsideHome/TestimonialCards';
// import MaterialsSection from '../Components/InsideHome/MaterialsSection';
// import ProductsGrid from '../Components/InsideHome/ProductsGrid';

// // Background Image for Hero Section
// const heroImage = "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/d8c472845fca4684b14a74e08194723037990a43"; 

// const Home = () => {
//     return (
//         <>
//             {/* Hero Section with Background Image */}
//             <div className="relative w-full h-screen flex items-center justify-center text-center">
                
//                 {/* Background Image */}
//                 <div 
//                     className="absolute inset-0 bg-cover bg-center"
//                     style={{ backgroundImage: `url(${heroImage})` }}
//                 ></div>

//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg- bg-opacity-10"></div>

//                 {/* Overlay Content */}
//                 <div className="relative z-10 px-6">
//                     <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="text-white text-5xl md:text-7xl font-bold"> Al-ain Furniture 🛒</motion.h1>

//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.5, duration: 1 }}
//                         className="text-white text-lg md:text-2xl mt-4"
//                     >
//                         Save big with our exclusive discounts!
//                     </motion.p>

//                     {/* "Shop Now" Button */}
//                     <NavLink to="/products">
//                         <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             className="bg-red-600 text-white px-6 py-3 mt-6 text-lg font-semibold rounded-lg hover:bg-red-700 transition"
//                         >
//                             Shop Now
//                         </motion.button>
//                     </NavLink>
//                 </div>
//             </div>

//             {/* Sections Below the Hero Image */}
//             <ProductsGrid />
//             <MaterialsSection />
//             <TestimonialCards />
//             <ImageGallery />
//         </>
//     );
// };

// export default Home;



//THe LAst.........................


import { motion } from "framer-motion"; 
import { NavLink } from "react-router-dom";
import ImageGallery from '../Components/ImageGallery';
import TestimonialCards from '../Components/InsideHome/TestimonialCards';
import MaterialsSection from '../Components/InsideHome/MaterialsSection';
import ProductsGrid from '../Components/InsideHome/ProductsGrid';

const Home = () => {
    return (
        <>
            {/* Hero Section with Video Background */}
            <div className="relative w-full h-screen flex items-center justify-center text-center ">
                
                {/* Video Background */}
                <video 
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://video-previews.elements.envatousercontent.com/4ff4c7c3-db85-4733-a34a-aae845d5f48c/watermarked_preview/watermarked_preview.mp4"
                    autoPlay
                    loop
                    muted
                ></video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg- bg-opacity-50"></div>

                {/* Overlay Content */}
                <div className="relative z-10 px-6 -mt-20">
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.8 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 1 }} 
                        className="text-5xl  md:text-7xl font-bold text-[#E7A933]"> FURNITURE <span className="text-gray-100">TAGLINE🛒</span></motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-white text-lg md:text-2xl mt-4"
                    >
                        Save big with our exclusive discounts!
                    </motion.p>

                    {/* "Shop Now" Button */}
                    <NavLink to="/products">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-[#E7A933] text-[#183b50] px-6 py-3 mt-6 text-lg font-semibold rounded-lg  transition">
                            Shop Now
                        </motion.button>
                    </NavLink>
                </div>
            </div>

            {/* Sections Below the Hero Video */}
            <ProductsGrid />
            <MaterialsSection />
            <TestimonialCards />
            <ImageGallery />
        </>
    );
};

export default Home;
