import React from 'react'

export default function Button({ children, variant = "primary", onClick }) {
  const baseStyles = "rounded-lg font-medium transition";
  const variants = {
    primary: " px-4 py-3 hidden bg-blue-900 text-white hover:bg-blue-700 lg:block",
    secondary: "px-6 py-4 bg-blue-900 text-gray-200 hover:bg-blue-700 md:w-60",
    outline: "px-6 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}
