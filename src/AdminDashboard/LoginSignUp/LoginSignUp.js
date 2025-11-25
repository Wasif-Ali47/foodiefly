import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons

export function LoginForm() {
    const [error, setError] = useState(null); // To hold error message
    const [passwordVisible, setPasswordVisible] = useState(false); // To toggle password visibility
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Static credentials
        const staticEmail = "food123@gmail.com";
        const staticPassword = "food123";

        // Validate credentials
        if (email === staticEmail && password === staticPassword) {
            const token = "food123";
            localStorage.setItem("food123", token);
            navigate("/admin/dashboard"); // Navigate to the dashboard
        } else {
            setError("Invalid credentials, please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-10 space-y-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-extrabold text-center text-gray-900">Admin Login</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    {error && (
                        <div className="text-red-500 text-center mb-4">{error}</div>
                    )}
                    <div>
                        <input
                            type="text"
                            id="email"
                            placeholder="Email Address"
                            className="w-full px-5 py-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            placeholder="Password"
                            className="w-full px-5 py-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                            {passwordVisible ? (
                                <FaEyeSlash className="text-gray-500" />
                            ) : (
                                <FaEye className="text-gray-500" />
                            )}
                        </button>
                    </div>
                    <p><strong>Email : </strong>food123@gmail.com</p>
                    <p><strong>Password : </strong>food123</p>
                    <button
                        type="submit"
                        className="w-full py-3 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;