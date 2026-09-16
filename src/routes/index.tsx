import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Instagram } from "lucide-react";
import heroImage from "@/assets/folhie-hero.jpg";
import figoImage from "@/assets/vela-figo-cedro.jpg";
import bergamotaImage from "@/assets/vela-bergamota.jpg";
import jasmimImage from "@/assets/vela-jasmim.jpg";
import colecoesImage from "@/assets/colecoes-estacoes.jpg";
import historiaImage from "@/assets/folhie-historia.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FOLHIÊ | Velas aromáticas artesanais" },
      {
        name: "description",
        content:
          "Velas aromáticas FOLHIÊ: fragrâncias autorais para trazer aconchego, beleza e personalidade aos seus espaços.",
      },
      { property: "og:title", content: "FOLHIÊ | Luz que guia, aroma que inspira" },
      {
        property: "og:description",
        content: "Aromas autorais que transformam ambientes e tornam cada instante mais especial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  {
    name: "Figo & Cedro",
    aroma: "Frutado · Amadeirado",
    price: "R$ 149",
    image: figoImage,
  },
  {
    name: "Flor de Laranjeira",
    aroma: "Cítrico · Floral",
    price: "R$ 139",
    image: bergamotaImage,
  },
  {
    name: "Jasmim Noturno",
    aroma: "Floral · Envolvente",
    price: "R$ 159",
    image: jasmimImage,
  },
];

const seasons = [
  ["01", "Outono", "Aromas quentes e acolhedores.", "outono"],
  ["02", "Inverno", "Aromas profundos e envolventes.", "inverno"],
  ["03", "Primavera", "Aromas florais e delicados.", "primavera"],
  ["04", "Verão", "Aromas leves e tropicais.", "verao"],
] as const;

function Brand() {
  return (
    <a href="#inicio" className="brand" aria-label="FOLHIÊ — voltar ao início">
      <span>FOLHIÊ</span>
      <small>luz que guia, aroma que inspira.</small>
    </a>
  );
}

function Index() {
  return (
    <main id="inicio" className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-header">
        <Brand />
        <nav aria-label="Navegação principal" className="main-nav">
          <a href="#produtos">Conheça os produtos</a>
          <a href="#colecao">Coleção</a>
          <a href="#sobre">Saiba mais sobre nós</a>
        </nav>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <img
          src={heroImage}
          width={1600}
          height={1200}
          alt="Vela aromática FOLHIÊ acesa sobre uma mesa de madeira"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-kicker">A luz certa muda tudo</p>
          <h1 id="hero-title">Aromas que transformam momentos.</h1>
          <p className="hero-copy">
            Velas aromáticas feitas para trazer aconchego, beleza e personalidade para cada espaço.
          </p>
          <a className="primary-link" href="#produtos">
            Conheça nossos produtos <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </div>
        <a href="#produtos" className="scroll-cue" aria-label="Ir para os produtos">
          <ArrowDown size={18} strokeWidth={1.25} />
        </a>
      </section>

      <section id="produtos" className="section products-section" aria-labelledby="products-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Feitas para o seu ritual</p>
            <h2 id="products-title">Conheça os produtos</h2>
          </div>
          <p>
            Fragrâncias criadas em pequenas tiragens, com matérias-primas selecionadas e queima lenta.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.name}>
              <div className="product-image-wrap">
                <span className="product-number">0{index + 1}</span>
                <img
                  src={product.image}
                  width={1200}
                  height={1200}
                  loading="lazy"
                  alt={`Vela ${product.name} acesa`}
                />
              </div>
              <div className="product-info">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.aroma}</p>
                </div>
                <strong className="soon-tag">Em breve</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="colecao" className="collection-section" aria-labelledby="collection-title">
        <div className="collection-image">
          <img
            src={colecoesImage}
            width={1200}
            height={1504}
            loading="lazy"
            alt="Quatro velas inspiradas nas estações do ano"
          />
        </div>
        <div className="collection-content">
          <p className="eyebrow light">Quatro tempos, quatro sensações</p>
          <h2 id="collection-title">Coleção</h2>
          <p className="collection-intro">
            A natureza muda de ritmo — e nossos aromas acompanham cada estação.
          </p>
          <ol className="season-list">
            {seasons.map(([number, title, description]) => (
              <li key={title}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="sobre" className="section about-section" aria-labelledby="about-title">
        <div className="about-copy">
          <p className="eyebrow">Nossa essência</p>
          <h2 id="about-title">Mais do que uma vela.</h2>
          <p className="about-lead">
            Na Folhiê, acreditamos que os aromas têm o poder de transformar ambientes, despertar memórias e tornar cada instante mais especial.
          </p>
          <p>
            Cada vela nasce do encontro entre natureza, cuidado e intenção. Criamos fragrâncias que convidam à pausa — uma luz suave para acompanhar o cotidiano e fazer da casa um lugar ainda mais seu.
          </p>
          <a className="text-link" href="#inicio">
            Conheça nossa história <ArrowRight size={15} strokeWidth={1.5} />
          </a>
        </div>
        <figure className="about-image">
          <img
            src={historiaImage}
            width={1408}
            height={1008}
            loading="lazy"
            alt="Processo artesanal de criação de uma vela FOLHIÊ"
          />
          <figcaption>Feito à mão, pensado para durar.</figcaption>
        </figure>
      </section>

      <footer className="footer">
        <Brand />
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