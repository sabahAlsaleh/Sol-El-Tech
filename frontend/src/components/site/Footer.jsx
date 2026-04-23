import { Zap, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "#tjanster", label: "Tjänster" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#process", label: "Process" },
  { href: "#varfor-oss", label: "Varför oss" },
  { href: "#kontakt", label: "Kontakt" },
];

const services = [
  "Elcentral",
  "Laddbox",
  "Solpaneler",
  "Smarta hem",
  "Felsökning av el",
  "Renovering av elnät",
];

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#0F172A] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-xl bg-white/10 text-[#F59E0B] flex items-center justify-center">
                <Zap className="w-5 h-5" strokeWidth={2} />
              </span>
              <span className="font-semibold text-lg tracking-tight">
                Sol &amp; El Tech
              </span>
            </div>
            <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-md">
              Din lokala elektriker i Stockholm. Säkra, moderna och
              energieffektiva elinstallationer för villor, BRF och företag.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/80">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F59E0B]" strokeWidth={1.75} />
                <a
                  href="tel:+46812345678"
                  className="hover:text-white transition-colors"
                  data-testid="footer-phone"
                >
                  08-123 45 67
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F59E0B]" strokeWidth={1.75} />
                <a
                  href="mailto:info@solochel.se"
                  className="hover:text-white transition-colors"
                  data-testid="footer-email"
                >
                  info@solochel.se
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#F59E0B]" strokeWidth={1.75} />
                <span>Stockholm, Sverige</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-white/50">
              Snabblänkar
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-testid={`footer-link-${l.href.replace("#", "")}`}
                    className="text-white/80 hover:text-[#F59E0B] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-white/50">
              Populära tjänster
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#tjanster"
                    className="text-white/80 hover:text-[#F59E0B] transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/60">
          <div data-testid="footer-copyright">
            © {new Date().getFullYear()} Sol &amp; El Tech AB · Alla rättigheter förbehållna
          </div>
          <div>Auktoriserad elinstallatör · Stockholm</div>
        </div>
      </div>
    </footer>
  );
}
