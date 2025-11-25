import React, { useState, useRef, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import Cart from "./Cart/Cart"; // Import the Cart component
import axios from "axios";
import { useToast } from "../ToastManager";
import { Minus, Plus } from "lucide-react";

const baseUrl = "https://foodeliverybackendnodejs.vercel.app";
const API = `${baseUrl}/products`;
const ADD = `${baseUrl}/cart/add-Prouct-to-cart`;

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addToCart, setAddToCart] = useState({
        _id: "",
        name: "",
        price: "",
        quantity: 0,
        total: 0,
      });
  const showToast = useToast();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const categoryRefs = useRef({});
  const sidebarRef = useRef(null);
  const [isSidebarSticky, setIsSidebarSticky] = useState(false);

  const toggleCartCanvas = () => {
    setShowCart(!showCart);
  };

  // ====================== GET =====================
  const fetchProducts = async () => {
    try {
      const res = await axios.get(API);
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.log("An error Occured while fetching data", err);
      showToast("Error", "Something went wrong!", "danger");
    }
  };

  const productsByCategory = products.reduce((acc, product) => {
    const category = acc.find((c) => c.category === product.category);
    if (category) {
      category.products.push({_id: product._id, name: product.name, price: product.price });
    } else {
      acc.push({
        category: product.category,
        products: [{ name: product.name, price: product.price }],
      });
    }
    return acc;
  }, []);

const handleShowModal = (product) => {
  setShowModal(true);
  setSelectedProduct(product);
  setAddToCart({
    _id: product._id,
    name: product.name,
    price: product.price,
    quantity: 1,
    total: product.price,
  });
};


// increase quantity
const increaseQuantity = () => {
  setAddToCart(prev => {
    const newQty = prev.quantity + 1;
    return {
      ...prev,
      quantity: newQty,
      total: (prev.price * newQty).toFixed(2),
    };
  });
};

const decreaseQuantity = () => {
  setAddToCart(prev => {
    const newQty = prev.quantity > 1 ? prev.quantity - 1 : 1;
    return {
      ...prev,
      quantity: newQty,
      total: (prev.price * newQty).toFixed(2),
    };
  });
};



  const handleCloseModal = () => {
    setShowModal(false);

  };

