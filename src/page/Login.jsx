import React from "react";
import Image from "../assets/auth.png";
import { Link } from "react-router-dom";

function Login() {
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
            Sign In
          </h1>
          <p className="text-center font-medium">
            Sign in to continue shopping
          </p>

          <form className="space-y-4 mt-8">
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
              Sign In
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-green-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>

          <p className="text-center font-medium my-5">
            For quick demo login click below
          </p>

          <div className="flex justify-start gap-3 flex-wrap">
            {[
              { label: "Admin", color: "bg-orange-500" },
              { label: "Customer", color: "bg-green-700" },
              { label: "Manager", color: "bg-blue-500" },
              { label: "POS Operator", color: "bg-violet-500" },
              { label: "Delivery Boy", color: "bg-pink-500" },
            ].map((role) => (
              <button
                key={role.label}
                type="button"
                className={`w-[45%] ${role.color} hover:bg-green-600 text-white font-semibold py-2 rounded-md shadow-md transition duration-300`}
              >
                {role.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
