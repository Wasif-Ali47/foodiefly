import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { jsPDF } from "jspdf";
import axios from "axios";
import { LoaderCircle, ChevronUp, ChevronDown } from "lucide-react";
import { useToast } from "../../ToastManager";

const baseUrl = "https://foodeliverybackendnodejs.vercel.app";
const API = `${baseUrl}/order/get-orders-list`;

export default function Orders() {
  const [show, setShow] = useState(false);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [retry, setRetry] = useState(false);
  const [selectedOrderData, setSelectedOrderData] = useState({});
  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const showToast = useToast();

  // ====================== GET =====================
  const fetchOrders = async () => {
    try {
      const res = await axios.get(API);
      setOrders(res.data);
      setLoading(false);
    } catch (err) {
      console.log("An error Occured while fetching data", err);
      showToast("Error", "Something went wrong!", "danger");
      setRetry(true);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  const handleRetry = () => {
    setLoading(true);
    fetchOrders();
    setRetry(false);
  };
  //   const dummyOrders = [
  //       {
  //           _id: "ORD001",
  //           price: 25.99,
  //           total_with_tip: 30.99,
  //           address_id: { city: "New York", house_no: "123", street: "Main St" },
  //           products: [
  //               { product_ID: { name: "Pizza Margherita" }, quantity: 2 },
  //               { product_ID: { name: "Garlic Bread" }, quantity: 1 },
  //           ],
  //           instructions: "Please add extra cheese on the pizza.",
  //       },
  //       {
  //           _id: "ORD002",
  //           price: 18.50,
  //           total_with_tip: 22.00,
  //           address_id: { city: "Los Angeles", house_no: "45", street: "Broadway" },
  //           products: [
  //               { product_ID: { name: "Cheeseburger" }, quantity: 1 },
  //               { product_ID: { name: "French Fries" }, quantity: 2 },
  //           ],
  //           instructions: "No onions in the burger, please.",
  //       },
  //       {
  //           _id: "ORD003",
  //           price: 12.99,
  //           total_with_tip: 15.50,
  //           address_id: { city: "Chicago", house_no: "789", street: "Lakeview Ave" },
  //           products: [
  //               { product_ID: { name: "Caesar Salad" }, quantity: 1 },
  //               { product_ID: { name: "Orange Juice" }, quantity: 1 },
  //           ],
  //           instructions: "Dressing on the side for the salad.",
  //       },
  //       {
  //           _id: "ORD004",
  //           price: 12.99,
  //           total_with_tip: 15.50,
  //           address_id: { city: "Chicago", house_no: "789", street: "Lakeview Ave" },
  //           products: [
  //               { product_ID: { name: "Caesar Salad" }, quantity: 1 },
  //               { product_ID: { name: "Orange Juice" }, quantity: 1 },
  //           ],
  //           instructions: "Dressing on the side for the salad.",
  //       },
  //       {
  //           _id: "ORD005",
  //           price: 12.99,
  //           total_with_tip: 15.50,
  //           address_id: { city: "Chicago", house_no: "789", street: "Lakeview Ave" },
  //           products: [
  //               { product_ID: { name: "Caesar Salad" }, quantity: 1 },
  //               { product_ID: { name: "Orange Juice" }, quantity: 1 },
  //           ],
  //           instructions: "Dressing on the side for the salad.",
  //       },
  //       {
  //           _id: "ORD006",
  //           price: 12.99,
  //           total_with_tip: 15.50,
  //           address_id: { city: "Chicago", house_no: "789", street: "Lakeview Ave" },
  //           products: [
  //               { product_ID: { name: "Caesar Salad" }, quantity: 1 },
  //               { product_ID: { name: "Orange Juice" }, quantity: 1 },
  //           ],
  //           instructions: "Dressing on the side for the salad.",
  //       },
  //       {
  //           _id: "ORD007",
  //           price: 12.99,
  //           total_with_tip: 15.50,
  //           address_id: { city: "Chicago", house_no: "789", street: "Lakeview Ave" },
  //           products: [
  //               { product_ID: { name: "Caesar Salad" }, quantity: 1 },
  //               { product_ID: { name: "Orange Juice" }, quantity: 1 },
  //           ],
  //           instructions: "Dressing on the side for the salad.",
  //       },
  //   ];

  const handleShow = (order) => {
    setSelectedOrderData(order);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("INVOICE", 105, 20, { align: "center" });

    doc.setFontSize(12);
    doc.text(`Order ID: ${selectedOrderData._id}`, 20, 40);
    doc.text(`Total: $${selectedOrderData.price}`, 20, 50);
    doc.text(`Total With Tip: $${selectedOrderData.total_with_tip}`, 20, 60);

    const tableColumn = ["Product Name", "Quantity"];
    const tableRows = selectedOrderData.products.map((product) => [
      product.product_ID?.name || "Deleted Product",
      product.quantity,
    ]);

    doc.autoTable({
      startY: 80,
      head: [tableColumn],
      body: tableRows,
      theme: "grid",
    });

    doc.text("Thank you for your order!", 105, doc.lastAutoTable.finalY + 10, {
      align: "center",
    });
    doc.save(`${selectedOrderData._id}.pdf`);
  };

  const handleToggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const filteredOrders = orders.filter((order) => {
    if (!searchTerm) return true;
    if (filterOption === "city") {
      return order.address_id.city
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    }
    return true;
  });

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      className="md:p-5 md:mx-5 p-1 bg-white shadow-lg rounded-lg md:mt-0 "
      style={{ marginTop: "100px" }}
    >
      <h2 className="text-red-500 font-bold text-xl mb-4">Orders List</h2>

      <div className="flex  items-center gap-4 mb-4">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md w-1/3"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border border-gray-300 p-2 rounded-md"
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
        >
          <option value="">Select Filter</option>
          <option value="city">City</option>
        </select>
      </div>
      <div className="bg-white shadow-lg p-3 rounded overflow-auto md:overflow-hidden">
        <table className="w-full text-left border-collapse ">
          <thead className="bg-red-500 text-white">
            <tr>
              <th className="p-3">Select</th>
              <th className="p-3">Order ID</th>
              <th className="p-3">City</th>
              {/* <th className="p-3">Total</th> */}
              <th className="p-3">Total with Tip</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              // loader place holders
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
                  <React.Fragment key={i}>
                    <tr>
                      <td className="p-3">
                        <div className="h-[24px] w-[24px] bg-gray-300 rounded-full shimmer"></div>
                      </td>
                      <td className="p-3">
                        <div className="h-[24px] w-24 bg-gray-300 rounded-lg shimmer"></div>
                      </td>
                      <td className="p-3">
                        <div className="h-[24px] w-24 bg-gray-300 rounded-lg shimmer"></div>
                      </td>
                      <td className="p-3">
                        <div className="h-[24px] w-12 bg-gray-300 rounded-lg shimmer"></div>
                      </td>
                      <td className="justify-end flex gap-2 p-3 items-center">
                        <div className="h-[24px] w-[24px] bg-gray-300 rounded-lg shimmer"></div>
                        <div className="h-[24px] w-[24px] bg-gray-300 rounded-lg shimmer"></div>
                      </td>
                    </tr>
                  </React.Fragment>
                ))
              )
            ) : (
              currentOrders.map((order, index) => (
                <React.Fragment key={order._id}>
                  <tr className="hover:bg-gray-100 border-b">
                    <td className="p-3">
                      <button
                        className="text-red-500 font-bold"
                        onClick={() => handleToggleRow(order._id)}
                      >
                        {expandedRow === order._id ?  <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                      </button>
                    </td>
                    <td className="p-3">
                      {String(index + 1).padStart(3, "0")}
                    </td>
                    <td className="p-3">{order.address_id?.city}</td>
                    {/* <td className="p-3">${order.price}</td> */}
                    <td className="p-3">${order.total_with_tip}</td>
                    <td className="p-3 text-right">
                      <i
                        className="fas fa-eye text-red-500 cursor-pointer mx-2"
                        onClick={() => handleShow(order)}
                      ></i>
                      <i
                        className="fas fa-trash text-red-500 cursor-pointer"
                        onClick={() =>
                          alert("Delete order with ID " + order._id)
                        }
                      ></i>
                    </td>
                  </tr>
                  {expandedRow === order._id && (
                    <>
                      <tr>
                        <td colSpan="1">
                          <b>Address</b>
                        </td>
                        <td colSpan="5">
                          <p>
                            {order.address_id.house_no &&
                              `House No: ${order.address_id.house_no}, `}
                            {order.address_id.street &&
                              `Street: ${order.address_id.street}, `}
                            {order.address_id.city &&
                              `City: ${order.address_id.city}, `}
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td colSpan="1">
                          <b>INSTRUCTIONS</b>
                        </td>
                        <td colSpan="5">
                          <p>
                            {order.instructions && ` ${order.instructions}`}
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td colSpan="6">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Product Name</th>
                                <th>Quantity</th>
                              </tr>
                            </thead>
                            <tbody>
                              {order.products.map((product, index) => (
                                <tr key={index}>
                                  <td>
                                    {product.product_ID?.name ||
                                      "Deleted Product"}
                                  </td>
                                  <td>{product.quantity}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </>
                  )}
                </React.Fragment>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-5">
        <button
          className="bg-red-500 text-white py-2 px-4 rounded"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded"
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastOrder >= filteredOrders.length}
        >
          Next
        </button>
      </div>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton className="bg-red-500 text-white">
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="overflow-auto"
          style={{ maxHeight: "calc(100vh - 250px)" }}
        >
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <p style={{ fontSize: "18px" }}>
              Order ID: {selectedOrderData._id}
            </p>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <p>
              <strong>Total:</strong> ${selectedOrderData.price}
            </p>
            <p>
              <strong>Total with Tip:</strong> $
              {selectedOrderData.total_with_tip}
            </p>
          </div>

          <h4 className="text-2xl font-semibold text-red-500 mb-4">
            Address Details
          </h4>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>House No</th>
                <th>Street</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selectedOrderData.address_id?.house_no || "N/A"}</td>
                <td>{selectedOrderData.address_id?.street || "N/A"}</td>
                <td>{selectedOrderData.address_id?.city || "N/A"}</td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginBottom: "20px" }}>
            <h4 className="text-2xl font-semibold text-red-500 mb-4">
              INSTRUCTIONS
            </h4>

            <p>{selectedOrderData?.instructions || "No Instructions"}</p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 className="text-2xl font-semibold text-red-500 mb-4">
              Ordered Products
            </h4>

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {selectedOrderData.products &&
                  selectedOrderData.products.map((product, index) => (
                    <tr key={index}>
                      <td>{product.product_ID?.name || "Deleted Product"}</td>
                      <td>{product.quantity}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={handleDownloadPDF}
          >
            Download PDF
          </button>
          <button
            className="bg-gray-400 text-white py-2 px-4 rounded"
            onClick={handleClose}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
