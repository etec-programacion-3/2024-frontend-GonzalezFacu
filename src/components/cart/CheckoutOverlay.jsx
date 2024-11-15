import "../../styles/cart/CheckoutOverlay.css";
import React, { useState, useEffect } from "react";
import "../../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import api from "../../apiConfig/api";

const CheckoutOverlay = ({ onClose, selectedPaymentMethod }) => {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await api.get("/api/profile/");
        const data = response.data;
        setAddress({
          street: data.street || "",
          city: data.city || "",
          state: data.state || "",
          zipCode: data.zip_code || "",
          country: data.country || "",
        });
      } catch (error) {
        console.error("Error fetching user address:", error);
      }
    };
    fetchProfileData();
  }, []);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentDetailsChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="checkout-overlay">
      <div className="checkout-card">
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        {step === 1 && (
          <div className="step-content">
            <h2>Enter Your Address</h2>
            <form>
              <input
                type="text"
                name="street"
                value={address.street}
                placeholder="Street"
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="city"
                value={address.city}
                placeholder="City"
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="state"
                value={address.state}
                placeholder="State"
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="zipCode"
                value={address.zipCode}
                placeholder="Zip Code"
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="country"
                value={address.country}
                placeholder="Country"
                onChange={handleAddressChange}
              />
            </form>
            <button className="next-button" onClick={nextStep}>
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="step-content">
            <h2>Payment Method</h2>
            {selectedPaymentMethod === "card" && (
              <div>
                <h3>Card Details</h3>
                <form>
                  <input
                    type="text"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    placeholder="Card Number"
                    onChange={handlePaymentDetailsChange}
                  />
                  <input
                    type="text"
                    name="expiryDate"
                    value={paymentDetails.expiryDate}
                    placeholder="Expiry Date (MM/YY)"
                    onChange={handlePaymentDetailsChange}
                  />
                  <input
                    type="text"
                    name="cvv"
                    value={paymentDetails.cvv}
                    placeholder="CVV"
                    onChange={handlePaymentDetailsChange}
                  />
                </form>
                {/* TODO: Replace with API component for secure card processing */}
              </div>
            )}
            {selectedPaymentMethod === "bank-transfer" && (
              <div>
                <h3>Bank Transfer Details</h3>
                <p>CVU: 12345678901234567890</p>
                {/* TODO: Replace with dynamic CVU details from the backend */}
              </div>
            )}
            {selectedPaymentMethod === "mercado-pago" && (
              <div>
                <h3>Mercado Pago</h3>
                <p>You selected Mercado Pago as your payment method.</p>
                {/* TODO: Integrate Mercado Pago API component here */}
              </div>
            )}
            <div className="navigation-buttons">
              <button onClick={prevStep}>Back</button>
              <button onClick={nextStep}>Proceed</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="step-content">
            <h2>Confirmation</h2>
            <p>Your order has been placed successfully!</p>
            <button onClick={onClose}>Close</button>
          </div>
        )}

        <div className="progress-dots">
          <span className={step === 1 ? "active" : ""}></span>
          <span className={step === 2 ? "active" : ""}></span>
          <span className={step === 3 ? "active" : ""}></span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOverlay;
