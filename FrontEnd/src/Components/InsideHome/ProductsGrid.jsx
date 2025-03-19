// import React from 'react';
// import { motion } from 'framer-motion';

// const products = [
//     { id: 1, name: "Cactus Plant", price: "$8", image: "https://i.pinimg.com/736x/04/ad/41/04ad4175ef4671379b5935daaf07f7e7.jpg" },
//     { id: 2, name: "Cactus Plant", price: "$8", image: "path-to-your-image/cactus2.jpg" },
//     { id: 3, name: "Cactus Plant", price: "$8", image: "path-to-your-image/cactus3.jpg" },
//     { id: 4, name: "Cactus Plant", price: "$8", image: "path-to-your-image/cactus4.jpg" },
//     { id: 5, name: "Cactus Plant", price: "$8", image: "path-to-your-image/cactus5.jpg" },
//     { id: 6, name: "Cactus Plant", price: "$8", image: "path-to-your-image/cactus6.jpg" }
// ];

// const ProductCard = ({ product }) => {
//     return (
//         <motion.div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}>
//             <div className="relative">
//                 <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md"/>
//                 <button className="absolute top-2 right-2 text-green-500 hover:text-green-700">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                     </svg>
//                 </button>
//             </div>
//             <div className="pt-5 pb-2">
//                 <h3 className="text-gray-700 text-lg">{product.name}</h3>
//                 <p className="text-gray-500">{product.price}</p>
//                 <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-3">
//                     Iibso Hadda
//                 </button>
//             </div>
//         </motion.div>
//     );
// };

// const ProductsGrid = () => {
//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h2 className="text-2xl font-bold text-center mb-8">Waxa Aan Kuu Hayno</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {products.map(product => (
//                     <ProductCard key={product.id} product={product} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProductsGrid;


import React from 'react';
import { motion } from 'framer-motion';

const products = [
    
    { id: 1, name: "BedRoom", price: "Discount", image: "https://i.pinimg.com/474x/0c/93/60/0c936086e23f539f1bcbf0ebfd40354c.jpg" },
    { id: 2, name: "LivingRoom", price: "Discount", image: "https://i.pinimg.com/736x/30/0e/06/300e06a1fa5d13c09bfd01957f8a40c7.jpg" },
    { id: 3, name: "Chairs and Table", price: "Discount", image: "https://i.pinimg.com/736x/4b/6e/9a/4b6e9ab8b493a41c7b8dc71e106de249.jpg" },
    { id: 4, name: "Arched Full Length Mirror", price: "Discount", image: "https://i.pinimg.com/736x/40/c9/31/40c931a8056409601fc3964e1860b6ae.jpg" },
    // { id: 5, name: "Cactus Plant", price: "$8", image: "path-to-your-image/cactus4.jpg" },
    // { id: 6, name: "Cactus Plant", price: "$8", image: "path-to-your-image/cactus5.jpg" },
    // { id: 7, name: "Cactus Plant", price: "$8", image: "path-to-your-image/cactus6.jpg" }
];

const ProductCard = ({ product }) => {
    return (
        <motion.div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <div className="relative">
                {/* Check if product has iframe or image and render accordingly */}
                {product.iframe ? (
                    <iframe src={product.iframe} title={product.name} frameBorder="0" scrolling="no" className="w-full h-48"/>
                ) : (
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md"/>
                )}
                <button className="absolute top-2 right-2 text-green-500 hover:text-green-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </button>
            </div>
            <div className="pt-5 pb-2">
                <h3 className="text-gray-800 text-lg">{product.name}</h3>
                <p className="text-red-600 mt-1 font-thin">{product.price}</p>
                <button className="bg-[#183b50] hover:bg-[#183b50] text-white ml-16 py-2 px-4 rounded mt-3">View Details <i className="fa-solid fa-arrow-right"></i> </button>
            </div>
        </motion.div>
    );
};

const ProductsGrid = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold text-center mb-10 mt-6 text-[#183b50]">What We Offer To You</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsGrid;
