import { recast } from "@rpxl/recast";
import React, { forwardRef } from "react";

type Props = React.SVGProps<SVGSVGElement>;

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
          d="M19.2632 0C21.8792 2.8483e-07 24 2.12076 24 4.73684V19.2632C24 21.8792 21.8792 24 19.2632 24H4.73684C2.12076 24 0 21.8792 0 19.2632V4.73684C2.84848e-07 2.12076 2.12076 0 4.73684 0H19.2632ZM14.2337 6.78793C14.0564 6.70612 13.8481 6.80317 13.7967 6.99147L12 13.5789L10.0559 6.99918C9.99966 6.80875 9.78371 6.71676 9.60752 6.80829L6.3124 8.52169C6.14565 8.6084 6.09096 8.8208 6.19521 8.97718L11.7351 17.2867C11.8607 17.475 12.1378 17.4739 12.2618 17.2845L17.7992 8.83254C17.9049 8.6712 17.8427 8.45357 17.6676 8.37274L14.2337 6.78793Z"
          fill="currentColor"
        />
      </svg>
    );
  }
);

Component.displayName = "Vue Card Stack";

export const VueCardStack = recast(Component, {});
