function Aboutus() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="text-[#b81abb] italic mb-4">About Us</p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            NJIRU KIBARU <br /> & ADVOCATES
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-gray-700 mt-16 text-lg leading-relaxed">
          <p className="mb-4">
            Njiru Kibaru & Advocates is a distinguished law firm in Kenya,
            providing strategic legal solutions to individuals, businesses, and
            institutions. The firm is built on professionalism, integrity, and a
            deep understanding of the law.
          </p>

          <p className="mb-10">
            Our mission is to deliver exceptional legal services by offering
            practical, results-driven advice while maintaining the highest
            ethical standards in every matter we handle.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
