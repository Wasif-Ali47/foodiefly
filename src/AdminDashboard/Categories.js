import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useToast } from "../ToastManager";
import axios from "axios";
import { LoaderCircle } from "lucide-react";

const baseUrl = "https://foodeliverybackendnodejs.vercel.app";
const API = `${baseUrl}/category`;

const Categories = () => {
  const showToast = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCatagory, setNewCatagory] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [retry, setRetry] = useState(false);
  const itemsPerPage = 5;

  // ===================ADD CATAGORY==================
  console.log(newCatagory);
  const handleAddCatagory = async () => {
    try {
      const add = await axios.post(API, { name: newCatagory });
      setNewCatagory("");
      setShowAddModal(false);
      showToast("Success", "Catagory added successfully!", "success");
      fetchCategories();
    } catch (err) {
      showToast("Error", "Something went wrong!", "danger");
      console.error(err);
    }
  };

  // ====================== GETTING DATA FOR THE CATEGORIES =====================
  const fetchCategories = async () => {
    try {
      const res = await axios.get(API);
      setCategories(res.data.cats);
      setLoading(false);
    } catch (err) {
      showToast("Error", "Something went wrong!", "danger");
      setRetry(true);
      console.error(err);
    }
  };

  const handleRetry = () => {
    setLoading(true);
    fetchCategories();
    setRetry(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // ================== SHOW FIVE  PER PAGE=========================
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const currentPageCategories = categories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-red-500 mb-4">Categories List</h2>
      <button
        onClick={() => setShowAddModal(true)}
        className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        <FaPlus className="mr-2" /> Add Category
      </button>

      <table className="w-full mt-4 bg-white border rounded-lg shadow-md">
        <thead className="bg-red-500 text-white">
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">Created</th>
        </thead>
        <tbody>
          {loading ? (
            retry ? (
              <tr>
                <td colSpan={5} className="text-center p-4">
                  <button onClick={handleRetry}>
                    <LoaderCircle />
                  </button>
                </td>
              </tr>
            ) : (
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="border-b hover:bg-red-100">
                  <td className="p-3">
                    <div className="h-[24px] w-20 bg-gray-300 rounded-lg shimmer"></div>
                  </td>
                  <td className="p-3">
                    <div className="h-[24px] w-44 bg-gray-300 rounded-lg shimmer"></div>
                  </td>
                </tr>
              ))
            )
          ) : currentPageCategories.length < 1 ? (
            <tr>
              <td colSpan="2" className="text-center p-4">
                No Categories Found, Please Add Some...
              </td>
            </tr>
          ) : (
            currentPageCategories.map((catagory) => (
              <tr key={catagory._id} className="border-b hover:bg-red-100">
                <td className="p-3">{catagory.name}</td>
                <td className="p-3">{catagory.createdAt}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="flex justify-between mt-3">
        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>

      {/*=========================== Add Category Modal =================================*/}
      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center bg-red-500 text-white p-4 rounded-t-lg">
              <h2 className="text-lg font-semibold">Add Category</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-white text-xl"
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              <label className="block text-gray-700 font-medium mb-2">
                Category Name
              </label>
              <input
                type="text"
                value={newCatagory}
                onChange={(e) => setNewCatagory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter category name"
              />
            </div>
            <div className="flex justify-end space-x-2 bg-gray-100 p-4 rounded-b-lg">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Close
              </button>
              <button
                onClick={handleAddCatagory}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
