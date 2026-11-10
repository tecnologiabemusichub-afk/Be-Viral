import { useState } from "react";
import { Plus, TrendingUp, Trophy, Play, Heart, MessageCircle, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { CutWord, CutLine } from "./CutWord";
import { Waveform } from "./Waveform";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

const wrap = "mx-auto max-w-[1280px]";

function Eyebrow({ children }: { children: string }) {
  return <p className="eyebrow">{children}</p>;
}
function H2({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cn("mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl", className)}>{children}</h2>;
}
function Tagline({ className }: { className?: string }) {
  return (
    <p className={cn("font-light italic leading-[1.05]", className)}>
      O próximo viral pode ser o <span className="font-black not-italic">seu.</span>
    </p>
  );
}

/* 01 — HERO */
export function Hero() {
  return (
    <section id="topo" className="glow-tr-bl relative overflow-hidden section-x pt-32 pb-20 lg:flex lg:min-h-screen lg:items-center lg:pt-32 lg:pb-24">
      {/* Desktop */}
      <div className={cn(wrap, "hidden w-full items-center gap-16 lg:grid lg:grid-cols-[1.25fr_1fr]")}>
        <Reveal>
          <h1 className="sr-only">Be Viral — Campeonato de Cortes da Be Music</h1>
          <CutWord gradientClass="text-gradient-logo" className="text-[clamp(5rem,9.5vw,9.5rem)]">
            <Logo />
          </CutWord>
        </Reveal>
        <Reveal delay={150} className="max-w-md">
          <Eyebrow>Campeonato de cortes</Eyebrow>
          <Tagline className="mt-6 text-5xl xl:text-6xl" />
          <Waveform className="mt-10" />
          <CtaButton location="hero" className="mt-10" />
        </Reveal>
      </div>
      {/* Mobile / tablet */}
      <div className="flex flex-col lg:hidden">
        <Logo className="text-5xl" />
        <p className="eyebrow mt-12">Campeonato de cortes</p>
        <p className="mt-5 text-3xl font-light italic sm:text-4xl">O próximo</p>
        <h1 className="mt-2">
          <span className="sr-only">Viral — </span>
          <CutWord className="text-[clamp(5.5rem,27vw,11rem)] font-black tracking-tight" >VIRAL</CutWord>
        </h1>
        <p className="mt-3 text-3xl font-light italic sm:text-4xl">
          pode ser o <span className="font-black not-italic">seu.</span>
        </p>
        <Waveform className="mt-10" bars={20} />
        <CtaButton location="hero" className="mt-10 w-full" />
      </div>
    </section>
  );
}

/* 02 — SOBRE */
const PHONES = [
  { rot: "-rotate-6", y: "translate-y-6", label: "Gancho" },
  { rot: "rotate-0", y: "-translate-y-4", label: "Corte" },
  { rot: "rotate-6", y: "translate-y-8", label: "Viral" },
];
export function About() {
  return (
    <section id="campeonato" className="glow-tl-br section-x section-y overflow-hidden">
      <div className={cn(wrap, "grid items-center gap-16 lg:grid-cols-2")}>
        <Reveal>
          <Eyebrow>Sobre o campeonato</Eyebrow>
          <H2>Sua criatividade pode ir mais longe.</H2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            O Be Viral é o campeonato de cortes da Be Music. Um espaço para transformar grandes momentos em
            conteúdos que ganham as redes, conectar criadores e colocar sua criatividade em movimento.
          </p>
        </Reveal>
        <Reveal delay={150} className="flex justify-center gap-4 sm:gap-6" aria-hidden>
          {PHONES.map((p, i) => (
            <div
              key={i}
              className={cn(
                "relative aspect-[9/16] w-[30%] max-w-[180px] overflow-hidden rounded-[1.6rem] border border-border bg-card p-3 transition-transform duration-500 hover:-translate-y-2",
                p.rot, p.y,
              )}
            >
              <div className="absolute inset-0 opacity-60" style={{ background: i === 1 ? "var(--gradient-word)" : "var(--gradient-button)", maskImage: "linear-gradient(to top, black, transparent 75%)" }} />
              <div className="relative flex h-full flex-col justify-between">
                <span className="self-start rounded-full bg-background/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest">{p.label}</span>
                <div className="flex items-center justify-center"><Play className="h-8 w-8 fill-foreground" /></div>
                <div className="flex items-end justify-between">
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-14 rounded-full bg-foreground/70" />
                    <div className="h-1.5 w-9 rounded-full bg-foreground/40" />
                  </div>
                  <div className="flex flex-col gap-2 text-foreground/80">
                    <Heart className="h-3.5 w-3.5" /><MessageCircle className="h-3.5 w-3.5" /><Share2 className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* 03 — COMO FUNCIONA */
const STEPS = [
  { n: "01", t: "Encontre o conteúdo", d: "Descubra os conteúdos disponíveis para transformar em cortes." },
  { n: "02", t: "Crie e publique", d: "Produza seus vídeos e publique nas plataformas participantes, seguindo as orientações do campeonato." },
  { n: "03", t: "Entre na disputa", d: "Acompanhe sua participação e concorra conforme os critérios definidos no regulamento." },
];
export function HowItWorks() {
  return (
    <section id="como-funciona" className="glow-soft section-x section-y">
      <div className={wrap}>
        <Reveal className="max-w-3xl">
          <Eyebrow>É mais simples do que parece</Eyebrow>
          <H2>Do corte ao viral.</H2>
        </Reveal>
        <div className="relative mt-16 lg:mt-24">
          {/* timeline */}
          <div aria-hidden className="absolute left-0 right-0 top-[3.25rem] hidden lg:block">
            <CutLine />
          </div>
          <ol className="grid gap-6 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 120}
                className="group relative rounded-2xl border border-border bg-card/70 p-8 backdrop-blur transition-colors duration-300 hover:border-orange/50">
                <span className="text-gradient-word block text-6xl font-black lg:text-7xl">{s.n}</span>
                <h3 className="mt-8 text-xl font-bold uppercase">{s.t}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* 04 — BOM CORTE */
const PILLARS = [
  { t: "O gancho", d: "Encontre o momento que prende a atenção.", tc: "00:03" },
  { t: "O contexto", d: "Transforme um trecho em uma história que faça sentido.", tc: "00:17" },
  { t: "O impacto", d: "Crie um conteúdo que desperte vontade de assistir, comentar e compartilhar.", tc: "00:42" },
];
export function GoodCut() {
  return (
    <section className="glow-tr-bl section-x section-y">
      <div className={wrap}>
        <Reveal>
          <Eyebrow>Seu olhar faz a diferença</Eyebrow>
          <H2 className="max-w-5xl">
            Não é só recortar. <span className="text-gradient-word">É saber escolher.</span>
          </H2>
        </Reveal>
        <div className="mt-16 divide-y divide-border border-y border-border lg:mt-24">
          {PILLARS.map((p, i) => (
            <Reveal key={p.t} delay={i * 100} className="group grid items-center gap-4 py-10 lg:grid-cols-[120px_1fr_1fr] lg:gap-12 lg:py-14">
              <span className="font-semibold tabular-nums text-orange">{p.tc}</span>
              <h3 className="text-4xl font-black uppercase tracking-tight transition-transform duration-500 group-hover:translate-x-2 lg:text-6xl">{p.t}</h3>
              <p className="max-w-md text-lg text-muted-foreground">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 05 — PREMIAÇÃO (aguardando dados oficiais) */
/** Edit here when the official prizes are announced. Leave empty to show the "em breve" state. */
export const PRIZES: { place: string; prize: string }[] = [];

export function Prizes() {
  return (
    <section id="premiacao" className="glow-tl-br section-x section-y overflow-hidden">
      <div className={cn(wrap, "text-center")}>
        <Reveal className="mx-auto max-w-3xl">
          <Eyebrow>A disputa vale a pena</Eyebrow>
          <H2>Seu talento merece destaque.</H2>
        </Reveal>
        <div className="mt-16 grid items-end gap-5 sm:grid-cols-3 lg:mt-24">
          {[1, 0, 2].map((idx, col) => {
            const p = PRIZES[idx];
            const tall = idx === 0;
            return (
              <Reveal key={idx} delay={col * 120}
                className={cn(
                  "relative flex flex-col items-center justify-end rounded-2xl border border-border bg-card/70 p-8 transition-transform duration-300 hover:-translate-y-1",
                  tall ? "min-h-80 sm:order-none" : "min-h-64",
                  idx === 0 && "order-first sm:order-none",
                )}>
                {tall && <div aria-hidden className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-button" />}
                <Trophy aria-hidden className={cn("mb-6", tall ? "h-12 w-12 text-amber" : "h-9 w-9 text-muted-foreground")} />
                <p className="text-xl font-black uppercase">{p ? p.place : "Destaque"}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p ? p.prize : "Premiação oficial em breve"}</p>
              </Reveal>
            );
          })}
        </div>
        <p className="mx-auto mt-10 max-w-xl text-sm text-muted-foreground">
          Os detalhes da premiação serão divulgados no regulamento oficial do campeonato.
        </p>
      </div>
    </section>
  );
}

/* 06 — RANKING (demonstração visual) */
const DEMO_ROWS = [
  { pos: 1, trend: 2 }, { pos: 2, trend: 0 }, { pos: 3, trend: 1 }, { pos: 4, trend: -1 }, { pos: 5, trend: 3 },
];
export function Ranking() {
  return (
    <section className="glow-soft section-x section-y">
      <div className={cn(wrap, "grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-center")}>
        <Reveal>
          <Eyebrow>Ranking e participação</Eyebrow>
          <H2>Seu nome no topo.</H2>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            O ranking oficial será publicado aqui quando o campeonato começar.
          </p>
        </Reveal>
        <Reveal delay={150} className="relative rounded-2xl border border-border bg-card/80 p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between px-2">
            <span className="text-sm font-bold uppercase tracking-widest">RANKING</span>
            <span className="rounded-full border border-orange/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-orange">
              BE VIRAL
            </span>
          </div>
          <div className="grid grid-cols-[40px_1fr_auto_48px] gap-3 border-b border-border px-2 pb-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            <span>Pos.</span><span>Participante</span><span>Pontos</span><span className="text-right">Var.</span>
          </div>
          <ul aria-label="Exemplo de ranking, sem dados reais">
            {DEMO_ROWS.map((r) => (
              <li key={r.pos} className="grid grid-cols-[40px_1fr_auto_48px] items-center gap-3 border-b border-border/60 px-2 py-4 last:border-0">
                <span className={cn("text-lg font-black", r.pos === 1 && "text-gradient-word")}>{String(r.pos).padStart(2, "0")}</span>
                <div className="flex items-center gap-3">
                  <span aria-hidden className="h-9 w-9 shrink-0 rounded-full bg-gradient-button opacity-80" />
                  <div className="space-y-1.5">
                    <div className="h-2 w-24 rounded-full bg-foreground/25 sm:w-32" />
                    <div className="h-1.5 w-16 rounded-full bg-foreground/10" />
                  </div>
                </div>
                <span className="font-semibold tabular-nums text-muted-foreground">— —</span>
                <span className="flex justify-end">
                  <TrendingUp aria-hidden className={cn("h-4 w-4", r.trend > 0 ? "text-orange" : "text-muted-foreground/40")} />
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* 07 — FAQ */
/** Fill each `a` with the official answer. Empty answers show a neutral "em breve" note. */
export const FAQ: { q: string; a: string }[] = [
  { q: "O que é o Be Viral?", a: "O Be Viral é o campeonato de cortes da Be Music: um espaço para transformar grandes momentos em conteúdos que ganham as redes." },
  { q: "Quem pode participar?", a: "" },
  { q: "Como faço minha inscrição?", a: "" },
  { q: "Onde posso publicar meus cortes?", a: "" },
  { q: "Quais conteúdos posso utilizar?", a: "" },
  { q: "Como funciona a avaliação dos vídeos?", a: "" },
  { q: "Como acompanhar minha participação?", a: "" },
  { q: "Como funciona a premiação?", a: "" },
];
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="glow-tr-bl section-x section-y">
      <div className={cn(wrap, "grid gap-14 lg:grid-cols-[1fr_1.6fr]")}>
        <Reveal>
          <Eyebrow>Perguntas frequentes</Eyebrow>
          <H2>Ficou com dúvida?</H2>
        </Reveal>
        <Reveal delay={120}>
          <ul className="border-t border-border">
            {FAQ.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-border">
                  <h3>
                    <button
                      type="button"
                      id={`faq-q-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-bold transition-colors hover:text-orange"
                    >
                      {f.q}
                      <Plus aria-hidden className={cn("h-5 w-5 shrink-0 text-orange transition-transform duration-300", isOpen && "rotate-45")} />
                    </button>
                  </h3>
                  <div
                    id={`faq-a-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    className={cn("grid transition-[grid-template-rows] duration-400 ease-out", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-10 leading-relaxed text-muted-foreground">
                        {f.a || "Informação oficial em breve, junto com o regulamento do campeonato."}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* 08 — CHAMADA FINAL */
export function FinalCta() {
  return (
    <section id="participar" className="glow-tl-br section-x section-y overflow-hidden">
      <Reveal className={cn(wrap, "flex flex-col items-center text-center")}>
        <Eyebrow>Campeonato de cortes</Eyebrow>
        <h2 className="mt-8">
          <Tagline className="text-5xl sm:text-6xl lg:text-8xl" />
        </h2>
        <Waveform className="mt-12" />
        <CtaButton location="final" className="mt-12 h-16 w-full px-12 text-base sm:w-auto" />
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="section-x border-t border-border bg-background py-10">
      <div className={cn(wrap, "flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row")}>
        <Logo className="text-xl text-foreground" />
        <p>Uma iniciativa Be Music</p>
      </div>
    </footer>
  );
}
