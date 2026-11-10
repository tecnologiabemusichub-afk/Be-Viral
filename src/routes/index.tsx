import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/beviral/Header";
import {
  Hero, About, HowItWorks, Championships, Prizes, Ranking,
  FinalCta, Footer,
} from "@/components/beviral/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Be Viral | Campeonatos de Cortes da Be Music" },
      { name: "description", content: "O próximo viral pode ser o seu. Crie vídeos com músicas de artistas participantes, publique nas suas redes e participe dos campeonatos de cortes do Be Viral." },
      { property: "og:title", content: "Be Viral | Campeonatos de Cortes da Be Music" },
      { property: "og:description", content: "O próximo viral pode ser o seu. Crie vídeos com músicas de artistas participantes, publique nas suas redes e participe dos campeonatos de cortes do Be Viral." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Championships />
        <Prizes />
        <Ranking />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
