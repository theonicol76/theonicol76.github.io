import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Monitor, UtensilsCrossed, PartyPopper, ChefHat, Leaf, Heart, CalendarDays, Shield, Award, Zap, Star, ThumbsUp, LayoutGrid } from "lucide-react";

const LOGO_ABEILLE = "https://customer-assets.emergentagent.com/job_0f798c47-0f5e-477f-a923-5a9fe0acedec/artifacts/j0l6efff_abeille%20logo.jpg";
const LOGO_ALSTOM = "https://customer-assets.emergentagent.com/job_0f798c47-0f5e-477f-a923-5a9fe0acedec/artifacts/d2ma1qlh_alstom%20logo.png";
const LOGO_FRAMEIP = "https://customer-assets.emergentagent.com/job_0f798c47-0f5e-477f-a923-5a9fe0acedec/artifacts/kht4kxyi_groupe%20frameip.png";
const IMG_CUISINE = "https://customer-assets.emergentagent.com/job_0f798c47-0f5e-477f-a923-5a9fe0acedec/artifacts/u3ala5dr_le%20gout%20de%20l%27authenticit%C3%A9.png";
const HERO_BG = "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const clientLogos = [
  { src: LOGO_ABEILLE, alt: "Abeille Assurances" },
  { src: LOGO_ALSTOM, alt: "Alstom" },
  { src: LOGO_FRAMEIP, alt: "Groupe Frameip" },
  { src: LOGO_ABEILLE, alt: "Abeille Assurances" },
  { src: LOGO_ALSTOM, alt: "Alstom" },
  { src: LOGO_FRAMEIP, alt: "Groupe Frameip" },
];

const solutions = [
  {
    icon: Monitor,
    title: "Frigo Connect\u00e9",
    description: "Cantine digitale autonome avec produits frais renouvel\u00e9s quotidiennement. Solution cl\u00e9 en main 24h/24.",
    badge: "Solution phare",
    link: "/solutions",
  },
  {
    icon: UtensilsCrossed,
    title: "Plateaux Repas",
    description: "Menu hebdomadaire vari\u00e9, cuisine maison et produits fran\u00e7ais.",
    link: "/solutions",
  },
  {
    icon: PartyPopper,
    title: "Prestations & \u00c9v\u00e9nements",
    description: "S\u00e9minaires, cocktails et \u00e9v\u00e9nements d\u2019entreprise sur-mesure.",
    link: "/solutions",
  },
];

const cuisineFeatures = [
  { icon: ChefHat, title: "Fait maison", desc: "Cuisine pr\u00e9par\u00e9e sur place" },
  { icon: Leaf, title: "Produits frais", desc: "S\u00e9lection rigoureuse" },
  { icon: Heart, title: "Viandes fran\u00e7aises", desc: "Origine contr\u00f4l\u00e9e" },
  { icon: CalendarDays, title: "De saison", desc: "Respect du cycle naturel" },
];

const whyUs = [
  { icon: Shield, title: "Fiabilit\u00e9", desc: "Un partenaire sur qui compter au quotidien. Livraisons ponctuelles et service irr\u00e9prochable." },
  { icon: Award, title: "Qualit\u00e9 Produit", desc: "Produits frais, cuisine faite maison, viandes fran\u00e7aises. L\u2019excellence \u00e0 chaque bouch\u00e9e." },
  { icon: Zap, title: "Simplicit\u00e9", desc: "Solution cl\u00e9 en main. Nous g\u00e9rons tout pour vous : installation, approvisionnement, maintenance." },
  { icon: Star, title: "Image Premium", desc: "Valorisez votre marque employeur avec une offre de restauration haut de gamme." },
  { icon: ThumbsUp, title: "Exp\u00e9rience Collaborateur", desc: "Am\u00e9liorez le bien-\u00eatre et la satisfaction de vos \u00e9quipes au quotidien." },
  { icon: LayoutGrid, title: "Sur-mesure", desc: "Solutions adapt\u00e9es \u00e0 la taille et aux besoins sp\u00e9cifiques de votre entreprise." },
];

