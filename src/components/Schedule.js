import React from 'react';

const Schedule = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Event Schedule</h2>

        <ul className="space-y-4">
          <li className="flex justify-center">
            <span className="time text-red-500 font-semibold w-24">9:00 AM</span>
            <span className="ml-4">Registration</span>
          </li>
          <li className="flex justify-center">
            <span className="time text-red-500 font-semibold w-24">10:00 AM</span>
            <span className="ml-4">Opening Remarks</span>
          </li>
          <li className="flex justify-center">
            <span className="time text-red-500 font-semibold w-24">10:30 AM</span>
            <span className="ml-4">Speaker 1</span>
          </li>
          {/* Add more schedule items as needed */}
        </ul>
      </div>
    </section>
  );
}

export default Schedule;
