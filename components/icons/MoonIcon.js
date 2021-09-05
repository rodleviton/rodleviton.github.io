import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import Icon from '../elements/Icon'

const MoonIcon = forwardRef(({ ...props }, ref) => (
  <Icon viewBox="0 0 24 24" ref={ref} {...props}>
    <g clipPath="url(#clip0)">
      <path
        d="M24.9452 16.0676C23.2754 19.7402 19.5749 22.2741 15.2903 22.2595C9.44279 22.2395 4.72972 17.4941 4.7497 11.6466C4.76434 7.36196 7.32347 3.67889 11.0074 2.03421C10.3966 3.36603 10.0547 4.8335 10.0494 6.38296C10.0295 12.217 14.7425 16.9759 20.59 16.9959C22.1395 17.0012 23.6093 16.6694 24.9452 16.0676Z"
        fill="currentColor"
      />
      <circle
        cx="2.88143"
        cy="3.90131"
        r="0.631579"
        transform="rotate(0.195808 2.88143 3.90131)"
        fill="currentColor"
      />
      <circle
        cx="16.1423"
        cy="4.57826"
        r="1.26316"
        transform="rotate(0.195808 16.1423 4.57826)"
        fill="currentColor"
      />
      <circle
        cx="21.8071"
        cy="10.2819"
        r="0.631579"
        transform="rotate(0.195808 21.8071 10.2819)"
        fill="currentColor"
      />
      <circle
        cx="2.19588"
        cy="19.6886"
        r="1.26316"
        transform="rotate(0.195808 2.19588 19.6886)"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="24"
          height="24"
          fill="currentColor"
          transform="translate(1) rotate(0.195808)"
        />
      </clipPath>
    </defs>
  </Icon>
))

if (process.env.NODE_ENV !== 'production') {
  MoonIcon.displayName = 'MoonIcon'
  MoonIcon.propTypes = {
    /** css color property */
    color: PropTypes.string,
    /** Icon size based on theme configuration */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  }
}

export default MoonIcon
