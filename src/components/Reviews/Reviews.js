import React from 'react';
import user from '../../Assets/img/user.jpg';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Jhon Doe",
            feedback: "I'd like the box have a shield to cut before opening. Great Experience."
        },
        {
            id: 2,
            name: "Lebogang S",
            feedback: "Super happy with the service and product. The product is very easy to use."
        },
        {
            id: 3,
            name: "Caleb M.",
            feedback: "Great experience, shipped fast, easy set up cant ask for much else."
        },
        {
            id: 4,
            name: "Troy D.",
            feedback: "With ease of purchase to set up and holding currency. A+"
        },
        {
            id: 5,
            name: "Kurt t.",
            feedback: "Small peace of mind knowing that my cryptocurrencies are much safer from hackers."
        },
        {
            id: 6,
            name: "Alvano",
            feedback: "Well done. You should have a bundle for this model. Awesome service."
        },
        {
            id: 7,
            name: "Rodrigo",
            feedback: "Fast shipping, great product easy to use with Metamask. Best service ever."
        },

    ]
    return (
        <div className='px-4 pt-10 pb-24 mx-auto max-w-7xl md:px-2'>
            <h1 className='text-3xl text-center mb-10 text-cyan-600'>What Our Customer Say!</h1>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
                {
                    reviews.map(review=>
                    <div className='bg-cyan-600 text-white px-5 py-3 rounded'>
                        <img className='w-14 h-14 m-auto rounded-full' src={user} alt='ledger-nano-x' />
                        <h2 className='text-2xl text-center mt-2'>{review.name}</h2>
                        <h3 className='text-center mt-2'>{review.feedback}</h3>
                        <p className='text-center'>Ratings: 4.5</p>
                    </div>)
                }
              </div>
        </div>
    );
};

export default Reviews;