import { useState } from "react";
import {
  Plus, TrendingUp, Play, Heart, MessageCircle, Share2,
  Music2, Radio, CalendarDays, Eye, Users,
} from "lucide-react";
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
function Lead({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground", className)}>{children}</p>;
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
          <h1 className="sr-only">Be Viral — campeonatos de cortes da Be Music</h1>
          <CutWord gradientClass="text-gradient-logo" className="text-[clamp(5rem,9.5vw,9.5rem)]">
            <Logo />
          </CutWord>
        </Reveal>
        <Reveal delay={150} className="max-w-md">
          <Eyebrow>Campeonatos de cortes</Eyebrow>
          <Tagline className="mt-6 text-5xl xl:text-6xl" />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Crie vídeos com músicas de artistas participantes, publique nas suas redes e transforme suas
            visualizações em oportunidades de ganhar premiações.
          </p>
          <Waveform className="mt-10" />
          <CtaButton location="hero" label="CADASTRE-SE" className="mt-10" />
          <p className="mt-6 text-sm italic leading-relaxed text-muted-foreground">
            {"\n"}
          </p>
        </Reveal>
      </div>
      {/* Mobile / tablet */}
      <div className="flex flex-col lg:hidden">
        <Logo className="text-5xl" />
        <p className="eyebrow mt-12">Campeonatos de cortes</p>
        <p className="mt-5 text-3xl font-light italic sm:text-4xl">O próximo</p>
        <h1 className="mt-2">
          <span className="sr-only">Viral — </span>
          <CutWord className="text-[clamp(5.5rem,27vw,11rem)] font-black tracking-tight">VIRAL</CutWord>
        </h1>
        <p className="mt-3 text-3xl font-light italic sm:text-4xl">
          pode ser o <span className="font-black not-italic">seu.</span>
        </p>
        <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
          Crie vídeos com músicas de artistas participantes, publique nas suas redes e transforme suas
          visualizações em oportunidades de ganhar premiações.
        </p>
        <Waveform className="mt-10" bars={20} />
        <CtaButton location="hero" label="CADASTRE-SE" className="mt-10 w-full" />
      </div>
    </section>
  );
}

