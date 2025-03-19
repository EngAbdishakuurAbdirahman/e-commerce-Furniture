// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../Redix/Reducer/Cart';
// import { motion } from 'framer-motion';
// import bed1 from "../../assets/bed1.jpg"

// function Product() {
//   return (
//     <motion.div  className="mt-4 w-full  mb-10 flex items-center space-y-4" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
//       <motion.div className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"initial={{ opacity: 0, y: 20 }}animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//         <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={bed1}  alt="" />
//         <div className="p-4 space-y-2">
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-lg font-semibold text-gray-800">title</h1>
//             <h2 className="text-lg font-bold text-red-500">$price</h2>
//           </div>
//           <motion.button  className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#183b50] hover:scale-105" whileTap={{ scale: 0.95 }}> See More <i className="fa-solid fa-cart-shopping"></i>
//           </motion.button>
//         </div>
//       </motion.div>
//       {/* Second */}

//       <motion.div className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"initial={{ opacity: 0, y: 20 }}animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//         <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={bed1}  alt="" />
//         <div className="p-4 space-y-2">
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-lg font-semibold text-gray-800">title</h1>
//             <h2 className="text-lg font-bold text-red-500">$price</h2>
//           </div>
//           <motion.button  className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#183b50] hover:scale-105" whileTap={{ scale: 0.95 }}> See More <i className="fa-solid fa-cart-shopping"></i>
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Third */}

//       <motion.div className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"initial={{ opacity: 0, y: 20 }}animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//         <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={bed1}  alt="" />
//         <div className="p-4 space-y-2">
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-lg font-semibold text-gray-800">title</h1>
//             <h2 className="text-lg font-bold text-red-500">$price</h2>
//           </div>
//           <motion.button  className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#183b50] hover:scale-105" whileTap={{ scale: 0.95 }}> See More <i className="fa-solid fa-cart-shopping"></i>
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Four */}

//       <motion.div className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"initial={{ opacity: 0, y: 20 }}animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//         <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={bed1}  alt="" />
//         <div className="p-4 space-y-2">
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-lg font-semibold text-gray-800">title</h1>
//             <h2 className="text-lg font-bold text-red-500">$price</h2>
//           </div>
//           <motion.button  className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#183b50] hover:scale-105" whileTap={{ scale: 0.95 }}> See More <i className="fa-solid fa-cart-shopping"></i>
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* 2222222222 */}

//       <motion.div className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"initial={{ opacity: 0, y: 20 }}animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//         <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={bed1}  alt="" />
//         <div className="p-4 space-y-2">
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-lg font-semibold text-gray-800">title</h1>
//             <h2 className="text-lg font-bold text-red-500">$price</h2>
//           </div>
//           <motion.button  className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#183b50] hover:scale-105" whileTap={{ scale: 0.95 }}> See More <i className="fa-solid fa-cart-shopping"></i>
//           </motion.button>
//         </div>
//       </motion.div>
//       {/* Second */}

//       <motion.div className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"initial={{ opacity: 0, y: 20 }}animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//         <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={bed1}  alt="" />
//         <div className="p-4 space-y-2">
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-lg font-semibold text-gray-800">title</h1>
//             <h2 className="text-lg font-bold text-red-500">$price</h2>
//           </div>
//           <motion.button  className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#183b50] hover:scale-105" whileTap={{ scale: 0.95 }}> See More <i className="fa-solid fa-cart-shopping"></i>
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Third */}

//       <motion.div className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"initial={{ opacity: 0, y: 20 }}animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//         <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={bed1}  alt="" />
//         <div className="p-4 space-y-2">
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-lg font-semibold text-gray-800">title</h1>
//             <h2 className="text-lg font-bold text-red-500">$price</h2>
//           </div>
//           <motion.button  className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#183b50] hover:scale-105" whileTap={{ scale: 0.95 }}> See More <i className="fa-solid fa-cart-shopping"></i>
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Four */}

//       <motion.div className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"initial={{ opacity: 0, y: 20 }}animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//         <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={bed1}  alt="" />
//         <div className="p-4 space-y-2">
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-lg font-semibold text-gray-800">title</h1>
//             <h2 className="text-lg font-bold text-red-500">$price</h2>
//           </div>
//           <motion.button  className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#183b50] hover:scale-105" whileTap={{ scale: 0.95 }}> See More <i className="fa-solid fa-cart-shopping"></i>
//           </motion.button>
//         </div>
//       </motion.div>
      
