import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import Grid from '../../primitives/Grid'

/**
 * The Stack component should be used to arrange content vertically or horizontally across a page.
 * The stack component is for alignment purposes only and should **not** be used
 * to arrange items that require semantic structure e.g. list
 */
const Stack = forwardRef(
  ({ children, direction = 'row', spacing = 'md', ...props }, ref) => (
    <Grid gridAutoFlow={direction} gridGap={spacing} {...props} ref={ref}>
      {children}
    </Grid>
  ),
)

if (process.env.NODE_ENV !== 'production') {
  Stack.displayName = 'Stack'
  Stack.propTypes = {
    /** React node */
    children: PropTypes.node,
    /** Horizontal stack layout */
    direction: PropTypes.oneOfType([
      PropTypes.oneOf(['row', 'column']),
      PropTypes.array,
      PropTypes.object,
    ]),
    /** Gap between child elements */
    spacing: PropTypes.oneOfType([
      PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
      PropTypes.number,
    ]),
  }
}

export default Stack
