// // import React from 'react'
// // import Home from './Pages/Home'
// // import About from './Pages/About'
// // import {Route, Routes } from 'react-router-dom'
// // // import Product from './Pages/Product'
// // import ProductList from './Pages/ProductList'
// // import Contact from './Pages/Contact'
// // import Header from './Components/Header'
// // import Footer from './Components/Footer'
// // import Cart from './Pages/Cart'

// // function App() {
// //   return  <>
// //   <Header/>
// //     <SideNav />
// //       <Routes>
      
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/product" element={<ProductList />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="/cart" element={<Cart />} />
// //         <Route path="/DashboardLayout" element={<DashboardLayout />} />
// //       </Routes>
      
// //     <Footer/>
// //     </>
// // }

// // export default App

// import React from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import Home from './Pages/Home';
// import About from './Pages/About';
// // import ProductList from './Pages/items/ProductList';
// import ProdList2 from './Pages/items/ProdList2';
// import Contact from './Pages/Contact';
// import Cart from './Pages/Cart';
// import DashboardLayout from './Layout/DashboardLayout';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Product from './Pages/items/Product';
// import LuxuryBed from './Pages/items/BedRoom/LuxuryBEd';
// import VIPBed from './Pages/items/BedRoom/VIPBed';
// import Special from './Pages/items/BedRoom/Special';
// import TurkishBed from './Pages/items/BedRoom/TurkishBed';
// import LuxuryLiving from './Pages/items/LivingRoom/LuxuryLiving';
// import VIPLiving from './Pages/items/LivingRoom/VIPLiving';
// import SpecialLiving from './Pages/items/LivingRoom/SpecialLiving';
// import MaterialsSection from './Components/InsideHome/MaterialsSection';
// import ProductsGrid from './Components/InsideHome/ProductsGrid';
// import TestimonialCards from './Components/InsideHome/TestimonialCards';
// import LoginPage from './Pages/LoginPage';
// import ProductsPage from './Pages/ProductsPage';
// import UsersPage from './Pages/UsersPage';

// function App() {
//   const location = useLocation(); // Hel URL-ka hada 
//   const isDashboardLayout = location.pathname.startsWith('/dashboardLayout'); // Hubi haddii uu yahay dashboardLayout

//   return (
//     <>
//       {!isDashboardLayout && <Header />} {/* Haddii uusan ahayn dashboardLayout, muuji Header */}
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/TestimonialCards" element={<TestimonialCards />} />
//         <Route path="/MaterialsSection" element={<MaterialsSection />} />
//         <Route path="/ProductsGrid" element={<ProductsGrid />} />

        
//         <Route path="products" element={<ProductsPage />} />
//         <Route path="users" element={<UsersPage />} />


//         <Route path="/LoginPage" element={<LoginPage />} />


//         <Route path="/about" element={<About />} />
//         <Route path="/product" element={<Product />} />        
//         <Route path="/prod2" element={<ProdList2 />} />
//         {/* BedRoom Section         */}
//         <Route path="/luxuryBed" element={<LuxuryBed />} />        
//         <Route path="/VIPBed" element={<VIPBed />} />        
//         <Route path="/Special" element={<Special />} />        
//         <Route path="/TurkishBed" element={<TurkishBed />} />
//         {/* LivingRoom Section         */}
//         <Route path="/LuxuryLiving" element={<LuxuryLiving />} />        
//         <Route path="/VIPLiving" element={<VIPLiving />} />        
//         <Route path="/SpecialLiving" element={<SpecialLiving />} />        

//         <Route path="/contact" element={<Contact />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/dashboardLayout" element={<DashboardLayout />} />
//       </Routes>
      
//       {!isDashboardLayout && <Footer />} {/* Haddii uusan ahayn dashboardLayout, muuji Footer */}
//     </>
//   );
// }

// export default App;

//yahhhhhhhhhhhhh

// import React from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import Cart from './Pages/Cart';
// import DashboardLayout from './Layout/DashboardLayout';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import LoginPage from './Pages/LoginPage';
// import ProductsPage from './dashboard/ProductsPage';
// import UsersPage from './Pages/UsersPage';
// import TestimonialCards from './Components/InsideHome/TestimonialCards';
// import MaterialsSection from './Components/InsideHome/MaterialsSection';
// import ProductsGrid from './Components/InsideHome/ProductsGrid';
// import Product from './Pages/items/Product';

