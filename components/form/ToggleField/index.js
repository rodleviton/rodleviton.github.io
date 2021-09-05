import PropTypes from 'prop-types'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import Stack from '../../elements/Stack'
import useCustomValidity from '../../../hooks/useCustomValidity'
import FieldGroup from '../primitives/FieldGroup'
import FieldMessage from '../primitives/FieldMessage'
import Label from '../primitives/Label'
import Toggle from '../primitives/Toggle'

/**
 * Accessible form  toggle switch field
 */
const ToggleField = forwardRef(
  (
    {
      id,
      error,
      hideError,
      required,
      label,
      disabled,
      name,
      onChange,
      onBlur,
      onFocus,
      value,
      checked,
      size,
      ...props
    },
    ref,
  ) => {
    const fieldRef = useRef()
    const [validationMessage, setValidationMessage] = useState('')

    // Set custom validation message from user provided error
    useCustomValidity(fieldRef, error)

    // Determine if a user provided or native html validation message exists
    useEffect(() => {
      if (fieldRef?.current?.validationMessage)
        setValidationMessage(fieldRef?.current?.validationMessage)
      else setValidationMessage('')
    }, [fieldRef?.current?.validationMessage])

    return (
      <FieldGroup id={`${id}-field-group`} ref={ref} {...props}>
        <Label
          id={`${id}-field-label`}
          htmlFor={`${id}-field-input`}
          disabled={disabled}
        >
          <Stack
            alignItems="center"
            direction="column"
            spacing="sm"
            gridTemplateColumns="auto 1fr"
          >
            <Toggle
              id={`${id}-field-input`}
              disabled={disabled}
              name={name}
              error={!hideError && (!!error || !!validationMessage)}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              value={value}
              checked={checked}
              required={required}
            />

            <span>{label}</span>
          </Stack>
        </Label>
        {!hideError && (error || validationMessage) && (
          <FieldMessage id={`${id}-field-message`} type="error">
            {error || validationMessage}
          </FieldMessage>
        )}
      </FieldGroup>
    )
  },
)

if (process.env.NODE_ENV !== 'production') {
  ToggleField.displayName = 'ToggleField'
  ToggleField.propTypes = {
    /** HTML id attribute */
    id: PropTypes.string.isRequired,
    /** Select field label text */
    label: PropTypes.node,
    /** Indicates if control can be interacted with */
    disabled: PropTypes.bool,
    /** HTML name attribute */
    name: PropTypes.string,
    /** onChange callback  */
    onChange: PropTypes.func,
    /** onBlur callback */
    onBlur: PropTypes.func,
    /** onFocus callback */
    onFocus: PropTypes.func,
    /** Field error message */
    error: PropTypes.string,
    /** HTML input value */
    value: PropTypes.string,
    /** Determines if checkbox is toggled on or off */
    checked: PropTypes.bool,
    /** Indicates required field */
    required: PropTypes.bool,
    /**
     * Prevent showing field error
     * Useful if you want to control when field errors are first displayed i.e. onSubmit
     */
    hideError: PropTypes.bool,
  }
}

export default ToggleField
