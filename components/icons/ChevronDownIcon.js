import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import Icon from '../elements/Icon'

const ChevronDownIcon = forwardRef(({ ...props }, ref) => (
  <Icon viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      d="M12.001 19.824L24 7.82497L21.1769 4.99992L11.993 14.1838L2.80908 4.99992L1.46459e-06 7.82497L12.001 19.824Z"
      fill="currentColor"
    />
  </Icon>
))

if (process.env.NODE_ENV !== 'production') {
  ChevronDownIcon.displayName = 'ChevronDownIcon'
  ChevronDownIcon.propTypes = {
    /** css color property */
    color: PropTypes.string,
    /** Icon size based on theme configuration */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  }
}

export default ChevronDownIcon
