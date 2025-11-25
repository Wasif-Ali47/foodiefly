import { useState, useEffect } from "react";
import { FaCartPlus, FaUser, FaHeart } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart/Cart'; // Import the Cart component
import { Link } from 'react-router-dom';
import logo from "../Assets/logo.jpg"
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleCartCanvas = () => {
    setShowCart(!showCart);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleSignUpForm = () => {
    setIsSignUp(!isSignUp);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`${isScrolled ? "bg-white shadow-md fw-bold" : "bg-white text-dark fw-bold"
          } p-4 sticky top-0 z-50 transition-colors duration-300`}
      >
        <div className="container mx-auto flex justify-between items-center ">
          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-2xl "
          >
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>

          {/* Logo or brand name */}
          {/* <Link to="/" className=" text-lg font-bold">
            <img src={logo} width="100" height="100" />
          </Link> */}
          <a href="#" className="text-xl"> Logo here </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-center space-x-8">
            <Link to="/home" className=" text-lg text-red-600 hover:text-red-600"


            >
              Menu
            </Link>

            <Link to="/about" className=" text-lg text-red-600 hover:text-red-600">
              About
            </Link>

            <Link to="/contact" className="block  text-lg text-red-600 hover:text-red-600">
              Contact
            </Link>
            <Link to="/reachus" className="block  text-lg text-red-600 hover:text-red-600">
              Reach Us
            </Link>
            <Link to="/deals" className="block  text-lg text-red-600 hover:text-red-600">
              Deals
            </Link>
          </div>

          {/* Cart and User Icons */}
          <div className="flex space-x-4">
            <FaUser className="text-2xl text-red-500 cursor-pointer" onClick={toggleModal} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            <Link to="/home" className="block  text-lg text-red-600 hover:text-red-600">
              Menu
            </Link>

            <Link to="/about" className="block  text-lg text-red-600 hover:text-red-600">
              About
            </Link>

            <Link to="/contact" className="block  text-lg text-red-600 hover:text-red-600">
              Contact
            </Link>

            <Link to="/reachus" className="block  text-lg text-red-600 hover:text-red-600">
              Reach Us
            </Link>

            <Link to="/deals" className="block  text-lg text-red-600 hover:text-red-600">
              Deals
            </Link>

          </div>
        )}
      </nav>


      <Cart showCart={showCart} toggleCartCanvas={toggleCartCanvas} />

      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton className="bg-red-500 text-white">
          <Modal.Title>{isSignUp ? 'Sign Up' : 'Login'}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white py-8 px-6 sm:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold text-gray-900">
              Dive in to your account
            </h2>
          </div>
          {!isSignUp ? (
            <div>
              <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form action="#" method="POST" className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="block w-full rounded-md border border-red-500 px-3 py-2 text-base text-gray-900 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                          Password
                        </label>
                        {/* <div className="text-sm">
                          <a href="#" className="font-semibold text-red-600 hover:text-red-500">
                            Forgot password?
                          </a>
                        </div> */}
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          required
                          autoComplete="current-password"
                          className="block w-full rounded-md border border-red-500 px-3 py-2 text-base text-gray-900 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full rounded-md bg-red-500 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>

                  <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <a
                      href="#"
                      onClick={toggleSignUpForm}
                      className="font-semibold text-red-600  hover:text-red-500"
                    >
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
                      <label htmlFor="userName" className="block text-sm font-medium text-gray-900">
                        User Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="userName"
                          name="userName"
                          type="text"
                          required
                          autoComplete="username"
                          className="block w-full rounded-md border border-red-500 px-3 py-2 text-base text-gray-900 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="block w-full rounded-md border border-red-500 px-3 py-2 text-base text-gray-900 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-900">
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
                          className="block w-full rounded-md border border-red-500 px-3 py-2 text-base text-gray-900 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full rounded-md bg-red-500 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>

                  <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <a
                      href="#"
                      onClick={toggleSignUpForm}
                      className="font-semibold text-red-600 hover:text-red-500"
                    >
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>

    </>
  );
};

export default Navbar;
