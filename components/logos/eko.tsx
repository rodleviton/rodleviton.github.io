import { recast } from "@rpxl/recast";
import React, { forwardRef } from "react";

type Props = React.SVGProps<SVGSVGElement>;

/**
 * EKO's mark: three stacked level bars. Traced from public/icon.svg, with the
 * tile dropped and the colour lifted so it matches the other marks.
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
        <rect x="6.96" y="6.54" width="10.08" height="2.31" rx="1.155" fill="currentColor" />
        <rect x="6.96" y="10.85" width="7.98" height="2.31" rx="1.155" fill="currentColor" />
        <rect x="6.96" y="15.15" width="10.08" height="2.31" rx="1.155" fill="currentColor" />
      </svg>
    );
  }
);

Component.displayName = "Eko";

export const Eko = recast(Component, {});
