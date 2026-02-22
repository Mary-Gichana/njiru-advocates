import React from "react";

function Contacts() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT: ABOUT */}
        <div>
          <img
            src="src/assets/Images/DSC_8965.JPG"
            alt="Njiru Advocates"
            className="h-20 mb-6 rounded-lg shadow-md"
          />

          <p className="text-gray-600 leading-relaxed text-lg">
            Njiru Kabiru’s vision is to be Kenya’s best-ranked law firm for
            excellent client care. Our mission is to create meaningful
            experiences for each client.
          </p>
        </div>

        {/* RIGHT: CONTACT DETAILS */}
        <div>
          <h2 className="text-3xl   font-bold text-[#b81abb] mb-10 relative inline-block">
            Contact Us
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-[#b81abb] rounded"></span>
          </h2>

          <div className="space-y-6">
            {/* Location */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#b81abb]  text-white text-xl">
                📍
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-800 font-semibold">
                  Law firm in Eldoret
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#b81abb] text-white text-xl">
                📞
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-gray-800 font-semibold">0721483254</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#b81abb] text-white text-xl">
                📧
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-800 font-semibold">
                  njiruadvocates@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
