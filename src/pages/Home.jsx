import React from 'react'
import Hero from '../component/Hero'
import Category from '../component/Category'
import BestSeller from '../component/BestSeller'
import NewsLetter from '../component/NewsLetter'

const Home = () => {
  return (
    <div className='mt-10'>
      <Hero/>
      <Category/>
      <BestSeller/>
      <NewsLetter/>
    </div>
  )
}

export default Home
