import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ctaHref, trackCta } from "@/config/campaign";

export function CtaButton({
  location,
  label = "QUERO PARTICIPAR",
  size = "lg",
  href = ctaHref,
  className,
}: {
  location: string;
  label?: string;
  size?: "sm" | "lg";
  href?: string;
  className?: string;
}) {
  const external = /^https?:\/\//i.test(href);
  return (
    <a
      href={href}
      onClick={() => trackCta(location)}
      data-cta={location}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-button font-bold tracking-wide text-foreground",
        "shadow-[0_10px_40px_-10px_rgba(192,75,160,0.7)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-10px_rgba(232,129,63,0.75)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        size === "lg" ? "h-14 px-8 text-sm" : "h-10 px-5 text-xs",
        className,
      )}
    >
      {label}
      <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
