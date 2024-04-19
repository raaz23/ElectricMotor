import React from 'react'

const loading = () => {
  return (  
    <div className="h-12 w-max-content text-xl font-semibold font-mono tracking-widest text-gray-100 filter drop-shadow-md flex justify-center items-center dark:bg-white">
  <style>
    {`
      @keyframes bounce {
        0%, 100% {
          transform: translateY(0);
        }
      
        50% {
          transform: translateY(-10px);
        }
      }
    `}
  </style>
  <span className="inline-block animate-bounce delay-300">L</span>
  <span className="inline-block animate-bounce delay-400">O</span>
  <span className="inline-block animate-bounce delay-500">A</span>
  <span className="inline-block animate-bounce delay-600">D</span>
  <span className="inline-block animate-bounce delay-700">I</span>
  <span className="inline-block animate-bounce delay-800">N</span>
  <span className="inline-block animate-bounce delay-900">G</span>
</div>
  )
}

export default loading