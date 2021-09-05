import styled from '@emotion/styled'
import css from '@styled-system/css'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { layout, variant } from 'styled-system'
import Text from '../../primitives/Text'
import clickableStyles from '../../utils/clickableStyles'

const AnchorPrimitive = styled(Text)(
  css({
    color: 'typography.link',
    textAlign: 'left',
    border: 'none',
    background: 'none',
    display: 'inline',
    padding: 0,
  }),
  variant({
    variants: {
      light: {
        color: 'typography.link',
      },
      dark: {
        color: 'white',
      },
    },
  }),
  layout,
  clickableStyles,
)

/** Anchor element */
const Anchor = forwardRef(
  (
    {
      children,
      borderRadius,
      textDecoration = 'underline',
      variant = 'light',
      ...props
    },
    ref,
  ) => {
    // Determine element type based on passed in props
    const elementType = props.href ? 'a' : props.onClick ? 'button' : 'div'

    return (
      <AnchorPrimitive
        as={elementType}
        borderRadius={borderRadius}
        textDecoration={textDecoration}
        variant={variant}
        passHref
        ref={ref}
        {...props}
      >
        {children}
      </AnchorPrimitive>
    )
  },
)

if (process.env.NODE_ENV !== 'production') {
  Anchor.displayName = 'Anchor'
  Anchor.propTypes = {
    /** React node */
    children: PropTypes.node.isRequired,
    /** css text-decoration property */
    textDecoration: PropTypes.string,
    /**
     * css border-radius property
     * Useful for styling focus ring
     * */
    borderRadius: PropTypes.string,
    /** light or dark text variant */
    variant: PropTypes.oneOf(['light', 'dark']),
  }
}

export default Anchor
