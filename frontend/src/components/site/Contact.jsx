import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const serviceOptions = [
  "Elcentral",
  "Eluttag",
  "Felsökning av el",
  "Laddbox",
  "Renovering av elnät",
  "Smarta hem",
  "Solpaneler",
  "Spishäll",
  "Strömbrytare",
  "Styrteknik",
  "Taklampa",
  "Vitvaror",
  "Annat",
];

const initial = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Fyll i namn, e-post och meddelande.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, {
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        service: form.service || null,
        message: form.message,
      });
      toast.success("Tack! Vi återkommer inom 24 timmar.");
      setForm(initial);
    } catch (err) {
      const detail =
        err?.response?.data?.detail ||
        "Något gick fel. Försök igen eller ring oss direkt.";
      toast.error(typeof detail === "string" ? detail : "Något gick fel.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="kontakt"
      data-testid="contact-section"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 reveal">
            <div className="text-sm uppercase tracking-widest text-[#6B7280]">
              Kontakt
            </div>
            <h2
              data-testid="contact-heading"
              className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A]"
            >
              Boka elektriker idag
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Berätta kort om ditt projekt så återkommer vi med en kostnadsfri
              offert inom 24 timmar. Vi utför uppdrag i hela Stockholmsområdet.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="tel:+46812345678"
                data-testid="contact-phone"
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center group-hover:border-[#0F172A]/30 transition-colors">
                  <Phone className="w-5 h-5 text-[#0F172A]" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#6B7280]">
                    Telefon
                  </div>
                  <div className="text-base font-medium text-[#0F172A] group-hover:text-[#F59E0B] transition-colors">
                    08-123 45 67
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@solochel.se"
                data-testid="contact-email"
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center group-hover:border-[#0F172A]/30 transition-colors">
                  <Mail className="w-5 h-5 text-[#0F172A]" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#6B7280]">
                    E-post
                  </div>
                  <div className="text-base font-medium text-[#0F172A] group-hover:text-[#F59E0B] transition-colors">
                    info@solochel.se
                  </div>
                </div>
              </a>

              <div
                data-testid="contact-area"
                className="flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#0F172A]" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#6B7280]">
                    Serviceområde
                  </div>
                  <div className="text-base font-medium text-[#0F172A]">
                    Stockholm &amp; närområde
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <form
              onSubmit={handleSubmit}
              data-testid="contact-form"
              className="bg-white rounded-3xl border border-[#E5E7EB] p-7 sm:p-10 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-[#0F172A]">
                    Namn *
                  </label>
                  <Input
                    data-testid="contact-input-name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Anna Andersson"
                    className="mt-2 h-11 rounded-xl border-[#E5E7EB] focus-visible:ring-[#0F172A]"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#0F172A]">
                    E-post *
                  </label>
                  <Input
                    data-testid="contact-input-email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="anna@example.com"
                    className="mt-2 h-11 rounded-xl border-[#E5E7EB] focus-visible:ring-[#0F172A]"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#0F172A]">
                    Telefon
                  </label>
                  <Input
                    data-testid="contact-input-phone"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="070-123 45 67"
                    className="mt-2 h-11 rounded-xl border-[#E5E7EB] focus-visible:ring-[#0F172A]"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#0F172A]">
                    Tjänst
                  </label>
                  <Select
                    value={form.service}
                    onValueChange={(v) => setForm((f) => ({ ...f, service: v }))}
                  >
                    <SelectTrigger
                      data-testid="contact-select-service"
                      className="mt-2 h-11 rounded-xl border-[#E5E7EB]"
                    >
                      <SelectValue placeholder="Välj tjänst" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((s) => (
                        <SelectItem
                          key={s}
                          value={s}
                          data-testid={`contact-service-option-${s}`}
                        >
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-5">
                <label className="text-sm font-medium text-[#0F172A]">
                  Beskriv ditt projekt *
                </label>
                <Textarea
                  data-testid="contact-input-message"
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Berätta kort vad du behöver hjälp med…"
                  className="mt-2 min-h-[140px] rounded-xl border-[#E5E7EB] focus-visible:ring-[#0F172A]"
                  required
                />
              </div>

              <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-[#6B7280] max-w-sm">
                  Genom att skicka godkänner du att vi behandlar dina uppgifter
                  för att kunna återkomma med en offert.
                </p>
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  data-testid="contact-submit-button"
                  className="bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-full px-7 h-12 shadow-md hover:-translate-y-0.5 transition-transform disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Skickar…
                    </>
                  ) : (
                    <>
                      Boka elektriker idag <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
