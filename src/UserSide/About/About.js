import React from "react";
import about from "../../Assets/about.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <div
        className="w-full bg-cover bg-center relative flex items-center justify-center py-28"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="text-center bg-black bg-opacity-50 px-6 py-4 rounded-lg">
          <h2 className="text-6xl font-extrabold text-white drop-shadow-lg">About Us</h2>
          <p className="mt-3 text-lg text-gray-200">Delivering Happiness, One Meal at a Time!</p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-red-500">Our Story</h1>
          <p className="text-gray-600 leading-relaxed">
            We started with a passion for bringing delicious food to your doorstep. Our mission is to provide high-quality meals
            with seamless delivery, ensuring satisfaction with every bite.
          </p>
          <div className="w-24 h-1 bg-red-400 rounded my-5"></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://img.freepik.com/premium-photo/portrait-young-chef-holding-bowls-with-freshly-made-food-created-with-generative-ai_762026-49134.jpg?w=360"
            alt="Chef"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://img.freepik.com/premium-photo/sexy-hot-girl-pretty-attractive-smiley-face-pretty-woman-white-shirt-portrait-face-girl-ai-generative_952301-29.jpg?w=360"
            alt="Smiling Woman"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 z-10"
            style={{ marginTop: "-50%" }}
          />

        </div>
      </div>

      {/* Why Choose Us */}
      <section className="bg-red-500 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "🚀 Fast Delivery", desc: "Get your food in record time with our efficient delivery network." },
              { title: "🍽️ Top Restaurants", desc: "We collaborate with the best restaurants to bring you delicious meals." },
              { title: "💳 Secure Payments", desc: "Safe and hassle-free transactions with multiple payment options." },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white text-gray-900 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="max-w-5xl mx-auto text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-8 text-red-500">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "John Doe", role: "CEO & Founder", icon: "👨‍💼" },
            { name: "Jane Smith", role: "Head of Operations", icon: "👩‍💻" },
            { name: "Michael Brown", role: "Chief Culinary Officer", icon: "👨‍🍳" },
          ].map((member, index) => (
            <div key={index} className="p-6 bg-gray-100 text-gray-900 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-2">{member.icon} {member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-red-500">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { review: "Best food delivery service ever! Fast and reliable!", name: "Emily R." },
              { review: "Amazing variety of restaurants and super easy to use.", name: "Mark L." },
            ].map((customer, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
                <p className="text-lg italic">"{customer.review}"</p>
                <h3 className="mt-4 font-semibold">- {customer.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;