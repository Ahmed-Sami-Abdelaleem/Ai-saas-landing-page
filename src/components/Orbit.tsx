import React from 'react'

function Orbit({className}:{className: string}) {
  return (
    <div className={`absolute border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}></div>
  )
}

export default Orbit