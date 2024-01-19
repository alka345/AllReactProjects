
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()




    return (
    <div className='flex justify-center items-center text-center  m-4 bg-gray-600 text-white p-4 text-3xl'>
     Github followers: {data.followers} <br/> 
     Github Repository:{data.public_repos} <br />
     <img className=' h-1/2 flex justify-center items-center ml-10' src={data.avatar_url} alt="Git picture" width={ 300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
const response = await fetch('https://api.github.com/users/alka345')
return response.json()
}