import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-400 to-red-500 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-white rounded-2xl shadow-2xl p-6 text-center max-w-md relative overflow-hidden"
      >
        {/* Animated Check Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 120 }}
          className="flex justify-center mb-4"
        >
          <CheckCircle size={80} className="text-red-500" />
        </motion.div>

        {/* Order Confirmed Text */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-2xl font-bold text-gray-800"
        >
          Order Confirmed!
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-gray-600 mt-2"
        >
          Thank you for your order. Your delicious food is on the way! 🚀
        </motion.p>

        {/* Confetti Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute inset-0 pointer-events-none"
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -20, x: Math.random() * 300 - 150, opacity: 0 }}
              animate={{ y: [0, 100, 200], opacity: [1, 0.8, 0] }}
              transition={{ duration: 2, delay: i * 0.1 }}
              className="w-2 h-2 bg-white rounded-full absolute"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 50}%` }}
            />
          ))}
        </motion.div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 bg-red-500 text-white px-6 py-2 rounded-full shadow-lg transition-all hover:bg-green-600"
        >
         See More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default OrderConfirmation;