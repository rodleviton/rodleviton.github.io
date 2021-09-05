import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { variant } from 'styled-system'
import Type from '../../../elements/Type'

const LabelPrimitive = styled(Type)(
  { display: 'block', padding: 0 },
  variant({
    prop: 'disabled',
    variants: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  }),
)

/**
 * Accessible form label component
 */
const Label = forwardRef(({ id, bold, htmlFor, children, ...props }, ref) => (
  <LabelPrimitive
    as="label"
    bold={bold}
    id={id}
    htmlFor={htmlFor}
    ref={ref}
    {...props}
  >
    {children}
  </LabelPrimitive>
))

if (process.env.NODE_ENV !== 'production') {
  Label.displayName = 'Label'
  Label.propTypes = {
    /** React node */
    children: PropTypes.node,
    /** HTML id attribute */
    id: PropTypes.string,
    /** Accessibility attribute to associate label with from field */
    htmlFor: PropTypes.string,
    /** apply theme bold fontWeight */
    bold: PropTypes.bool,
    /** Indicates if control can be interacted with */
    disabled: PropTypes.bool,
    /** Semantic HTML container */
    as: PropTypes.oneOf(['label', 'legend']),
  }
}

export default Label
