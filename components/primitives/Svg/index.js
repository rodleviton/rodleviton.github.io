import styled from '@emotion/styled'
import {
  createShouldForwardProp,
  props,
} from '@styled-system/should-forward-prop'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { color, layout, system } from 'styled-system'

/**
 * Safari does not support the transform attribute on SVGs so we need to remove it manually.
 * As a workaround we apply any transforms as an inline style attribute.
 * Read more here: {@link https://www.w3.org/TR/SVG/struct.html#SVGElement}
 */
const shouldForwardProp = createShouldForwardProp([...props, 'transform'])

const SvgPrimitive = styled('svg', { shouldForwardProp })(
  color,
  layout,
  system({
    transform: true,
  }),
)

/** Base SVG primitive */
const Svg = forwardRef(
  ({ children, transform, width, height, ...props }, ref) => (
    <SvgPrimitive
      transform={transform}
      width={width}
      height={height}
      ref={ref}
      style={{ transform }}
      {...props}
    >
      {children}
    </SvgPrimitive>
  ),
)

if (process.env.NODE_ENV !== 'production') {
  Svg.displayName = 'Svg'
  Svg.propTypes = {
    /** React node */
    children: PropTypes.node.isRequired,
    /** css color property */
    color: PropTypes.string,
    /** css width property */
    width: PropTypes.string,
    /** css width property */
    height: PropTypes.string,
    /** svg transform attribute */
    transform: PropTypes.string,
  }
}

export default Svg
