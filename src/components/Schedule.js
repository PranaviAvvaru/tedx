import React from 'react';

const Schedule = () => {
  return (
    <section className="bg-black text-white py-12 p-3 relative"> {/* Removed z-0, added relative */}
      <div className="container mx-auto flex flex-col justify-center h-full">
        <h2 className="text-4xl font-bold mb-8 text-center">Event Schedule</h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line absolute w-1 bg-red-500 h-full top-0 left-1/2 transform -translate-x-1/2 z-0"></div> {/* Keep z-0 to maintain the line below items */}

          {/* Timeline Items */}
          <ul className="relative z-10"> {/* Higher z-index for the timeline items */}
            {/* Registration */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Registration</h3>
                <p className="mt-1 text-sm">9:00 AM</p>
              </div>
            </li>

            {/* Opening Remarks */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Opening Remarks</h3>
                <p className="mt-1 text-sm">10:00 AM</p>
              </div>
              <div className="order-1 w-5/12"></div>
            </li>

            {/* Speaker 1 */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Speaker 1: [Speaker Name]</h3>
                <p className="mt-1 text-sm">10:30 AM</p>
              </div>
            </li>

            {/* Speaker 2 */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Speaker 2: [Speaker Name]</h3>
                <p className="mt-1 text-sm">11:00 AM</p>
              </div>
              <div className="order-1 w-5/12"></div>
            </li>

            {/* Speaker 3 */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Speaker 3: [Speaker Name]</h3>
                <p className="mt-1 text-sm">11:30 AM</p>
              </div>
            </li>

            {/* Speaker 4 */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Speaker 4: [Speaker Name]</h3>
                <p className="mt-1 text-sm">12:00 PM</p>
              </div>
              <div className="order-1 w-5/12"></div>
            </li>

            {/* Lunch Break */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Lunch Break</h3>
                <p className="mt-1 text-sm">1:00 PM - 2:00 PM</p>
              </div>
            </li>

            {/* Speaker 5 */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Speaker 5: [Speaker Name]</h3>
                <p className="mt-1 text-sm">2:00 PM</p>
              </div>
              <div className="order-1 w-5/12"></div>
            </li>

            {/* Speaker 6 */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Speaker 6: [Speaker Name]</h3>
                <p className="mt-1 text-sm">2:30 PM</p>
              </div>
            </li>

            {/* Speaker 7 */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Speaker 7: [Speaker Name]</h3>
                <p className="mt-1 text-sm">3:00 PM</p>
              </div>
              <div className="order-1 w-5/12"></div>
            </li>

            {/* Music Band and Windup */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Music Band & Windup</h3>
                <p className="mt-1 text-sm">4:00 PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
