import React, { useState } from "react";

const SeatSelection = () => {
  // Sample seat layout (1 = booked, 0 = available)
  const initialSeats = Array(5).fill(Array(10).fill(0)); // 5 rows, 10 seats each
  const [seats, setSeats] = useState(initialSeats);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (row, seat) => {
    const updatedSeats = seats.map((r, rowIndex) =>
      r.map((s, seatIndex) => {
        if (rowIndex === row && seatIndex === seat) {
          return s === 0 ? 1 : 0; // Toggle selection
        }
        return s;
      })
    );

    setSeats(updatedSeats);

    if (selectedSeats.includes(`${row}-${seat}`)) {
      setSelectedSeats(
        selectedSeats.filter((seat) => seat !== `${row}-${seat}`)
      );
    } else {
      setSelectedSeats([...selectedSeats, `${row}-${seat}`]);
    }
  };

  const handlePayment = () => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: (selectedSeats.length * 50).toFixed(2), // Assuming $50 per ticket
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          alert(`Payment successful for seats: ${selectedSeats.join(", ")}`);
          // Here you would finalize the seat booking, perhaps updating the seats state
        },
        onError: (err) => {
          console.error(err);
          alert("Payment failed. Please try again.");
        },
      })
      .render(".pay-btn");
  };

  return (
    <div className="container mx-auto mt-8 p-3">
      <h2 className="text-3xl font-bold text-center mb-8">Select Your Seats</h2>
      <div className="grid gap-4">
        {seats.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center space-x-4">
            {row.map((seat, seatIndex) => (
              <button
                key={seatIndex}
                className={`w-10 h-10 text-white rounded-md transition duration-300 ease-in-out ${
                  seat === 1
                    ? "bg-red-600 cursor-not-allowed"
                    : selectedSeats.includes(`${rowIndex}-${seatIndex}`)
                    ? "bg-yellow-400"
                    : "bg-green-600 hover:bg-green-700"
                }`}
                onClick={() =>
                  seat === 1 ? null : toggleSeat(rowIndex, seatIndex)
                }
                disabled={seat === 1} // Disable button for booked seats
              >
                {seat === 1
                  ? "X"
                  : selectedSeats.includes(`${rowIndex}-${seatIndex}`)
                  ? "✔"
                  : ""}
              </button>
            ))}
          </div>
        ))}
      </div>
      <button
        onClick={handlePayment}
        className="block bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-8 mx-auto hover:bg-blue-700 disabled:opacity-50"
        disabled={selectedSeats.length === 0}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default SeatSelection;
