import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React, { forwardRef } from 'react'
import { system } from 'styled-system'
import Box from '../../primitives/Box'
import Flex from '../../primitives/Flex'

const pulse = keyframes`
  0%,
  80%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
`

const Dot = styled(Box)(
  {
    width: 7,
    height: 7,
    margin: 2,
    borderRadius: '50%',
    animationFillMode: 'both',
    backgroundColor: 'currentColor',
    animation: `${pulse} 1s infinite ease-in-out`,
  },
  system({
    animation: true,
    animationDelay: true,
  }),
)

/** Element used to indicate loading action. */
const DotLoader = forwardRef(({ ...props }, ref) => (
  <Flex ref={ref} {...props} mx={-2}>
    <Dot animationDelay="-0.32s" />
    <Dot animationDelay="-0.16s" />
    <Dot />
  </Flex>
))

if (process.env.NODE_ENV !== 'production') DotLoader.displayName = 'DotLoader'

export default DotLoader
