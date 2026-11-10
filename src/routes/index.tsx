import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/beviral/Header";
import { Hero, About, HowItWorks, GoodCut, Prizes, Ranking, Faq, FinalCta, Footer } from "@/components/beviral/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Be Viral | Campeonato de Cortes da Be Music" },
      { name: "description", content: "O próximo viral pode ser o seu. Conheça o Be Viral, o campeonato de cortes da Be Music." },
      { property: "og:title", content: "Be Viral | Campeonato de Cortes da Be Music" },
      { property: "og:description", content: "O próximo viral pode ser o seu. Conheça o Be Viral, o campeonato de cortes da Be Music." },
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
        <GoodCut />
        <Prizes />
        <Ranking />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
