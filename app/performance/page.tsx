import Hero from '@/components/Hero'
import React from 'react'
import performanceImg from '../../public/images/performance.jpg'

const Performance = () => {
  return (
    <div>
      <Hero
        imgData={performanceImg}
        imgAlt="performance"
        title="Performance" 
      />
    </div>
  )
}

export default Performance
