import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Instagram } from "lucide-react";
import outonoImage from "@/assets/colecao-outono.jpg";
import invernoImage from "@/assets/colecao-inverno.jpg";
import primaveraImage from "@/assets/colecao-primavera.jpg";
import veraoImage from "@/assets/colecao-verao.jpg";

const collections = {
  outono: {
    number: "01",
    name: "Outono",
    tagline: "Aromas quentes e acolhedores.",
    description:
      "Notas de especiarias, madeiras e frutas maduras que abraçam a casa nos dias que esfriam.",
    image: outonoImage,
    alt: "Vela âmbar acesa entre folhas secas de outono e canela sobre mesa de madeira",
  },
  inverno: {
    number: "02",
    name: "Inverno",
    tagline: "Aromas profundos e envolventes.",
    description:
      "Fragrâncias intensas e aconchegantes, feitas para noites longas, mantas e luz baixa.",
    image: invernoImage,
    alt: "Vela verde-escura acesa ao lado de manta de tricô e ramos de pinheiro",
  },
  primavera: {
    number: "03",
    name: "Primavera",
    tagline: "Aromas florais e delicados.",
    description:
      "Flores recém-abertas e frescor suave: a leveza dos dias que florescem de novo.",
    image: primaveraImage,
    alt: "Vela branca acesa entre flores de jasmim e cerejeira sobre linho claro",
  },
  verao: {
    number: "04",
    name: "Verão",
    tagline: "Aromas leves e tropicais.",
    description:
      "Cítricos, folhas verdes e brisa tropical para iluminar os dias mais quentes do ano.",
    image: veraoImage,
    alt: "Vela branca acesa em bandeja de palhinha com grapefruit e folha tropical",
  },
} as const;

type CollectionSlug = keyof typeof collections;

export const Route = createFileRoute("/colecao/$estacao")({
  loader: ({ params }) => {
    const collection = collections[params.estacao as CollectionSlug];
    if (!collection) throw notFound();
    return collection;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `Coleção ${loaderData?.name ?? ""} | FOLHIÊ` },
      {
        name: "description",
        content: `Coleção ${loaderData?.name ?? ""} FOLHIÊ: ${loaderData?.tagline ?? ""} Em breve na nossa loja.`,
      },
      { property: "og:title", content: `Coleção ${loaderData?.name ?? ""} | FOLHIÊ` },
      {
        property: "og:description",
        content: loaderData?.tagline ?? "",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollectionPage,
  notFoundComponent: CollectionNotFound,
});

function CollectionPage() {
  const collection = Route.useLoaderData();
  const { estacao } = Route.useParams();
  const others = (Object.entries(collections) as [CollectionSlug, (typeof collections)[CollectionSlug]][]).filter(
    ([slug]) => slug !== estacao,
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="site-header">
        <a href="/" className="brand" aria-label="FOLHIÊ — voltar ao início">
          <span>FOLHIÊ</span>
          <small>luz que guia, aroma que inspira.</small>
        </a>
        <nav aria-label="Navegação principal" className="main-nav">
          <a href="/#produtos">Conheça os produtos</a>
          <a href="/#colecao">Coleção</a>
          <a href="/#sobre">Saiba mais sobre nós</a>
        </nav>
      </header>

      <section className="collection-hero" aria-labelledby="collection-name">
        <div className="collection-hero-image">
          <img src={collection.image} width={1200} height={900} alt={collection.alt} />
        </div>
        <div className="collection-hero-content">
          <p className="eyebrow">Coleção {collection.number} · Em breve</p>
          <h1 id="collection-name">{collection.name}</h1>
          <p className="collection-hero-tagline">{collection.tagline}</p>
          <p className="collection-hero-description">{collection.description}</p>
          <span className="soon-badge" aria-label="Coleção ainda não lançada">
            Lançamento em breve
          </span>
          <Link to="/" className="text-link back-link">
            <ArrowLeft size={15} strokeWidth={1.5} /> Voltar ao início
          </Link>
        </div>
      </section>

      <section className="section" aria-labelledby="other-collections">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Continue explorando</p>
            <h2 id="other-collections">Outras coleções</h2>
          </div>
          <p>Quatro tempos, quatro sensações — cada estação com sua própria personalidade.</p>
        </div>
        <div className="product-grid">
          {others.map(([slug, item]) => (
            <Link
              to="/colecao/$estacao"
              params={{ estacao: slug }}
              className="product-card collection-card"
              key={slug}
            >
              <div className="product-image-wrap">
                <span className="product-number">{item.number}</span>
                <img src={item.image} width={1200} height={900} loading="lazy" alt={item.alt} />
              </div>
              <div className="product-info">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.tagline}</p>
                </div>
                <strong className="collection-card-cta">
                  Ver coleção <ArrowRight size={13} strokeWidth={1.5} />
                </strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="footer">
        <a href="/" className="brand" aria-label="FOLHIÊ — voltar ao início">
          <span>FOLHIÊ</span>
          <small>luz que guia, aroma que inspira.</small>
        </a>
        <p>Acenda. Respire. Sinta.</p>
        <div className="footer-contacts">
          <a
            className="footer-contact"
            href="https://instagram.com/folhie"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @folhie"
          >
            <Instagram size={16} strokeWidth={1.5} />
            <span>@folhie</span>
          </a>
          <a
            className="footer-contact"
            href="https://wa.me/5511980456883"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp (11) 98045-6883"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.12c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23s8.24 3.69 8.24 8.24c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.14.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z" />
            </svg>
            <span>(11) 98045-6883</span>
          </a>
        </div>
        <p className="copyright">© 2026 FOLHIÊ</p>
      </footer>
    </main>
  );
}

function CollectionNotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section" style={{ textAlign: "center", paddingTop: "10rem" }}>
        <p className="eyebrow">Ops</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>Coleção não encontrada</h1>
        <Link to="/" className="text-link" style={{ margin: "2rem auto 0" }}>
          <ArrowLeft size={15} strokeWidth={1.5} /> Voltar ao início
        </Link>
      </section>
    </main>
  );
}