const handleAddToBasket = async () => {
  if (!addToCart?._id) {
    console.log("what you mean bro?😐 addToCart missing _id");
    return;
  }

  try {
    const add = await axios.post(`${ADD}/${addToCart._id}/${addToCart.quantity}`);

    console.log("Added to cart:", add.data);
    showToast("Success", `${addToCart.name} added to basket.`, "success");
    setShowModal(false);
  } catch (err) {
    console.error("gah dayum🥀🙏 error smoked you bro:", err);
    showToast("Error", "Something went wrong!", "danger");
  }
};




  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollBottom =
      document.documentElement.scrollHeight -
      window.innerHeight -
      window.scrollY;

    if (scrollPosition > 200 && scrollBottom > 200) {
      setIsSidebarSticky(true);
    } else {
      setIsSidebarSticky(false);
    }

    const categoryPositions = Object.entries(categoryRefs.current)
      .map(([category, ref]) => {
        if (!ref) return null; 
        return { category, top: ref.getBoundingClientRect().top };
      })
      .filter(Boolean);

    const visibleCategory = categoryPositions.find(
      (pos) => pos.top >= 0 && pos.top <= window.innerHeight / 2
    );
    if (visibleCategory) {
      setActiveCategory(visibleCategory.category);
    }
  };

  const handleCategoryClick = (category) => {
    const ref = categoryRefs.current[category];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
  console.log("AddToCart state updated:", addToCart);
}, [addToCart]);

  return (
    <div className="container-fluid" style={{ marginTop: "100px" }}>
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 d-none d-lg-block">
          <div
            ref={sidebarRef}
            className={`list-group ${isSidebarSticky ? "position-fixed" : ""}`}
            style={{
              top: isSidebarSticky ? "20%" : "0",
              width: "150px",
              transition: "top 0.3s ease-in-out",
            }}
          >
            {loading
              ? // loader place holders
                Array.from({ length: 5 }).map((_, i) => (
                  <div className="list-group-item list-group-item-action d-flex align-items-center p-2">
                    <div
                      key={i}
                      className="bg-gray-300 my-1 align-items-center shimmer h-5 w-32 rounded-sm"
                    ></div>
                  </div>
                ))
              : productsByCategory.map((categoryData, index) => (
                  <button
                    key={index}
                    className={`list-group-item list-group-item-action d-flex align-items-center ${
                      activeCategory === categoryData.category
                        ? "bg-danger text-white"
                        : ""
                    }`}
                    onClick={() => handleCategoryClick(categoryData.category)}
                    style={{
                      padding: "10px 15px",
                      transition: "background-color 0.3s",
                    }}
                  >
                    {categoryData.category}
                  </button>
                ))}
          </div>
        </div>

        {/* Cards */}
        <div className="col-md-10">
          {/* cart button */}
          <div
            className="z-10 px-5 position-fixed d-flex align-items-center bg-red-500 text-white p-4 rounded"
            style={{ bottom: "20px", right: "20px", cursor: "pointer" }}
            onClick={toggleCartCanvas}
          >
            <FaCartPlus className="text-4xl me-2" />
            <span className="text-2xl">My Basket</span>
          </div>
          {/* products loop */}
          {loading ? (
            // loader place holders
            <div className="mb-5 bg-white shadow-lg p-4 rounded-lg">
              <div className="bg-gray-300 mb-4 align-items-center shimmer h-7 w-32 rounded-lg"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className=" bg-gray-300  align-items-center shimmer h-20 rounded-lg"></div>
                ))}
              </div>
            </div>
          ) : (
            productsByCategory.map((categoryData, index) => (
              <div
                key={index}
                ref={(el) => (categoryRefs.current[categoryData.category] = el)}
                className="mb-5 bg-white shadow-lg p-4 rounded-lg"
              >
                <h1 className="text-start fw-bolder mb-4 text-dark text-2xl">
                  {categoryData.category}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categoryData.products.map((product, i) => (
                    <div key={i} className="">
                      <div
                        className=" shadow-sm border rounded-lg"
                        onClick={() =>
                          handleShowModal({
                            ...product,
                            category: categoryData.category,
                          })
                        }
                        style={{
                          cursor: "pointer",
                          transition: "transform 0.3s",
                        }}
                      >
                        <div className="py-4 px-3 d-flex justify-content-between align-items-center ">
                          <span>{product.name}</span>
                          <span>${product.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <Modal
          className="rounded-lg"
          show={showModal}
          onHide={handleCloseModal}
          centered
        >
          <Modal.Header closeButton className="bg-gray-100">
            <Modal.Title className="text-xl font-semibold text-gray-800">
              {addToCart.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-white p-6">
            <div className="d-flex justify-between items-center w-100 mb-4">
              <h5 className="text-lg font-semibold text-gray-800">Price:</h5>
              <h5 className="text-lg font-semibold text-gray-800">
                ${addToCart.price}
              </h5>
            </div>

            <div className="d-flex justify-center items-center mb-4">
              <div>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-secondary ms-2 px-3 py-2 border rounded-md text-red-500 hover:bg-stone-300 hover:text-red-600"
                    onClick={decreaseQuantity}
                  >
                    <Minus/>
                  </button>
                  <span className="text-4xl font-bold px-2">{addToCart.quantity}</span>
                  <button
                    className="btn btn-outline-secondary ms-2 px-3 py-2 border rounded-md text-blue-500 hover:bg-stone-300 hover:text-blue-600 "
                    onClick={increaseQuantity}
                  >
                    <Plus/>
                  </button>
                </div>
              </div>
            </div>

            <div className="d-flex justify-center items-center w-100 mb-4">
              <h5 className="text-lg font-semibold text-gray-800">Total:</h5>
              <h5 className="text-lg font-semibold text-gray-800">
                ${addToCart.total}
              </h5>
            </div>

            <div className="d-flex justify-center items-center mt-5">
              <Button
                className="px-6 py-2 bg-red-600 text-white rounded-lg border-0 btn-lg hover:bg-red-700"
                 onClick={handleAddToBasket}
              >
                Add to Basket
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      )}
      <Cart showCart={showCart} toggleCartCanvas={toggleCartCanvas} />
    </div>
  );
};

export default CategoryProducts;
