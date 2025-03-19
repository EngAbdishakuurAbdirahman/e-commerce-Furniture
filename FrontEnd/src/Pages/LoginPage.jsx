import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // 👈 Navigation function

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle Form Submit (Login & Signup)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        // LOGIN REQUEST
        const { data } = await axios.post("http://localhost:5000/api/users/login", {
          email: formData.email,
          password: formData.password,
        });

        localStorage.setItem("userToken", data.token); // Save token
        alert("✅ Login Successful!");
        navigate("/products"); // 👈 Redirect to Products Page

      } else {
        // SIGNUP REQUEST
        await axios.post("http://localhost:5000/api/users/register", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        alert("✅ Signup Successful! You can now log in.");
        setIsLogin(true); // Switch to login form after signup
      }
    } catch (error) {
      // HANDLE LOGIN ERRORS
      if (error.response?.status === 401) {
        setError("❌ Password is incorrect"); // Haddii password qaldan yahay
      } else if (error.response?.status === 404) {
        setError("❌ User not found"); // Haddii email uusan jirin
      } else {
        setError(error.response?.data?.message || "❌ Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-md w-full">
        <div className="bg-white p-8 border border-gray-100">
          {isLogin ? (
            <>
              <h2 className="text-3xl font-extrabold text-center mt-6 mb-4">Login Page</h2>
              {error && <p className="text-red-500 text-center">{error}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" id="password" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
                </div>
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl" disabled={loading}>
                  {loading ? "Logging in..." : "Log in"}
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-extrabold text-center mb-4">Sign Up</h2>
              {error && <p className="text-red-500 text-center">{error}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" id="password" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
                </div>
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" disabled={loading}>
                  {loading ? "Signing up..." : "Continue"}
                </button>
              </form>
            </>
          )}
          <button onClick={() => setIsLogin(!isLogin)} className="mt-4 text-blue-600 hover:text-blue-700 font-bold">
            {isLogin ? "Need an account? Sign Up" : "Have an account? Log In"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
