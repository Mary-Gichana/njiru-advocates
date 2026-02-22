const people = [
  {
    name: "Njiru Kibaru",
    qualification: "Senior Advocate",
    image: "/Images/DSC_8999.JPG",
  },
  {
    name: "name",
    qualification: "Associate Advocate",
    image: "/Images/DSC_9005.JPG",
  },
  {
    name: "name",
    qualification: "Associate Advocate",
    image: "/Images/DSC_9006.JPG",
  },
];

function Ourpeople() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our People
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Meet the professionals behind our firm — dedicated advocates
            committed to excellence, integrity, and client service.
          </p>
        </div>

        {/* PEOPLE GRID */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* IMAGE */}
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-[300px] object-cover"
              />

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {person.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {person.qualification}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ourpeople;
