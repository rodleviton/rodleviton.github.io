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
          d="M21.6899 6.98416e-07V4.77348H6.22461V0L21.6899 6.98416e-07Z"
          fill="currentColor"
        />
        <path
          d="M21.6899 12.7955V17.5691H6.22461V12.7955H21.6899Z"
          fill="currentColor"
        />
        <path
          d="M0 6.36859L2.01961e-07 11.1421H17.7754V6.36859H0Z"
          fill="currentColor"
        />
        <path
          d="M0 12.7293H4.62032V19.2266H10.9091V24H0V12.7293Z"
          fill="currentColor"
        />
        <path d="M0 0H4.62032V4.77348H0V0Z" fill="currentColor" />
        <path
          d="M23.9999 11.1381V6.36462H19.3796V11.1381H23.9999Z"
          fill="currentColor"
        />
        <path
          d="M23.9999 11.1381V6.36462H19.3796V11.1381H23.9999Z"
          fill="currentColor"
        />
      </svg>
    );
  }
);

Component.displayName = "PresperLabs";

export const PresperLabs = recast(Component, {});
