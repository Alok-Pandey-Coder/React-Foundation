import React, { useId } from 'react'

function Select(
  { options = [], label, className = '', ...props },
  ref
) {
  const id = useId()

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="inline-block mb-2 text-gray-700 font-medium"
        >
          {label}
        </label>
      )}

      <select
        id={id}
        ref={ref}
        {...props}
        className={`
          w-full px-4 py-2
          rounded-full
          bg-white
          border border-gray-300
          text-gray-900
          outline-none
          placeholder-gray-400
          focus:border-purple-400 focus:ring-2 focus:ring-purple-200
          transition-all duration-300
          ${className}
        `}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)