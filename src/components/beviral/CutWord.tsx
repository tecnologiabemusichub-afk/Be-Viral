import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * "O Corte": two copies of the same content; top half white, bottom half gradient,
 * crossed by an orange cut line ending in a dot.
 */
export function CutWord({
  children,
  className,
  gradientClass = "text-gradient-word",
  line = true,
  animate = false,
}: {
  children: ReactNode;
  className?: string;
  gradientClass?: string;
  line?: boolean;
  animate?: boolean;
}) {
  return (
    <span className={cn("relative inline-block leading-[0.9]", animate && "cut-word-animated", className)}>
      <span className="invisible block">{children}</span>
      <span aria-hidden className="cut-word-top absolute inset-0 overflow-hidden [clip-path:inset(0_0_50%_0)]">
        <span className="block">{children}</span>
      </span>
      <span aria-hidden className="cut-word-bottom absolute inset-0 overflow-hidden [clip-path:inset(50%_0_0_0)]">
        <span className={cn("block", gradientClass)}>{children}</span>
      </span>
      {line && (
        <span aria-hidden className="cut-word-line absolute left-[-4%] right-[-8%] top-1/2 flex -translate-y-1/2 items-center">
          <span className="h-[3px] flex-1 bg-orange" />
          <span className="h-3 w-3 shrink-0 rounded-full bg-orange shadow-[0_0_18px_var(--bv-orange)]" />
        </span>
      )}
    </span>
  );
}

export function CutLine({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("flex items-center", className)}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-orange" />
      <span className="h-2.5 w-2.5 rounded-full bg-orange" />
    </div>
  );
}
