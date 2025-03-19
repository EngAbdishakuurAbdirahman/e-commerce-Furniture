// import React, { useState } from 'react';
// import axios from 'axios';

// const Contact = () => {

//   const [name,setName] = useState("")
//   const [email,setEmail] = useState("")
//   const [description,setDescription] = useState("")

//   // const handleGetData = ()=>{

//   //   axios.post("http://127.0.0.1:2000/xog/create", {
//   //     "name" :name,
//   //     "email" :email,
//   //     "description" : description
//   //   }).then(()=>{
//   //     alert("Database has been Updated")
//   //   }).catch((error)=>console.log(error))
//   // }

//   const handleGetData = (e) => {
//     e.preventDefault(); // Prevents the form from refreshing the page
  
//     axios.post("http://127.0.0.1:2000/xog/create", {

//       "name" :name,
//       "email" :email,
//       "description" : description
//     })
//       .then(() => {
//         alert("Database has been updated successfully!");
//       })
//       .catch((error) => console.log(error))
//   }
//   return <>
//   {/* <Header /> */}
//     <div className="min-h-screen bg-[#fdf0d5] flex flex-col items-center py-10 px-4">
//       <h1 className="text-4xl font-extrabold text-[#003049] mb-8 text-center">Contact Us</h1>

//       {/* Contact Form */}
//       <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
//         <form className="grid grid-cols-1 gap-6">
//           {/* Name Field */}
//           <div>
//             <label  className="block text-gray-800 font-bold mb-2">Name</label>
//             <input value={name} onChange={(e)=>setName(e.target.value)} type="text"  placeholder="Your Name"  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
//           </div>

//           {/* Email Field */}
//           <div>
//             <label htmlFor="email" className="block text-gray-800 font-bold mb-2">Email</label>
//             <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name='email'  placeholder="Your Email"  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" required/>
//           </div>

//           {/* Message Field */}
//           <div>
//             <label htmlFor="message" className="block text-gray-800 font-bold mb-2">Message</label>
//             <textarea value={description} onChange={(e)=>setDescription(e.target.value)}  placeholder="Your Message"  rows="5"  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" required ></textarea>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button onClick={handleGetData} type="submit" className="w-full bg-gradient-to-r to-[#fdf0d5] from-[#022538] text-white font-semibold py-2 px-4 rounded-lg hover:from-[#fdf0d5] hover:to-[#022538] transition duration-300">Send Message
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Map Section */}
//       <div className="w-full max-w-4xl mt-10">
//         <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Location</h2>
//         <div className="w-full h-[300px] aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
//           <iframe
//             title="Google Map"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093643!2d144.9556510153181!3d-37.817313979751846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5771e2b5e9b0d2e!2sVictoria%20Market!5e0!3m2!1sen!2sus!4v1616632856115!5m2!1sen!2sus"
//             className="w-full h-full border-none"
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>

//       {/* Social Links */}
//       {/* <div className="flex justify-center space-x-6 mt-10">
//         <a href="#" className="text-purple-700 hover:text-purple-900 transition">
//           <i className="fab fa-facebook fa-2x"></i>
//         </a>
//         <a href="#" className="text-purple-700 hover:text-purple-900 transition">
//           <i className="fab fa-twitter fa-2x"></i>
//         </a>
//         <a href="#" className="text-purple-700 hover:text-purple-900 transition">
//           <i className="fab fa-instagram fa-2x"></i>
//         </a>
//       </div> */}

      
//     </div>
//     {/* <Footer /> */}
//     </>
// };

// export default Contact;





import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleGetData = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:2000/xog/create", {
        name,
        email,
        description,
      })
      .then(() => {
        alert("Database has been updated successfully!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4">
      <motion.h1 
        className="text-4xl font-extrabold text-[#003049] mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>

      <div className="w-full max-w-none h-screen flex items-center justify-center">
        {/* Contact Form & Map inside full page div */}
        <div className="w-full h-[550px] flex flex-col mx-20 md:flex-row bg-gray-200 shadow-xl rounded-2xl overflow-hidden">
          {/* Contact Form */}
          <motion.div 
            className="w-full md:w-1/2 p-8 flex flex-col justify-between"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form className="grid grid-cols-1 gap-6 flex-grow">
              <div>
                <label className="block text-gray-800 font-bold mb-2">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 font-bold mb-2">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 font-bold mb-2">Message</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Your Message"
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
              </div>
              <div>
                <motion.button
                  onClick={handleGetData}
                  type="submit"
                  className="w-full bg-gradient-to-r to-[#022538] from-[#022538] text-white font-semibold py-2 px-4 rounded-lg hover:from-[#022538] hover:to-[#022538] transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Map Section */}
          <motion.div 
            className="w-full md:w-1/2 h-full flex flex-col items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-black my-4">Our Location</h2>
            <div className="w-full h-full min-h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093643!2d144.9556510153181!3d-37.817313979751846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5771e2b5e9b0d2e!2sVictoria%20Market!5e0!3m2!1sen!2sus!4v1616632856115!5m2!1sen!2sus"
                className="w-full h-full border-none"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;