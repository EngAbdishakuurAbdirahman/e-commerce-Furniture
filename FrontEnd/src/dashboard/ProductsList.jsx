import { useEffect, useState } from "react";
import axios from "axios";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/products");
      setProducts(data);
    } catch (error) {
      setError("❌ Failed to fetch products.");
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">All Products</h2>

      {loading ? (
        <p className="text-center text-blue-600">🔄 Loading products...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={product.img} alt={product.title} className="w-full h-40 object-cover rounded-lg mb-2" />
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-gray-700">💲 {product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
