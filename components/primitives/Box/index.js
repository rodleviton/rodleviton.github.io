import styled from '@emotion/styled'
import styledSystemPropTypes from '@styled-system/prop-types'
import shouldForwardProp from '@styled-system/should-forward-prop'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import {
  border,
  color,
  compose,
  layout,
  position,
  shadow,
  space,
  system,
} from 'styled-system'

const BoxPrimitive = styled('div', { shouldForwardProp })(
  compose(border, color, layout, shadow, space, position),
  system({
    scrollSnapAlign: true,
    background: true,
    boxSizing: true,
    transform: true,
    transition: true,
    visibility: true,
    order: true,
  }),
)

/**
 * A layout primitive for controlling: *margin, padding, background-color, width, height, border properties and box-shadows*.
 * Extended API documentation available at https://styled-system.com/api.
 *
 * The Box component API box abstracts css properties into component props,
 * making it very easy to layout sections of your application with little need to
 * re-wrap your component to adjust styles. This approach reduces component boilerplate
 * and also removes the need to write complex css to achieve responsive styling.
 */
const Box = forwardRef(({ children, as = 'div', ...props }, ref) => (
  <BoxPrimitive {...props} as={as} ref={ref}>
    {children}
  </BoxPrimitive>
))

if (process.env.NODE_ENV !== 'production') {
  Box.displayName = 'Box'
  Box.propTypes = {
    /** React node */
    children: PropTypes.node,
    /** A valid html element */
    as: PropTypes.string,
    ...styledSystemPropTypes.border,
    ...styledSystemPropTypes.color,
    ...styledSystemPropTypes.layout,
    ...styledSystemPropTypes.space,
    ...styledSystemPropTypes.shadow,
  }
}

export default Box
