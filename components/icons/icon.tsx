import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";

/** The icon size scale. Kept as a plain lookup so the component owns it. */
const sizes = {
  xs: "h-3 w-3 min-h-3 min-w-3",
  sm: "h-3 w-3 min-h-3 min-w-3",
  md: "h-4 w-4 min-h-4 min-w-4",
  lg: "h-5 w-5 min-h-5 min-w-5",
  xl: "h-6 w-6 min-h-6 min-w-6",
  "2xl": "h-8 w-8 min-h-8 min-w-8",
  "3xl": "h-10 w-10 min-h-10 min-w-10",
  "4xl": "h-12 w-12 min-h-12 min-w-12",
} as const;

export type IconSize = keyof typeof sizes;

type Props = React.SVGAttributes<SVGSVGElement> & {
  size?: IconSize;
};

const Component = forwardRef<SVGSVGElement, Props>(
  ({ size = "xl", className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={cn("text-inherit", sizes[size], className)}
        {...props}
      />
    );
  }
);

Component.displayName = "Icon";

export const Icon = Component;