//     </motion.div>

    

  
    

    
//   );
// }

// export default Product;


import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import bed1 from "../../assets/bed1.jpg";
import fd1 from "../../assets/fd1.jpg";
import lux1 from "../../assets/lux1.jpg";
import lux3 from "../../assets/lux3.jpg";
import fd2 from "../../assets/fd2.jpg";

//Section two
import bed4 from "../../assets/bed4.jpg"
import bed7 from "../../assets/bed7.jpg"
import bed3 from "../../assets/bed3.jpg"

// Section three
import k1 from "../../assets/k1.jpg"
import k6 from "../../assets/k6.jpg"
import k10 from "../../assets/k10.jpg"
import k9 from "../../assets/k9.jpg"
  
  
function Product() {

  const navigate = useNavigate();

  return <>
    {/* <div className="bg-green-300 pt-19">

    </div> */}
    <div className=" container mx-auto px-4 ">
      <h1 className='mt-28 text-center font-thin text-3xl' >Welcome to Our Products</h1>
      {/* Grid-ka 4 column ah desktop, 2 columns ah mobile */}

      {/* Section 1 Fadhi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {/* Product 1 */}
        <motion.div
          className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={fd1} alt="Product" />
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-gray-800">Luxury Living</h1>
              <h2 className="text-lg font-bold text-red-500">$1200</h2>
            </div>
            <motion.button onClick={() => navigate('/LuxuryLiving')} className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105" whileTap={{ scale: 0.95 }}>See More <i className="fa-solid fa-cart-shopping"></i>
            </motion.button>
          </div>
        </motion.div>

        {/* Product 2 */}
        <motion.div
          className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={lux1} alt="Product" />
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-gray-800">VIP Living</h1>
              <h2 className="text-lg font-bold text-red-500">$1500</h2>
            </div>
            <motion.button onClick={() => navigate('/VIPLiving')} className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105" whileTap={{ scale: 0.95 }} >See More <i className="fa-solid fa-cart-shopping"></i>
            </motion.button>
          </div>
        </motion.div>

        {/* Product 3 */}
        <motion.div
          className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={lux3} alt="Product" />
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-gray-800">Special Living</h1>
              <h2 className="text-lg font-bold text-red-500">$1800</h2>
            </div>
            <motion.button onClick={() => navigate('/SpecialLiving')} className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105" whileTap={{ scale: 0.95 }}> See More <i className="fa-solid fa-cart-shopping"></i>
            </motion.button>
          </div>
        </motion.div>

        {/* Product 4 */}
        <motion.div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"  initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.05 }}>
          <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={fd2} alt="Product" />
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-gray-800">Turkish Living</h1>
              <h2 className="text-lg font-bold text-red-500">$2000</h2>
            </div>
            <motion.button className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105" whileTap={{ scale: 0.95 }}> See More  <i className="fa-solid fa-cart-shopping"></i>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Section 2 */}
      <h1 className='text-center text-2xl pt-6 '>Bed Room Section </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7">
        {/* Product 1 */}
        <motion.div
          className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={bed3} alt="Product" />
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-gray-800">Luxury Bed</h1>
              <h2 className="text-lg font-bold text-red-500">$1200</h2>
            </div>
          <motion.button onClick={() => navigate('/LuxuryBed')}  className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105"whileTap={{ scale: 0.95 }}>See More <i className="fa-solid fa-cart-shopping"></i>
            </motion.button>
          </div>
        </motion.div>

        {/* Product 2 */}
        <motion.div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.05 }}
        >
          <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={bed7} alt="Product" />
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-gray-800">VIP Bed</h1>
              <h2 className="text-lg font-bold text-red-500">$1500</h2>
            </div>
            <motion.button onClick={() => navigate('/VIPBed')}className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105" whileTap={{ scale: 0.95 }}> See More <i className="fa-solid fa-cart-shopping"></i>
            </motion.button>
          </div>
        </motion.div>

        {/* Product 3 */}
        <motion.div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.05 }}
        >
          <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={bed4} alt="Product" />
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-gray-800">Special Bed</h1>
              <h2 className="text-lg font-bold text-red-500">$1800</h2>
            </div>
            <motion.button onClick={() => navigate('/Special')}  className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105" whileTap={{ scale: 0.95 }}
            >
              See More <i className="fa-solid fa-cart-shopping"></i>
            </motion.button>
          </div>
        </motion.div>

        {/* Product 4 */}
        <motion.div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.05 }} >
          <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={bed1} alt="Product" />
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-gray-800">Turkish Bed</h1>
              <h2 className="text-lg font-bold text-red-500">$2000</h2>
            </div>
            <motion.button onClick={() => navigate('/TurkishBed')} className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105" whileTap={{ scale: 0.95 }}>See More <i className="fa-solid fa-cart-shopping"></i>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Section 3 */}
      <h1 className='text-center text-2xl pt-6 '>Flowers Section</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7">
        {/* Product 1 */}
        <motion.div
          className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={k1} alt="Product" />
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-gray-800">House Flowers</h1>
              <h2 className="text-lg font-bold text-red-500">$1200</h2>
            </div>
            <motion.button
              className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              See More <i className="fa-solid fa-cart-shopping"></i>
            </motion.button>
          </div>
        </motion.div>

        {/* Product 2 */}
        <motion.div
          className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={k6} alt="Product" />
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-gray-800">VIP Flowers</h1>
              <h2 className="text-lg font-bold text-red-500">$1500</h2>
            </div>
            <motion.button
              className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              See More <i className="fa-solid fa-cart-shopping"></i>
            </motion.button>
          </div>
        </motion.div>

        {/* Product 3 */}
        <motion.div
          className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={k10} alt="Product" />
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-gray-800">Office Flowers</h1>
              <h2 className="text-lg font-bold text-red-500">$1800</h2>
            </div>
            <motion.button
              className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              See More <i className="fa-solid fa-cart-shopping"></i>
            </motion.button>
          </div>
        </motion.div>

        {/* Product 4 */}
        <motion.div
          className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src={k9} alt="Product" />
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-gray-800">Luxury Flower</h1>
              <h2 className="text-lg font-bold text-red-500">$2000</h2>
            </div>
            <motion.button
              className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              See More <i className="fa-solid fa-cart-shopping"></i>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Section 4 */}
      <h1 className='text-center text-2xl pt-6 '>Showcase Section</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7">
        {/* Product 1 */}
        <motion.div
          className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src="https://i.pinimg.com/474x/10/66/a3/1066a3710a7ddf5c3f40115395e73555.jpg" alt="Product" />
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-gray-800">House Flowers</h1>
              <h2 className="text-lg font-bold text-red-500">$1200</h2>
            </div>
            <motion.button
              className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              See More <i className="fa-solid fa-cart-shopping"></i>
            </motion.button>
          </div>
        </motion.div>

        {/* Product 2 */}
        <motion.div
          className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src="https://i.pinimg.com/474x/d6/88/d0/d688d0fedea1da1d5b736c59b51e9842.jpg" alt="Product" />
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-gray-800">VIP Flowers</h1>
              <h2 className="text-lg font-bold text-red-500">$1500</h2>
            </div>
            <motion.button
              className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              See More <i className="fa-solid fa-cart-shopping"></i>
            </motion.button>
          </div>
        </motion.div>

        {/* Product 3 */}
        <motion.div
          className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src="https://i.pinimg.com/736x/43/c8/0f/43c80f07c99b20c595e694e57ab360eb.jpg" alt="Product" />
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-gray-800">Office Flowers</h1>
              <h2 className="text-lg font-bold text-red-500">$1800</h2>
            </div>
            <motion.button
              className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              See More <i className="fa-solid fa-cart-shopping"></i>
            </motion.button>
          </div>
        </motion.div>

        {/* Product 4 */}
        <motion.div
          className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" src="https://i.pinimg.com/474x/dc/da/a2/dcdaa2db44bfc8be68e8cb9403e783aa.jpg" alt="Product" />
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-gray-800">Luxury Flower</h1>
              <h2 className="text-lg font-bold text-red-500">$2000</h2>
            </div>
            <motion.button
              className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              See More <i className="fa-solid fa-cart-shopping"></i>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div> 
    </>
}

export default Product;
