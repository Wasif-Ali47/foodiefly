import React from 'react';
import about from "../Assets/about.jpg";
import img from "../Assets/contactsection.jpg";

const dealsData = [
    { title: 'Pizza Special', description: '50% off on all pizzas', price: '$10', image: img },
    { title: 'Burger Combo', description: 'Buy 1 Get 1 Free', price: '$8', image: img },
    { title: 'Pasta Delight', description: 'Free drink with every pasta', price: '$12', image: img },
];

const testimonials = [
    { name: 'John Doe', feedback: 'Amazing deals, great food! Highly recommend!' },
    { name: 'Jane Smith', feedback: 'I got 50% off on pizza! Will definitely come back.' },
];

const DealsPage = () => {
    return (
        <div className="bg-white">
            <div
                className="w-full bg-cover bg-center relative flex items-center justify-center py-28"
                style={{ backgroundImage: `url(${about})` }}
            >
                <div className="text-center bg-black bg-opacity-50 px-6 py-4 rounded-lg">
                    <h2 className="text-6xl font-extrabold text-white drop-shadow-lg">Delicious Deals Just for You!</h2>
                    <p className="mt-3 text-lg text-gray-200">Explore our exclusive food offers and save big!</p>
                </div>
            </div>

            {/* Featured Deals Section */}
            <section className="my-16 px-4">
                <h2 className="text-3xl text-center font-semibold text-red-500 mb-12">Featured Deals</h2>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {dealsData.map((deal, index) => (
                        <div
                            key={index}
                            className="bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out p-6 flex flex-col items-center space-y-4"
                        >
                            <img
                                src={deal.image}
                                alt={deal.title}
                                className="w-full h-56 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-center text-red-500">{deal.title}</h3>
                            <p className="text-lg text-center text-gray-600">{deal.description}</p>
                            <div className="flex justify-center items-center space-x-4">
                                <span className="bg-red-500 text-white font-bold py-2 px-6 rounded-full">{deal.price}</span>
                                <button className="bg-red-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-600 transition duration-300">
                                    Grab Deal
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <section className="bg-gray-100 py-16">
                <h2 className="text-3xl text-center font-semibold text-red-500 mb-8">What Our Customers Say</h2>
                <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white text-gray-700 rounded-lg shadow-md p-6">
                            <p className="italic mb-4">"{testimonial.feedback}"</p>
                            <p className="font-semibold text-lg">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-red-500 text-white py-16 text-center">
                <h2 className="text-3xl font-semibold mb-4">Don't Miss Out on These Deals!</h2>
                <p className="text-xl mb-6">Limited time offers available. Order now and enjoy delicious meals at amazing prices.</p>
                <button className="bg-white text-red-500 font-semibold py-3 px-8 rounded-full hover:bg-red-200 transition duration-300">Order Now</button>
            </section>
        </div>
    );
};

export default DealsPage;