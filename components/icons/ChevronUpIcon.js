import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import Icon from '../elements/Icon'

const ChevronUpIcon = forwardRef(({ ...props }, ref) => (
  <Icon viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      d="M11.999 5L0 16.999L2.82306 19.8241L12.007 10.6401L21.1909 19.8241L24 16.999L11.999 5Z"
      fill="currentColor"
    />
  </Icon>
))

if (process.env.NODE_ENV !== 'production') {
  ChevronUpIcon.displayName = 'ChevronUpIcon'
  ChevronUpIcon.propTypes = {
    /** css color property */
    color: PropTypes.string,
    /** Icon size based on theme configuration */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  }
}

export default ChevronUpIcon
