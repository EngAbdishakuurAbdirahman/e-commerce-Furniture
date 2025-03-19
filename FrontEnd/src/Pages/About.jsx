import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaCouch, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <div className="bg-[#8f8888] min-h-screen pt">
        
      {/* ✅ Hero Section */}
      <section className="relative w-full h-[40vh] mb-9 flex items-center justify-center bg-black">
        {/* ✅ Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-80 object-cover opacity-70"
        >
          <source
            src="https://media.istockphoto.com/id/2198675478/video/elegant-modern-living-room-with-white-led-lighting.mp4?s=mp4-640x640-is&k=20&c=FOBrPcyExoZBt8weSyU8vLSzQxi_QQYT4iwYWMNhUBQ="
            type="video/mp4"
          />
        </video>

        {/* ✅ Overlay */}
        <div className="absolute inset-0 bg- bg-opacity-30"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#183b50] ">About Our <span className="text-white">Furniture</span></h1>
          <p className="mt-4 text-lg md:text-xl">Quality & <span className="text-[#183b50] font-semibold">Elegance</span> in Every Piece</p>
        </motion.div>
      </section>

      {/* ✅ Why Choose Us Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Our Furniture?</h2>
          <p className="mt-4 text-gray-600">We provide high-quality, durable, and stylish furniture tailored to meet your needs.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Premium Quality", icon: <FaAward size={30} className="text-yellow-500 mx-auto" />, desc: "Crafted from the finest materials to ensure durability and elegance." },
            { title: "Modern Design", icon: <FaCouch size={30} className="text-blue-500 mx-auto" />, desc: "Stylish furniture that fits perfectly in any contemporary home." },
            { title: "Affordable Prices", icon: <FaDollarSign size={30} className="text-green-500 mx-auto" />, desc: "High-quality furniture at prices that don’t break the bank." }
          ].map((feature, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.2 }} className="bg-white p-6 rounded-lg shadow-md text-center">
              {feature.icon}
              <h3 className="text-xl font-semibold mt-3">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Our Story Section */}
      <section className="py-16 px-6 md:px-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-3xl font-bold text-gray-800">Our <span className="text-[#E7A933]">Story</span></motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum reprehenderit cupiditate repellat in ex odit temporibus nesciunt? 
    Similique accusamus unde ipsa dolores eaque mollitia, sit eligendi laudantium consectetur? Impedit labore eos ratione quisquam tempore 
    nostrum ipsa reiciendis quos ipsum sint dolore quas molestiae sequi unde, voluptas fugit nulla magni cum? Consequatur nemo soluta quos! Iusto pariatur, 
    sint ab tempore architecto cumque dolorem officiis vero obcaecati. Veritatis quia alias facere fuga rem, doloremque aperiam totam modi magnam praesentium eos 
    voluptate consequatur? Maiores, ex. Modi, maiores sit quidem voluptatibus atque, esse rem sequi quae architecto quis harum quibusdam animi ipsum laborum nemo?
        
          </motion.p>
        </div>
      </section>

      {/* ✅ Meet Our Team Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-gray-800 text-center"
        >
          Meet Our Team
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Abdishakuur Abdirahman", role: "CEO & Founder", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGdC3G9dRgDCQ0oomwUblqjeQtV__YrF1LFg&s" },
            { name: "Ayaan Abdullahi", role: "Lead Designer", img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Clinton_Circle.png" },
            { name: "Moe Dev", role: "Operations Manager", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRazZSSLIvgocVaaULccBFTXK-DYeQAi5khqyfwwPAyztaeFVo5M0sAe-OvuoJNgu0YkbY&usqp=CAU" }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
            >
              <img src={member.img} alt={member.name} className="w-24 h-24 mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Contact Us Section */}
      <section className="py-16 px-6 md:px-16 bg-gray-900 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-gray-300">Have any questions? Contact us and let’s make your home beautiful together.
        </motion.p>
        <Link to="/contact"> <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 px-6 py-3 bg-[#E7A933] text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition-all">Contact Us</motion.button>
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
