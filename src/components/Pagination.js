import PropTypes from "prop-types"
import React from "react"
import StyledLink from "./StyledLink"

export default function Pagination({ numPages, currentPage }) {
  return (
    <nav className="flex items-center justify-between">
      {currentPage > 1 ? (
        <StyledLink to={currentPage === 2 ? "/" : `/blog/${currentPage - 1}`}>
          Previous
        </StyledLink>
      ) : (
        <span />
      )}
      {numPages > 1 && currentPage < numPages ? (
        <StyledLink
          to={`/blog/${currentPage + 1}`}
          className="inline-flex text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none focus:text-gray-700"
        >
          Next
        </StyledLink>
      ) : (
        <span />
      )}
    </nav>
  )
}

Pagination.propTypes = {
  numPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
}
