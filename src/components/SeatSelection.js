import React, { useState, useEffect } from 'react';

const SeatSelection = () => {
  // Sample seat layout (1 = booked, 0 = available)
  const initialSeats = Array(5).fill(Array(10).fill(0)); // 5 rows, 10 seats each
  const [seats, setSeats] = useState(initialSeats);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Effect to calculate total price when seats are selected
  useEffect(() => {
    setTotalPrice(selectedSeats.length * 50); // Assuming $50 per seat
  }, [selectedSeats]);

  // Toggle seat selection
  const toggleSeat = (row, seat) => {
    if (selectedSeats.includes(`${row}-${seat}`)) {
      // Deselect the seat
      setSelectedSeats(selectedSeats.filter(selected => selected !== `${row}-${seat}`));
    } else {
      // Select the seat
      setSelectedSeats([...selectedSeats, `${row}-${seat}`]);
    }
  };

  const handlePayment = () => {
    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: totalPrice.toFixed(2), // Total price for selected seats
            },
          }],
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        alert(`Payment successful for seats: ${selectedSeats.join(', ')}`);
        // Here you would finalize the seat booking, perhaps updating the seats state
      },
      onError: (err) => {
        console.error(err);
        alert('Payment failed. Please try again.');
      }
    }).render('.pay-btn');
  };

  return (
    <div className="container mx-auto mt-8 p-3 text-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-red-600">Select Your Seats</h2>
      <div className="grid gap-4">
        {seats.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center space-x-4">
            {row.map((seat, seatIndex) => (
              <button
                key={seatIndex}
                className={`w-10 h-10 text-white rounded-md transition duration-300 ease-in-out 
                ${selectedSeats.includes(`${rowIndex}-${seatIndex}`) ? 'bg-red-600' : 
                seat === 1 ? 'bg-black cursor-not-allowed text-red-600' : 'bg-gray-700 hover:bg-gray-500 hover:scale-110 transform'}`}
                onClick={() => seat === 1 ? null : toggleSeat(rowIndex, seatIndex)}
                disabled={seat === 1} // Disable button for booked seats
              >
                {seat === 1 ? 'X' : selectedSeats.includes(`${rowIndex}-${seatIndex}`) ? '✔' : ''}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Display total price */}
      <div className="text-center mt-6">
        <h3 className="text-2xl">Total Price: ${totalPrice}</h3>
      </div>

      {/* Payment button */}
      <button
        onClick={handlePayment}
        className="block bg-red-600 text-white font-semibold py-2 px-4 rounded mt-8 mx-auto hover:bg-red-700 transition-all ease-in-out"
        disabled={selectedSeats.length === 0}
      >
        Proceed to Payment
      </button>
      
      {/* PayPal Button Container */}
      <div className="pay-btn mt-6"></div>
    </div>
  );
}

export default SeatSelection;
