import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redix/Reducer/Cart"; // Import Redux action

// Xogta badeecadaha
const products = [
  { id: 1, title: "Luxury Bed", price: 1200, img: "https://i.pinimg.com/736x/a0/f3/b8/a0f3b865ff16bb7c7634223fe6c4b33b.jpg" },
  { id: 2, title: "VIP Bed", price: 1500, img: "https://i.pinimg.com/474x/c1/1f/99/c11f99410094ae8c5bbd2fc3770f9d9c.jpg" },
  { id: 3, title: "Special Bed", price: 1800, img: "https://i.pinimg.com/474x/49/50/ee/4950ee1a930e32a32fce28c7e7ef9b89.jpg" },
  { id: 4, title: "Turkish Bed", price: 2000, img: "https://i.pinimg.com/474x/94/eb/66/94eb66eb57a4f52f438bafbd20b50063.jpg" },
  { id: 5, title: "Turkish Bed", price: 2000, img: "https://i.pinimg.com/474x/0f/d7/da/0fd7daa5608c515dc8527ffb8cf2f1e0.jpg" },
  { id: 6, title: "Turkish Bed", price: 2000, img: "https://i.pinimg.com/474x/cd/fd/ab/cdfdab144de42d287efe5a3a6a9a15a6.jpg" },
  { id: 8, title: "Turkish Bed", price: 2000, img: "https://i.pinimg.com/474x/47/48/a0/4748a0ce29d85bb38a93eb3efcff5150.jpg" },
  { id: 9, title: "Turkish Bed", price: 2000, img: "https://i.pinimg.com/474x/7f/bb/03/7fbb03e1b383139976dc0727945223ae.jpg" },
  { id: 10, title: "Turkish Bed", price: 2000, img: "https://i.pinimg.com/474x/6d/ab/ce/6dabce3803a0e3f9c4f78a3f7e3354bd.jpg" },
  { id: 11, title: "Turkish Bed", price: 2000, img: "https://i.pinimg.com/474x/77/af/67/77af6763d89e9f599a9d179049d649a6.jpg" },
  { id: 12, title: "Turkish Bed", price: 2000, img: "https://i.pinimg.com/474x/21/c7/46/21c7464dce7328c052726dd592f2c7ad.jpg" },
  { id: 7, title: "Turkish Bed", price: 2000, img: "https://i.pinimg.com/474x/cd/fd/ab/cdfdab144de42d287efe5a3a6a9a15a6.jpg" },
];

function LuxuryLiving() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Redux: Ku dar cart-ka
    console.log("🚀 Added to Cart:", product);
  };

  return (
    <div className="container mx-auto px-4 mt-28">
      <h1 className="text-3xl font-Thin text-center mb-8 text-gray-800">
        Luxury Livingroom Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105"
              src={product.img}
              alt={product.title}
            />
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h2>
                <h3 className="text-lg font-bold text-red-500">${product.price}</h3>
              </div>
              <motion.button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-[#85755C] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105"
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default LuxuryLiving;
