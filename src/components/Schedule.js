import React from 'react';

const Schedule = () => {
  return (
    <section className="bg-black text-white py-12 p-3 relative"> {/* Removed z-0, added relative */}
      <div className="container mx-auto flex flex-col justify-center h-full">
        <h2 className="text-4xl font-bold mb-8 text-center">TEDx Event Schedule</h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line absolute w-1 bg-red-500 h-full top-0 left-1/2 transform -translate-x-1/2 z-0"></div> {/* Keep z-0 to maintain the line below items */}

          {/* Timeline Items */}
          <ul className="relative z-10"> {/* Higher z-index for the timeline items */}
            {/* Welcome */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Welcome</h3>
                <p className="mt-1 text-sm">9:00 AM - 9:40 AM</p>
              </div>
            </li>

            {/* Speaker 1 */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Speaker 1: [Speaker Name]</h3>
                <p className="mt-1 text-sm">9:40 AM - 10:10 AM</p>
              </div>
              <div className="order-1 w-5/12"></div>
            </li>

            {/* Speaker 2 */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Speaker 2: [Speaker Name]</h3>
                <p className="mt-1 text-sm">10:10 AM - 10:40 AM</p>
              </div>
            </li>

            {/* Speaker 3 */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Speaker 3: [Speaker Name]</h3>
                <p className="mt-1 text-sm">10:40 AM - 11:10 AM</p>
              </div>
              <div className="order-1 w-5/12"></div>
            </li>

            {/* Break */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Break</h3>
                <p className="mt-1 text-sm">11:10 AM - 11:40 AM</p>
              </div>
            </li>

            {/* Speaker 4 */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Speaker 4: [Speaker Name]</h3>
                <p className="mt-1 text-sm">11:40 AM - 12:10 PM</p>
              </div>
              <div className="order-1 w-5/12"></div>
            </li>

            {/* Speaker 5 */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Speaker 5: [Speaker Name]</h3>
                <p className="mt-1 text-sm">12:10 PM - 12:40 PM</p>
              </div>
            </li>

            {/* Lunch Break */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Lunch Break</h3>
                <p className="mt-1 text-sm">12:40 PM - 2:10 PM</p>
              </div>
            </li>

            {/* Speaker 6 */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Speaker 6: [Speaker Name]</h3>
                <p className="mt-1 text-sm">2:10 PM - 2:40 PM</p>
              </div>
              <div className="order-1 w-5/12"></div>
            </li>

            {/* Speaker 7 */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Speaker 7: [Speaker Name]</h3>
                <p className="mt-1 text-sm">2:40 PM - 3:10 PM</p>
              </div>
            </li>

            {/* Break */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Break</h3>
                <p className="mt-1 text-sm">3:10 PM - 3:40 PM</p>
              </div>
              <div className="order-1 w-5/12"></div>
            </li>

            {/* Speaker 8 */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Speaker 8: [Speaker Name]</h3>
                <p className="mt-1 text-sm">3:40 PM - 4:20 PM</p>
              </div>
            </li>

            {/* Speaker 9 */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Speaker 9: [Speaker Name]</h3>
                <p className="mt-1 text-sm">4:20 PM - 5:00 PM</p>
              </div>
              <div className="order-1 w-5/12"></div>
            </li>

            {/* Closing Remarks */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Closing Remarks</h3>
                <p className="mt-1 text-sm">5:00 PM - 5:30 PM</p>
              </div>
            </li>

            {/* Music Concert */}
            <li className="timeline-item mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12 bg-white text-black p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-lg">Music Concert</h3>
                <p className="mt-1 text-sm">5:30 PM - 7:30 PM</p>
              </div>
              <div className="order-1 w-5/12"></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
