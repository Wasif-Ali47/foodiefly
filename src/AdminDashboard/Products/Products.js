import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
  Collapse,
  Form,
} from "react-bootstrap";
import axios from "axios";
import { LoaderCircle, ChevronUp, ChevronDown } from "lucide-react";
import { useToast } from "../../ToastManager";

const baseUrl = "https://foodeliverybackendnodejs.vercel.app";
const API = `${baseUrl}/products`;
const CAT = `${baseUrl}/category`;

export default function Products() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [expandedRows, setExpandedRows] = useState([]);
  const [productData, setProductData] = useState({});
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [retry, setRetry] = useState(false);
  const showToast = useToast();

  // ====================== GET =====================
  const fetchProducts = async () => {
    try {
      const res = await axios.get(API);
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.log("An error Occured while fetching data", err);
      showToast("Error", "Something went wrong!", "danger");
      setRetry(true);
    }
  };


    // ====================== GETTING DATA FOR THE CATEGORIES =====================
    const fetchCategories = async () => {
      try {
        const cat = await axios.get(CAT);
        setCategories(cat.data.cats);
      } catch (err) {
        showToast("Error", "Something went wrong!", "danger");
        console.error(err);
      }
    };

  // ======================= PUT  ==========================
  const handleUpdate = async () => {
    try {
      await axios.put(`${API}/${productData._id}`, productData);
      const res = await axios.get(API);
      setProducts(res.data);
      handleCloseEditModal();
      showToast("Success", "Product updated successfully!", "success");
    } catch (err) {
      showToast("Error", "Something went wrong!", "danger");
    }
  };

  // ======================== DELETE ========================
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setProducts(products.filter((p) => p._id !== id));
      showToast("Success", "Product deleted successfully!", "success");
    } catch (err) {
      console.log("error deleting item", err);
      showToast("Error", "Something went wrong!", "danger");
    }
  };

 const handleRetry = () => {
    setLoading(true);
    fetchProducts();
    setRetry(false);
  }; 

  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = (product) => {
    setProductData(product);
    setShowEditModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleRowToggle = (id) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const maxEntriesPerPage = 5;
  const totalPages = Math.ceil(filteredProducts.length / maxEntriesPerPage);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * maxEntriesPerPage,
    page * maxEntriesPerPage
  );

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto p-6 mt-5 md:mt-0">
      <div className="m-0 md:px-2 row mb-2">
        <div className="col-md-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Food Items List
          </h2>
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="block w-full py-2 px-3 border border-gray-300 rounded-md"
            placeholder="Search food items..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="bg-white shadow-lg p-3 rounded overflow-auto md:overflow-hidden">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>**</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price ($)</th>
              <th className="text-right">Actions</th>
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
                      <td >
                        <div className="h-[24px] w-[24px] bg-gray-300 rounded-full shimmer"></div>
                      </td>
                      <td>
                        <div className="h-[24px] w-44 bg-gray-300 rounded-lg shimmer"></div>
                      </td>
                      <td>
                        <div className="h-[24px] w-36 bg-gray-300 rounded-lg shimmer"></div>
                      </td>
                      <td>
                        <div className="h-[24px] w-16 bg-gray-300 rounded-lg shimmer"></div>
                      </td>
                      <td className="justify-end flex gap-2 items-center">
                        <div className="h-[24px] w-8 bg-gray-300 rounded-lg shimmer"></div>
                        <div className="h-[24px] w-8 bg-gray-300 rounded-lg shimmer"></div>
                      </td>
                    </tr>
                  </React.Fragment>
                ))
              )
            ) : (
              // map array here
              paginatedProducts.map((product) => (
                <React.Fragment key={product._id}>
                  <tr className="hover:bg-gray-100 border-b">
                    <td>
                      <button
                        onClick={() => handleRowToggle(product._id)}
                        className="text-red-500"
                      >
                        {expandedRows.includes(product._id) ? <ChevronUp size={20}/> : <ChevronDown size={20}/> }
                      </button>
                    </td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td className="text-right">
                      <i
                        className="fas fa-edit text-red-500 cursor-pointer mr-3"
                        onClick={() => handleShowEditModal(product)}
                      ></i>
                      <i
                        className="fas fa-trash text-red-500 cursor-pointer"
                        onClick={() => handleDelete(product._id)}
                      ></i>
                    </td>
                  </tr>

                  <tr className="h-0">
                    <td colSpan={5} className="bg-transparent h-0">
                      <Collapse in={expandedRows.includes(product._id)}>
                        <div>
                          <strong>Description:</strong>{" "}
                          {product.shortDescription}
                        </div>
                      </Collapse>
                    </td>
                  </tr>
                </React.Fragment>
              ))
              // map ends here
            )}
          </tbody>
        </table>

        <div className="d-flex justify-content-between mt-3">
          <button
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
            className="py-2 px-4 bg-red-500 text-white rounded-md"
          >
            Prev
          </button>
          <button
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
            className="py-2 px-4 bg-red-500 text-white rounded-md"
          >
            Next
          </button>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal
        show={showEditModal}
        onHide={handleCloseEditModal}
        size="lg"
        centered
      >
        <Modal.Header className="bg-white text-dark flex justify-between items-center p-4">
          <h5 className="text-2xl font-bold text-red-500">Edit Food Item</h5>
          <button onClick={handleCloseEditModal} className="text-gray-500">
            <i className="fas fa-times"></i>
          </button>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <Form.Label className="font-semibold">Edit Name</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <i className="fas fa-tag"></i>
                </InputGroup.Text>
                <FormControl
                  placeholder="Food Name *"
                  name="name"
                  value={productData.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2"
                />
              </InputGroup>
            </Col>

            <Col md={6}>
              <Form.Label className="font-semibold">Edit Category</Form.Label>
              <Form.Select
                name="category"
                value={productData.category}
                onChange={handleInputChange}
                className="border border-gray-300 shadow-sm"
              >
                {categories.map((cat, index) => (
                  <option key={index} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={6}>
              <Form.Label className="font-semibold">Edit Price</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <i className="fas fa-dollar-sign"></i>
                </InputGroup.Text>
                <FormControl
                  placeholder="Price *"
                  name="price"
                  value={productData.price}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <Form.Label className="font-semibold">
                Edit Description
              </Form.Label>
              <FormControl
                as="textarea"
                placeholder="Short Description"
                name="shortDescription"
                value={productData.shortDescription}
                onChange={handleInputChange}
                className="border border-gray-300 p-2"
              />
            </Col>
          </Row>

          <Button
            className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-md"
            onClick={handleUpdate}
          >
            <i className="fas fa-save mr-2"></i> Save Changes
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
