import PropTypes from "prop-types"
import React from "react"

export default function DateTime({ children, dateTime }) {
  return (
    <p className="text-sm leading-5 text-gray-500">
      <time dateTime={dateTime}>{children}</time>
    </p>
  )
}

DateTime.propTypes = {
  dateTime: PropTypes.string.isRequired,
}
