
import React from 'react'

const ButtonBlack = ({ children, className, handler }) => {
  return (
    <button
      onClick={handler}
      className={`px-18 py-2 btn-outline hover:bg-black hover:border-black border-4 border-black text-white hover:text-white ${className}`}
    >
      {children}
    </button>
  )
}

export default ButtonBlack
