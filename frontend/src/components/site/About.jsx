import { Award, Users, Clock } from "lucide-react";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1635424710918-d5c138981922?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwzfHxzb2xhciUyMHBhbmVsJTIwaW5zdGFsbGF0aW9uJTIwcm9vZnxlbnwwfHx8fDE3NzY5NTk0NzV8MA&ixlib=rb-4.1.0&q=85&w=1200&h=900";

const stats = [
  { icon: Clock, value: "15+ år", label: "Erfarenhet i branschen" },
  { icon: Users, value: "1 200+", label: "Nöjda kunder i Stockholm" },
  { icon: Award, value: "100%", label: "Auktoriserade elinstallatörer" },
];

export default function About() {
  return (
    <section
      id="om-oss"
      data-testid="about-section"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 reveal order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-[#0F172A]/5" />
            <img
              src={ABOUT_IMAGE}
              alt="Solpaneler och modern elinstallation"
              data-testid="about-image"
              className="relative rounded-3xl w-full h-[520px] object-cover border border-[#E5E7EB]"
            />
            <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-[300px] bg-white rounded-2xl border border-[#E5E7EB] shadow-lg p-5">
              <div className="text-xs uppercase tracking-widest text-[#6B7280]">
                Vårt löfte
              </div>
              <div className="mt-1 text-base font-medium text-[#0F172A] leading-snug">
                Fast pris, rent arbete och riktigt folk på plats — varje gång.
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 reveal order-1 lg:order-2">
          <div className="text-sm uppercase tracking-widest text-[#6B7280]">
            Om oss
          </div>
          <h2
            data-testid="about-heading"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A]"
          >
            Lokala elektriker med nordiskt hantverk i fokus
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Sol &amp; El Tech är en certifierad elfirma baserad i Stockholm. Vi
            tar hand om allt från små felsökningar till kompletta
            el­renoveringar för villaägare, bostadsrättsföreningar och mindre
            företag.
          </p>
          <p className="mt-4 text-base text-[#4B5563] leading-relaxed">
            Vi bygger vår verksamhet på tre enkla principer:{" "}
            <strong className="text-[#0F172A] font-medium">säkerhet</strong>,{" "}
            <strong className="text-[#0F172A] font-medium">kvalitet</strong>{" "}
            och en{" "}
            <strong className="text-[#0F172A] font-medium">
              kundupplevelse
            </strong>{" "}
            som är lika omsorgsfull som själva installationen.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                data-testid={`about-stat-${value.replace(/\s/g, "")}`}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-5"
              >
                <Icon className="w-5 h-5 text-[#F59E0B]" strokeWidth={1.75} />
                <div className="mt-3 text-2xl font-semibold text-[#0F172A]">
                  {value}
                </div>
                <div className="mt-1 text-sm text-[#6B7280]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
