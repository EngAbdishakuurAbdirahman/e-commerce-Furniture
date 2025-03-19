// import React from 'react';
// import { useSelector } from 'react-redux';
// import { motion } from 'framer-motion';

// function Cart() {
//   const cartItem = useSelector((state) => state.cart.cartItem);

//   return (
//     <div className="pt-20 min-h-screen bg-gray-50 flex justify-center">
//       <div className="w-full max-w-5xl px-6">
//         <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Shopping Cart</h1>

//         {cartItem.length === 0 ? (
//           <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
//         ) : (
//           <div className="grid md:grid-cols-2 gap-6">
//             {cartItem.map((item, index) => (
//               <motion.div key={index} className="flex items-center bg-white shadow-md rounded-lg overflow-hidden p-4"  whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
//                 {/* Image */}
//                 <img className="w-40 h-32 object-cover rounded-lg" src={item.img}alt={item.title}/>

//                 {/* Title & Price */}
//                 <div className="flex-1 ml-4">
//                   <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
//                   <p className="text-blue-600 font-bold text-lg">${item.price}</p>
//                 </div>

//                 {/* Delete Button */}
//                 <motion.button
//                   className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all flex items-center gap-2"
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <i className="fa-solid fa-trash"></i> Delete
//                 </motion.button>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Cart;



// import React from 'react';
// import { useSelector } from 'react-redux';
// import { motion } from 'framer-motion';

// function Cart() {
//   const cartItems = useSelector((state) => state.cart.cartItem); // Ka hel Redux store

//   return (
//     <div className="pt-20 min-h-screen bg-gray-50 flex justify-center">
//       <div className="w-full max-w-5xl px-6">
//         <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Shopping Cart</h1>

//         {cartItems.length === 0 ? (
//           <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
//         ) : (
//           <div className="grid md:grid-cols-2 gap-6">
//             {cartItems.map((item, index) => (
//               <motion.div 
//                 key={index} 
//                 className="flex items-center bg-white shadow-md rounded-lg overflow-hidden p-4"  
//                 whileHover={{ scale: 1.02 }} 
//                 transition={{ duration: 0.3 }}
//               >
//                 {/* Image */}
//                 <img 
//                   className="w-40 h-32 object-cover rounded-lg" 
//                   src={item?.img || "https://via.placeholder.com/150"} 
//                   alt={item?.title || "No Image"} 
//                 />

//                 {/* Title & Price */}
//                 <div className="flex-1 ml-4">
//                   <h2 className="text-lg font-semibold text-gray-800">{item?.title || 'No Title'}</h2>
//                   <p className="text-blue-600 font-bold text-lg">${item?.price || '0.00'}</p>
//                 </div>

//                 {/* Delete Button */}
//                 <motion.button
//                   className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all flex items-center gap-2"
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <i className="fa-solid fa-trash"></i> Delete
//                 </motion.button>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Cart;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { motion } from "framer-motion";


// function Cart() {
//   const cartItems = useSelector((state) => state.cart.cartItem); // Ka hel Redux store
//   const dispatch = useDispatch(); // Dispatch function Redux

//   return (
//     <div className="pt-20 min-h-screen bg-gray-50 flex justify-center">
//       <div className="w-full max-w-5xl px-6">
//         <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
//           Shopping Cart
//         </h1>

//         {cartItems.length === 0 ? (
//           <p className="text-center text-lg text-gray-500">
//             Your cart is empty.
//           </p>
//         ) : (
//           <div className="grid md:grid-cols-2 gap-6">
//             {cartItems.map((item) => (
//               <motion.div
//                 key={item.id}
//                 className="flex items-center bg-white shadow-md rounded-lg overflow-hidden p-4"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {/* Image */}
//                 <img
//                   className="w-40 h-32 object-cover rounded-lg"
//                   src={item.img || "https://via.placeholder.com/150"}
//                   alt={item.title || "No Image"}
//                 />

//                 {/* Title & Price */}
//                 <div className="flex-1 ml-4">
//                   <h2 className="text-lg font-semibold text-gray-800">
//                     {item.title || "No Title"}
//                   </h2>
//                   <p className="text-blue-600 font-bold text-lg">
//                     ${item.price || "0.00"}
//                   </p>
//                 </div>

//                 {/* Delete Button */}
//                 <motion.button
//                   onClick={() => dispatch(removeFromCart(item))}
//                   className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all flex items-center gap-2"
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <i className="fa-solid fa-trash"></i> Delete
//                 </motion.button>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Cart;


import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { removeFromCart } from "../Redix/Reducer/Cart"; // Import reducer

function Cart() {
  const cartItems = useSelector((state) => state.Cart.CartItem); // Ka hel Redux store
  const dispatch = useDispatch(); // Dispatch function Redux

  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-5xl px-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-gray-500">
            Your cart is empty.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                className="flex items-center bg-white shadow-md rounded-lg overflow-hidden p-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <img
                  className="w-40 h-32 object-cover rounded-lg"
                  src={item.img || "https://via.placeholder.com/150"}
                  alt={item.title || "No Image"}
                />

                {/* Title & Price */}
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title || "No Title"}
                  </h2>
                  <p className="text-blue-600 font-bold text-lg">
                    ${item.price || "0.00"}
                  </p>
                </div>

                {/* Delete Button */}
                <motion.button
                  onClick={() => dispatch(removeFromCart(item.id))} // Sax dispatch
                  className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all flex items-center gap-2"
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fa-solid fa-trash"></i> Delete
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
