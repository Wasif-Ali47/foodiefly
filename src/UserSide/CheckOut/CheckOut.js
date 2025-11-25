import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const CheckoutPage = () => {
    const [addressType, setAddressType] = useState('home');
    const navigate = useNavigate();
    const handleAddressTypeChange = (e) => {
        setAddressType(e.target.value);
    };

    const renderAddressForm = () => {
        switch (addressType) {
            case 'home':
                return (
                    <>
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="formHouseNo">
                                    <Form.Label>House No</Form.Label>
                                    <Form.Control type="text" placeholder="Enter house number" className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 py-2 px-3"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formStreet">
                                    <Form.Label>Street</Form.Label>
                                    <Form.Control type="text" placeholder="Enter street" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter city" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="formPostcode">
                                    <Form.Label>Postcode</Form.Label>
                                    <Form.Control type="text" placeholder="Enter postcode" />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Group controlId="formInstructions">
                                    <Form.Label>Instructions for Delivery Boy</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Enter instructions" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </>
                );
            case 'appartment':
                return (
                    <>
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="formHouseNo">
                                    <Form.Label>House No</Form.Label>
                                    <Form.Control type="text" placeholder="Enter house number" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formAppartmentName">
                                    <Form.Label>Appartment Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter appartment name" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formFloor">
                                    <Form.Label>Floor</Form.Label>
                                    <Form.Control type="text" placeholder="Enter floor" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="formBuildingName">
                                    <Form.Label>Building Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter building name" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formEntryCode">
                                    <Form.Label>Entry Code</Form.Label>
                                    <Form.Control type="text" placeholder="Enter entry code" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter city" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="formStreet">
                                    <Form.Label>Street</Form.Label>
                                    <Form.Control type="text" placeholder="Enter street" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formPostcode">
                                    <Form.Label>Postcode</Form.Label>
                                    <Form.Control type="text" placeholder="Enter postcode" />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Group controlId="formInstructions">
                                    <Form.Label>Instructions for Delivery Boy</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Enter instructions" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </>
                );
            case 'office':
                return (
                    <>
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="formHouseNo">
                                    <Form.Label>House No</Form.Label>
                                    <Form.Control type="text" placeholder="Enter house number" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formBusinessName">
                                    <Form.Label>Business Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter business name" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formFloor">
                                    <Form.Label>Floor</Form.Label>
                                    <Form.Control type="text" placeholder="Enter floor" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="formStreet">
                                    <Form.Label>Street</Form.Label>
                                    <Form.Control type="text" placeholder="Enter street" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter city" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formPostcode">
                                    <Form.Label>Postcode</Form.Label>
                                    <Form.Control type="text" placeholder="Enter postcode" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Group controlId="formInstructions">
                                    <Form.Label>Instructions for Delivery Boy</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Enter instructions" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </>
                );
            case 'hotel':
                return (
                    <>
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="formHouseNo">
                                    <Form.Label>House No</Form.Label>
                                    <Form.Control type="text" placeholder="Enter house number" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formHotelName">
                                    <Form.Label>Hotel Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter hotel name" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formFloor">
                                    <Form.Label>Floor</Form.Label>
                                    <Form.Control type="text" placeholder="Enter floor" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="formStreet">
                                    <Form.Label>Street</Form.Label>
                                    <Form.Control type="text" placeholder="Enter street" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter city" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formPostcode">
                                    <Form.Label>Postcode</Form.Label>
                                    <Form.Control type="text" placeholder="Enter postcode" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Group controlId="formInstructions">
                                    <Form.Label>Instructions for Delivery Boy</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Enter instructions" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </>
                );
            case 'other':
                return (
                    <>
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="formHouseNo">
                                    <Form.Label>House No</Form.Label>
                                    <Form.Control type="text" placeholder="Enter house number" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formFloor">
                                    <Form.Label>Floor</Form.Label>
                                    <Form.Control type="text" placeholder="Enter floor" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formBusiness">
                                    <Form.Label>Business</Form.Label>
                                    <Form.Control type="text" placeholder="Enter business name" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="formStreet">
                                    <Form.Label>Street</Form.Label>
                                    <Form.Control type="text" placeholder="Enter street" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter city" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formPostcode">
                                    <Form.Label>Postcode</Form.Label>
                                    <Form.Control type="text" placeholder="Enter postcode" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Group controlId="formInstructions">
                                    <Form.Label>Instructions for Delivery Boy</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Enter instructions" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </>
                );
            default:
                return null;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user_id = 'user123'; // Static user ID
        const address_id = 'address456'; // Static address ID
        navigate(`/completeorder?user_id=${user_id}&address_id=${address_id}`);
    };
    return (
        <Container className="p-5 ">
            <Row className='flex item-center justify-center p-3'>
                <Col md={8} className='bg-white shadow rounded-lg p-3'>
                    <h5 className='mt-3 mb-3 font-bold text-red-500 text-xl'>Delivery Address</h5>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email or mobile phone number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Email"
                            />
                        </Form.Group>
                        <Form.Group controlId="formAddressType">
                            <Form.Label>Select Address Type</Form.Label>
                            <select
                                value={addressType}
                                onChange={handleAddressTypeChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                            >
                                <option value="home">Home</option>
                                <option value="appartment">Apartment</option>
                                <option value="office">Office</option>
                                <option value="hotel">Hotel</option>
                                <option value="other">Other</option>
                            </select>
                        </Form.Group>

                        {renderAddressForm()}

                        <Button onClick={handleSubmit} className='rounded px-5 bg-red-500 border-0 btn-lg mt-3'>
                            Go Next
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default CheckoutPage;