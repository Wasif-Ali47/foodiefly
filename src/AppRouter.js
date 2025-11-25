import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import LoginSignUp from "./AdminDashboard/LoginSignUp/LoginSignUp.js";
import Dashboard from "./AdminDashboard/Dashboard/Dashboard.js";
import Home from "./UserSide/Home/Home.js";
import Footer from "./UserSide/footer.js";
import Navbar from "./UserSide/Navbar.js";
import "./App.css";
import CheckoutPage from "./UserSide/CheckOut/CheckOut.js";
import CompleteOrder from "./UserSide/CompleteOrder/CompleteOrder.js";
import OrderConfirmation from "./UserSide/OrderPlaced/OrderPlaced.js";
import NotFoundPage from "./UserSide/NotFoundPage.js";
import AboutUs from "./UserSide/About/About.js";
import ContactUs from "./UserSide/ContactUs.js";
import ReachUs from "./UserSide/ReachUs.js";
import DealsPage from "./UserSide/DealsPage.js";
import CardSection from "./Cards.js";

const AppRouter = () => {
    const location = useLocation();

    // Now we also restrict Navbar and Footer for the homepage ("/")
    const isRestrictedRoute = location.pathname === "/" || location.pathname.startsWith("/admin") || location.pathname.startsWith("/userDashboard") || location.pathname.startsWith("/dashboard");
    
    const admintoken = localStorage.getItem("food123");

    return (
        <>
            {/* Only show Navbar and Footer on non-restricted routes */}
            {!isRestrictedRoute && <Navbar />}
            
            <Routes>
                <Route path="/" exact element={<CardSection />} />
                <Route path="/home" exact element={<Home />} />
                <Route path="/checkout" exact element={<CheckoutPage />} />
                <Route path="/reachus" exact element={<ReachUs />} />
                <Route path="/completeorder" exact element={<CompleteOrder />} />
                <Route path="/orderconfirm" exact element={<OrderConfirmation />} />
                <Route path="/admin/login" exact element={<LoginSignUp />} />
                <Route path="/about" exact element={<AboutUs />} />
                <Route path="/contact" exact element={<ContactUs />} />
                <Route path="/deals" exact element={<DealsPage />} />
                <Route
                    path="/admin/dashboard"
                    exact
                    element={admintoken ? <Dashboard /> : <Navigate to="/admin/login" />}
                />
                
                {/* Add the NotFoundPage for undefined routes */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>

            {/* Only show Footer on non-restricted routes */}
            {!isRestrictedRoute && <Footer />}
        </>
    );
};

export default AppRouter;