/* 02 — APRESENTAÇÃO */
const PHONES = [
  { rot: "-rotate-6", y: "translate-y-6", label: "Gancho" },
  { rot: "rotate-0", y: "-translate-y-4", label: "Corte" },
  { rot: "rotate-6", y: "translate-y-8", label: "Viral" },
];
export function About() {
  return (
    <section id="apresentacao" className="glow-tl-br section-x section-y overflow-hidden">
      <div className={cn(wrap, "grid items-center gap-16 lg:grid-cols-2")}>
        <Reveal>
          <Eyebrow>{"\n"}</Eyebrow>
          <H2>Sua criatividade pode ir mais longe.</H2>
          <Lead className="max-w-lg">
            O Be Viral é uma plataforma de campeonatos de cortes que conecta criadores, músicas e artistas.
          </Lead>
          <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
            Você escolhe um campeonato, cria seus vídeos usando a música oficial indicada e publica nas suas
            redes sociais. Seu conteúdo pode alcançar novas pessoas, ajudar uma música a chegar mais longe e
            ainda render oportunidades de premiação.
          </p>
          <p className="mt-8 max-w-lg text-xl font-bold leading-snug">
            Aqui, cada corte pode ser o começo de algo maior.
          </p>
        </Reveal>
        <Reveal delay={150} className="flex justify-center gap-4 sm:gap-6">
          <div aria-hidden className="flex justify-center gap-4 sm:gap-6">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 03 — COMO FUNCIONA */
const STEPS = [
  { n: "01", t: "Cadastre-se", d: "Crie sua conta na plataforma Be Viral para acessar os campeonatos disponíveis." },
  { n: "02", t: "Escolha seu campeonato", d: "Encontre a disputa que mais combina com você. Cada campeonato terá uma música, um artista e suas próprias orientações." },
  { n: "03", t: "Crie e publique", d: "Produza seus cortes e publique nas redes sociais indicadas para aquele campeonato. Não esqueça: é necessário utilizar o áudio oficial da música, disponível na biblioteca de áudio da rede social." },
  { n: "04", t: "Acompanhe seu desempenho", d: "Suas visualizações ajudam a determinar seu desempenho na disputa. Acompanhe sua posição no ranking e fique de olho nas oportunidades de premiação." },
];
export function HowItWorks() {
  return (
    <section id="como-funciona" className="glow-soft section-x section-y">
      <div className={wrap}>
        <Reveal className="max-w-3xl">
          <Eyebrow>Como funciona</Eyebrow>
          <H2>Do seu primeiro corte à próxima conquista.</H2>
        </Reveal>
        <div className="relative mt-16 lg:mt-24">
          {/* timeline */}
          <div aria-hidden className="absolute left-0 right-0 top-[3.25rem] hidden lg:block">
            <CutLine />
          </div>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 120}
                className="group relative rounded-2xl border border-border bg-card/70 p-8 backdrop-blur transition-colors duration-300 hover:border-orange/50">
                <span className="text-gradient-word block text-6xl font-black">{s.n}</span>
                <h3 className="mt-8 text-lg font-bold uppercase leading-snug">{s.t}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
        <Reveal delay={120} className="mt-14 flex justify-center">
          <CtaButton location="como_funciona" label="QUERO PARTICIPAR" />
        </Reveal>
      </div>
    </section>
  );
}

/* 04 — CAMPEONATOS */
/**
 * Preencha quando um campeonato existir: artista, música, redes participantes,
 * período, arte e link da página dele na plataforma.
 * Deixe vazio para manter o estado "a publicar" abaixo.
 */
export type Championship = {
  artist: string;
  song: string;
  networks: string[];
  period?: string;
  url?: string;
  image?: string;
};
export const CHAMPIONSHIPS: Championship[] = [];

function ChampionshipCard({ c, delay }: { c: Championship | null; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/70 transition-colors duration-300 hover:border-orange/50"
    >
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border">
        {c?.image ? (
          <img src={c.image} alt={`Arte do campeonato de ${c.artist}`} className="h-full w-full object-cover" />
        ) : (
          <>
            <div aria-hidden className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-word)" }} />
            <span className="relative text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              Arte do campeonato
            </span>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="text-xl font-black uppercase leading-tight tracking-tight">{c?.artist || "Nome do artista"}</p>
          <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Music2 aria-hidden className="h-4 w-4 shrink-0 text-orange" />
            {c?.song || "Nome da música"}
          </p>
        </div>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Radio aria-hidden className="h-4 w-4 shrink-0 text-orange" />
          {c?.networks?.length ? c.networks.join(" · ") : "Redes participantes"}
        </p>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays aria-hidden className="h-4 w-4 shrink-0 text-orange" />
          {c?.period || "Período de participação"}
        </p>
        <div className="mt-auto pt-4">
          {c?.url ? (
            <CtaButton
              href={c.url}
              location={`campeonato_${c.artist.toLowerCase().replace(/\s+/g, "-")}`}
              label="VER CAMPEONATO"
              size="sm"
              className="w-full"
            />
          ) : (
            <span
              aria-disabled
              className="inline-flex h-10 w-full items-center justify-center rounded-full border border-dashed border-border text-xs font-bold uppercase tracking-wide text-muted-foreground"
            >
              Ver campeonato
            </span>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export function Championships() {
  const cards: (Championship | null)[] = CHAMPIONSHIPS.length ? CHAMPIONSHIPS : [null, null, null];
  return (
    <section id="campeonatos" className="glow-tr-bl section-x section-y">
      <div className={wrap}>
        <Reveal className="max-w-4xl">
          <Eyebrow>Campeonatos disponíveis</Eyebrow>
          <H2 className="lg:text-6xl">
            UMA MÚSICA. MUITAS POSSIBILIDADES.<br /><span className="text-gradient-word">QUAL VAI SER O SEU PRÓXIMO CORTE?</span>
          </H2>
          <Lead>Explore os campeonatos disponíveis no Be Viral e escolha aqueles dos quais deseja participar.</Lead>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Cada campeonato é uma oportunidade de criar, alcançar novas pessoas e<br />
            ajudar uma música a ganhar ainda mais destaque.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {cards.map((c, i) => (
            <ChampionshipCard key={i} c={c} delay={i * 120} />
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm italic leading-relaxed text-muted-foreground">
          {"\n"}
        </p>
      </div>
    </section>
  );
}

/* 05 — PREMIAÇÃO (critérios definidos dentro da plataforma) */
const CRITERIA = [
  { icon: TrendingUp, t: "RANKING", d: "A posição alcançada pelo participante na disputa." },
  { icon: Eye, t: "ENGAJAMENTO", d: "Metas ou faixas de visualizações definidas para o campeonato." },
  { icon: Users, t: "Participantes da disputa", d: "A quantidade de participantes daquela disputa." },
];
export function Prizes() {
  return (
    <section id="premiacao" className="glow-tl-br section-x section-y overflow-hidden">
      <div className={cn(wrap, "text-center")}>
        <Reveal className="mx-auto max-w-3xl">
          <Eyebrow>Premiação</Eyebrow>
          <H2>SEU ALCANCE<br />PODE VALER UMA RECOMPENSA.</H2>
          <Lead className="mx-auto">
            No Be Viral, cada campeonato pode ter uma dinâmica<br />própria de premiação.
          </Lead>
        </Reveal>
        <div className="mt-16 grid gap-5 sm:grid-cols-3 lg:mt-24">
          {CRITERIA.map((c, i) => (
            <Reveal key={c.t} delay={i * 120}
              className="h-full rounded-2xl border border-border bg-card/70 p-8 text-left transition-transform duration-300 hover:-translate-y-1">
              <c.icon aria-hidden className="h-8 w-8 text-orange" />
              <h3 className="mt-6 text-lg font-bold uppercase leading-snug">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Cada campeonato terá seus próprios critérios, valores e regras, apresentados dentro da plataforma.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
          Escolha seu desafio, crie seus cortes e descubra até onde seu conteúdo pode chegar.
        </p>
        <Reveal delay={120} className="mt-12 flex justify-center">
          <CtaButton href="#campeonatos" location="premiacao" label="ENCONTRE SEU CAMPEONATO" />
        </Reveal>
      </div>
    </section>
  );
}

/* 06 — RANKING (demonstração visual, sem dados reais) */
const DEMO_ROWS = [
  { pos: 1, trend: 2 }, { pos: 2, trend: 0 }, { pos: 3, trend: 1 }, { pos: 4, trend: -1 }, { pos: 5, trend: 3 },
];
export function Ranking() {
  return (
    <section id="ranking" className="glow-soft section-x section-y">
      <div className={cn(wrap, "grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-center")}>
        <Reveal>
          <Eyebrow>Ranking</Eyebrow>
          <H2>Quem está chegando mais longe?</H2>
          <Lead className="max-w-md">
            Acompanhe o desempenho dos participantes e descubra quais cortes estão conquistando mais
            visualizações.
          </Lead>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            O ranking permite acompanhar a evolução dos conteúdos e a posição dos participantes em cada
            campeonato, de acordo com os critérios estabelecidos para aquela disputa.
          </p>
          <p className="mt-10 text-3xl font-black uppercase leading-none tracking-tight lg:text-4xl">
            Seu próximo corte pode <span className="text-gradient-word">mudar tudo.</span>
          </p>
        </Reveal>
        <Reveal delay={150} className="relative rounded-2xl border border-border bg-card/80 p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between px-2">
            <span className="text-sm font-bold uppercase tracking-widest">RANKING</span>
            <span className="rounded-full border border-orange/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-orange">
              BE VIRAL
            </span>
          </div>
          <div className="grid grid-cols-[36px_1fr_auto] gap-2 border-b border-border px-2 pb-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground sm:grid-cols-[40px_1fr_auto_48px] sm:gap-3">
            <span>Pos.</span><span>Participante</span><span>Visualizações</span>
            <span className="hidden text-right sm:block">Var.</span>
          </div>
          <ul aria-label="Exemplo de ranking, sem dados reais">
            {DEMO_ROWS.map((r) => (
              <li key={r.pos} className="grid grid-cols-[36px_1fr_auto] items-center gap-2 border-b border-border/60 px-2 py-4 last:border-0 sm:grid-cols-[40px_1fr_auto_48px] sm:gap-3">
                <span className={cn("text-lg font-black", r.pos === 1 && "text-gradient-word")}>{String(r.pos).padStart(2, "0")}</span>
                <div className="flex min-w-0 items-center gap-3">
                  <span aria-hidden className="h-8 w-8 shrink-0 rounded-full bg-gradient-button opacity-80 sm:h-9 sm:w-9" />
                  <div className="min-w-0 space-y-1.5">
                    <div className="h-2 w-16 rounded-full bg-foreground/25 sm:w-32" />
                    <div className="h-1.5 w-10 rounded-full bg-foreground/10 sm:w-16" />
                  </div>
                </div>
                <span className="font-semibold tabular-nums text-muted-foreground">— —</span>
                <span className="hidden justify-end sm:flex">
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

/* 07 — BENEFÍCIO PARA O CRIADOR */
export function CreatorBenefit() {
  return (
    <section id="criador" className="glow-tr-bl section-x section-y">
      <div className={cn(wrap, "grid items-center gap-16 lg:grid-cols-2")}>
        <Reveal>
          <Eyebrow>Para o criador</Eyebrow>
          <H2>O público que você conquista é seu.</H2>
          <Lead className="max-w-lg">
            Participar de um campeonato pode ser muito mais do que concorrer a uma premiação.
          </Lead>
          <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
            Ao publicar no seu próprio perfil, você tem a oportunidade de alcançar novas pessoas, desenvolver
            sua presença nas redes e construir uma audiência que pode continuar acompanhando seu conteúdo
            depois do campeonato.
          </p>
          <p className="mt-10 text-2xl font-black uppercase leading-none tracking-tight lg:text-3xl">
            Sua criatividade pode <span className="text-gradient-word">abrir novos caminhos.</span>
          </p>
        </Reveal>
        <Reveal delay={150} className="relative overflow-hidden rounded-2xl border border-border bg-card/70 p-8">
          <div aria-hidden className="flex flex-col">
            <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-word)", maskImage: "linear-gradient(to bottom, black, transparent 70%)" }} />
            <div className="relative flex items-center gap-3">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className="h-10 w-10 rounded-full bg-gradient-button" style={{ opacity: 0.9 - i * 0.18 }} />
              ))}
              <span className="ml-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Sua audiência
              </span>
            </div>
            <div className="relative mt-10 flex h-44 items-end gap-3">
              {[35, 55, 45, 70, 60, 85, 100].map((h, i) => (
                <span key={i} className="flex-1 rounded-t-md bg-gradient-button" style={{ height: `${h}%`, opacity: 0.35 + i * 0.09 }} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 08 — CRIAÇÃO DE CONTEÚDO */
const IDEAS = [
  "Um bom corte prende a atenção, desperta curiosidade e faz as pessoas quererem assistir até o final.",
  "Explore diferentes ideias, encontre os melhores trechos da música e experimente formatos que conversem com seu público.",
  "Não existe uma única maneira de criar. O importante é colocar sua criatividade em movimento.",
];
export function ContentCreation() {
  return (
    <section className="glow-tl-br section-x section-y">
      <div className={wrap}>
        <Reveal>
          <Eyebrow>Criação de conteúdo</Eyebrow>
          <H2 className="max-w-5xl">
            Não é só recortar. <span className="text-gradient-word">É encontrar o momento certo.</span>
          </H2>
        </Reveal>
        <div className="mt-16 divide-y divide-border border-y border-border lg:mt-24">
          {IDEAS.map((t, i) => (
            <Reveal key={i} delay={i * 100}
              className="group grid items-center gap-4 py-10 lg:grid-cols-[100px_1fr] lg:gap-12 lg:py-14">
              <span className="text-gradient-word text-2xl font-black lg:text-3xl">{String(i + 1).padStart(2, "0")}</span>
              <p className="max-w-3xl text-xl font-light leading-relaxed transition-transform duration-500 group-hover:translate-x-2 lg:text-3xl">
                {t}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 09 — FAQ */
export const FAQ: { q: string; a: string }[] = [
  {
    q: "O que é o Be Viral?",
    a: "O Be Viral é uma plataforma da Be Music que reúne campeonatos de cortes com músicas de artistas participantes. Nela, você pode escolher disputas, criar conteúdos e concorrer a premiações conforme as regras de cada campeonato.",
  },
  {
    q: "Como faço para participar?",
    a: "É simples: clique em Cadastre-se na landing page, crie sua conta e acesse a plataforma para conhecer os campeonatos disponíveis.",
  },
  {
    q: "Preciso ter muitos seguidores para participar?",
    a: "Consulte os critérios de participação de cada campeonato dentro da plataforma. As orientações específicas estarão disponíveis na página de cada disputa.",
  },
  {
    q: "Onde devo publicar meus cortes?",
    a: "As publicações poderão acontecer no TikTok, Instagram Reels e YouTube Shorts. Cada campeonato informará quais redes sociais serão consideradas para aquela disputa.",
  },
  {
    q: "Posso usar qualquer versão da música?",
    a: "Não. É necessário utilizar o áudio oficial indicado para o campeonato, selecionando-o diretamente na biblioteca de áudio da rede social. Não utilize arquivos baixados para inserir a música manualmente no vídeo.",
  },
  {
    q: "Como funciona o ranking?",
    a: "O desempenho dos participantes é acompanhado com base nas visualizações dos cortes, conforme os critérios definidos para cada campeonato.",
  },
  {
    q: "Como funciona a premiação?",
    a: "Cada campeonato poderá ter uma dinâmica própria. A premiação poderá considerar posições no ranking, metas ou faixas de visualizações e a quantidade de participantes. Os valores e critérios específicos serão apresentados dentro da plataforma.",
  },
  {
    q: "A audiência que eu conquistar fica comigo?",
    a: "Sim. Os vídeos são publicados no seu próprio perfil, e a audiência conquistada por meio deles passa a fazer parte da sua comunidade naquela rede social.",
  },
  {
    q: "Posso participar de mais de um campeonato?",
    a: "Consulte as condições de participação de cada campeonato dentro da plataforma.",
  },
];
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="glow-soft section-x section-y">
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
                      <p className="pb-6 pr-10 leading-relaxed text-muted-foreground">{f.a}</p>
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

/* 10 — CTA FINAL */
export function FinalCta() {
  return (
    <section id="participar" className="glow-tr-bl section-x section-y overflow-hidden">
      <Reveal className={cn(wrap, "flex flex-col items-center text-center")}>
        <Eyebrow>Campeonatos de cortes</Eyebrow>
        <h2 className="mt-8 max-w-5xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          Sua próxima criação pode <span className="text-gradient-word">chegar muito mais longe.</span>
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Entre para o Be Viral, conheça os campeonatos disponíveis e coloque sua criatividade em movimento.
        </p>
        <Waveform className="mt-12" />
        <CtaButton location="final" label="CADASTRE-SE E PARTICIPE" className="mt-12 h-16 w-full px-12 text-base sm:w-auto" />
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
