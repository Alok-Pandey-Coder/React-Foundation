import React, { useId } from 'react'

const Input = React.forwardRef(function Input(
  { label, type = 'text', className = '', ...props },
  ref
) {
  const id = useId()
  return (
    <div className="w-full">
      {label && (
        <label
          className="inline-block mb-2 text-gray-700 font-medium"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        ref={ref}
        className={`
          w-full px-4 py-2
          rounded-full
          bg-white
          border border-gray-300
          text-gray-900
          placeholder-gray-400
          outline-none
          focus:border-purple-400 focus:ring-2 focus:ring-purple-200
          transition-all duration-300
          ${className}
        `}
        {...props}
      />
    </div>
  )
})

export default Input