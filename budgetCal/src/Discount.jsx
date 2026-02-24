import React, { useState } from "react";

function Discount() {
  const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [finalPrice, setFinalPrice] = useState(null);
  const [savedAmount, setSavedAmount] = useState(null);

  const handleCalculate = () => {
    if (!amount || !discount) {
      alert("Please enter both fields");
      return;
    }

    const discountValue = (amount * discount) / 100;
    const result = amount - discountValue;

    setFinalPrice(result.toFixed(2));
    setSavedAmount(discountValue.toFixed(2));
  };

  const handleReset = () => {
    setAmount("");
    setDiscount("");
    setFinalPrice(null);
    setSavedAmount(null);
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="w-50 bg-white text-dark p-4 rounded shadow">

        <div className="mb-3 text-start">
          <label className="form-label">Amount (₹)</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label">Discount (%)</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-between">
          <button
            className="btn btn-success"
            onClick={handleCalculate}
          >
            Calculate
          </button>

          <button
            className="btn btn-danger"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

        {finalPrice !== null && (
          <div className="mt-4">
            <h5>Final Price: ₹ {finalPrice}</h5>
            <h6>You Saved: ₹ {savedAmount}</h6>
          </div>
        )}

      </div>
    </div>
  );
}

export default Discount;