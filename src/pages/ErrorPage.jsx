import React from 'react'
import { useNavigate } from 'react-router'

const ErrorPage = () => {

  const navigate=useNavigate()



  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center gap-5 text-white'>
    <p className='text-3xl'>
        404 Page not found
    </p>
    <p className='text-xl'>
    The page you are looking for might be removed or is temporarily
    unavailable
    </p>
    <button className='bg-blue-600 p-3 text-white text-xl rounded-2xl mt-10 hover:bg-blue-800 duration-200' onClick={()=>navigate("/")}>
        Back to Homepage
    </button>
          </div>
  )
}

export default ErrorPage
