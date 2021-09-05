import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import {
  border,
  color,
  compose,
  flexbox,
  shadow,
  space,
  system,
  typography,
} from 'styled-system'
import clickableStyles from '../../utils/clickableStyles'

const ButtonPrimitive = styled('button', { shouldForwardProp })(
  compose(border, color, flexbox, shadow, space, typography),
  {
    display: 'inline-flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  clickableStyles,
  system({
    scrollSnapAlign: true,
    width: true,
    display: true,
  }),
)

/**
 * Base button.
 *
 * ```javascript
 * @import Button from '@bookwell/dls/primitives/Button';
 * ```
 */
const Button = forwardRef(
  ({ children, justifyContent = 'center', ...props }, ref) => {
    // Determine element type based on passed in props
    const elementType = props.href
      ? 'a'
      : props.onClick || props.type === 'submit'
      ? 'button'
      : 'div'

    return (
      <ButtonPrimitive
        as={elementType}
        ref={ref}
        justifyContent={justifyContent}
        {...props}
      >
        {children}
      </ButtonPrimitive>
    )
  },
)

if (process.env.NODE_ENV !== 'production') {
  Button.displayName = 'ButtonPrimitive'
  Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(['button', 'submit']),
    justifyContent: PropTypes.oneOf(['center', 'flex-end', 'flex-start']),
  }
}

export default Button
