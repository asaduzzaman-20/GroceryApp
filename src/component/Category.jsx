import React from 'react'
import { categories } from '../assets/greencart_assets/assets'
const Category = () => {
  return (
    <div className='mt-16'>
      <p className='text-2xl font-medium md:text-3xl'>Categories</p>
      <div className='my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5
      
      gap-4 items-center justfy-cenetr'>
        {
            categories.map((category,index)=>(
                <div key={index} className={`group cursor-pointer py-5 px-3 rounded-lg gap-2 flex clex-col items-center justify-center`}>
                    <img src={category.image} alt="" className='max-w-28 transition group-hover:scale-110'/>
                    <p className='text-sm font-medium'>{category.text}</p>
                    </div>
            ))
        }
      </div>
    </div>
  )
}

export default Category;
