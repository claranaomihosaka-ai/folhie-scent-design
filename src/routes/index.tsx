import { createFileRoute } from "@tanstack/react-router";
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
  ["01", "Outono", "Aromas quentes e acolhedores."],
  ["02", "Inverno", "Aromas profundos e envolventes."],
  ["03", "Primavera", "Aromas florais e delicados."],
  ["04", "Verão", "Aromas leves e tropicais."],
];

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
                <strong>{product.price}</strong>
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
        <p className="copyright">© 2026 FOLHIÊ</p>
      </footer>
    </main>
  );
}