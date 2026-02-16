import React from 'react'
import Hero from '../component/Hero'
import Category from '../component/Category'
import BestSeller from '../component/BestSeller'

const Home = () => {
  return (
    <div className='mt-10'>
      <Hero/>
      <Category/>
      <BestSeller/>
    </div>
  )
}

export default Home
