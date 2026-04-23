import {
  CircuitBoard,
  Plug,
  Search,
  BatteryCharging,
  Wrench,
  Home,
  Sun,
  Flame,
  ToggleRight,
  Cpu,
  Lamp,
  WashingMachine,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: CircuitBoard,
    title: "Elcentral",
    desc: "Uppgradering eller byte av äldre proppskåp och installation av jordfelsbrytare för ett tryggare hem.",
  },
  {
    icon: Plug,
    title: "Eluttag",
    desc: "Installation, byte och smart placering av uttag — från kök till hemmakontor.",
  },
  {
    icon: Search,
    title: "Felsökning av el",
    desc: "Vi lokaliserar och åtgärdar elfel snabbt, säkert och med minimal påverkan på din vardag.",
  },
  {
    icon: BatteryCharging,
    title: "Laddbox",
    desc: "Installation av laddbox för elbil hemma eller i BRF — med stöd för grönt bidrag.",
  },
  {
    icon: Wrench,
    title: "Renovering av elnät",
    desc: "Full uppgradering av elnätet i äldre fastigheter för modern standard och säkerhet.",
  },
  {
    icon: Home,
    title: "Smarta hem",
    desc: "Styr belysning, värme och säkerhet från mobilen — enkelt, energieffektivt och snyggt.",
  },
  {
    icon: Sun,
    title: "Solpaneler",
    desc: "Elektrisk integration av solceller med växelriktare, mätning och optimering av produktion.",
  },
  {
    icon: Flame,
    title: "Spishäll",
    desc: "Säker installation av induktions- och glaskeramikhällar enligt gällande föreskrifter.",
  },
  {
    icon: ToggleRight,
    title: "Strömbrytare",
    desc: "Byte och installation av moderna strömbrytare, dimrar och scenstyrning.",
  },
  {
    icon: Cpu,
    title: "Styrteknik",
    desc: "Automation och kontrollsystem för belysning, ventilation och fastighetsstyrning.",
  },
  {
    icon: Lamp,
    title: "Taklampa",
    desc: "Proffsig montering av taklampor, spotlights och designarmaturer — utan stress.",
  },
  {
    icon: WashingMachine,
    title: "Vitvaror",
    desc: "Inkoppling av tvättmaskiner, torktumlare, diskmaskiner och ugnar med korrekt skydd.",
  },
];

export default function Services() {
  return (
    <section
      id="tjanster"
      data-testid="services-section"
      className="relative py-20 sm:py-28 lg:py-32 bg-white border-y border-[#E5E7EB]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl reveal">
          <div className="text-sm uppercase tracking-widest text-[#6B7280]">
            Våra tjänster
          </div>
          <h2
            data-testid="services-heading"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A]"
          >
            Allt inom el — <span className="text-[#F59E0B]">under ett tak</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Från små akuta fel till kompletta elinstallationer. Vi kombinerar
            traditionellt hantverk med moderna, energismarta lösningar.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, "-").replace(/ö/g, "o").replace(/ä/g, "a").replace(/å/g, "a")}`}
              className="group relative reveal bg-white border border-[#E5E7EB] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.15)] hover:border-[#0F172A]/20"
              style={{ transitionDelay: `${(i % 6) * 40}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#F3F4F6] group-hover:bg-[#0F172A] group-hover:text-[#F59E0B] text-[#0F172A] flex items-center justify-center transition-colors">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#0F172A] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-[#0F172A]">
                {title}
              </h3>
              <p className="mt-2 text-[#4B5563] leading-relaxed text-[15px]">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
