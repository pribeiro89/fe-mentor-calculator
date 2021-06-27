import React from 'react'

const typeClasses = (type) => {
  switch (type) {
    case 'function':
      return 'function bg-function-key text-white text-xl';
    case 'result':
      return 'result bg-result-key text-white text-xl';
    default:
      return 'bg-key text-text text-3.5xl';
  }
}

const Key = ({ value, type, onClick, className }) => {
  return (
    <button
      className={`key rounded-lg p-3 ${typeClasses(type)} ${className}`}
      onClick={onClick}
      data-value={value}
    >
      {value}
    </button>
  )
}

export default Key
