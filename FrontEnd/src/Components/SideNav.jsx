// import React from 'react'
// import SideNavList from './SideNavList'
// import { Link } from 'react-router-dom'

// function SideNav({children}) {
//   return <>

//   <div className="bg-[#183B50] w-[23%] pl-8 pt-20 h-screen fixed">
//     <SideNavList title="Dashboard" icon="fa-box" />
//     <Link to="/StudentTable"><SideNavList icon={"fa-solid fa-cart-shopping"} title={"Products"} /></Link>
//     <Link to="/StudentTable"><SideNavList icon={"fa-solid fa-user-tie"} title={"Admin"} /></Link>
//     <SideNavList title="Document" icon="fa-file" />
//     <SideNavList title="Logout" icon="fa-right-from-bracket" />
//   </div>

//   <div className="ml-[24%]">
//             {children}
//         </div>
 
//   </>
// }

// export default SideNav



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
//           <Link to="/dashboard/users" className="flex items-center px-5 py-3 hover:bg-gray-700 transition-all">
//             <FaUsers size={20} />
//             {isOpen && <span className="ml-3">Users</span>}
//           </Link>
//           <Link to="/dashboard/orders" className="flex items-center px-5 py-3 hover:bg-gray-700 transition-all">
//             <FaFileAlt size={20} />
//             {isOpen && <span className="ml-3">Orders</span>}
//           </Link>
//           <Link to="/" className="flex items-center px-5 py-3 hover:bg-red-600 transition-all">
//             <FaSignOutAlt size={20} />
//             {isOpen && <span className="ml-3">Logout</span>}
//           </Link>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className={`ml-${isOpen ? "64" : "20"} p-6 flex-1 transition-all duration-300`}>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default SideNav;
