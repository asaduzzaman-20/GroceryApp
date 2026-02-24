import React from 'react'
import { assets } from '../assets/greencart_assets/assets'
import { useViewTransitionState } from 'react-router';

  const AddAddress= ()=> {
    const[formData, setFormData]= React.useState({
      firstName:"",
      lastName:"",
      email:"",
      street:"",
      city:"",
      state:"",
      zip:"",
      country:"",
      phone:"",
    })
    const handeleChange =(e)=>{
      setFormData({...formData, [e.target.name]: e.target.value})
    };
const submitHanlder = async (e)=>{
  e.preventDefault();
  console.log("formData", formData);
};
return(
  <div className='mt-12 flex flex-col md:flex-row gap-6 p-6  bg-gray-100 rounded-lg shadow-md'>
    {
     <div className='flex-1 bg-white p-6 rounded-lg shadow'>
      <h2 className='text-xl font-semibold text-gray-700 mb-4'>Address Details</h2>
      <form onSubmit= {submitHanlder} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <label className='block text-gray-600'>First Name</label>
          <input type="text"
          name="firstName"
          onChange={handeleChange}
          value={formData.firstName}
          className='w-full p-2 border rounded-md'
          placeholder="Enter your first name"

          required
          />
        </div>
        <div>
          <label className='block text-gray-600'>Last Name</label>
          <input type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handeleChange}
          className='w-full p-2 border rounded-md'
          placeholder="Enter your last name"

          required
          />
        </div>
        <div>
          <label className='block text-gray-600'>Email</label>
          <input type="email"
          name="email"
          value={formData.email}
          onChange={handeleChange}
          className='w-full p-2 border rounded-md'
          placeholder="Enter your email address"

          required
          />
        </div>
        <div>
          <label className='block text-gray-600'>Street</label>
          <input type="text"
          name="street"
          value={formData.street}
          onChange={handeleChange}
          className='w-full p-2 border rounded-md'
          placeholder="House no / Street name"

          required
          />
        </div>
        <div>
          <label className='block text-gray-600'>City</label>
          <input type="text"
          name="city"
          value={formData.city}
          onChange={handeleChange}
          className='w-full p-2 border rounded-md'
          placeholder="Enter your city"

          required
          />
        </div>
        <div>
          <label className='block text-gray-600'>State</label>
          <input type="text"
          name="state"
          value={formData.state}
          onChange={handeleChange}
          className='w-full p-2 border rounded-md'
          placeholder="Enter your state"

          required
          />
        </div>
        <div>
          <label className='block text-gray-600'>Zip</label>
          <input type="number"
          name="zip"
          value={formData.zip}
          onChange={handeleChange}
          className='w-full p-2 border rounded-md'
          placeholder="Enter your zip code"

          required
          />
        </div>
        <div>
          <label className='block text-gray-600'>Country</label>
          <input type="text"
          name="country"
          value={formData.country}
          onChange={handeleChange}
          className='w-full p-2 border rounded-md'
          placeholder="Enter your country"

          required
          />
        </div>
        <div>
          <label className='block text-gray-600'>Phone</label>
          <input type="number"
          name="phone"
          value={formData.phone}
          onChange={handeleChange}
          className='w-full p-2 border rounded-md'
          placeholder="Enter your phone number"

          required
          />
        </div>

      </form>
      <button
  type="submit"
  className=" w-full p-2 border rounded-md mt-4 md:col-span-2 bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
>
  Save Address
</button>

     
     </div> 
    }
    <div className='flex-1 flex items-center justify-center'>
      <img src={assets.add_address_iamge} alt="address illustranition" className='w-full max-w-xs rounded-lg shadow-lg'/>
    </div>
  </div>
)

  }
  

export default AddAddress
