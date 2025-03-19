// import { Link, Outlet } from "react-router-dom";
// import { FaTachometerAlt, FaBoxOpen, FaUsers, FaClipboardList, FaCog, FaSignOutAlt } from "react-icons/fa";

// const DashboardLayout = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-900 text-white flex flex-col">
//         <h2 className="text-2xl font-bold p-6">Admin Dashboard</h2>
//         <nav className="flex-1">
//           <ul>
//             <li><Link to="/dashboard" className="flex items-center px-6 py-3 hover:bg-gray-700"><FaTachometerAlt className="mr-3" />Dashboard</Link></li>
//             <li><Link to="/dashboard/products" className="flex items-center px-6 py-3 hover:bg-gray-700"><FaBoxOpen className="mr-3" />Products</Link></li>
//             <li><Link to="/dashboard/orders" className="flex items-center px-6 py-3 hover:bg-gray-700"><FaClipboardList className="mr-3" />Orders</Link></li>
//             <li><Link to="/dashboard/users" className="flex items-center px-6 py-3 hover:bg-gray-700"><FaUsers className="mr-3" />Users</Link></li>
//             <li><Link to="/dashboard/settings" className="flex items-center px-6 py-3 hover:bg-gray-700"><FaCog className="mr-3" />Settings</Link></li>
//             <li><Link to="/" className="flex items-center px-6 py-3 hover:bg-red-600"><FaSignOutAlt className="mr-3" />Logout</Link></li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;



//yahhhhhhhhhhhhhhhhhhhhhhhhh

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaTachometerAlt, FaBoxOpen, FaUsers, FaFileAlt, FaSignOutAlt, FaBars } from "react-icons/fa";
// const SideNav = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <aside className={`bg-[#183B50] h-screen ${isOpen ? "w-64" : "w-20"} transition-all duration-300 fixed text-white`}>
//         <div className="flex items-center justify-between p-5">
//           <h2 className={`text-xl font-bold ${!isOpen && "hidden"} transition-all duration-300`}>Admin Panel</h2>
//           <button onClick={() => setIsOpen(!isOpen)} className="text-white">
//             <FaBars size={20} />
//           </button>
//         </div>

//         <nav className="flex flex-col space-y-4 mt-4">
//           <Link to="/dashboard" className="flex items-center px-5 py-3 hover:bg-gray-700 transition-all">
//             <FaTachometerAlt size={20} />
//             {isOpen && <span className="ml-3">Dashboard</span>}
//           </Link>
//           <Link to="/dashboard/products" className="flex items-center px-5 py-3 hover:bg-gray-700 transition-all">
//             <FaBoxOpen size={20} />
//             {isOpen && <span className="ml-3">Products</span>}
//           </Link>
//           <Link to="/dashboard/UsersTable" className="flex items-center px-5 py-3 hover:bg-gray-700 transition-all">
//             <FaUsers size={20} />
//             {isOpen && <span className="ml-3">Users</span>}
//           </Link>
//           <Link to="/dashboard/orders" className="flex items-center px-5 py-3 hover:bg-gray-700 transition-all">
//             <FaFileAlt size={20} />
//             {isOpen && <span className="ml-3">Orders</span>}
//           </Link>
//           <Link to="/LoginPage" className="flex items-center px-5 py-3 hover:bg-red-600 transition-all">
//             <FaSignOutAlt size={20} />
//             {isOpen && <span className="ml-3">Logout</span>}
//           </Link>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className={`ml-${isOpen ? "64" : "20"} p-6 flex-1 transition-all duration-300`}>
//         {children}
//       </div>

//        {/* Main Content */}
//        <main className="flex-1 p-6">
//         <Routes>
//           <Route path="users" element={<UsersPage />} /> {/* ✅ Halkaan ku dar */}
//         </Routes>
//       </main>

//     </div>
    
//   );
// };

// export default SideNav;



import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaTachometerAlt, FaBoxOpen, FaUsers, FaFileAlt, FaSignOutAlt, FaBars } from "react-icons/fa";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className={`bg-[#183B50] h-screen ${isOpen ? "w-64" : "w-20"} transition-all duration-300 fixed text-white`}>
        <div className="flex items-center justify-between p-5">
          <h2 className={`text-xl font-bold ${!isOpen && "hidden"} transition-all duration-300`}>Admin Panel</h2>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <FaBars size={20} />
          </button>
        </div>

        <nav className="flex flex-col space-y-4 mt-4">
          <Link to="/dashboard" className="flex items-center px-5 py-3 hover:bg-gray-700 transition-all">
            <FaTachometerAlt size={20} />
            {isOpen && <span className="ml-3">Dashboard</span>}
          </Link>
          <Link to="/dashboard/products" className="flex items-center px-5 py-3 hover:bg-gray-700 transition-all">
            <FaBoxOpen size={20} />
            {isOpen && <span className="ml-3">Products</span>}
          </Link>
          <Link to="/dashboard/users" className="flex items-center px-5 py-3 hover:bg-gray-700 transition-all">
            <FaUsers size={20} />
            {isOpen && <span className="ml-3">Users</span>}
          </Link>
          <Link to="/dashboard/orders" className="flex items-center px-5 py-3 hover:bg-gray-700 transition-all">
            <FaFileAlt size={20} />
            {isOpen && <span className="ml-3">Orders</span>}
          </Link>
          <Link to="/LoginPage" className="flex items-center px-5 py-3 hover:bg-red-600 transition-all">
            <FaSignOutAlt size={20} />
            {isOpen && <span className="ml-3">Logout</span>}
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`ml-${isOpen ? "64" : "20"} p-6 flex-1 transition-all duration-300`}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
