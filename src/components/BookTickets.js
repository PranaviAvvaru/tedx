import React, { useState } from 'react';

const BookTickets = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ticketType: 'standard',
    quantity: 1,
  });

  const ticketPrices = {
    standard: 50,
    vip: 100,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ticket booked for ${formData.name}! Total: $${formData.quantity * ticketPrices[formData.ticketType]}`);
    // Here you would send the data to a backend or API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6">Book Your Tickets</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Full Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded-lg text-black"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email Address</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded-lg text-black"
          />
        </div>

        {/* Ticket Type Select */}
        <div className="mb-4">
          <label htmlFor="ticketType" className="block mb-2">Ticket Type</label>
          <select 
            name="ticketType" 
            value={formData.ticketType} 
            onChange={handleChange} 
            className="w-full p-2 rounded-lg text-black"
          >
            <option value="standard">Standard ($50)</option>
            <option value="vip">VIP ($100)</option>
          </select>
        </div>

        {/* Quantity Input */}
        <div className="mb-4">
          <label htmlFor="quantity" className="block mb-2">Ticket Quantity</label>
          <input 
            type="number" 
            name="quantity" 
            value={formData.quantity} 
            onChange={handleChange} 
            min="1" 
            className="w-full p-2 rounded-lg text-black"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-red-500 hover:bg-red-600 py-3 px-6 rounded-lg w-full transition-colors duration-300">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookTickets;
