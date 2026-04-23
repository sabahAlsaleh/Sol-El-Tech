import { PhoneCall, ClipboardList, Wrench, CheckCircle2 } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: PhoneCall,
    title: "Kontakt",
    desc: "Ring oss eller skicka en förfrågan via formuläret. Vi återkommer inom 24 timmar.",
  },
  {
    n: "02",
    icon: ClipboardList,
    title: "Inspektion & offert",
    desc: "Vi besöker platsen, bedömer behovet och lämnar en tydlig offert med fast pris.",
  },
  {
    n: "03",
    icon: Wrench,
    title: "Installation",
    desc: "Våra certifierade elektriker utför arbetet säkert, städat och på avtalad tid.",
  },
  {
    n: "04",
    icon: CheckCircle2,
    title: "Kontroll & färdigställande",
    desc: "Vi mäter, dokumenterar och går igenom allt med dig innan vi anser arbetet klart.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      data-testid="process-section"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#0F172A] text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
           style={{
             backgroundImage:
               "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
             backgroundSize: "64px 64px",
           }}
      />
      <div className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-[#F59E0B]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl reveal">
          <div className="text-sm uppercase tracking-widest text-[#F59E0B]">
            Vår process
          </div>
          <h2
            data-testid="process-heading"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white"
          >
            Fyra enkla steg — från första samtal till klart jobb
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed">
            Vi har finslipat en process som gör el enkelt för dig. Inga
            överraskningar, bara trygghet.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ n, icon: Icon, title, desc }, i) => (
            <div
              key={n}
              data-testid={`process-step-${n}`}
              className="reveal relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#F59E0B]">
                  Steg {n}
                </span>
                <Icon className="w-6 h-6 text-white/80" strokeWidth={1.5} />
              </div>
              <h3 className="mt-8 text-xl font-medium text-white">{title}</h3>
              <p className="mt-2 text-[15px] text-white/70 leading-relaxed">
                {desc}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-gradient-to-r from-white/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