// // BedRoom Section
// import LuxuryBed from './Pages/items/BedRoom/LuxuryBEd';
// import VIPBed from './Pages/items/BedRoom/VIPBed';
// import Special from './Pages/items/BedRoom/Special';
// import TurkishBed from './Pages/items/BedRoom/TurkishBed';

// // LivingRoom Section
// import LuxuryLiving from './Pages/items/LivingRoom/LuxuryLiving';
// import VIPLiving from './Pages/items/LivingRoom/VIPLiving';
// import SpecialLiving from './Pages/items/LivingRoom/SpecialLiving';
// import ProductDetailsPage from './Pages/ProductDetailsPage';

// function App() {
//   const location = useLocation(); // Hel URL-ka hadda  
//   const isDashboard = location.pathname.startsWith('/dashboard'); // Hubi haddii uu yahay Dashboard Page

//   return (
//     <>
//       {/* Haddii user-ku uu joogo dashboard-ka, ha soo bandhigin Header & Footer */}
//       {!isDashboard && <Header />}

//       <Routes>
//         {/* Store Pages */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/LoginPage" element={<LoginPage />} />

//         {/* Product Pages */}
//         <Route path="dashboard/products" element={<ProductsPage />} />
//         <Route path="products/:id" element={<ProductDetailsPage />} /> {/* New Route */}
//         <Route path="/product" element={<Product />} />
//         <Route path="/TestimonialCards" element={<TestimonialCards />} />
//         <Route path="/MaterialsSection" element={<MaterialsSection />} />
//         <Route path="/ProductsGrid" element={<ProductsGrid />} />

//         {/* BedRoom Section */}
//         <Route path="/luxuryBed" element={<LuxuryBed />} />
//         <Route path="/VIPBed" element={<VIPBed />} />
//         <Route path="/Special" element={<Special />} />
//         <Route path="/TurkishBed" element={<TurkishBed />} />

//         {/* LivingRoom Section */}
//         <Route path="/LuxuryLiving" element={<LuxuryLiving />} />
//         <Route path="/VIPLiving" element={<VIPLiving />} />
//         <Route path="/SpecialLiving" element={<SpecialLiving />} />

//         {/* Dashboard Pages */}
//         <Route path="/dashboard/*" element={<DashboardLayout />}>
//           <Route index element={<h1>Admin Dashboard</h1>} />
//           <Route path="products" element={<ProductsPage />} />
//           <Route path="users" element={<UsersPage />} />
//         </Route>
//       </Routes>

//       {/* Haddii user-ku uu joogo dashboard-ka, ha soo bandhigin Footer */}
//       {!isDashboard && <Footer />}
//     </>
//   );
// }

// export default App;




// import React from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import Cart from './Pages/Cart';
// import DashboardLayout from './Layout/DashboardLayout';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import LoginPage from './Pages/LoginPage';
// import ProductsPage from './dashboard/ProductsPage';
// import UsersTable from './dashboard/UsersTable'; // ✅ IMPORT USERS TABLE 
// import TestimonialCards from './Components/InsideHome/TestimonialCards';
// import MaterialsSection from './Components/InsideHome/MaterialsSection';
// import ProductsGrid from './Components/InsideHome/ProductsGrid';
// import Product from './Pages/items/Product';

// // BedRoom Section
// import LuxuryBed from './Pages/items/BedRoom/LuxuryBEd';
// import VIPBed from './Pages/items/BedRoom/VIPBed';
// import Special from './Pages/items/BedRoom/Special';
// import TurkishBed from './Pages/items/BedRoom/TurkishBed';

// // LivingRoom Section
// import LuxuryLiving from './Pages/items/LivingRoom/LuxuryLiving';
// import VIPLiving from './Pages/items/LivingRoom/VIPLiving';
// import SpecialLiving from './Pages/items/LivingRoom/SpecialLiving';
// import ProductDetailsPage from './Pages/ProductDetailsPage';

// function App() {
//   const location = useLocation();
//   const isDashboard = location.pathname.startsWith('/dashboard');

//   return (
//     <>
//       {!isDashboard && <Header />}
//       <Routes>
//         {/* Store Pages */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/LoginPage" element={<LoginPage />} />

