// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import img1 from "../assets/loog.png";

// function Header() {
//     const cartValue = useSelector((state) => state.Cart.CartItem);

//     return (
//         <header className="bg-[#] w-full fixed top-0 left-0 z-50">
//             <div className="container mx-auto px-6 md:px-20 lg:px-10 flex items-center justify-between h-20">
//                 {/* Logo */}
//                 <motion.div className="flex items-center" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
//                      <img className="w-40 md:w-52" src={img1} alt="Logo" /> 
//                     {/* <h1 className="text-[#183b50] font-semibold text-xl">FURNITURE <span className="text-white">TAGLINE</span></h1> */}
//                 </motion.div>
                
//                 {/* Navigation */}
//                 <nav className="hidden md:flex space-x-12 lg:space-x-20 text-white font-semibold ">
//                     <Link className="transition-transform duration-300 hover:scale-110  hover:text-[#DA4771]" to="/">Home</Link>
//                     <Link className="transition-transform duration-300 hover:scale-110 hover:text-[#DA4771]" to="/about">About</Link>
//                     <Link className="transition-transform duration-300 hover:scale-110 hover:text-[#DA4771]" to="/product">Product</Link>
//                     <Link className="transition-transform duration-300 hover:scale-110 hover:text-[#DA4771]" to="/LoginPage">Contact</Link>
//                 </nav>
                
//                 {/* Right Section */}
//                 <div className="flex items-center gap-6 md:gap-10 lg:gap-16">
//                     {/* Phone */}
//                     {/* <motion.div 
//                         className="hidden md:flex items-center gap-3"
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}>
//                         <i className="fa-solid fa-phone text-2xl text-white"></i>
//                         <a href="https://wa.me/+252616071080"><h4 className="text-white font-thin">655315</h4></a>
//                     </motion.div> */}

//                     <div className="">
//                     <button className="bg-white text-[#183b50] text-xl px-3 py-1 font-semibold rounded-lg">Register  <Link className="transition-transform duration-300 hover:scale-110 hover:text-[#DA4771]" to="/LoginPage"><i class="fa-regular fa-circle-user  text-[#183b50]"></i></Link></button>
                    
//                     </div>
                    
//                     {/* Cart */}
//                     <Link to="/cart" className="relative">
//                         <motion.i className="fa-solid fa-cart-shopping mt-1 text-4xl text-white relative" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}>
//                             <span className="absolute -top-2 -right-2 bg-[#E7A933] text-white text-xs font-bold px-2 py-1 rounded-full">{cartValue.length}</span>
//                         </motion.i>
//                     </Link>

//                     {/* Mobile Menu */}
//                     <div className="md:hidden cursor-pointer">
//                         <i className="fa-solid fa-bars text-2xl text-[#183b50]"></i>
//                     </div>

                    
//                 </div>
//             </div>
//             {/* <hr className="border-gray-300" /> */}
//         </header>
//     );
// }

// export default Header;




//Really-----------------------------------------------

// import { Link, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import img1 from "../assets/loog.png";

// function Header() {
//     const cartValue = useSelector((state) => state.Cart.CartItem);
//     const location = useLocation();

//     // Define pages that should have a transparent header
//     const transparentPages = ["/", "/about"];
//     const isTransparent = transparentPages.includes(location.pathname);

//     return (
//         <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 
//             ${isTransparent ? "bg-transparent text-white" : "bg-white shadow-md text-black"}`}>
            
//             <div className="container mx-auto px-6 md:px-20 lg:px-10 flex items-center justify-between h-20">
//                 {/* Logo */}
//                 <motion.div className="flex items-center" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
//                     {/* <img className="w-40 md:w-52" src={img1} alt="Logo" /> */}
                    
//                 </motion.div>
                
//                 {/* Navigation */}
//                 <nav className="hidden md:flex space-x-12 lg:space-x-20 font-semibold">
//                     <Link className="transition-transform duration-300 hover:scale-110 hover:text-[#E7A933]" to="/">Home</Link>
//                     <Link className="transition-transform duration-300 hover:scale-110 hover:text-[#E7A933]" to="/about">About</Link>
//                     <Link className="transition-transform duration-300 hover:scale-110 hover:text-[#E7A933]" to="/product">Product</Link>
//                     <Link className="transition-transform duration-300 hover:scale-110 hover:text-[#E7A933]" to="/contact">Contact</Link>
//                 </nav>
                
