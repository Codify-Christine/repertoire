// src/components/DonationForm.jsx
import React, { useState } from 'react';

const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('credit_card');
  const [mpesaNumber, setMpesaNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { amount, method };
    if (method === 'mpesa') {
      payload.phone = mpesaNumber;
    }

    // Here you'd send 'payload' to your backend or payment processor
    console.log('Submitting donation:', payload);
    alert(`Submitted: ${JSON.stringify(payload)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold">Make a Donation</h2>

      <div>
        <label className="block mb-1 font-medium">Amount (KSh)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Payment Method</label>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="credit_card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="mpesa">M-Pesa</option>
        </select>
      </div>

      {method === 'mpesa' && (
        <div>
          <label className="block mb-1 font-medium">M-Pesa Number</label>
          <input
            type="tel"
            value={mpesaNumber}
            onChange={(e) => setMpesaNumber(e.target.value)}
            placeholder="e.g. 0712345678"
            className="w-full border rounded p-2"
            required
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
      >
        Donate Now
      </button>
    </form>
  );
};

export default DonationForm;
