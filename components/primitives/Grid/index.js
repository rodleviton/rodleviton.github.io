import styled from '@emotion/styled'
import styledSystemPropTypes, {
  propType as responsivePropType,
} from '@styled-system/prop-types'
import shouldForwardProp from '@styled-system/should-forward-prop'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import {
  border,
  color,
  compose,
  grid,
  layout,
  position,
  shadow,
  space,
  system,
} from 'styled-system'

const GridPrimitive = styled('div', { shouldForwardProp })(
  { display: 'grid' },
  compose(border, color, grid, layout, shadow, space, position),
  system({
    alignItems: true,
    alignSelf: true,
    boxSizing: true,
    justifyContent: true,
    scrollSnapAlign: true,
    transition: true,
    visibility: true,
    flex: true,
    order: true,
  }),
)

/**
 * A layout primitive for controlling grid properties.
 * Extended API documentation available at https://styled-system.com/api
 */
const Grid = forwardRef(({ children, ...props }, ref) => (
  <GridPrimitive {...props} ref={ref}>
    {children}
  </GridPrimitive>
))

if (process.env.NODE_ENV !== 'production') {
  Grid.displayName = 'Grid'
  Grid.propTypes = {
    children: PropTypes.node,
    /** valid html element */
    as: PropTypes.string,
    ...styledSystemPropTypes.space,
    ...styledSystemPropTypes.shadow,
    ...styledSystemPropTypes.color,
    ...styledSystemPropTypes.border,
    /** css align-items property */
    alignItems: responsivePropType,
    /** css justify-content property */
    justifyContent: responsivePropType,
  }
}

export default Grid
