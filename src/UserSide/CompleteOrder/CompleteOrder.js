import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import burgerImage from "../../Assets/cart-1 (2).jpg";
import burgerImage3 from "../../Assets/cart-1 (3).jpg";

const CompleteOrder = () => {

    const navigate = useNavigate();
    const [selectedTip, setSelectedTip] = useState(0);
    const [customTip, setCustomTip] = useState("");

    const products = [
        { product_ID: { _id: "4", name: "Product 3", price: 200 }, quantity: 1, image: burgerImage3 },
        { product_ID: { _id: "1", name: "Product 1", price: 100 }, quantity: 2, image: burgerImage },
        { product_ID: { _id: "2", name: "Product 2", price: 200 }, quantity: 1, image: burgerImage },
        { product_ID: { _id: "3", name: "Product 3", price: 200 }, quantity: 1, image: burgerImage3 },
    ];

    const shipping = 200;
    const subtotal = products.reduce((total, product) => total + product.product_ID.price * product.quantity, 0);

    const handleTipChange = (e) => {
        const value = e.target.value;
        setSelectedTip(value === "custom" ? customTip : parseFloat(value));
        if (value !== "custom") {
            setCustomTip("");
        }
    };

    const handleCustomTipChange = (e) => {
        const value = parseFloat(e.target.value) || 0;
        setCustomTip(value);
        setSelectedTip(value);
    };

    const totalWithTip = subtotal + shipping + (selectedTip > 0 ? (subtotal * selectedTip) / 100 : 0);

    const [paymentMethod, setPaymentMethod] = useState("");
    const [cardDetails, setCardDetails] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    const [errors, setErrors] = useState({});

    const totalAmount = subtotal + shipping;

    // Handle Input Changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };

    // Validate Card Details
    const validateCardDetails = () => {
        let newErrors = {};
        const cardRegex = /^\d{16}$/;
        const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        const cvvRegex = /^\d{3}$/;

        if (!cardRegex.test(cardDetails.cardNumber)) {
            newErrors.cardNumber = "Enter a valid 16-digit card number";
        }
        if (!expiryRegex.test(cardDetails.expiryDate)) {
            newErrors.expiryDate = "Enter expiry in MM/YY format";
        }
        if (!cvvRegex.test(cardDetails.cvv)) {
            newErrors.cvv = "Enter a valid 3-digit CVV";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle Payment
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!paymentMethod) {
            alert("Please select a payment method.");
            return;
        }

        if (paymentMethod === "Credit/Debit Card" && !validateCardDetails()) {
            return;
        }

        navigate("/orderconfirm");
    };

    return (
        <>
            
            <div className="py-12 max-w-7xl mx-auto rounded-lg  row">
                {/* Address Section */}
                <div className="col-md-6 bg-white  shadow-lg rounded-lg p-2">
                    <div>
                        <h5 className="text-xl font-semibold mb-4">Delivery Address</h5>
                        <div className="p-4 rounded-lg bg-danger bg-opacity-50">
                            <h6 className='font-semibold'>Home</h6>
                            <p className='m-0 py-1'>123 Main Street, City Name, Country</p>
                            <br></br>
                            <hr></hr>
                            <br></br>
                            <h6 className='font-semibold'>Instruction for Delivery Boy</h6>
                            <p className='m-0 py-1'>Please Never Ring the Bell</p>
                        </div>
                    </div>

                    <div className='shadow rounded-lg p-2 mt-3'>
                        <h5 className="text-xl font-semibold mb-4">Add Tip</h5>
                        <div className="grid grid-cols-5 gap-2">
                            <label

                                className={`p-4 border rounded-lg text-center cursor-pointer ${selectedTip === 0 ? "bg-red-500 text-white" : ""}`}

                            >
                                <input
                                    type="radio"
                                    name="tip"
                                    value={0}
                                    checked={selectedTip === 0}
                                    onChange={handleTipChange}
                                    className="hidden"
                                />
                                <span>No Tip</span>
                            </label>
                            <label
                                className={`p-4 border rounded-lg text-center cursor-pointer ${selectedTip === 5 ? "bg-red-500 text-white" : ""}`}


                            >
                                <input
                                    type="radio"
                                    name="tip"
                                    value={5}
                                    checked={selectedTip === 5}
                                    onChange={handleTipChange}
                                    className="hidden"
                                />
                                <span>5%</span>
                            </label>
                            <label

                                className={`p-4 border rounded-lg text-center cursor-pointer ${selectedTip === 10 ? "bg-red-500 text-white" : ""}`}

                            >
                                <input
                                    type="radio"
                                    name="tip"
                                    value={10}
                                    checked={selectedTip === 10}
                                    onChange={handleTipChange}
                                    className="hidden"
                                />
                                <span>10%</span>
                            </label>
                            <label
                                className={`p-4 border rounded-lg text-center cursor-pointer ${selectedTip === 15 ? "bg-red-500 text-white" : ""}`}


                            >
                                <input
                                    type="radio"
                                    name="tip"
                                    value={15}
                                    checked={selectedTip === 15}
                                    onChange={handleTipChange}
                                    className="hidden"
                                />
                                <span>15%</span>
                            </label>
                            <label className="p-4 border rounded-lg text-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="tip"
                                    value="custom"
                                    checked={customTip > 0}
                                    onChange={handleTipChange}
                                    className="hidden"
                                />
                                <span>Others</span>
                            </label>
                        </div>

                        {customTip > 0 && (
                            <div className="mt-4">
                                <input
                                    type="number"
                                    placeholder="Enter custom tip %"
                                    value={customTip}
                                    onChange={handleCustomTipChange}
                                    className="border p-2 rounded w-full"
                                />
                            </div>
                        )}
                    </div>
                   
                </div>

                {/* Order Summary */}
                <div className="col-md-1"></div>
                <div className="col-md-5 bg-white shadow-lg rounded-lg p-4">
                    <h5 className="text-xl font-semibold mb-4">Order Summary</h5>
                    <ul className="overflow-auto" style={{ maxHeight: "300px" }}>
                        {products.map((product) => (
                            <li key={product.product_ID._id} className="d-flex justify-content-between align-items-center mb-2">
                                <div className="d-flex align-items-center">
                                    <img className="w-20 h-20 object-cover rounded-md me-3" src={product.image} alt={product.product_ID.name} />
                                    <div>
                                        <h6 className="fw-medium">{product.product_ID.name}</h6>
                                        <p className="text-muted m-0">Quantity: {product.quantity}</p>
                                    </div>
                                </div>
                                <h6 className="fw-bold">Rs. {product.product_ID.price * product.quantity}</h6>
                            </li>
                        ))}
                    </ul>
                    {/* Total Section */}
                    <div className="border-top pt-3">
                        <div className="d-flex justify-content-between">
                            <p className="fw-medium">Subtotal</p>
                            <p>Rs. {subtotal}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="fw-medium">Service Charge</p>
                            <p>Rs. {shipping}</p>
                        </div>
                     

                        {/*  */}

                        <div className="flex justify-between d-none">
                        <p className="font-medium">Tip</p>
                        <p>Rs. {selectedTip > 0 ? ((subtotal * selectedTip) / 100).toFixed(2) : 0}</p>
                    </div>
                    <hr></hr>
                    <div className="flex justify-between font-semibold">
                        <p>Total</p>
                        <p>Rs. {totalWithTip.toFixed(2)}</p>
                    </div>

                        {/*  */}
                    </div>
                </div>
            </div>

            <div className="py-12 max-w-7xl mx-auto rounded-lg  row">
            <div className="col-md-12 bg-white shadow-lg rounded-lg p-4">
                    <h5 className="text-xl font-semibold mb-3">Select Payment Method</h5>
                    <div className="d-flex gap-2 flex-column">
                        {["Credit/Debit Card", "Cash on Delivery", "UPI/Bank Transfer"].map((method) => (
                            <label
                                key={method}
                                className={`p-2 border rounded-lg d-flex align-items-center cursor-pointer ${paymentMethod === method ? "bg-danger text-white" : ""
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="payment"
                                    value={method}
                                    checked={paymentMethod === method}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="d-none"
                                />
                                {method}
                            </label>
                        ))}
                    </div>

                    {/* Credit/Debit Card Form */}
                    {paymentMethod === "Credit/Debit Card" && (
                        <div className="mt-4 p-3 border rounded">
                            <h6>Enter Card Details</h6>
                            <div className="mb-2">
                                <label className="form-label">Card Number</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    maxLength="16"
                                    placeholder="1234 5678 9012 3456"
                                    className={`form-control ${errors.cardNumber ? "is-invalid" : ""}`}
                                    value={cardDetails.cardNumber}
                                    onChange={handleInputChange}
                                />
                                {errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber}</div>}
                            </div>

                            <div className="d-flex gap-3">
                                <div className="mb-2 w-50">
                                    <label className="form-label">Expiry Date</label>
                                    <input
                                        type="text"
                                        name="expiryDate"
                                        maxLength="5"
                                        placeholder="12/25"
                                        className={`form-control ${errors.expiryDate ? "is-invalid" : ""}`}
                                        value={cardDetails.expiryDate}
                                        onChange={handleInputChange}
                                    />
                                    {errors.expiryDate && <div className="invalid-feedback">{errors.expiryDate}</div>}
                                </div>
                                <div className="mb-2 w-50">
                                    <label className="form-label">CVV</label>
                                    <input
                                        type="text"
                                        name="cvv"
                                        maxLength="3"
                                        placeholder="123"
                                        className={`form-control ${errors.cvv ? "is-invalid" : ""}`}
                                        value={cardDetails.cvv}
                                        onChange={handleInputChange}
                                    />
                                    {errors.cvv && <div className="invalid-feedback">{errors.cvv}</div>}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Pay Now Button */}
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-100 mt-4 py-3 bg-danger text-white rounded text-lg font-semibold"
                    >
                        Place Order
                    </button>
                </div>
               
            </div>
        </>
    );
};

export default CompleteOrder;