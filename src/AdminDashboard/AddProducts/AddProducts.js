import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { useToast } from "../../ToastManager";
import axios from "axios";

const baseUrl = "https://foodeliverybackendnodejs.vercel.app";
const API = `${baseUrl}/products`;
const CAT = `${baseUrl}/category`;

export default function AddProducts() {
  const showToast = useToast();
  const [categories, setCategories] = useState([]);
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "",
    subCategory: "",
    shortDescription: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };
  // ===================ADD PRODUCT===================
  const handleAddProduct = async () => {
    try {
      const add = await axios.post(API, productData);
      setProductData({
        name: "",
        price: "",
        category: "",
        subCategory: "",
        shortDescription: "",
      });
      showToast("Success", "Product added successfully!", "success");
    } catch (err) {
      showToast("Error", "Something went wrong!", "danger");
      console.error(err);
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
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="container py-5 px-0">
      <div className="rounded shadow-lg p-4 mt-3  md:mx-5  md:mt-0 bg-white">
        <h4 className="text-start text-red-500 fw-bold mb-3">
          Add New Product
        </h4>
        <Form className="md:p-4">
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="name">
                <Form.Label className="fw-semibold">Product Name</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i className="fas fa-box"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    name="name"
                    value={productData.name}
                    onChange={handleInputChange}
                    className="shadow-sm"
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="price">
                <Form.Label className="fw-semibold">Price</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i className="fas fa-dollar-sign"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="number"
                    placeholder="Enter price"
                    name="price"
                    value={productData.price}
                    onChange={handleInputChange}
                    className="shadow-sm"
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="category">
                <Form.Label className="fw-semibold">Category</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i className="fas fa-tags"></i>
                  </InputGroup.Text>
                  <Form.Select
                    name="category"
                    value={productData.category}
                    onChange={handleInputChange}
                    className="border border-gray-300 shadow-sm"
                  >
                    {categories.map((cat, index) => (
                      <option key={index} 
                      value={cat.name}
                      >
                        {cat.name}
                      </option>
                    ))}
                  </Form.Select>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="subCategory">
                <Form.Label className="fw-semibold">Sub Category</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i className="fas fa-tag"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Enter sub-category"
                    name="subCategory"
                    value={productData.subCategory}
                    onChange={handleInputChange}
                    className="shadow-sm"
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={12}>
              <Form.Group controlId="shortDescription">
                <Form.Label className="fw-semibold">
                  Short Description
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i className="fas fa-info-circle"></i>
                  </InputGroup.Text>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter short description"
                    name="shortDescription"
                    value={productData.shortDescription}
                    onChange={handleInputChange}
                    className="shadow-sm"
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Button
            onClick={handleAddProduct}
            className="btn bg-red-500 btn-lg rounded shadow-lg border-0 mt-3 hover:bg-red-900"
          >
            <i className="fas fa-plus-circle me-2"></i>Add Product
          </Button>
        </Form>
      </div>
    </div>
  );
}
