import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium select-none transition-[opacity,transform,background-color,color,border-color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-fg hover:opacity-90",
        paper: "bg-paper text-ink hover:opacity-90",
        ghost: "bg-transparent text-fg hover:bg-surface",
        outline:
          "border border-border bg-transparent text-fg hover:bg-surface",
        ink: "bg-ink text-paper hover:opacity-90",
      },
      size: {
        default: "h-11 px-5 rounded-md text-sm",
        sm: "h-9 px-3 rounded-sm text-sm",
        lg: "h-12 px-6 rounded-lg text-base",
        icon: "size-11 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
