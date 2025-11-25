import React, { useState } from 'react';
import { FaCartPlus, FaUser, FaHeart } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleCartCanvas = () => {
        setShowCart(!showCart);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const toggleSignUpForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
            {/* Logo Centered */}
            <div className="flex-1 text-center">
                <h3 className="text-xl font-bold">Logo</h3>
            </div>

            {/* Icons on the right */}
            <div className="flex space-x-4">
                <FaCartPlus className="text-2xl cursor-pointer" onClick={toggleCartCanvas} />
                <FaUser className="text-2xl cursor-pointer" onClick={toggleModal} />
                <FaHeart className="text-2xl cursor-pointer" />
            </div>

            {/* Cart Canvas */}
            {showCart && (
                <div className="fixed top-0 right-0 w-80 h-full bg-gray-200 p-4 shadow-lg">
                    <h4 className="font-semibold">Your Cart</h4>
                    {/* Cart items go here */}
                    <Button variant="secondary" onClick={toggleCartCanvas} className="mt-4">Close</Button>
                </div>
            )}

            {/* User Modal for Login/Signup */}
            <Modal show={showModal} onHide={toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{isSignUp ? 'Sign Up' : 'Login'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                    <img
                                        alt="Your Company"
                                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                        className="mx-auto h-10 w-auto"
                                    />
                                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                                        Dive in to your account
                                    </h2>
                                </div>
                    {!isSignUp ? (
                        <div>
                            <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                              

                                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                    <form action="#" method="POST" className="space-y-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                                Email address
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    autoComplete="email"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                                    Password
                                                </label>
                                                <div className="text-sm">
                                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                        Forgot password?
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    required
                                                    autoComplete="current-password"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Sign in
                                            </button>
                                        </div>
                                    </form>

                                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                                        Not a member?{' '}
                                        <a href="#" onClick={toggleSignUpForm} className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Sign up
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                             <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                              

                              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form action="#" method="POST" className="space-y-6">
                            <div>
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                        User Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="userName"
                                            name="userName"
                                            type="userName"
                                            required
                                            autoComplete="userName"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                            Password
                                        </label>
                                        
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            autoComplete="current-password"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </form>
                            <p className="mt-10 text-center text-sm/6 text-gray-500">
                                Already have an account?{' '}
                                <a href="#" onClick={toggleSignUpForm} className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Sign In
                                </a>
                            </p>
                        </div>
                        </div>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Header;
