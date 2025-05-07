import React from 'react'

export const Card = (props) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">Card Title</h2>
      <p className="text-gray-600 mb-4">
        This is a sample card using Tailwind CSS in React.
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Action {props.name}
      </button>
    </div>
  )
}
