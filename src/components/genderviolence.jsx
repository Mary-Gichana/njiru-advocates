import { Link } from "react-router-dom";
function Genderviolence() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Firm’s Stand Against Gender-Based Violence
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            We are committed to protecting human dignity, promoting justice, and
            supporting survivors of Gender-Based Violence.
          </p>
        </div>

        {/* CONTENT WRAPPER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* IMAGE */}
          <div className="h-80%">
            <img
              src="/Images/njiru12.jpeg"
              alt="Stand Against Gender Based Violence"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT CONTENT */}
          <div className="p-10 md:p-14">
            <ul className="space-y-5 text-gray-700 text-lg leading-relaxed">
              <li>
                <span className="font-semibold text-gray-900">
                  Zero Tolerance:
                </span>{" "}
                We strongly condemn all forms of Gender-Based Violence,
                including physical, sexual, emotional, and economic abuse.
              </li>

              <li>
                <span className="font-semibold text-gray-900">
                  Human Rights Protection:
                </span>{" "}
                We recognize GBV as a serious violation of human rights and
                fundamental freedoms.
              </li>

              <li>
                <span className="font-semibold text-gray-900">
                  Survivor Support:
                </span>{" "}
                We provide confidential, compassionate, and professional legal
                assistance to survivors.
              </li>

              <li>
                <span className="font-semibold text-gray-900">
                  Accountability:
                </span>{" "}
                We are committed to holding perpetrators accountable under the
                law.
              </li>

              <li>
                <span className="font-semibold text-gray-900">
                  Equality & Dignity:
                </span>{" "}
                We advocate for equality, dignity, and protection for all
                individuals regardless of gender.
              </li>

              <li>
                <span className="font-semibold text-gray-900">
                  Access to Justice:
                </span>{" "}
                We promote awareness, education, and access to justice for
                victims of violence.
              </li>

              <li>
                <span className="font-semibold text-gray-900">
                  Legal Standards:
                </span>{" "}
                We uphold constitutional principles and international human
                rights standards in protecting survivors.
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/contacts"
                className="text-white bg-[#b81abb] px-8 py-3 border border-800 rounded-full font-semibold hover:bg-[#666666] transition-all duration-300 ease-in-out"
              >
                <button>Seek Legal Support</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Genderviolence;
