import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
      setProduct(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching product:", err);
      setError("Product not found.");
      setLoading(false);
    }
  };

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img src={`http://localhost:5000${product.img}`} alt={product.title} className="w-60 h-60 object-cover mt-4 rounded" />
      <p className="text-lg mt-4"><strong>Price:</strong> ${product.price}</p>
      <p className="text-gray-600 mt-2"><strong>Description:</strong> {product.description || "No description available."}</p>
      <button className="mt-4 bg-gray-500 text-white px-4 py-2 rounded" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  );
};

export default ProductDetailsPage;
