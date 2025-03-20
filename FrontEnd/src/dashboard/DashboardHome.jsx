// import React from 'react'
// import Boxes from "../Components/Boxes"
// import SideNav from '../Components/SideNav'
// function Dashboard() {
//   return <>
//   <SideNav/>
//   <Boxes />
//     </>
  
// }

// export default Dashboard



// import { FaBoxOpen, FaClipboardList, FaUsers } from "react-icons/fa";
// import { useNavigate } from "react-router-dom"; 

// const DashboardHome = () => {

//   const navigate =useNavigate()
//   return (
//     <div className="p-6 bg-white shadow-md rounded-lg max-w-5xl mx-auto">
//       <h1 className="text-3xl font-bold text-center">Welcome to Admin Dashboard</h1>
//       <p className="mt-2 text-gray-600 text-center">Manage products, orders, and users from here.</p>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
//         <div className="p-6 bg-blue-500 text-white rounded-lg shadow-md flex items-center justify-center">
//           <FaBoxOpen size={30} />
//           <div className="ml-4">
//             <h2 className="text-xl font-bold">Total Products</h2>
//             <p className="text-3xl font-bold">120</p>
//           </div>
//         </div>
//         <div className="p-6 bg-green-500 text-white rounded-lg shadow-md flex items-center justify-center">
//           <FaClipboardList size={30} />
//           <div className="ml-4">
//             <h2 className="text-xl font-bold">Total Orders</h2>
//             <p className="text-3xl font-bold">45</p>
//           </div>
//         </div>
//         <div onClick={() => navigate("/dashboard/users")} className="p-6 bg-yellow-500 text-white rounded-lg shadow-md flex items-center justify-center">
//           <FaUsers size={30} />
//           <div className="ml-4">
//             <h2 className="text-xl font-bold">Total Users</h2>
//             <p className="text-3xl font-bold">300</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardHome;




import { useEffect, useState } from "react";
import { FaBoxOpen, FaClipboardList, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DashboardHome = () => {
  const navigate = useNavigate();
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    fetchTotalProducts();
  }, []);

  const fetchTotalProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/products");
      setTotalProducts(data.length); // ✅ Wuxuu tirinayaa dhammaan products ka
    } catch (error) {
      console.error("❌ Error fetching total products:", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Welcome to Admin Dashboard</h1>
      <p className="mt-2 text-gray-600 text-center">
        Manage products, orders, and users from here.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="p-6 bg-blue-500 text-white rounded-lg shadow-md flex items-center justify-center">
          <FaBoxOpen size={30} />
          <div className="ml-4">
            <h2 className="text-xl font-bold">Total Products</h2>
            <p className="text-3xl font-bold">{totalProducts}</p> {/* ✅ Dynamic Data */}
          </div>
        </div>
        <div className="p-6 bg-green-500 text-white rounded-lg shadow-md flex items-center justify-center">
          <FaClipboardList size={30} />
          <div className="ml-4">
            <h2 className="text-xl font-bold">Total Orders</h2>
            <p className="text-3xl font-bold">45</p>
          </div>
        </div>
        <div
          onClick={() => navigate("/dashboard/users")}
          className="p-6 bg-yellow-500 text-white rounded-lg shadow-md flex items-center justify-center"
        >
          <FaUsers size={30} />
          <div className="ml-4">
            <h2 className="text-xl font-bold">Total Users</h2>
            <p className="text-3xl font-bold">300</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
