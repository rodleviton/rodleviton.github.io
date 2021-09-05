import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { variant } from 'styled-system'
import Type from '../../../elements/Type'

const FieldMessagePrimitive = styled(Type)(
  variant({
    prop: 'type',
    variants: {
      error: {
        color: 'error',
      },
      info: {
        color: 'typography.light',
      },
    },
  }),
)

/**
 * Field message component
 */
const FieldMessage = forwardRef(({ children, id, ...props }, ref) => (
  <FieldMessagePrimitive size="sm" id={id} ref={ref} {...props}>
    {children}
  </FieldMessagePrimitive>
))

if (process.env.NODE_ENV !== 'production') {
  FieldMessage.displayName = 'FieldMessage'
  FieldMessage.propTypes = {
    /** React node */
    children: PropTypes.node,
    /** HTML id attribute */
    id: PropTypes.string,
    /** Type based on theme variants */
    type: PropTypes.oneOf(['error', 'info']),
  }
}

export default FieldMessage
