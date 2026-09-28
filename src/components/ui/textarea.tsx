import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-lg border border-border bg-bg-elevated px-3 py-3 text-sm text-fg",
        "placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
