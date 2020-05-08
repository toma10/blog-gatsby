import React from "react"

export default function Subtitle({ children }) {
  return (
    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
      {children}
    </h3>
  )
}
