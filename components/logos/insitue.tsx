import { recast } from "@rpxl/recast";
import React, { forwardRef } from "react";

type Props = React.SVGProps<SVGSVGElement>;

/**
 * InSitue's brandmark: a rounded tile with the quarter-round cut out of its
 * lower right. Traced from apps/marketing/public/brandmark.svg and reduced to a
 * single evenodd path so it inherits currentColor like the other marks.
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.8 0H19.2C21.851 0 24 2.149 24 4.8V19.2C24 21.851 21.851 24 19.2 24H4.8C2.149 24 0 21.851 0 19.2V4.8C0 2.149 2.149 0 4.8 0ZM13.44 18.24C13.44 15.589 15.589 13.44 18.24 13.44H24V19.2C24 21.851 21.851 24 19.2 24H13.44V18.24Z"
          fill="currentColor"
        />
      </svg>
    );
  }
);

Component.displayName = "InSitue";

export const InSitue = recast(Component, {});
