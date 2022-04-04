import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../Assets/img/ledger-nano-x.png';
import user from '../../Assets/img/user.jpg';

const Home = () => {
  let navigate = useNavigate();
  const reviews = [
    {
      id: 1,
      name: "Jhon Doe",
      feedback: "I'd like the box have a shield to cut before opening. Great Experience.",
      rating: 5
    },
    {
      id: 2,
      name: "Lebogang S",
      feedback: "Super happy with the service and product. The product is very easy to use.",
      rating: 5
    },
    {
      id: 3,
      name: "Caleb M.",
      feedback: "Great experience, shipped fast, easy set up cant ask for much else.",
      rating: 5
    },

  ]
  return (
    <div className='px-4 pb-24 mx-auto max-w-7xl md:px-2'>
      <div className='h-full grid grid-cols-1 items-center md:grid-cols-2 justify-items-center gap-4 md:justify-items-around content-center'>
        <div className='order-2 md:order-1'>
          <h1 className='text-5xl'>The New Ledger Nano x Plus</h1>
          <p className='text-2xl mt-3'>Bigger Screen. More Memory</p>
          <p className='text-2xl mt-3'>The Worlds most Popular wallet just got better</p>
          <button className='bg-cyan-600 px-5 py-3 rounded-full text-2xl justify-center items-center text-white mt-5'>Live Demo</button>
        </div>
        <div className='flex order-1 md:order-2 justify-center items-center'>
          <img src={img} alt='ledger-nano-x' />
        </div>
      </div>

      <div className='mt-10'>
        <h1 className='text-3xl text-center mb-10'>Customer Reviews(3)</h1>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
          {
            reviews.map(review =>
              <div className='bg-cyan-600 text-white px-5 py-3 rounded'>
                <img className='w-14 h-14 m-auto rounded-full' src={user} alt='ledger-nano-x' />
                <h2 className='text-2xl text-center mt-2'>{review.name}</h2>
                <h3 className='text-center mt-2'>{review.feedback}</h3>
                <p className='text-center'>Ratings: {review.rating}</p>
              </div>)
          }
        </div>
        <div className='flex justify-center'>
          <Link to='/reviews' className='border-2 border-cyan-600 hover:bg-cyan-600 px-3 py-2 rounded-full justify-center items-center mt-10'>See all Reviews</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;