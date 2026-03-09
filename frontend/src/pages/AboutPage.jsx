import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, ChefHat } from "lucide-react";

const IMG_JEANINE = "https://customer-assets.emergentagent.com/job_0f798c47-0f5e-477f-a923-5a9fe0acedec/artifacts/x9zvsrqv_Photo%20jeanine.jpg";
const IMG_VISION = "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

const exigences = [
  {
    icon: Leaf,
    title: "Produits frais",
    desc: "S\u00e9lection rigoureuse de produits frais et de saison aupr\u00e8s de fournisseurs locaux.",
  },
  {
    icon: Heart,
    title: "Viandes fran\u00e7aises",
    desc: "100% de nos viandes proviennent d\u2019\u00e9levages fran\u00e7ais, tra\u00e7abilit\u00e9 garantie.",
  },
  {
    icon: ChefHat,
    title: "Fait maison",
    desc: "Tous nos plats sont pr\u00e9par\u00e9s dans notre cuisine par nos chefs passionn\u00e9s.",
  },
];

export default function AboutPage() {
  return (
    <div data-testid="about-page">
      {/* HEADER */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">&Agrave; Propos</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 max-w-3xl leading-tight mb-6">
            Notre histoire, notre passion
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Entreprise familiale avant tout, La Cuisine de Jeanine est n&eacute;e d&rsquo;une passion sinc&egrave;re pour la gastronomie et le go&ucirc;t des bonnes choses. Nous croyons qu&rsquo;un repas en entreprise doit &ecirc;tre un vrai moment de plaisir, de partage et de qualit&eacute;.
          </p>
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section data-testid="histoire-section" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-8">
                Notre histoire
              </h2>
              <div className="space-y-5 text-gray-500 text-base leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <p>
                  Il &eacute;tait une fois deux cousins passionn&eacute;s de gastronomie, convaincus que la restauration d&rsquo;entreprise m&eacute;ritait mieux que des plats industriels r&eacute;chauff&eacute;s.
                </p>
                <p>
                  Anim&eacute;s par l&rsquo;envie de proposer une cuisine authentique et g&eacute;n&eacute;reuse, ils ont d&eacute;cid&eacute; de cr&eacute;er une solution qui allie praticit&eacute; et qualit&eacute;.
                </p>
                <p>
                  Jeanine, notre grand-m&egrave;re commune, nous a transmis l&rsquo;amour du produit, le respect des recettes et le go&ucirc;t du travail bien fait. Son h&eacute;ritage est au c&oelig;ur de chaque plat que nous proposons aujourd&rsquo;hui.
                </p>
                <p>
                  Nous accompagnons d&eacute;sormais les entreprises de Seine-Maritime avec la m&ecirc;me exigence, la m&ecirc;me passion et la m&ecirc;me volont&eacute; d&rsquo;apporter du bon dans le quotidien des collaborateurs.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={IMG_JEANINE} alt="Jeanine" className="w-full h-[400px] lg:h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* NOTRE VISION */}
      <section data-testid="vision-section" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-2xl overflow-hidden">
                <img src={IMG_VISION} alt="Notre vision" className="w-full h-[400px] lg:h-[500px] object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-8">
                Notre vision
              </h2>
              <div className="space-y-5 text-gray-500 text-base leading-relaxed mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <p>
                  Nous croyons que la restauration d&rsquo;entreprise peut &ecirc;tre un v&eacute;ritable levier de performance et de bien-&ecirc;tre au travail.
                </p>
                <p>
                  Notre vision : faire de chaque pause d&eacute;jeuner un moment de plaisir et de convivialit&eacute;, avec des produits sains, savoureux et responsables.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <p className="text-2xl font-bold text-green-700 mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Entreprises locales</p>
                  <p className="text-sm text-gray-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>accompagn&eacute;es</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <p className="text-2xl font-bold text-green-700 mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Des centaines</p>
                  <p className="text-sm text-gray-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>de repas servis chaque semaine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTRE EXIGENCE */}
      <section data-testid="exigence-section" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 text-center mb-16">
            Notre exigence produit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exigences.map((ex, i) => (
              <div key={i} className="text-center" data-testid={`exigence-card-${i}`}>
                <div className="icon-container mx-auto mb-5" style={{ width: 56, height: 56, borderRadius: 16 }}>
                  <ex.icon size={24} />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{ex.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {ex.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section data-testid="about-cta" className="cta-gradient py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
            Offrez &agrave; vos collaborateurs une restauration &agrave; la hauteur de votre entreprise.
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Contactez-nous pour une &eacute;tude personnalis&eacute;e et d&eacute;couvrez comment transformer l&rsquo;exp&eacute;rience repas de vos &eacute;quipes.
          </p>
          <Link
            to="/contact"
            data-testid="about-cta-btn"
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
