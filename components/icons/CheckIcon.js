import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import Icon from '../elements/Icon'

const CheckIcon = forwardRef(({ ...props }, ref) => (
  <Icon viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      d="M8.00054 21.2865L0 13.2859L2.28541 11.0005L8.00296 16.7116L8.00054 16.7141L21.7146 3L24 5.28541L10.2859 19.0011L8.00216 21.2849L8.00054 21.2865Z"
      fill="currentColor"
    />
  </Icon>
))

if (process.env.NODE_ENV !== 'production') {
  CheckIcon.displayName = 'CheckIcon'
  CheckIcon.propTypes = {
    /** css color property */
    color: PropTypes.string,
    /** Icon size based on theme configuration */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  }
}

export default CheckIcon
