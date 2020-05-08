import { Link } from "gatsby"
import React from "react"

export default function StyledLink(props) {
  return (
    <Link
      {...props}
      className="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
    />
  )
}
