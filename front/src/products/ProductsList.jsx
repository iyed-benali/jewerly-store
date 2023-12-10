  import React, { useEffect, useState } from 'react'
  import axios from 'axios'
  import { Link } from 'react-router-dom'
  import OneProduct from "./OneProduct.jsx"


  const ProductsList = () => {
    const [data,setData] = useState([])

  useEffect(()=>{
  axios.get('http://localhost:3000/api/products').then((res)=>{
  setData(res.data)
  })
  .catch(err=>{
  throw err 
  })
  },[])
  return (
    <div>
    <nav className="bg-purple-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/products" className="text-lg font-semibold text-white mr-6">
            Your Logo
          </Link>
          <Link to="/products" className="text-sm font-semibold text-gray-200 hover:text-white transition duration-300">
            Products
          </Link>
          <Link to="/contact" className="ml-4 text-sm font-semibold text-gray-200 hover:text-white transition duration-300">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="rounded-l-md p-2 border border-gray-300 focus:outline-none focus:ring focus:border-purple-500"
          />
          <button className="bg-purple-600 text-white rounded-r-md p-2 hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-500">
            Search
          </button>

          {/* Filter by Price */}
          <div className="ml-4">
            <label className="text-sm font-semibold text-gray-200">Filter by Price:</label>
            <select className="rounded-md p-2 border border-gray-300 focus:outline-none focus:ring focus:border-purple-500">
              <option value="cheaper">From Cheaper</option>
              <option value="more-expensive">From More Expensive</option>
            </select>
          </div>

          {/* Log In */}
          <a href="#" className="ml-4 text-sm font-semibold text-gray-200 hover:text-white transition duration-300">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </nav>
      {data.map(e=>{
return (
  <OneProduct key={e._id} e={e} />
)
      })}
      </div>
  );
  }

  export default ProductsList