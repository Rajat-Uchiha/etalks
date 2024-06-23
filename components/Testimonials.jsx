import React from "react";
const testimonials = [
  {
    quote:
      "eTalks has transformed the way I learn. The quality of the talks is unmatched!",
    name: "Jane Doe",
    position: "Software Engineer",
  },
  {
    quote:
      "I love the variety of topics available on eTalks. There's always something new to learn.",
    name: "John Smith",
    position: "Product Manager",
  },
  {
    quote: "The speakers on eTalks are top-notch. Highly recommended!",
    name: "Alice Johnson",
    position: "Data Scientist",
  },
];
const Testimonials = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="carousel">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="carousel-item">
                <blockquote className="text-xl italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
