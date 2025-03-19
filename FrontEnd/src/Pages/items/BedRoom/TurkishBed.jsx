import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redix/Reducer/Cart"; // Import Redux action

// Xogta badeecadaha
const products = [
    
    { id: 1, title: "Luxury Bed", price: 1200, img: "https://i.pinimg.com/474x/51/c2/7c/51c27c495bb482df04712c60b124c07d.jpg" },
    { id: 9, title: "Turkish Bed", price: 2000, img: "https://i.pinimg.com/474x/bf/8d/9e/bf8d9e73c58ac17e0885f5ebb21013c7.jpg" },
    { id: 7, title: "Turkish Bed", price: 2000, img: "https://i.pinimg.com/474x/f3/6b/3f/f36b3f348e4209347a0a926eb8edadd9.jpg" },
    { id: 8, title: "Turkish Bed", price: 2000, img: "https://i.pinimg.com/474x/a3/58/e7/a358e7a6a1ba4ff56b47211767ced62a.jpg" },
    { id: 2, title: "VIP Bed", price: 1500, img: "https://i.pinimg.com/736x/0e/08/59/0e0859b018884b7b4389e0defae5b406.jpg" },
    { id: 3, title: "Special Bed", price: 1800, img: "https://i.pinimg.com/736x/80/fd/d3/80fdd38cfba0ba9167f4f5cb1b41e903.jpg" },
    { id: 10, title: "Turkish Bed", price: 2000, img: "https://i.pinimg.com/474x/5d/62/b7/5d62b75f89513101bd22bd5888d0846b.jpg" },
    { id: 11, title: "Turkish Bed", price: 2000, img: "https://i.pinimg.com/474x/c6/b4/77/c6b47748ccaa308f8869e109233fffb9.jpg" },
    { id: 4, title: "Turkish Bed", price: 2000, img: "https://i.pinimg.com/474x/b7/14/fd/b714fd158c4b1969122ce6ef023dad22.jpg" },
    { id: 6, title: "Turkish Bed", price: 2000, img: "https://i.pinimg.com/474x/33/10/ee/3310ee7dffab48e8126bd7da5ecdd3e0.jpg" },
    { id: 12, title: "Turkish Bed", price: 2000, img: "https://i.pinimg.com/474x/c6/b4/77/c6b47748ccaa308f8869e109233fffb9.jpg" },
    { id: 5, title: "Turkish Bed", price: 2000, img: "https://i.pinimg.com/474x/c5/bf/34/c5bf34b8f05cc731a5f511c5fefd0c70.jpg" },
];

function TurkishBed() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Redux: Ku dar cart-ka
    console.log("🚀 Added to Cart:", product);
  };

  return (
    <div className="container mx-auto px-4 mt-28">
      <h1 className="text-3xl font-thin text-center mb-8 text-gray-900">
        VIP Bedroom Collection
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
                className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#0f2b3a] hover:scale-105"
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

export default TurkishBed;