//                 {/* Right Section */}
//                 <div className="flex items-center gap-6 md:gap-10 lg:gap-16">
//                     {/* Register Button */}
//                     <div className="">
//                     <Link className="transition-transform duration-300 hover:scale-110 hover:text-[#E7A933]" to="/LoginPage"> <button className="bg-[#E7A933] text-[#183b50] text-xl px-3 py-1 font-semibold rounded-lg">Register
//                                 {/* <i className="fa-regular fa-circle-user text-[#183b50]"></i> */}
//                                 </button></Link>
                        
//                     </div>
                    
//                     {/* Cart */}
//                     <Link to="/cart" className="relative">
//                         <motion.i className="fa-solid fa-cart-shopping mt-1 text-4xl relative"
//                             initial={{ scale: 0.9 }} 
//                             animate={{ scale: 1 }} 
//                             transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}>
//                             <span className="absolute -top-2 -right-2 bg-[#E7A933] text-white text-xs font-bold px-2 py-1 rounded-full">{cartValue.length}</span>
//                         </motion.i>
//                     </Link>

//                     {/* Mobile Menu */}
//                     <div className="md:hidden cursor-pointer">
//                         <i className="fa-solid fa-bars text-2xl text-[#183b50]"></i>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;



import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import img1 from "../assets/Logoo.png"; // ✅ Hubi in img1 uu sax yahay

function Header() {
    const cartValue = useSelector((state) => state.Cart.CartItem);
    const location = useLocation();

    // Define pages that should have a transparent header
    const transparentPages = ["/", "/about"];
    const isTransparent = transparentPages.includes(location.pathname);

    return (
        <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 
            ${isTransparent ? "bg-transparent text-white" : "bg-white shadow-md text-black"}`}>
            
            <div className="container mx-auto px-6 md:px-20 lg:px-10 flex items-center justify-between h-20">
                
                {/* ✅ Logo (Left Side) */}
                <motion.div 
                    className="flex items-center space-x-4" 
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.5 }}
                >
                    <img className="w-24 md:w-34 h-34 mt-10 ml-9" src={img1} alt="Logo" /> 
                </motion.div>
                
                {/* ✅ Navigation */}
                <nav className="hidden md:flex space-x-12 lg:space-x-20 font-semibold">
                    <Link className="transition-transform duration-300 hover:scale-110 hover:text-[#E7A933]" to="/">Home</Link>
                    <Link className="transition-transform duration-300 hover:scale-110 hover:text-[#E7A933]" to="/about">About</Link>
                    <Link className="transition-transform duration-300 hover:scale-110 hover:text-[#E7A933]" to="/product">Product</Link>
                    <Link className="transition-transform duration-300 hover:scale-110 hover:text-[#E7A933]" to="/contact">Contact</Link>
                </nav>
                
                {/* ✅ Right Section */}
                <div className="flex items-center gap-6 md:gap-10 lg:gap-16">
                    {/* Register Button */}
                    <div className="">
                        <Link className="transition-transform duration-300 hover:scale-110 hover:text-[#E7A933]" to="/LoginPage"> 
                            <button className="bg-[#E7A933] text-[#183b50] text-xl px-3 py-1 font-semibold rounded-lg">
                                Register
                            </button>
                        </Link>
                    </div>
                    
                    {/* Cart */}
                    <Link to="/cart" className="relative">
                        <motion.i className="fa-solid fa-cart-shopping mt-1 text-4xl relative"
                            initial={{ scale: 0.9 }} 
                            animate={{ scale: 1 }} 
                            transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}>
                            <span className="absolute -top-2 -right-2 bg-[#E7A933] text-white text-xs font-bold px-2 py-1 rounded-full">{cartValue.length}</span>
                        </motion.i>
                    </Link>

                    {/* Mobile Menu */}
                    <div className="md:hidden cursor-pointer">
                        <i className="fa-solid fa-bars text-2xl text-[#183b50]"></i>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
