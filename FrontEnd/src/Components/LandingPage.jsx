import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-white w-full min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-6">
        <header className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-yellow-500">Furnee</div>
          <nav className="space-x-8 text-gray-600">
            <a href="#" className="hover:text-yellow-500">Home</a>
            <a href="#" className="hover:text-yellow-500">Products</a>
            <a href="#" className="hover:text-yellow-500">Shop</a>
            <a href="#" className="hover:text-yellow-500">About us</a>
            <a href="#" className="hover:text-yellow-500">Contact</a>
          </nav>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition">Sign Up</button>
        </header>

        <div className="flex flex-col lg:flex-row items-center gap-8 mt-12">
          <div className="text-left max-w-lg">
            <h1 className="text-5xl font-bold text-gray-800">
              Furniture that reflect your <span className="text-yellow-500">lifestyle</span>
            </h1>
            <p className="text-gray-600 mt-4">
              We provide you selected and best quality materials that suit your dream home.
            </p>
            <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition">
              Get Started ➔
            </button>
          </div>

          <div className="relative">
            <div className="absolute -top-90 left-19 bg-blue-100 w-[960%] h-[560px] transform rotate-24 rounded-lg ml-60 shadow-xl"></div>
            <img src="https://i.pinimg.com/736x/03/1d/b6/031db6f0d23a2e11b3b06cc36a7a60f1.jpg" alt="Sofa" className="relative z-10 w-full max-w-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
