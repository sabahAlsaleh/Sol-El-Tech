import { BadgeCheck, Zap, Tag, ShieldCheck, Sparkles } from "lucide-react";

const points = [
  {
    icon: BadgeCheck,
    title: "Certifierade elektriker",
    desc: "Auktoriserade elinstallatörer med behörighet enligt Elsäkerhetsverket.",
  },
  {
    icon: Zap,
    title: "Snabb service",
    desc: "Akuta ärenden hanteras samma dag — vi är alltid i närheten i Stockholm.",
  },
  {
    icon: Tag,
    title: "Transparent prissättning",
    desc: "Fast pris och tydliga offerter — inga överraskningar på fakturan.",
  },
  {
    icon: ShieldCheck,
    title: "Hög säkerhetsstandard",
    desc: "Alla installationer utförs enligt gällande normer och dokumenteras.",
  },
  {
    icon: Sparkles,
    title: "Moderna lösningar",
    desc: "Energismart teknik, smarta hem och framtidssäkra installationer.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="varfor-oss"
      data-testid="why-section"
      className="relative py-20 sm:py-28 lg:py-32 bg-white border-y border-[#E5E7EB]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 reveal">
            <div className="text-sm uppercase tracking-widest text-[#6B7280]">
              Varför välja oss
            </div>
            <h2
              data-testid="why-heading"
              className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A]"
            >
              En elektriker du kan{" "}
              <span className="text-[#F59E0B]">lita på</span>.
            </h2>
            <p className="mt-5 text-base text-[#4B5563] leading-relaxed">
              Vi vet att el handlar om förtroende. Därför gör vi allt för att
              du ska känna dig trygg — från första samtalet till slutbesiktning.
            </p>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {points.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                data-testid={`why-point-${title.toLowerCase().replace(/\s+/g, "-")}`}
                className="reveal group flex gap-4 p-6 rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] hover:bg-white hover:border-[#0F172A]/15 hover:-translate-y-0.5 transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#0F172A] text-[#F59E0B] flex items-center justify-center">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#0F172A]">
                    {title}
                  </h3>
                  <p className="mt-1 text-[15px] text-[#4B5563] leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
