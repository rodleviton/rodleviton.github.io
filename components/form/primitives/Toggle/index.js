import styled from '@emotion/styled'
import css from '@styled-system/css'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { variant } from 'styled-system'
import MoonIcon from '../../../icons/MoonIcon'
import SunIcon from '../../../icons/SunIcon'
import Box from '../../../primitives/Box'
import Flex from '../../../primitives/Flex'
import clickableStyles from '../../../utils/clickableStyles'

const checkboxSize = 24 // px

const CheckboxPrimitive = styled(Flex)({
  width: checkboxSize,
  height: checkboxSize,
  // Visually hide a native input but not prevent it from being keyboard focusable
  opacity: 0,
  position: 'absolute',
})

const ToggleTrack = styled(Flex)(
  css({
    padding: '2px',
    alignItems: 'center',
    backgroundColor: 'palette.primary.css',
    borderRadius: '100em',
    transition: 'background 0.25s',
    position: 'relative',
    '&.checked': {
      backgroundColor: 'secondary',
    },
  }),
)

const ToggleHandle = styled(Flex)(
  css({
    marginRight: '2em',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    padding: 'sm',
    background: 'white',
    transition: 'transform 0.15s',
    boxShadow: 'sm',
    transform: 'translate3d(0, 0, 0)',
    height: '28px',
    width: '28px',
  }),
  variant({
    prop: 'checked',
    variants: {
      true: {
        transform: 'translate3d(2em, 0, 0)',
      },
    },
  }),
  variant({
    prop: 'error',
    variants: {
      true: {
        '&:not(:focus)': {
          borderColor: 'error',
          backgroundColor: 'white',
        },
      },
    },
  }),
  variant({
    prop: 'disabled',
    variants: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  }),
  clickableStyles,
)

/**
 * HTML toggle input
 */
const Toggle = forwardRef(
  ({ id, checked, error, disabled, size = 'md', ...props }, ref) => (
    <ToggleTrack>
      <CheckboxPrimitive
        as="input"
        type="checkbox"
        checked={checked}
        error={error}
        disabled={disabled}
        id={id}
        ref={ref}
        {...props}
      />

      <Flex
        color="typography.dark"
        position="absolute"
        left={checked ? 8 : 'auto'}
        right={checked ? 'auto' : 8}
      >
        {checked ? (
          <MoonIcon role="presentation" />
        ) : (
          <SunIcon role="presentation" />
        )}
      </Flex>

      <ToggleHandle
        checked={checked}
        error={error}
        tabIndex="0"
        disabled={disabled}
      ></ToggleHandle>
    </ToggleTrack>
  ),
)

if (process.env.NODE_ENV !== 'production') {
  Toggle.displayName = 'Toggle'
  Toggle.propTypes = {
    /** HTML id attribute */
    id: PropTypes.string,
    /** HTML name attribute */
    name: PropTypes.string,
    /** onChange callback  */
    onChange: PropTypes.func,
    /** onBlur callback */
    onBlur: PropTypes.func,
    /** onFocus callback */
    onFocus: PropTypes.func,
    /** Indicates if control can be interacted with */
    disabled: PropTypes.bool,
    /** HTML input value */
    value: PropTypes.string,
    /** Determines if toggle is switched on or off */
    checked: PropTypes.bool,
    /** Indicates whether field is in error state */
    error: PropTypes.bool,
    /** Indicates required field */
    required: PropTypes.bool,
  }
}

export default Toggle
