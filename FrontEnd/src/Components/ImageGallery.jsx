// //import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import React from 'react';
// import lux1 from "../assets/lux1.jpg"
// import bed3 from "../assets/bed3.jpg"
// import k9 from "../assets/k9.jpg"
// import wow from "../assets/wow.jpg" 
// import T1 from "../assets/T1.jpg" 
// import lux5 from "../assets/lux5.jpg" 

// // Beddel this URLs si aad ugu xirto sawiradaada saxda ah
// const images = [
//   { id: 1, url: lux5 },
//   { id: 2, url: bed3 },
//   { id: 3, url: k9 },
//   { id: 4, url: wow },
//   { id: 5, url: lux1},
//   { id: 6, url: T1 },
// ];

// const ImageGallery = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {images.map((image) => (
//           <div key={image.id} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl
//            transition-shadow duration-300 ease-in-out">
//             <img src={image.url} alt={`Furniture ${image.id}`} className="w-full h-full object-cover
//              transform hover:scale-105 transition-transform duration-300"/>
//           </div>
//         ))}
//       </div>
//       <motion.button
//               className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105"
//               whileTap={{ scale: 0.95 }}
//             >
//               Add to Cart <i className="fa-solid fa-cart-shopping"></i>
//             </motion.button>
//     </div>
//   );
// };

// export default ImageGallery;


import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';
import lux1 from "../assets/lux1.jpg";
import bed3 from "../assets/bed3.jpg";
import k9 from "../assets/k9.jpg";
import wow from "../assets/wow.jpg"; 
import T1 from "../assets/T1.jpg"; 
import lux5 from "../assets/lux5.jpg"; 

const images = [
  { id: 1, url: lux5 },
  { id: 2, url: bed3 },
  { id: 3, url: "https://i.pinimg.com/474x/ca/53/e0/ca53e0329b79066c4e35455e8255db83.jpg" },
  { id: 4, url: wow },
  { id: 5, url: "https://i.pinimg.com/736x/f5/63/42/f56342eea1f3003c3c01eb573d832ff3.jpg" },
  { id: 6, url: "https://i.pinimg.com/474x/dc/da/a2/dcdaa2db44bfc8be68e8cb9403e783aa.jpg" },
];

const ImageGallery = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className='text-center text-4xl font-semibold mb-2 text-[#183b50]'>Our Gallary View</h1>
      {/* <div className="flex">
      <hr className='bg-[#183b50] font-semibold mb-9 w-24 ml-[510px]'/>
      <hr className='bg-[#e5954b] mb-9 w-32 '/>
      </div> */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={image.url}   alt={`Furniture ${image.id}`}  className="w-full h-[350px] object-cover transform hover:scale-105 transition-transform duration-300 rounded-t-lg"
            />
            <div className="p-3 bg-white flex justify-center">
              {/* <motion.button className="bg-[#183b50] text-white text-lg py-2 px-5 rounded-lg shadow-md flex items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105" whileTap={{ scale: 0.95 }} onClick={() => navigate(`/product/${image.id}`)}>View Details <i className="fa-solid fa-arrow-right"></i>
              </motion.button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
