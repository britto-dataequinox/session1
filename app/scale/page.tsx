import Hero from '@/components/Hero';
import React from 'react';
import scaleImage from '../../public/images/scale.jpg'

const Scale = () => {
  return (
    <div>
      <Hero
        imgData={scaleImage}
        imgAlt="scalability"
        title="Scalability"
      />
    </div>
  );
};

export default Scale;
