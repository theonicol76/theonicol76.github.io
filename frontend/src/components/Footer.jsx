import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_0f798c47-0f5e-477f-a923-5a9fe0acedec/artifacts/thx5vdtb_LA%20CUISINE%20DE%20JEANINE_LOGO_VERT.png";

const footerNav = [
  { label: "Accueil", path: "/" },
  { label: "Nos Solutions", path: "/solutions" },
  { label: "\u00C0 Propos", path: "/a-propos" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="footer-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={LOGO_URL} alt="La Cuisine de Jeanine" className="h-10 w-auto brightness-0 invert" />
              <span className="text-lg font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                La Cuisine de Jeanine
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Le traiteur nouvelle g&eacute;n&eacute;ration pour les entreprises. Cantine digitale, frigo connect&eacute; et prestations sur-mesure.
            </p>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>Navigation</h4>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    data-testid={`footer-link-${link.path.replace("/", "") || "home"}`}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@lacuisinedejeanine.fr"
                data-testid="footer-email"
                className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors"
              >
                <Mail size={16} />
                contact@lacuisinedejeanine.fr
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={16} />
                Seine-Maritime (76)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">&copy; 2026 La Cuisine de Jeanine. Tous droits r&eacute;serv&eacute;s.</p>
        </div>
      </div>
    </footer>
  );
}
