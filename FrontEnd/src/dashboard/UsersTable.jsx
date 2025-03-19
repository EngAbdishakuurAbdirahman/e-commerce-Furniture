// import { useEffect, useState } from "react";
// import axios from "axios";

// const UsersTable = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch users when component mounts
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:5000/api/users");
//       setUsers(data);
//     } catch (error) {
//       setError("❌ Failed to fetch users.");
//       console.error("Error fetching users:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4 text-center">All Registered Users</h2>

//       {loading ? (
//         <p className="text-center text-blue-600">🔄 Loading users...</p>
//       ) : error ? (
//         <p className="text-center text-red-500">{error}</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border rounded-lg shadow-md">
//             <thead className="bg-gray-100 border-b">
//               <tr>
//                 <th className="py-2 px-4 text-left">#</th>
//                 <th className="py-2 px-4 text-left">Name</th>
//                 <th className="py-2 px-4 text-left">Email</th>
//                 <th className="py-2 px-4 text-left">Role</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={user._id} className="border-b hover:bg-gray-50">
//                   <td className="py-2 px-4">{index + 1}</td>
//                   <td className="py-2 px-4">{user.name}</td>
//                   <td className="py-2 px-4">{user.email}</td>
//                   <td className="py-2 px-4">{user.isAdmin ? "Admin" : "User"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UsersTable;


// Lasttt...........................


// import { useEffect, useState } from "react";
// import axios from "axios";

// const UsersTable = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch users when component mounts
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:5000/api/users");
//       setUsers(data);
//     } catch (error) {
//       setError("❌ Failed to fetch users.");
//       console.error("Error fetching users:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center  min-h-screen bg-gray-100 py-2 ">
//       <div className="max-w-5xl ml-56 w-full bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">All Registered Users</h2>

//         {loading ? (
//           <p className="text-center text-blue-600">🔄 Loading users...</p>
//         ) : error ? (
//           <p className="text-center text-red-500">{error}</p>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full bg-white border border-gray-300 rounded-lg shadow-md">
//               <thead className="bg-gray-900 text-white uppercase text-sm font-semibold">
//                 <tr>
//                   <th className="py-3 px-6 text-left">#</th>
//                   <th className="py-3 px-6 text-left">Name</th>
//                   <th className="py-3 px-6 text-left">Email</th>
//                   <th className="py-3 px-6 text-left">Role</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user, index) => (
//                   <tr key={user._id} className={`border-b ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-200`}>
//                     <td className="py-3 px-6">{index + 1}</td>
//                     <td className="py-3 px-6 font-medium text-gray-800">{user.name}</td>
//                     <td className="py-3 px-6">{user.email}</td>
//                     <td className="py-3 px-6">
//                       <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${user.isAdmin ? "bg-green-500" : "bg-blue-500"}`}>
//                         {user.isAdmin ? "Admin" : "User"}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UsersTable;



import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/users");
      setUsers(data);
    } catch (error) {
      setError("❌ Failed to fetch users.");
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center ml-54  min-h-screen bg-gray-100 py-6">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 mx-4 md:mx-0">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">All Registered Users</h2>

        {loading ? (
          <p className="text-center text-blue-600">🔄 Loading users...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="overflow-x-auto">
            <motion.table 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full bg-white border border-gray-300 rounded-lg shadow-md"
            >
              <thead className="bg-gray-900 text-white uppercase text-sm font-semibold">
                <tr>
                  <th className="py-3 px-6 text-left">#</th>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <motion.tr 
                    key={user._id} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`border-b ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-200 transition-all`}
                  >
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6 font-medium text-gray-800">{user.name}</td>
                    <td className="py-3 px-6">{user.email}</td>
                    <td className="py-3 px-6">
                      <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${user.isAdmin ? "bg-green-500" : "bg-blue-500"}`}>
                        {user.isAdmin ? "Admin" : "User"}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default UsersTable;
