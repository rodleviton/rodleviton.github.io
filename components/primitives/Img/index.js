import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { border, color, compose, shadow, system } from 'styled-system'

const ImgPrimitive = styled('img')(
  compose(border, color, shadow),
  system({
    objectFit: true,
    transform: true,
  }),
)

/**
 * Base img element component
 */
const Img = forwardRef(({ ...props }, ref) => (
  <ImgPrimitive ref={ref} {...props} />
))

if (process.env.NODE_ENV !== 'production') {
  Img.displayName = 'Img'
  Img.propTypes = {
    /** object-fit css property */
    objectFit: PropTypes.oneOf([
      'fill',
      'contain',
      'cover',
      'none',
      'scale-down',
    ]),
    /** html img width attribute */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** html img height attribute */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** html img loading attribute */
    loading: PropTypes.oneOf(['eager', 'lazy']),
    /** css border-radius property */
    borderRadius: PropTypes.string,
    /** css background-color property */
    backgroundColor: PropTypes.string,
    /** css box-shadow property */
    boxShadow: PropTypes.string,
  }
}

export default Img
