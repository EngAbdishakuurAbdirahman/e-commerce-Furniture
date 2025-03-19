import React from 'react';

const testimonials = [
    {
        id: 1,
        quote: "Per il proprio lavoro e l'attenzione nei confronti del cliente sono la loro punta di forza.",
        author: "Montanari",
        rating: 5
    },
    {
        id: 2,
        quote: "Ottima qualità, prezzo e servizi! Consiglio vivamente questo negozio per i design! Sono stati molto carini.",
        author: "Alice Nardi",
        rating: 5
    },
    {
        id: 3,
        quote: "Siamo più che soddisfatti dell'esperienza avuta con loro. La cura dei minimi dettagli e l'attenzione la contraddistinguono.",
        author: "Ciccarelli",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <div className="bg-white text-black p-5">
            <h2 className="text-center text-3xl font-bold">COSA DICONO I NOSTRI CLIENTI</h2>
            <p className="text-center mb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore modi cupiditate, cumque nemo quibusdam minima velit placeat ducimus molestiae dolor.</p>
            <div className="flex flex-wrap justify-center">
                {testimonials.map(testimonial => (
                    <div key={testimonial.id} className="bg-gray-300 m-3 p-4 rounded-lg max-w-sm w-full lg:w-1/3 animate-fadeIn">
                        <p className="text-xl">"{testimonial.quote}"</p>
                        <h3 className="font-semibold">{testimonial.author}</h3>
                        <div className="text-yellow-400">{'⭐'.repeat(testimonial.rating)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
