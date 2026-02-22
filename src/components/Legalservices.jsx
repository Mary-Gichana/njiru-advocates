const services = [
  {
    title: "Legal Advisory & Consultation",
    description:
      "We offer expert legal advice to help clients understand their rights, obligations, and available legal options under Kenyan law.",
    image: "/Images/njiru1.jpg",
  },
  {
    title: "Litigation & Court Representation",
    description:
      "We represent clients in civil, criminal, and commercial matters before all courts in Kenya, ensuring effective advocacy and protection of client interests.",
    image: "/Images/njiru2.jpg",
  },
  {
    title: "Alternative Dispute Resolution (ADR)",
    description:
      "We assist clients in resolving disputes through mediation, arbitration, and negotiation, offering efficient and cost-effective alternatives to litigation.",
    image: "/Images/njiru3.jpg",
  },
  {
    title: "Corporate & Commercial Law",
    description:
      "Our services include company incorporation, corporate governance, regulatory compliance, mergers and acquisitions, and drafting of commercial contracts.",
    image: "/Images/njiru4.jpg",
  },
  {
    title: "Property & Conveyancing",
    description:
      "We handle property transactions including land searches, sale and purchase agreements, title transfers, leases, and property-related disputes.",
    image: "/Images/njiru5.jpg",
  },
  {
    title: "Family & Succession Law",
    description:
      "We advise and represent clients in matters relating to divorce, child custody and maintenance, succession planning, wills, probate, and estate administration.",
    image: "/Images/njiru6.jfif",
  },
  {
    title: "Criminal Defense",
    description:
      "We provide robust legal representation for individuals facing criminal charges, safeguarding their constitutional rights throughout the legal process.",
    image: "/Images/njiru7.jfif",
  },
  {
    title: "Employment & Labour Law",
    description:
      "We assist employers and employees with employment contracts, workplace disputes, termination matters, and compliance with labour laws.",
    image: "/Images/njiru8.jfif",
  },
  {
    title: "Immigration Law",
    description:
      "We handle applications for visas, work permits, permanent residency, and citizenship in accordance with Kenyan immigration laws.",
    image: "/Images/njiru9.jfif",
  },
  {
    title: "Intellectual Property Law",
    description:
      "We assist in the registration and protection of trademarks, copyrights, and other intellectual property rights.",
    image: "/Images/njiru10.jfif",
  },
  {
    title: "Legal Aid & Pro Bono Services",
    description:
      "We are committed to access to justice by offering legal aid and pro bono services to deserving clients.",
    image: "/Images/njiru11.jfif",
  },
];
function Legalservices() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mt-9">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Legal Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We provide comprehensive legal services tailored to individuals,
            businesses, and institutions in Kenya. Our areas of practice
            include:
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover"
              />

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Legalservices;