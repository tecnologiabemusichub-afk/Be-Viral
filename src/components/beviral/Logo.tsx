import { cn } from "@/lib/utils";

/** beviral logo in HTML/CSS: Poppins 400/800, dotless ı with an orange play triangle. */
export function Logo({ className, gradient = false, animated = false }: { className?: string; gradient?: boolean; animated?: boolean }) {
  return (
    <span
      className={cn("inline-flex whitespace-nowrap items-baseline font-logo leading-none tracking-[-0.035em]", animated && "logo-animated", className)}
      aria-label="beviral"
      role="img"
    >
      <span aria-hidden className={cn("logo-be font-normal", gradient && "text-gradient-logo")}>be</span>
      <span aria-hidden className={cn("logo-viral font-extrabold", gradient && "text-gradient-logo")}>
        v
        <span className="relative inline-block">
          ı
          <svg
            viewBox="0 0 10 10"
            className="logo-play absolute left-[0.04em] top-[-0.02em] h-[0.26em] w-[0.26em] fill-orange"
          >
            <path d="M0 0 L10 5 L0 10 Z" />
          </svg>
        </span>
        ral
      </span>
    </span>
  );
}