export default function HomePage() {
  return (
    <div data-testid="home-page">
      {/* HERO SECTION */}
      <section data-testid="hero-section" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
            <Sparkles size={16} className="text-green-400" />
            <span className="text-white/90 text-sm font-medium">Traiteur d&rsquo;entreprise nouvelle g&eacute;n&eacute;ration</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            La restauration{" "}
            <br className="hidden sm:block" />
            d&rsquo;entreprise, <span className="italic text-green-accent">r&eacute;invent&eacute;e.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Cantine digitale, plateaux repas et prestations sur-mesure. Offrez &agrave; vos collaborateurs une exp&eacute;rience culinaire premium.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              data-testid="hero-cta-devis"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: "#15803d", fontFamily: "'DM Sans', sans-serif" }}
            >
              Demander un devis <ArrowRight size={18} />
            </Link>
            <Link
              to="/solutions"
              data-testid="hero-cta-solutions"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full border border-white/30 backdrop-blur-sm transition-all hover:bg-white/10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              D&eacute;couvrir nos solutions <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS MARQUEE */}
      <section data-testid="clients-section" className="py-12 bg-white border-b border-gray-100">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-8">
          Ils nous font confiance
        </p>
        <div className="overflow-hidden">
          <div className="flex animate-marquee" style={{ width: "calc(250px * 12)" }}>
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 w-[250px] flex items-center justify-center px-8">
                <img src={logo.src} alt={logo.alt} className="h-12 md:h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section data-testid="solutions-section" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Nos Solutions</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
              Une offre compl&egrave;te pour votre entreprise
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {solutions.map((sol, i) => (
              <div
                key={i}
                className={`solution-card rounded-2xl border border-gray-200 p-8 bg-white ${i === 0 ? "border-green-200 ring-1 ring-green-100" : ""}`}
                data-testid={`solution-card-${i}`}
              >
                {sol.badge && (
                  <span className="badge-phare mb-4 inline-flex">
                    <Star size={12} /> {sol.badge}
                  </span>
                )}
                <div className="icon-container mb-5">
                  <sol.icon size={22} />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{sol.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {sol.description}
                </p>
                <Link
                  to={sol.link}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-800 hover:text-green-600 transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  En savoir plus <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTRE CUISINE SECTION */}
      <section data-testid="cuisine-section" className="py-20 md:py-28 cuisine-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="section-label mb-4">Notre Cuisine</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Le go&ucirc;t de <span className="italic text-green-accent">l&rsquo;authenticit&eacute;</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Chez La Cuisine de Jeanine, chaque plat est pr&eacute;par&eacute; avec passion et savoir-faire. Nous privil&eacute;gions les produits frais, les viandes fran&ccedil;aises et le respect de la saisonnalit&eacute;.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {cuisineFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="icon-container flex-shrink-0" style={{ width: 36, height: 36, borderRadius: 8 }}>
                      <f.icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>{f.title}</p>
                      <p className="text-xs text-gray-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-900 rounded-2xl p-6 text-white">
                <h4 className="text-lg mb-4 italic">Notre menu hebdomadaire</h4>
                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>2</p>
                    <p className="text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>Entr&eacute;es</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>5</p>
                    <p className="text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>Plats</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>2</p>
                    <p className="text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>Desserts</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>+ Gamme snacking compl&eacute;mentaire</p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img src={IMG_CUISINE} alt="Notre cuisine" className="w-full h-[500px] lg:h-[600px] object-cover" />
              </div>
              <div className="absolute bottom-6 left-6 experience-badge">
                <p className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>15+</p>
                <p className="text-sm text-green-100" style={{ fontFamily: "'DM Sans', sans-serif" }}>ans d&rsquo;exp&eacute;rience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section data-testid="why-section" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Pourquoi Nous Choisir</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
              Un partenaire de confiance
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <div key={i} className="why-card rounded-2xl border border-gray-200 p-8 bg-white" data-testid={`why-card-${i}`}>
                <div className="icon-container mb-5">
                  <item.icon size={22} />
                </div>
                <h3 className="text-xl mb-3 text-gray-900 italic">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section data-testid="cta-section" className="cta-gradient py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
            Offrez &agrave; vos collaborateurs une restauration &agrave; la hauteur de votre entreprise.
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Contactez-nous pour une &eacute;tude personnalis&eacute;e et d&eacute;couvrez comment transformer l&rsquo;exp&eacute;rience repas de vos &eacute;quipes.
          </p>
          <Link
            to="/contact"
            data-testid="cta-contact-btn"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Contactez-nous <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
