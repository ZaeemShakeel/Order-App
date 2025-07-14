import React from "react";
import Image from "../assets/auth.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex justify-center items-center bg-slate-100 min-h-screen px-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-lg rounded-2xl overflow-hidden bg-white">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2">
          <img
            src={Image}
            alt="register-pics"
            className="h-64 md:h-full w-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-center mb-4 text-green-600">
            Sign Up
          </h1>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Name*</label>
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <label className="text-gray-700 font-medium mb-1">Email*</label>
                <p className="font-medium text-xs text-green-500">
                  Use Phone Instead
                </p>
              </div>
              <input
                type="email"
                placeholder="example@email.com"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">
                Password*
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="flex justify-between items-center">
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className="ml-1">
                  Remember me
                </label>
              </div>
              <p className="font-medium text-xs text-green-500">
                Forgot Password
              </p>
            </div>

            <button
              type="submit"
              className="w-full rounded-3xl bg-green-500 hover:bg-green-600 text-white font-semibold py-2 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
