import React , {useState} from 'react';
import { FaPlus, FaList, FaTags, FaClipboardList } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DashboardHome = ({ onItemClick }) => {
    const [activeItem, setActiveItem] = useState("dashboard");
  
  const handleItemClick = (item) => {
    setActiveItem(item);
    onItemClick(item);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-white mt-5 md:mt-0 ">
      <motion.div
        className="w-full max-w-5xl px-6 py-8 text-center rounded-lg shadow-lg bg-gradient-to-br from-red-500 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-3xl md:text-5xl font-extrabold text-white mb-6"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Welcome Back, Admin!
        </motion.div>
        <motion.div
          className="text-xl text-white mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Manage your platform with ease and control.
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg flex flex-column items-center justify-center text-red-500 hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}

            onClick={() => handleItemClick("addproducts")}

          >
            <FaPlus className="text-6xl" />

            <span className="mt-2 text-sm">Add Product</span>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg flex flex-column items-center justify-center text-red-500 hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleItemClick("products")}
          >
            <FaList className="text-6xl" />
            <span className="mt-2 text-sm">Product List</span>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg flex flex-column items-center justify-center text-red-500 hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleItemClick("categories")}
          >
            <FaTags className="text-6xl" />
            <span className="mt-2 text-sm">Categories</span>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg flex flex-column items-center justify-center text-red-500 hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleItemClick("orders")}
          >
            <FaClipboardList className="text-6xl" />
            <span className="mt-2 text-sm">Order List</span>
          </motion.div>
        </div>

        <motion.div
          className="mt-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: 'spring', stiffness: 100 }}
        >
          {/* <button className="bg-red-500 text-white py-2 px-6 rounded-full text-lg hover:bg-red-600 transition-all">
            Start Managing
          </button> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DashboardHome;