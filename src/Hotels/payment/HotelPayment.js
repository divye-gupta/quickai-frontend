import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import logo from "../../images/logo.png";

const HotelPayment = ({ amount, name, email, phone_number, currency }) => {
  function loadScript(urlsrc) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = urlsrc;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: " key here",
      currency: currency,
      amount: amount.toString() * 100,
      order_id: uuidv4(),
      name: "Pay the required amount to book Hotel",
      description: "Some description here will be absolutely good.",
      image: logo,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: name,
        email: email,
        phone_number: phone_number,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    paymentObject.open();
  }

  useEffect(() => {
    displayRazorpay();
  }, []);

  return <div>HotelPayment</div>;
};

export default HotelPayment;
