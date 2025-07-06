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
          d="M19.5633 18.3108L19.662 18.1693C20.9634 16.2441 21.6829 13.8729 21.6829 11.4947C21.6829 5.15633 16.8088 0 10.8203 0H2.00676C3.11418 1.1608 4.23569 2.33929 5.29727 3.4576H10.8344C15.0066 3.4576 18.403 7.07801 18.403 11.523C18.403 13.0023 18.0256 14.4427 17.3167 15.6884L17.2285 15.8441L11.3634 9.79952H6.75035L14.9431 18.2967L14.735 18.4276C13.5712 19.1743 12.2275 19.5707 10.8485 19.5707C6.67625 19.5707 3.27994 15.9503 3.27994 11.5053C3.27994 10.9214 3.33637 10.3516 3.4457 9.79952H0.119912C0.0387952 10.3622 0 10.932 0 11.5053C0 17.8437 4.87406 23 10.8626 23V22.9859C13.1233 22.9788 15.3593 22.2073 17.165 20.8129L17.2603 20.7421L19.3869 23H24L19.5597 18.3073L19.5633 18.3108Z"
          fill="currentColor"
        />
      </svg>
    );
  }
);

Component.displayName = "OSQO";

export const OSQO = recast(Component, {});
