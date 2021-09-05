import styled from '@emotion/styled'
import { propType as responsivePropType } from '@styled-system/prop-types'
import {
  createShouldForwardProp,
  props,
} from '@styled-system/should-forward-prop'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import {
  border,
  color,
  compose,
  shadow,
  space,
  system,
  typography,
} from 'styled-system'

const shouldForwardProp = createShouldForwardProp([
  ...props,
  'textDecoration',
  'textOverflow',
  'whiteSpace',
  'overflow',
])

const TextPrimitive = styled('div', {
  shouldForwardProp,
})(
  compose(border, color, space, shadow, typography),
  system({
    textDecoration: true,
    textOverflow: true,
    textTransform: true,
    whiteSpace: true,
    overflow: true,
  }),
)

/**
 * A responsive typography component
 *
 * The Text primitive will rarely be used directly. It should be extended into a
 * suitable bookwell element with a limited subset of props and theme presets to
 * ensure consistent usage e.g. `Heading` component.
 *
 * Extended API documentation available at https://styled-system.com/api.
 */
const Text = forwardRef(({ children, ...props }, ref) => (
  <TextPrimitive m={0} {...props} ref={ref}>
    {children}
  </TextPrimitive>
))

if (process.env.NODE_ENV !== 'production') {
  Text.displayName = 'Text'
  Text.propTypes = {
    /** valid html element */
    as: PropTypes.string,
    /** React child node */
    children: PropTypes.node,
    /** css color property */
    color: responsivePropType,
    /** css font-family property */
    fontFamily: responsivePropType,
    /** css font-size property */
    fontSize: responsivePropType,
    /** css font-style property */
    fontStyle: responsivePropType,
    /** css font-weight property */
    fontWeight: responsivePropType,
    /** css line-height property */
    lineHeight: responsivePropType,
    /** css letter-spacing property */
    letterSpacing: responsivePropType,
    /** css margin-top property */
    marginTop: responsivePropType,
    /** css margin-bottom property */
    marginBottom: responsivePropType,
    /** css margin-top and margin-bottom property */
    marginY: responsivePropType,
    /** css text-align property */
    textAlign: responsivePropType,
    /** css text-overflow property */
    textOverflow: PropTypes.string,
    /** css white-space property */
    whiteSpace: PropTypes.string,
    /** css overflow property */
    overflow: PropTypes.string,
    /** css text-decoration property */
    textDecoration: PropTypes.string,
    /** css border-radius property */
    borderRadius: PropTypes.string,
  }
}

export default Text
