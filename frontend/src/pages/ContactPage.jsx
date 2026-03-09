import { useState } from "react";
import { Mail, MapPin, Check, ArrowRight, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    need_type: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xzdjdkyd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", phone: "", need_type: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div data-testid="contact-page">
      {/* HEADER */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Contact</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 max-w-3xl leading-tight mb-6">
            Parlons de votre projet
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Notre &eacute;quipe est &agrave; votre &eacute;coute pour &eacute;tudier vos besoins et vous proposer la solution la plus adapt&eacute;e.
          </p>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section data-testid="contact-form-section" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl text-gray-900 mb-8">Nos coordonn&eacute;es</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="icon-container flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Email</p>
                    <a
                      href="mailto:contact@lacuisinedejeanine.fr"
                      data-testid="contact-email"
                      className="text-base font-semibold text-gray-900 hover:text-green-700 transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      contact@lacuisinedejeanine.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="icon-container flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Zone d&rsquo;intervention</p>
                    <p className="text-base font-semibold text-gray-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Seine-Maritime (76)
                    </p>
                  </div>
                </div>
              </div>

              {/* Why contact */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg text-gray-900 mb-4">Pourquoi nous contacter ?</h3>
                <ul className="space-y-3">
                  {[
                    "\u00c9tude personnalis\u00e9e gratuite",
                    "R\u00e9ponse sous 24h",
                    "Devis d\u00e9taill\u00e9 sans engagement",
                    "Conseils d\u2019experts",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <Check size={16} className="text-green-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              {status === "success" ? (
                <div data-testid="form-success" className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-3">Message envoy&eacute; !</h3>
                  <p className="text-gray-500 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Merci pour votre demande. Notre &eacute;quipe vous r&eacute;pondra dans les meilleurs d&eacute;lais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} data-testid="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Nom Pr&eacute;nom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        data-testid="input-name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom"
                        className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Entreprise <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        data-testid="input-company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Nom de votre entreprise"
                        className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        data-testid="input-email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="vous@entreprise.com"
                        className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        T&eacute;l&eacute;phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        data-testid="input-phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="01 23 45 67 89"
                        className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Objet du message
                    </label>
                    <input
                      type="text"
                      name="need_type"
                      data-testid="input-need-type"
                      value={formData.need_type}
                      onChange={handleChange}
                      placeholder="Ex: Demande de devis frigo connect&eacute;"
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      data-testid="input-message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="D&eacute;crivez votre besoin..."
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 resize-vertical"
                      style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "140px" }}
                    />
                  </div>

                  {status === "error" && (
                    <div data-testid="form-error" className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Une erreur est survenue. Veuillez r&eacute;essayer.
                    </div>
                  )}

                  <button
                    type="submit"
                    data-testid="submit-btn"
                    disabled={status === "sending"}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-full transition-all hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: "#15803d", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer ma demande <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
