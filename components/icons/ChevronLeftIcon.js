import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import Icon from '../elements/Icon'

const ChevronLeftIcon = forwardRef(({ ...props }, ref) => (
  <Icon viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      d="M17 24.7159L19.82 21.8959L10.66 12.7159L19.82 3.53588L17 0.715881L5.00001 12.7159L17 24.7159Z"
      fill="currentColor"
    />
  </Icon>
))

if (process.env.NODE_ENV !== 'production') {
  ChevronLeftIcon.displayName = 'ChevronLeftIcon'
  ChevronLeftIcon.propTypes = {
    /** css color property */
    color: PropTypes.string,
    /** Icon size based on theme configuration */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  }
}

export default ChevronLeftIcon
