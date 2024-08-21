import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        default: "h-10 px-3 py-2 text-sm",
        sm: "h-7 px-2 py-2 text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const Input = React.forwardRef(({ className, size, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(inputVariants({ size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
