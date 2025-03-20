// import { useEffect, useState } from "react";
// import axios from "axios";

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:5000/api/products");
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div className="p-6 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold">Manage Products</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id} className="border p-4 my-2">
//             <h3>{product.title}</h3>
//             <p>Price: ${product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductsPage;


// import { useEffect, useState } from "react";
// import axios from "axios";

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({ title: "", price: "", img: null });
//   const [editProduct, setEditProduct] = useState(null);

//   // Fetch all products
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:5000/api/products");
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle file input (image)
//   const handleFileChange = (e) => {
//     setFormData({ ...formData, img: e.target.files[0] });
//   };

//   // Create new product
//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     const formDataToSend = new FormData();
//     formDataToSend.append("title", formData.title);
//     formDataToSend.append("price", formData.price);
//     formDataToSend.append("img", formData.img);

//     try {
//       await axios.post("http://localhost:5000/api/products", formDataToSend, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       fetchProducts();
//       setFormData({ title: "", price: "", img: null });
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   // Delete product
//   const handleDeleteProduct = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`);
//       fetchProducts();
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   // Open edit form
//   const openEditForm = (product) => {
//     setEditProduct(product);
//     setFormData({ title: product.title, price: product.price, img: null });
//   };

//   // Update product
//   const handleUpdateProduct = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:5000/api/products/${editProduct._id}`, {
//         title: formData.title,
//         price: formData.price,
//       });
//       fetchProducts();
//       setEditProduct(null);
//     } catch (error) {
//       console.error("Error updating product:", error);
//     }
//   };

//   return (
//     <div className="p-6 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold">Manage Products</h1>

//       {/* Add Product Form */}
//       <form onSubmit={handleAddProduct} className="my-4 p-4 border rounded">
//         <h2 className="text-lg font-bold">Add New Product</h2>
//         <input
//           type="text"
//           name="title"
//           placeholder="Product Title"
//           value={formData.title}
//           onChange={handleChange}
//           className="border p-2 w-full mt-2"
//           required
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           value={formData.price}
//           onChange={handleChange}
//           className="border p-2 w-full mt-2"
//           required
//         />
//         <input
//           type="file"
//           name="img"
//           onChange={handleFileChange}
//           className="border p-2 w-full mt-2"
//           required
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
//           Add Product
//         </button>
//       </form>

//       {/* Products List */}
//       <ul className="mt-4">
//         {products.map((product) => (
//           <li key={product._id} className="border p-4 my-2 flex justify-between items-center">
//             <div>
//               <h3 className="text-lg font-bold">{product.title}</h3>
//               <p>Price: ${product.price}</p>
//               <img src={`http://localhost:5000${product.img}`} alt={product.title} className="w-20 h-20 object-cover mt-2" />
//             </div>
//             <div>
//               <button onClick={() => openEditForm(product)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
//                 Edit
//               </button>
//               <button onClick={() => handleDeleteProduct(product._id)} className="bg-red-500 text-white px-3 py-1 rounded">
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Edit Product Form */}
//       {editProduct && (
//         <form onSubmit={handleUpdateProduct} className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow-lg">
//             <h2 className="text-lg font-bold">Edit Product</h2>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="border p-2 w-full mt-2"
//               required
//             />
//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               className="border p-2 w-full mt-2"
//               required
//             />
//             <div className="flex mt-4">
//               <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//                 Save Changes
//               </button>
//               <button type="button" onClick={() => setEditProduct(null)} className="ml-2 bg-gray-500 text-white px-4 py-2 rounded">
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// export default ProductsPage;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({ title: "", price: "", img: null });
//   const [editProduct, setEditProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch all products
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:5000/api/products");
//       setProducts(data);
//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//       setError("Failed to load products. Check API.");
//       setLoading(false);
//     }
//   };

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle file input (image)
//   const handleFileChange = (e) => {
//     setFormData({ ...formData, img: e.target.files[0] });
//   };

//   // Create new product
//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     if (!formData.title || !formData.price || !formData.img) {
//       alert("Please fill all fields!");
//       return;
//     }

//     const formDataToSend = new FormData();
//     formDataToSend.append("title", formData.title);
//     formDataToSend.append("price", formData.price);
//     formDataToSend.append("img", formData.img);

//     try {
//       await axios.post("http://localhost:5000/api/products", formDataToSend, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       fetchProducts();
//       setFormData({ title: "", price: "", img: null });
//     } catch (err) {
//       console.error("Error adding product:", err);
//       alert("Failed to add product.");
//     }
//   };

//   // Delete product
//   const handleDeleteProduct = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`);
//       fetchProducts();
//     } catch (err) {
//       console.error("Error deleting product:", err);
//     }
//   };

//   // Open edit form
//   const openEditForm = (product) => {
//     setEditProduct(product);
//     setFormData({ title: product.title, price: product.price, img: null });
//   };

//   // Update product
//   const handleUpdateProduct = async (e) => {
//     e.preventDefault();
//     if (!formData.title || !formData.price) {
//       alert("Please fill all fields!");
//       return;
//     }

