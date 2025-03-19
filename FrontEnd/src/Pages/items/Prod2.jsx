import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redix/Reducer/Cart';
import { motion } from 'framer-motion';

function Prod2({ title, price, img }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productData = { title, price, img };
    dispatch(addToCart(productData));
  };

  return (
    <motion.div 
      className="mt-4 w-[295px] max-w-xs mb-10 flex flex-col items-center space-y-4"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105"
          src={img} 
          alt={title} 
        />
        <div className="p-4 space-y-2">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
            <h2 className="text-lg font-bold text-red-500">${price}</h2>
          </div>
          <motion.button 
            onClick={handleAddToCart} 
            className="w-full bg-[#183b50] text-white text-lg py-2 rounded-lg shadow-md flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#183b50] hover:scale-105"
            whileTap={{ scale: 0.95 }}
          >
            Add to Cart <i className="fa-solid fa-cart-shopping"></i>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Prod2;
