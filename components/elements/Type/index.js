import { propType as responsivePropType } from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import Text from '../../primitives/Text'

/**
 * The Type component should be used in combination with the Heading component
 *
 * ```javascript
 * @import Type from '@bookwell/dls/elements/Type';
 * ```
 */
const Type = forwardRef(
  (
    {
      align,
      bold,
      children,
      size = 'sm',
      color = 'typography.default',
      truncate,
      caps,
      variant,
      ...props
    },
    ref,
  ) => {
    const truncateStyles = truncate
      ? {
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }
      : {}
    return (
      <Text
        {...truncateStyles}
        {...props}
        ref={ref}
        color={color}
        fontFamily="secondary"
        fontSize={size}
        textAlign={align}
        textTransform={caps ? 'uppercase' : 'inherit'}
        lineHeight={1.5}
        fontWeight={
          props.fontWeight ? props.fontWeight : bold ? 'bold' : 'regular'
        }
      >
        {children}
      </Text>
    )
  },
)

if (process.env.NODE_ENV !== 'production') {
  Type.displayName = 'Type'
  Type.propTypes = {
    /** react node */
    children: PropTypes.node.isRequired,
    /** valid html element */
    as: PropTypes.string,
    /** text alignment */
    align: responsivePropType,
    /** light or dark text variant */
    variant: PropTypes.oneOf(['light', 'dark']),
    /** theme fontSize override */
    size: responsivePropType,
    /** Truncate long headings */
    truncate: PropTypes.bool,
    /** theme color override */
    color: PropTypes.string,
    /** apply theme bold fontWeight */
    bold: PropTypes.bool,
    /** text-transform: uppercase*/
    caps: PropTypes.bool,
  }
}

export default Type
