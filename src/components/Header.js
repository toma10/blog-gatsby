import { graphql, useStaticQuery } from "gatsby"

import Avatar from "./Avatar"
import { Link } from "gatsby"
import Nav from "./Nav"
import React from "react"

export default function Header() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `
  )

  return (
    <header className="flex justify-between items-center">
      <Link className="flex items-center space-x-3" to="/">
        <Avatar />
        <div>
          <h1 className="text-2xl leading-6 tracking-tight font-extrabold text-gray-900 sm:text-3xl sm:leading-9 ">
            {data.site.siteMetadata.title}
          </h1>
          <p className="text-gray-600">{data.site.siteMetadata.subtitle}</p>
        </div>
      </Link>
      <Nav />
    </header>
  )
}