//         {/* Product Pages */}
//         <Route path="dashboard/products" element={<ProductsPage />} />
//         <Route path="products/:id" element={<ProductDetailsPage />} />
//         <Route path="/product" element={<Product />} />
//         <Route path="/TestimonialCards" element={<TestimonialCards />} />
//         <Route path="/MaterialsSection" element={<MaterialsSection />} />
//         <Route path="/ProductsGrid" element={<ProductsGrid />} />

//         {/* BedRoom Section */}
//         <Route path="/luxuryBed" element={<LuxuryBed />} />
//         <Route path="/VIPBed" element={<VIPBed />} />
//         <Route path="/Special" element={<Special />} />
//         <Route path="/TurkishBed" element={<TurkishBed />} />

//         {/* LivingRoom Section */}
//         <Route path="/LuxuryLiving" element={<LuxuryLiving />} />
//         <Route path="/VIPLiving" element={<VIPLiving />} />
//         <Route path="/SpecialLiving" element={<SpecialLiving />} />

//         {/* Dashboard Pages */}
//         <Route path="/dashboard/*" element={<DashboardLayout />}>
//           <Route index element={<h1>Admin Dashboard</h1>} />
//           <Route path="products" element={<ProductsPage />} />
//           <Route path="users" element={<UsersTable />} /> {/* ✅ USERS TABLE WAA LA DHIGAY */}
//         </Route>
//       </Routes>
//       {!isDashboard && <Footer />}
//     </>
//   );
// }

// export default App;


// Really---------------------------------------------

import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import DashboardLayout from './Layout/DashboardLayout';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LoginPage from './Pages/LoginPage';
import ProductsPage from './dashboard/ProductsPage';
import UsersTable from './dashboard/UsersTable'; // ✅ IMPORT USERS TABLE 
import TestimonialCards from './Components/InsideHome/TestimonialCards';
import MaterialsSection from './Components/InsideHome/MaterialsSection';
import ProductsGrid from './Components/InsideHome/ProductsGrid';
import Product from './Pages/items/Product';

// BedRoom Section
import LuxuryBed from './Pages/items/BedRoom/LuxuryBEd';
import VIPBed from './Pages/items/BedRoom/VIPBed';
import Special from './Pages/items/BedRoom/Special';
import TurkishBed from './Pages/items/BedRoom/TurkishBed';

// LivingRoom Section
import LuxuryLiving from './Pages/items/LivingRoom/LuxuryLiving';
import VIPLiving from './Pages/items/LivingRoom/VIPLiving';
import SpecialLiving from './Pages/items/LivingRoom/SpecialLiving';
import ProductDetailsPage from './Pages/ProductDetailsPage';

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  // Define pages that should have a transparent header
  const transparentPages = ["/", "/about"];
  const isTransparent = transparentPages.includes(location.pathname);

  return (
    <>
      {!isDashboard && <Header isTransparent={isTransparent} />}
      <Routes>
        {/* Store Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/LoginPage" element={<LoginPage />} />

        {/* Product Pages */}
        <Route path="dashboard/products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductDetailsPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/TestimonialCards" element={<TestimonialCards />} />
        <Route path="/MaterialsSection" element={<MaterialsSection />} />
        <Route path="/ProductsGrid" element={<ProductsGrid />} />

        {/* BedRoom Section */}
        <Route path="/luxuryBed" element={<LuxuryBed />} />
        <Route path="/VIPBed" element={<VIPBed />} />
        <Route path="/Special" element={<Special />} />
        <Route path="/TurkishBed" element={<TurkishBed />} />

        {/* LivingRoom Section */}
        <Route path="/LuxuryLiving" element={<LuxuryLiving />} />
        <Route path="/VIPLiving" element={<VIPLiving />} />
        <Route path="/SpecialLiving" element={<SpecialLiving />} />

        {/* Dashboard Pages */}
        <Route path="/dashboard/*" element={<DashboardLayout />} >
          <Route index element={<h1>Admin Dashboard</h1>} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="users" element={<UsersTable />} /> {/* ✅ USERS TABLE WAA LA DHIGAY */}
        </Route>
      </Routes>
      {!isDashboard && <Footer />}
    </>
  );
}

export default App;
