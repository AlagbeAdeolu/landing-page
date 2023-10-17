import React from 'react'
import Card from '../components/Card'

const About = () => {
  return (
    <div className='container mx-auto my-6'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-3xl font-dancingScript mb-6'>Meet our team</h2>
        <div className='grid grid-cols-4 gap-10 justify-center items-center'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default About
