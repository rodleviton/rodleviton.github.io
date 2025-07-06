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
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.379 21.3776L21.4973 18.4033C21.8236 18.2137 22.0881 17.7529 22.0881 17.3747V11.4523L17.4716 8.82019L17.4457 15.0442C17.445 15.2258 17.3174 15.4468 17.1607 15.5379L11.7352 18.6906L16.379 21.3776Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 17.4022C1 17.7806 1.26459 18.2408 1.59139 18.4304L10.9527 23.8587C11.2793 24.0481 11.8081 24.047 12.134 23.8562L16.1332 21.5146L5.9001 15.5654C5.74345 15.4743 5.61643 15.2533 5.61643 15.0714V3.19952L1.59377 5.49311C1.26584 5.68006 1 6.1384 1 6.51682V17.4022Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9246 0.141363C11.2516 -0.0473303 11.7817 -0.0470588 12.1082 0.141805L21.4966 5.5718C21.8233 5.7607 22.0881 6.22078 22.0881 6.59959V11.2055L11.8015 5.33611C11.6442 5.24637 11.3907 5.24878 11.2349 5.34171L5.86227 8.546V3.06243L10.9246 0.141363Z"
          fill="currentColor"
        />
      </svg>
    );
  }
);

Component.displayName = "Swanky Docs";

export const SwankyDocs = recast(Component, {});
