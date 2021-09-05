import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import Icon from '../elements/Icon'

const CloseIcon = forwardRef(({ ...props }, ref) => (
  <Icon viewBox="0 0 24 24" ref={ref} {...props}>
    <rect
      x="2.10059"
      y="4.92871"
      width="4"
      height="24"
      transform="rotate(-45 2.10059 4.92871)"
      fill="currentColor"
    />
    <rect
      x="19.0713"
      y="2.10059"
      width="4"
      height="24"
      transform="rotate(45 19.0713 2.10059)"
      fill="currentColor"
    />
  </Icon>
))

if (process.env.NODE_ENV !== 'production') {
  CloseIcon.displayName = 'CloseIcon'
  CloseIcon.propTypes = {
    /** css color property */
    color: PropTypes.string,
    /** Icon size based on theme configuration */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  }
}

export default CloseIcon
