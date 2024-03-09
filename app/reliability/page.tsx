import Hero from '@/components/Hero'
import React from 'react'
import reliabilityImg from '../../public/images/reliability.jpg'

const Reliability = () => {
  return (
    <div>
      <Hero
        imgData={reliabilityImg}
        imgAlt="reliability"
        title="Reliability"
      />
    </div>
  )
}

export default Reliability
