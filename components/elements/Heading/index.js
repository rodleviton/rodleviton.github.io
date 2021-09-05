import { propType as responsivePropType } from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import Text from '../../primitives/Text'
import fontSizes from '../../../theme/fontSizes'

/**
 * Headings are used as the titles of each major section of a page.
 */
const Heading = forwardRef(
  (
    {
      align = 'left',
      children,
      color,
      level = '2',
      primary,
      size,
      truncate,
      shadow,
      fontWeight = 'bold',
      variant,
      ...props
    },
    ref,
  ) => {
    const headingLevel = `h${level}`

    const truncateStyles = truncate
      ? {
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }
      : {}

    return (
      <Text
        {...props}
        {...truncateStyles}
        as={headingLevel}
        color={color || `typography.default`}
        fontFamily="primary"
        fontSize={size || fontSizes[headingLevel]}
        fontWeight={fontWeight}
        ref={ref}
        textAlign={align}
        textShadow={shadow ? 'text' : null}
      >
        {children}
      </Text>
    )
  },
)

if (process.env.NODE_ENV !== 'production') {
  Heading.displayName = 'Heading'
  Heading.propTypes = {
    /** React node */
    children: PropTypes.node.isRequired,
    /** HTML heading level */
    level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
    /** Heading level fontSize override */
    size: responsivePropType,
    /** Heading level fontWeight override */
    fontWeight: responsivePropType,
    /** Text alignment */
    align: responsivePropType,
    /** Heading color override */
    color: PropTypes.string,
    /** Light or dark text variant */
    variant: PropTypes.oneOf(['light', 'dark']),
    /** Truncate long headings */
    truncate: PropTypes.bool,
    /** Add text shadow */
    shadow: PropTypes.bool,
  }
}

export default Heading
