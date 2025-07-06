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
          d="M23.5446 7.48592L12.5758 0.173421C12.2014 -0.0572042 11.8018 -0.0590792 11.4242 0.173421L0.455437 7.48592C0.174187 7.67342 0 8.0083 0 8.34298V15.6555C0 15.9904 0.174187 16.3252 0.455437 16.5125L11.4242 23.8262C11.7984 24.0566 12.1982 24.0587 12.5758 23.8262L23.5446 16.5125C23.8258 16.3252 24 15.9904 24 15.6557V8.34317C24 8.0083 23.8258 7.67342 23.5446 7.48592ZM13.0314 2.95892L21.1071 8.34298L17.5044 10.7539L13.0312 7.76698V2.9593L13.0314 2.95892ZM10.9688 2.95892V7.76717L6.49537 10.7537L2.89275 8.34317L10.9688 2.95892ZM2.0625 10.2714L4.64737 11.9992L2.0625 13.727V10.2714ZM10.9688 21.0395L2.89275 15.6555L6.49537 13.2448L10.9688 16.2315V21.0395ZM12 14.4367L8.35725 11.9992L12 9.56173L15.6428 11.9992L12 14.4367ZM13.0312 21.0395V16.2315L17.5044 13.2448L21.1071 15.6555L13.0312 21.0395ZM21.9375 13.727L19.3526 11.9992L21.9375 10.2716V13.727Z"
          fill="currentColor"
        />
      </svg>
    );
  }
);

Component.displayName = "CodePen";

export const CodePen = recast(Component, {});
