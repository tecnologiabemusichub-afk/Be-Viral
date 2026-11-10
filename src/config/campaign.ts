/**
 * Endereço oficial de cadastro na plataforma Be Viral.
 * Enquanto estiver vazio, todos os botões de cadastro levam à chamada final
 * da página (#participar) — nada é apontado para uma URL inventada.
 */
export const SIGNUP_URL = "";

export const ctaHref = SIGNUP_URL || "#participar";

/** Prepared for future Meta Pixel / Google Analytics — only fires if they are installed. */
export function trackCta(location: string) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  };
  w.dataLayer?.push({ event: "cta_click", cta_location: location });
  w.gtag?.("event", "cta_click", { cta_location: location });
  w.fbq?.("trackCustom", "CtaClick", { location });
}