//     try {
//       await axios.put(`http://localhost:5000/api/products/${editProduct._id}`, {
//         title: formData.title,
//         price: formData.price,
//       });
//       fetchProducts();
//       setEditProduct(null);
//     } catch (err) {
//       console.error("Error updating product:", err);
//       alert("Failed to update product.");
//     }
//   };

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="flex justify-between items-center bg-white p-4 shadow-md rounded">
//         <h1 className="text-2xl font-bold">Manage Products</h1>
//         <button
//           className="flex items-center bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600"
//           onClick={() => setEditProduct({})}
//         >
//           <FaPlus className="mr-2" /> Add Product
//         </button>
//       </div>

//       {/* Products Table */}
//       <div className="mt-6 bg-white shadow-md rounded p-4">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">Image</th>
//               <th className="border p-2">Title</th>
//               <th className="border p-2">Price</th>
//               <th className="border p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.length > 0 ? (
//               products.map((product) => (
//                 <tr key={product._id} className="border-b hover:bg-gray-100">
//                   <td className="border p-2">
//                     <img
//                       src={product.img ? `http://localhost:5000${product.img}` : "https://via.placeholder.com/100"}
//                       alt={product.title}
//                       className="w-16 h-16 object-cover rounded"
//                     />
//                   </td>
//                   <td className="border p-2">{product.title}</td>
//                   <td className="border p-2">${product.price}</td>
//                   <td className="border p-2 flex justify-center space-x-2">
//                     <button onClick={() => openEditForm(product)} className="bg-yellow-500 text-white px-3 py-1 rounded">
//                       <FaEdit />
//                     </button>
//                     <button onClick={() => handleDeleteProduct(product._id)} className="bg-red-500 text-white px-3 py-1 rounded">
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="text-center p-4">
//                   No products available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Edit Product Form */}
//       {editProduct && (
//         <form onSubmit={handleUpdateProduct} className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow-lg w-96">
//             <h2 className="text-lg font-bold mb-2">Edit Product</h2>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="border p-2 w-full mt-2"
//               required
//             />
//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               className="border p-2 w-full mt-2"
//               required
//             />
//             <div className="flex mt-4">
//               <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//                 Save Changes
//               </button>
//               <button type="button" onClick={() => setEditProduct(null)} className="ml-2 bg-gray-500 text-white px-4 py-2 rounded">
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// export default ProductsPage;

//Allahu Akbar

// import { useEffect, useState } from "react";
// import axios from "axios";

// const AddProductForm = () => {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({ title: "", price: "", img: null });
//   const [preview, setPreview] = useState(null); // For Image Preview
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:5000/api/products");
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   // Handle Input Change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle File Input (Image)
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, img: file });
//     setPreview(URL.createObjectURL(file)); // Show Image Preview
//   };

//   // Create Product
//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formDataToSend = new FormData();
//     formDataToSend.append("title", formData.title);
//     formDataToSend.append("price", formData.price);
//     formDataToSend.append("img", formData.img);

//     try {
//       await axios.post("http://localhost:5000/api/products", formDataToSend, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       fetchProducts();
//       setFormData({ title: "", price: "", img: null });
//       setPreview(null);
//       alert("✅ Product Added Successfully!");
//     } catch (error) {
//       console.error("Error adding product:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-4">Add New Product</h2>
//         <form onSubmit={handleAddProduct} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-medium">Title</label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium">Price</label>
//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium">Image</label>
//             <input
//               type="file"
//               name="img"
//               onChange={handleFileChange}
//               className="w-full px-4 py-2 border rounded-lg"
//               required
//             />
//           </div>

//           {preview && (
//             <div className="text-center">
//               <p className="text-gray-500 text-sm">Image Preview</p>
//               <img src={preview} alt="Preview" className="w-32 h-32 object-cover mx-auto rounded-lg shadow-lg" />
//             </div>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
//             disabled={loading}
//           >
//             {loading ? "Adding Product..." : "Add Product"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProductForm;




import { useEffect, useState } from "react";
import axios from "axios";

const AddProductForm = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ title: "", price: "", category: "", img: null });
  const [preview, setPreview] = useState(null); // For Image Preview
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/products");
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle File Input (Image)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, img: file });
    setPreview(URL.createObjectURL(file)); // Show Image Preview
  };

  // Create Product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("category", formData.category); // ✅ Category waa la dirayaa
    formDataToSend.append("img", formData.img);

    try {
      await axios.post("http://localhost:5000/api/products", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      fetchProducts();
      setFormData({ title: "", price: "", category: "", img: null });
      setPreview(null);
      alert("✅ Product Added Successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Add New Product</h2>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* ✅ Category Selection */}
          <div>
            <label className="block text-gray-700 font-medium">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            >
              <option value="">Select Category</option>
              <option value="BedRoom">BedRoom</option>
              <option value="LivingRoom">LivingRoom</option>
              <option value="Showcase">Showcase</option>
              <option value="Flowers">Curtains and Rugs</option>
              <option value="Flowers">Flowers</option>
              <option value="Flowers">Tables</option>
              <option value="Flowers">TV Stands</option>
              <option value="Flowers">Kitchen Furniture </option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Image</label>
            <input
              type="file"
              name="img"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {preview && (
            <div className="text-center">
              <p className="text-gray-500 text-sm">Image Preview</p>
              <img src={preview} alt="Preview" className="w-32 h-32 object-cover mx-auto rounded-lg shadow-lg" />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Adding Product..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
