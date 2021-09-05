import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import Box from '../../primitives/Box'
import Flex from '../../primitives/Flex'
import Button, { BUTTON_SIZE } from '../Button'

const IconButton = forwardRef(
  ({ iconPosition = 'start', label, variant, children, ...props }, ref) => {
    const buttonProps = {
      width: !label ? BUTTON_SIZE : 'auto',
      px: !label ? 0 : 'lg',
    }

    return (
      <Button ref={ref} variant={variant} {...buttonProps} {...props}>
        <Flex
          flexDirection={iconPosition === 'start' ? 'row-reverse' : 'row'}
          alignItems="center"
          mx="-4px"
        >
          {label && <Box mx="xs">{label}</Box>}
          <Flex mx="xs" alignItems="center" color="palette.primary.css">
            {children}
          </Flex>
        </Flex>
      </Button>
    )
  },
)

if (process.env.NODE_ENV !== 'production') {
  IconButton.displayName = 'IconButton'
  IconButton.propTypes = {
    /** React node */
    children: PropTypes.node.isRequired,
    /** Button label */
    label: PropTypes.string,
    /** Display icon before or after text */
    iconPosition: PropTypes.oneOf(['start', 'end']),
    /** Button type based on theme variants  */
    variant: PropTypes.oneOf(['primary', 'secondary', 'transparent']),
  }
}

export default IconButton
