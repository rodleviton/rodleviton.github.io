import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import Icon from '../elements/Icon'

const VueIcon = forwardRef(({ ...props }, ref) => (
  <Icon viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      d="M14.7705 2.71598L11.9993 7.51586L9.22807 2.71598H-0.000427246L11.9993 23.5003L23.999 2.71598H14.7705Z"
      fill="#41B883"
    />
    <path
      d="M14.7705 2.71598L11.9993 7.51586L9.22806 2.71598H4.79944L11.9993 15.1863L19.1991 2.71598H14.7705Z"
      fill="#34495E"
    />
  </Icon>
))

if (process.env.NODE_ENV !== 'production') {
  VueIcon.displayName = 'VueIcon'
  VueIcon.propTypes = {
    /** Icon size based on theme configuration */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  }
}

export default VueIcon
