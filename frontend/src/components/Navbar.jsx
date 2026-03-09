import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_0f798c47-0f5e-477f-a923-5a9fe0acedec/artifacts/thx5vdtb_LA%20CUISINE%20DE%20JEANINE_LOGO_VERT.png";

const navLinks = [
  { label: "Accueil", path: "/" },
  { label: "Nos Solutions", path: "/solutions" },
  { label: "\u00C0 Propos", path: "/a-propos" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav data-testid="navbar" className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2" data-testid="nav-logo">
            <img src={LOGO_URL} alt="La Cuisine de Jeanine" className="h-10 md:h-12 w-auto" />
            <span className="text-lg md:text-xl font-semibold text-gray-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              La Cuisine de Jeanine
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.path.replace("/", "") || "home"}`}
                className={`text-sm font-medium transition-colors hover:text-green-800 ${
                  location.pathname === link.path ? "text-green-800 font-semibold" : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              data-testid="nav-contact-btn"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: "#14532d" }}
            >
              Contactez-nous
            </Link>
          </div>
          <button
            data-testid="mobile-menu-btn"
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div data-testid="mobile-menu" className="md:hidden bg-white border-t border-gray-100 pb-4">
          <div className="px-4 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                  location.pathname === link.path ? "text-green-800 bg-green-50" : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block text-center px-3 py-3 text-base font-semibold text-white rounded-full mt-3"
              style={{ backgroundColor: "#14532d" }}
              onClick={() => setMobileOpen(false)}
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
