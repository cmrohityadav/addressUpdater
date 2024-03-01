import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import confiApi from '../configAPI'

function UpdateAddress() {
    const navigate=useNavigate()
    const editableObject= useSelector((state) => state.addressStore. tempObject)
    // console.log(editableObject)
    const [name,setName]=useState(editableObject.name);
    const [streetAddress,setStreetAddress]=useState(editableObject.streetAddress);
    const [city,setCity]=useState(editableObject.city);
    const [state,setState]=useState(editableObject.state);
    const [zipcode,setZipcode]=useState(editableObject.zipcode);
 const handleUpdate=(e)=>{
    e.preventDefault();
    axios.put(`${confiApi.mockapi}/${editableObject.id}`,{
        name,
        streetAddress,
        city,
        state,
        zipcode
    }).then((r)=>{
        // console.log(r);
        navigate("/")
        
    }).catch((error)=> 
            console.log(error),
            navigate("/")
    )
 }


  return (
    <>
    <div className='bg-gray-500  h-screen'>

        <form className="max-w-sm mx-auto " onSubmit={handleUpdate}>
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input 
                 onChange={(e)=>setName(e.target.value)} 
                 value={name}
                 type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Name" />
            </div>
            <div className="mb-5">
                <label htmlFor="Address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Street address</label>
                <input 
                 onChange={(e)=>setStreetAddress(e.target.value)} value={streetAddress}
                type="text" id="Address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Address" required />
            </div>
            <div className="mb-5">
                <label htmlFor="City" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                <input 
                onChange={(e)=>setCity(e.target.value)} value={city}
                type="text" id="City" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your City" required />
            </div>
            <div className="mb-5">
                <label htmlFor="State" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                <input 
                    onChange={(e)=>setState(e.target.value)} value={state}
                type="text" id="State" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your State" required />
            </div>
            <div className="mb-5">
                <label htmlFor="ZIP CODE" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ZIP CODE</label>
                <input 
                    onChange={(e)=>setZipcode(e.target.value)} value={zipcode}
                type="text" id="ZIP CODE" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your ZIP CODE" required />
            </div>

            <button type="submit" className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-20 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
            <NavLink to={"/"}><button type="button" className="text-white mx-4 w-20  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</button></NavLink>
        </form>
    </div>
</>
  )
}

export default UpdateAddress