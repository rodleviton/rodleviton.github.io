import { recast } from "@rpxl/recast";
import React, { forwardRef } from "react";

type Props = React.SVGProps<SVGSVGElement>;

/**
 * Mini Mecha's monogram: interlocking Ms drawn as strokes. Approximated from
 * the app icon, which exists only as raster.
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
        <path
          d="M3.6 20.4V4.2L12 17.4L20.4 4.2V20.4"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinejoin="miter"
        />
        <path
          d="M8.4 4.8L12 10.8L15.6 4.8"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinejoin="miter"
        />
      </svg>
    );
  }
);

Component.displayName = "MiniMecha";

export const MiniMecha = recast(Component, {});
