/**
 * Reusable CSS styles for clickable elements
 */
const clickableStyles = `
  &:focus {
    outline: 0;
    box-shadow: 0 0 2px 2px rgba(0, 132, 255, 0.5);
  }

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }
`

export default clickableStyles
