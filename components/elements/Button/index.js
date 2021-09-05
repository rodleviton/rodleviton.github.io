import styled from '@emotion/styled'
import css from '@styled-system/css'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { variant } from 'styled-system'
import ButtonPrimitive from '../../primitives/Button'
import DotLoader from '../DotLoader'

export const BUTTON_SIZE = 48

const ButtonWithVariants = styled(ButtonPrimitive)(
  css({
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: BUTTON_SIZE / 2,
    fontFamily: 'secondary',
    fontWeight: 'regular',
    fontSize: 'sm',
    height: BUTTON_SIZE,
    borderColor: 'border',
    background: 'white',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textDecoration: 'none',
  }),
  variant({
    variants: {
      primary: {
        color: 'typography.dark',
        borderColor: 'palette.primary.css',
        bg: 'palette.primary.css',
        // The button component can render a div to look like a button.
        // Natively a div does not have a disabled state so the `.disabled` class allows us to display a pseudo button as disabled.
        '&:disabled, &.disabled': {
          bg: 'disabled',
          borderColor: 'disabled',
          cursor: 'not-allowed',
        },
      },
      secondary: {
        color: 'typography.default',
        borderColor: 'palette.primary.css',
        bg: 'transparent',
        '&:disabled, &.disabled': {
          borderColor: 'disabled',
          color: 'disabled',
          cursor: 'not-allowed',
        },
      },
      transparent: {
        color: 'typography.default',
        borderColor: 'transparent',
        bg: 'transparent',
        '&:disabled, &.disabled': {
          borderColor: 'transparent',
          color: 'disabled',
          cursor: 'not-allowed',
        },
      },
    },
  }),
)

const Button = forwardRef(
  ({ children, isLoading, disabled, variant = 'primary', ...props }, ref) => (
    <ButtonWithVariants
      ref={ref}
      variant={variant}
      disabled={disabled}
      className={disabled ? 'disabled' : ''}
      px={props.px || 'lg'}
      {...props}
    >
      {!isLoading && children} {isLoading && <DotLoader />}
    </ButtonWithVariants>
  ),
)

if (process.env.NODE_ENV !== 'production') {
  Button.displayName = 'Button'
  Button.propTypes = {
    /** React node */
    children: PropTypes.node.isRequired,
    /** Button type based on theme variants  */
    variant: PropTypes.oneOf(['primary', 'secondary', 'transparent']),
    /** Is button currently clickable */
    disabled: PropTypes.bool,
    /** Displays a loader to indicate that an asynchronous action is currently taking place */
    isLoading: PropTypes.bool,
    /** Button type */
    type: PropTypes.oneOf(['button', 'submit']),
  }
}

export default Button
