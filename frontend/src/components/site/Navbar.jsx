import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#tjanster", label: "Tjänster" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#process", label: "Process" },
  { href: "#varfor-oss", label: "Varför oss" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/80 border-b border-[#E5E7EB]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="navbar-logo"
          className="flex items-center gap-2 group"
        >
          <span className="w-9 h-9 rounded-xl bg-[#0F172A] text-[#F59E0B] flex items-center justify-center transition-transform group-hover:-translate-y-0.5">
            <Zap className="w-5 h-5" strokeWidth={2} />
          </span>
          <span className="font-semibold tracking-tight text-[#0F172A]">
            Sol &amp; El Tech
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.href.replace("#", "")}`}
              className="text-sm font-medium text-[#4B5563] hover:text-[#0F172A] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F59E0B] after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            data-testid="navbar-cta-offert"
            className="bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-full px-5 shadow-sm hover:-translate-y-0.5 transition-transform"
          >
            <a href="#kontakt">Begär offert</a>
          </Button>
        </div>

        <button
          type="button"
          data-testid="navbar-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-[#0F172A]"
          aria-label="Öppna meny"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div
          data-testid="navbar-mobile-menu"
          className="md:hidden bg-white border-t border-[#E5E7EB]"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-[#111827] hover:text-[#F59E0B]"
                data-testid={`mobile-nav-link-${l.href.replace("#", "")}`}
              >
                {l.label}
              </a>
            ))}
            <Button
              asChild
              data-testid="mobile-navbar-cta-offert"
              className="bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-full mt-2"
            >
              <a href="#kontakt" onClick={() => setOpen(false)}>
                Begär offert
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
