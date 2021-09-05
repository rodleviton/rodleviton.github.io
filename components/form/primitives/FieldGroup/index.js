import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import Stack from '../../../elements/Stack'
import Box from '../../../primitives/Box'

const FieldGroupPrimitive = styled(Box)({
  padding: 0,
  margin: 0,
  border: 'none',
})

/**
 * Field group component
 *
 * We use an inner wrapper as a workaround for a chrome issue where `fieldset` does not render `display: grid`.
 * https://bugs.chromium.org/p/chromium/issues/detail?id=262679
 */
const FieldGroup = forwardRef(({ id, children, ...props }, ref) => (
  <FieldGroupPrimitive id={id} ref={ref} {...props}>
    <Stack spacing="sm">{children}</Stack>
  </FieldGroupPrimitive>
))

if (process.env.NODE_ENV !== 'production') {
  FieldGroup.displayName = 'FieldGroup'
  FieldGroup.propTypes = {
    /** React node */
    children: PropTypes.node,
    /** HTML id attribute */
    id: PropTypes.string,
    /** Semantic HTML container */
    as: PropTypes.oneOf(['div', 'fieldset']),
  }
}

export default FieldGroup
