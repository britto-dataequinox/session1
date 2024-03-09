import React from 'react';
import homeImg from '../public/images/home.jpg';
import Hero from '@/components/Hero';

const Home = () => {
  return (
    <div>
      <Hero
        imgData={homeImg}
        imgAlt="car factory"
        title="Proffessional Cloud Hosting"
      />
    </div>
  );
};

export default Home;
