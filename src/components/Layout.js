import React from "react"

export default function Layout({ children }) {
  return (
    <div className="px-4 pt-16 pb-20 bg-white sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto lg:max-w-3xl">{children}</div>
    </div>
  )
}
