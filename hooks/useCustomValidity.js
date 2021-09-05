import { useEffect } from 'react'

/**
 * A React hook that sets a custom validation message on a HTML form control
 * element using the standard Constraint Validation API. Taken from
 * [Device Agnostic UI](https://github.com/jaydenseric/device-agnostic-ui).
 * @copyright Jayden Seric
 * @license MIT
 * @see [Device Agnostic UI docs](https://deviceagnosticui.com/hooks/useCustomValidity).
 * @see [Device Agnostic UI source](https://github.com/jaydenseric/device-agnostic-ui/blob/v5.1.1/src/hooks/useCustomValidity.mjs).
 * @param {object|null} ref React ref for the HTML form control element.
 * @param {string} [validationMessage=''] Validation message for the HTML form control element.
 */
export default function useCustomValidity(ref, validationMessage = '') {
  useEffect(() => {
    if (ref.current) ref.current.setCustomValidity(validationMessage)
  }, [ref, validationMessage])
}
