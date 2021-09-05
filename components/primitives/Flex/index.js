import styled from '@emotion/styled'
import styledSystemPropTypes from '@styled-system/prop-types'
import shouldForwardProp from '@styled-system/should-forward-prop'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  system,
} from 'styled-system'

const FlexPrimitive = styled('div', { shouldForwardProp })(
  { display: 'flex' },
  compose(border, color, flexbox, layout, shadow, space, position),
  system({
    scrollSnapAlign: true,
    boxSizing: true,
    transform: true,
    transition: true,
    background: true,
    backgroundColor: true,
    visibility: true,
  }),
)

/**
 * A layout primitive for controlling flex properties.
 * Extended API documentation available at https://styled-system.com/api
 */
const Flex = forwardRef(({ children, ...props }, ref) => (
  <FlexPrimitive {...props} ref={ref}>
    {children}
  </FlexPrimitive>
))

if (process.env.NODE_ENV !== 'production') {
  Flex.displayName = 'Flex'
  Flex.propTypes = {
    children: PropTypes.node,
    /** valid html element */
    as: PropTypes.string,
    ...styledSystemPropTypes.space,
    ...styledSystemPropTypes.shadow,
    ...styledSystemPropTypes.color,
    ...styledSystemPropTypes.border,
    ...styledSystemPropTypes.flex,
  }
}

export default Flex
