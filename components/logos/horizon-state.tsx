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
          d="M11.293 6C11.8451 6.00015 12.293 6.44781 12.293 7V10.6826H7.50488C7.20115 10.6827 6.91435 10.8214 6.72461 11.0586L5.00781 13.2031C4.87686 13.3668 4.9935 13.6094 5.20312 13.6094H12.293V17.293C12.2928 17.845 11.845 18.2928 11.293 18.293H1C0.44781 18.293 0.000154357 17.8451 0 17.293V7C0 6.44772 0.447715 6 1 6H11.293Z"
          fill="currentColor"
        />
        <path
          opacity="0.5"
          d="M18.1463 6C21.3792 6 23.9998 8.75195 23.9998 12.1465C23.9997 15.5409 21.3791 18.293 18.1463 18.293C15.3937 18.2929 13.087 16.2973 12.4617 13.6094H18.2557C19.0638 13.6094 19.7195 12.9546 19.7195 12.1465C19.7195 11.3383 19.0639 10.6826 18.2557 10.6826H12.4617C13.0872 7.99501 15.394 6.00002 18.1463 6Z"
          fill="currentColor"
        />
      </svg>
    );
  }
);

Component.displayName = "Horizon State";

export const HorizonState = recast(Component, {});
