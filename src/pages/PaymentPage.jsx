import React from "react";
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Payment from "../components/Payment/Payment.jsx";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Replace with your actual Stripe publishable key
const stripePromise = loadStripe("pk_test_YourPublicKeyHere");

const PaymentPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#f6f9fc]">
      <Header />
      <br />
      <br />
      <CheckoutSteps active={2} />

      {/* Wrap Payment in Elements */}
      <Elements stripe={stripePromise}>
        <Payment />
      </Elements>

      <br />
      <br />
      <Footer />
    </div>
  );
};

export default PaymentPage;
