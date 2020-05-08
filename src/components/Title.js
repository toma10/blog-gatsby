import React from "react"

export default function Title({ children }) {
  return (
    <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-700 sm:text-3xl sm:leading-10">
      {children}
    </h2>
  )
}
