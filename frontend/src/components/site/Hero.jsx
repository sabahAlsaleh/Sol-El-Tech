import { ArrowRight, Phone, ShieldCheck, Zap, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_IMAGE =
  "https://images.pexels.com/photos/9679179/pexels-photo-9679179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36 overflow-hidden"
    >
      <div className="absolute inset-0 hero-grid pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-[#F59E0B]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 reveal">
          <div
            data-testid="hero-eyebrow"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E5E7EB] bg-white/70 backdrop-blur text-xs font-medium text-[#4B5563] uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
            Certifierade elektriker · Stockholm
          </div>

          <h1
            data-testid="hero-headline"
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#0F172A] leading-[1.05]"
          >
            Din lokala elektriker{" "}
            <span className="relative inline-block">
              i Stockholm
              <span className="absolute left-0 -bottom-1 h-[6px] w-full bg-[#F59E0B]/50 rounded-sm -z-10" />
            </span>
          </h1>

          <p
            data-testid="hero-subheadline"
            className="mt-6 text-lg sm:text-xl text-[#4B5563] max-w-2xl leading-relaxed"
          >
            Säkra, moderna och energieffektiva elinstallationer — från laddbox
            och solpaneler till smarta hem och elcentraler. Vi levererar
            skandinavisk kvalitet, i tid och till fast pris.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              data-testid="hero-cta-kontakt"
              className="bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-full px-7 h-12 shadow-md hover:-translate-y-0.5 transition-transform"
            >
              <a href="#kontakt" className="flex items-center gap-2">
                Kontakta oss <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              data-testid="hero-cta-offert"
              className="rounded-full px-7 h-12 border-[#0F172A]/15 text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors"
            >
              <a href="#kontakt" className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> Begär offert
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-[#4B5563]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0F172A]" strokeWidth={1.75} />
              <span>Auktoriserad elinstallatör</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#0F172A]" strokeWidth={1.75} />
              <span>Snabb utryckning</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-[#0F172A]" strokeWidth={1.75} />
              <span>Energismarta lösningar</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 reveal">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#F59E0B]/20 to-transparent blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-xl bg-white">
              <img
                src={HERO_IMAGE}
                alt="Elektriker arbetar med elcentral"
                data-testid="hero-image"
                className="w-full h-[440px] object-cover"
                loading="eager"
              />
            </div>
            <div
              data-testid="hero-floating-card"
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-lg p-5 max-w-[260px] hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F172A] text-[#F59E0B] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#6B7280]">
                    Garanti
                  </div>
                  <div className="text-sm font-semibold text-[#0F172A]">
                    5 års arbetsgaranti
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
