import React from 'react'

function Button({
  children,
  type = 'button',
  bgColor = 'bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400',
  textColor = 'text-white',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={`
        px-5 py-2
        rounded-full
        font-semibold
        ${bgColor} ${textColor} 
        shadow-lg
        transition-all duration-300 ease-in-out
        hover:shadow-xl
        active:scale-95
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button