import React from 'react'
import myImage from '../assets/logo.jpg'

function Logo({ width = '70px', height = '70px' }) {
  return (
    <div
      className="rounded-2xl overflow-hidden flex-shrink-0"
      style={{ width, height }}
    >
      <img
        src={myImage}
        alt="Logo"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  )
}

export default Logo