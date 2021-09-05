import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import Svg from '../../primitives/Svg'

/** Icon element */
const Icon = forwardRef(({ children, size = 'md', ...props }, ref) => (
  <Svg width={`icon.${size}`} height={`icon.${size}`} {...props} ref={ref}>
    {children}
  </Svg>
))

if (process.env.NODE_ENV !== 'production') {
  Icon.displayName = 'Icon'
  Icon.propTypes = {
    /** React node */
    children: PropTypes.node.isRequired,
    /** css color property */
    color: PropTypes.string,
    /** Icon size based on theme configuration */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  }
}

export default Icon
