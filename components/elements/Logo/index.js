import React, { forwardRef } from 'react'
import Svg from '../../primitives/Svg'

const Logo = forwardRef(
  ({ width = 60, height = 68, mode = 'dark', ...props }, ref) => (
    <Svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.7564 60.3167L58.319 51.9249C59.2474 51.3899 60 50.0897 60 49.0225V32.3126L46.8652 24.8861L46.7914 42.447C46.7893 42.9595 46.4264 43.5831 45.9806 43.84L30.544 52.7355L43.7564 60.3167Z"
        fill="#5C4CDA"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 49.1003C0 50.168 0.752818 51.4665 1.68262 52.0012L28.3174 67.3172C29.2467 67.8515 30.7513 67.8485 31.6786 67.3101L43.057 60.7035L13.9418 43.9177C13.4961 43.6607 13.1347 43.0372 13.1347 42.5238V9.02747L1.68941 15.4988C0.756374 16.0263 0 17.3195 0 18.3872V49.1003Z"
        fill={mode === 'dark' ? 'white' : '#E0E0E0'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.2376 0.398855C29.168 -0.133542 30.6761 -0.132776 31.6052 0.400103L58.3171 15.7208C59.2465 16.2538 60 17.5519 60 18.6207V31.6164L30.7326 15.0558C30.2851 14.8026 29.5637 14.8094 29.1203 15.0716L13.8342 24.1125V8.64063L28.2376 0.398855Z"
        fill={mode === 'dark' ? 'white' : '#E0E0E0'}
      />
    </Svg>
  ),
)

if (process.env.NODE_ENV !== 'production') Logo.displayName = 'Logo'

export default Logo
