import { recast } from "@rpxl/recast";
import React, { forwardRef } from "react";

type Props = React.SVGProps<SVGSVGElement>;

/**
 * GYRO's wordmark sets each letter against a solid square dot (G.Y.R.O.).
 * Reduced to a mark, the dot is the device. Sized to sit at a similar optical
 * weight to the other company logos rather than filling the box.
 */
const Component = forwardRef<SVGSVGElement, Props>(
  ({ width = 24, height = 24, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M7 7H17V17H7V7Z" fill="currentColor" />
      </svg>
    );
  }
);

Component.displayName = "Gyro";

export const Gyro = recast(Component, {});
