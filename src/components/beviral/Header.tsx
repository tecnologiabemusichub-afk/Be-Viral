import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { CtaButton } from "./CtaButton";

const LINKS = [
  { href: "#campeonatos", label: "Campeonatos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#premiacao", label: "Premiação" },
  { href: "#ranking", label: "Ranking" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open ? "border-b border-border bg-background/80 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <div className="section-x mx-auto flex h-18 max-w-[1456px] items-center justify-between py-4">
        <a href="#topo" aria-label="Be Viral — início" className="text-foreground">
          <Logo className="text-2xl" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <CtaButton location="header" label="CADASTRE-SE" size="sm" className="hidden sm:inline-flex" />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="section-x flex flex-col gap-1 pb-6 lg:hidden">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-border py-4 text-lg font-semibold">
              {l.label}
            </a>
          ))}
          <div onClick={() => setOpen(false)} className="pt-5">
            <CtaButton location="menu_mobile" className="w-full" />
          </div>
        </nav>
      )}
    </header>
  );
}
