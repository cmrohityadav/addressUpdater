import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { addAdressToStore,deleteAdressToStore ,editAdressToStore} from '../store/addressSlice'
import confiApi from '../configAPI'
confiApi
function Home() {
    const dispatch = useDispatch();
    const allAdressArray = useSelector((state) => state.addressStore.allAddress)
    // console.log(allAdressArray)
    const navigate=useNavigate()
    const handleDelete=(id)=>{

        axios.delete(`${confiApi.mockapi}/${id}`)
        .then((res)=>{
            dispatch(deleteAdressToStore(id))
        })
        .catch((error)=>console.log(error))
        
    }
    const handleEdit=(item)=>{
 
        dispatch(editAdressToStore(item));
        navigate('/update');
        
    
    
        
      }

    useEffect(() => {
        const response = axios.get(`${confiApi.mockapi}`)
            .then((res) => {
                dispatch(addAdressToStore(res.data))
                // console.log(res.data)


            }
            )
            .catch((error) => console.log(error))

    }, [])

   

    return (
        <>
            <div className="container max-w-7xl mx-auto mt-8">
                <div className="mb-4">
                    <h1 className="font-serif text-3xl font-bold  decoration-gray-400">Address Updater</h1>
                    <div className="flex justify-end">
                        <NavLink to={"/add"}> <button className="px-4 py-2 rounded-md bg-green-500 text-sky-100 hover:bg-green-600">Create Post</button></NavLink>

                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            ID</th>
                                        <th
                                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Name</th>
                                        <th
                                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Street address</th>
                                        <th
                                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            City</th>
                                        <th
                                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            State</th>
                                        <th
                                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Zip Code</th>
                                        <th className="px-6 py-3 text-sm text-center text-gray-500 border-b border-gray-200 bg-gray-50" colSpan={2}>
                                            Action</th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white">
                                    {allAdressArray.map((item) => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4 whitespace-no-wrap  border-b border-gray-200">
                                                <div className="flex  items-center justify-center">
                                                    {item.id}
                                                </div>

                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap  border-b border-gray-200">
                                                <div className="flex  items-center justify-center">
                                                    {item.name}
                                                </div>

                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap  border-b border-gray-200">
                                                <div className="flex  items-center justify-center">
                                                    {item.streetAddress}

                                                </div>

                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap  border-b border-gray-200">
                                                <div className="flex  items-center justify-center">
                                                    {item.city}
                                                </div>

                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap  border-b border-gray-200">
                                                <div className="flex  items-center justify-center">
                                                    {item.state}
                                                </div>

                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap  border-b border-gray-200">
                                                <div className="flex  items-center justify-center">
                                                    {item.zipcode}
                                                </div>

                                            </td>
                                            <td className="px-2 py-4 whitespace-no-wrap  border-b border-gray-200">
                                                <div className="flex  items-center justify-center">
                                                    <button className="px-4 py-2 w-20 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600"
                                                    onClick={()=>handleEdit(item)}
                                                    >Edit</button>
                                                </div>

                                            </td>
                                            <td className="px-2 py-4 whitespace-no-wrap  border-b border-gray-200">
                                                <div className="flex  items-center justify-center">
                                                    <button className="px-4 py-2 w-20 rounded-md bg-red-800 text-sky-100 hover:bg-red-400"
                                                     onClick={()=>handleDelete(item.id)}
                                                    >Delete</button>
                                                </div>

                                            </td>


                                        </tr>
                                    ))}



                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home