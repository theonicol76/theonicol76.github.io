import { Link } from "react-router-dom";
import { ArrowRight, Star, Check, Coffee, Briefcase, Wine, Users, ChefHat, Leaf, Heart, ShoppingBag } from "lucide-react";

const IMG_FRIGO = "https://customer-assets.emergentagent.com/job_0f798c47-0f5e-477f-a923-5a9fe0acedec/artifacts/w5furs7q_frigo%20photo.jpg";
const IMG_PLATEAUX = "https://customer-assets.emergentagent.com/job_0f798c47-0f5e-477f-a923-5a9fe0acedec/artifacts/3zabfvha_Photo%20plateau%20repas.jpg";
const IMG_PRESTATION = "https://customer-assets.emergentagent.com/job_0f798c47-0f5e-477f-a923-5a9fe0acedec/artifacts/wa2qdicd_Photo%20prestation.JPG";

const frigoFeatures = [
  "Acc\u00e8s 24h/24, 7j/7",
  "Produits frais renouvel\u00e9s quotidiennement",
  "Paiement par badge ou carte bancaire",
  "Gestion des stocks automatis\u00e9e",
  "Installation et maintenance incluses",
];

const plateauxTags = [
  { icon: ChefHat, label: "Fait maison" },
  { icon: Leaf, label: "Produits frais et de saison" },
  { icon: Heart, label: "Viandes fran\u00e7aises" },
  { icon: ShoppingBag, label: "Options v\u00e9g\u00e9tariennes" },
];

const prestationTypes = [
  { icon: Coffee, title: "Petit-d\u00e9jeuner", desc: "Viennoiseries, jus frais, caf\u00e9 premium" },
  { icon: Briefcase, title: "D\u00e9jeuner d\u2019affaires", desc: "Buffets, plateaux, service \u00e0 table" },
  { icon: Wine, title: "Cocktails", desc: "Canap\u00e9s, verrines, pi\u00e8ces sucr\u00e9es" },
  { icon: Users, title: "S\u00e9minaires", desc: "Pauses caf\u00e9, d\u00e9jeuners, d\u00eeners" },
];

export default function SolutionsPage() {
  return (
    <div data-testid="solutions-page">
      {/* HEADER */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Nos Solutions</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 max-w-3xl leading-tight mb-6">
            Des solutions adapt&eacute;es &agrave; vos besoins
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Frigo connect&eacute;, plateaux repas ou prestations &eacute;v&eacute;nementielles : d&eacute;couvrez nos offres sur-mesure pour votre entreprise.
          </p>
        </div>
      </section>

      {/* FRIGO CONNECTE */}
      <section data-testid="frigo-section" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="badge-phare mb-6 inline-flex">
                <Star size={12} /> Solution phare
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Le Frigo Connect&eacute;
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                La cantine digitale nouvelle g&eacute;n&eacute;ration. Un frigo intelligent install&eacute; dans vos locaux, approvisionn&eacute; quotidiennement en produits frais et plats cuisin&eacute;s maison.
              </p>
              <ul className="space-y-3 mb-10">
                {frigoFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <Check size={16} className="text-green-600 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                data-testid="frigo-cta"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: "#15803d", fontFamily: "'DM Sans', sans-serif" }}
              >
                Demander une &eacute;tude personnalis&eacute;e <ArrowRight size={18} />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={IMG_FRIGO} alt="Frigo connect\u00e9" className="w-full h-[400px] lg:h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PLATEAUX REPAS */}
      <section data-testid="plateaux-section" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden">
              <img src={IMG_PLATEAUX} alt="Plateaux repas" className="w-full h-[400px] lg:h-[500px] object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Plateaux Repas
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Des repas complets, &eacute;quilibr&eacute;s et savoureux livr&eacute;s directement dans votre entreprise. Notre menu change chaque semaine pour varier les plaisirs.
              </p>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-8">
                <h4 className="text-lg mb-4 italic text-gray-900">Menu hebdomadaire type</h4>
                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>2</p>
                    <p className="text-xs text-gray-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>Entr&eacute;es au choix</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>5</p>
                    <p className="text-xs text-gray-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>Plats au choix</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>2</p>
                    <p className="text-xs text-gray-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>Desserts au choix</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>+ Gamme snacking et boissons</p>
              </div>
              <div className="flex flex-wrap gap-3 mb-10">
                {plateauxTags.map((tag, i) => (
                  <span key={i} className="inline-flex items-center gap-2 bg-green-50 text-green-800 text-xs font-medium px-3 py-2 rounded-full" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <tag.icon size={14} /> {tag.label}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-400 mb-6 italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Commande avec minimum requis
              </p>
              <Link
                to="/contact"
                data-testid="plateaux-cta"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: "#15803d", fontFamily: "'DM Sans', sans-serif" }}
              >
                Demander un devis <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRESTATIONS & EVENEMENTS */}
      <section data-testid="prestations-section" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Prestations & &Eacute;v&eacute;nements
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Pour vos s&eacute;minaires, r&eacute;unions, cocktails ou &eacute;v&eacute;nements d&rsquo;entreprise, nous cr&eacute;ons des prestations sur-mesure qui impressionnent vos invit&eacute;s.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {prestationTypes.map((p, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <p.icon size={20} className="text-green-700 mb-3" />
                    <h4 className="text-sm font-semibold text-gray-900 mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.title}</h4>
                    <p className="text-xs text-gray-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.desc}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                data-testid="prestations-cta"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: "#15803d", fontFamily: "'DM Sans', sans-serif" }}
              >
                Demander un devis personnalis&eacute; <ArrowRight size={18} />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={IMG_PRESTATION} alt="\u00c9v\u00e9nements" className="w-full h-[400px] lg:h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section data-testid="solutions-cta" className="cta-gradient py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
            Offrez &agrave; vos collaborateurs une restauration &agrave; la hauteur de votre entreprise.
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Contactez-nous pour une &eacute;tude personnalis&eacute;e et d&eacute;couvrez comment transformer l&rsquo;exp&eacute;rience repas de vos &eacute;quipes.
          </p>
          <Link
            to="/contact"
            data-testid="solutions-cta-btn"
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
