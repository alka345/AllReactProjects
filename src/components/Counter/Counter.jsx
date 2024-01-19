import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0)
  const addValue = () => {
    setCount(count + 1)
  }
  const removeValue = () => {
    setCount(count - 1)
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat py-5 '
    style={{
      backgroundImage: `url('building.jpg')`
  }} >
    <div className='max-w-md mx-auto  shadow-md rounded-lg px-4 py-5 my-7 mt-10 text-black font-medium  bg-slate-300'>

      <h1 className='text-black text-center my-5 font-extrabold'>Counter</h1>
      <button 
        onClick={addValue}
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
        >Add Value:{count <20 ? count : "20"}

        </button>
      <button
        onClick={removeValue}
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-5'
        >Remove Value:{count > 0 ? count : "0"}</button>
    </div>
    </div>
  )
}

export default Counter
