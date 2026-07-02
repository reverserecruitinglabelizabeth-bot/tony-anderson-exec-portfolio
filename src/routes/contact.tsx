import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero, Section, SectionHeading } from "@/components/site/PageShell";
import { CONTACT } from "@/lib/content";
import { Mail, Phone, MapPin, Linkedin, Download, Send, Globe, Briefcase, Plane } from "lucide-react";
import headshot from "@/assets/tony-headshot.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tony Anderson — Executive Quality Leadership" },
      { name: "description", content: "Contact Tony Anderson for executive quality leadership, QA/QC management and international consulting engagements across energy, EPC and infrastructure." },
      { property: "og:title", content: "Contact Tony Anderson" },
      { property: "og:description", content: "Executive availability for international quality leadership opportunities." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const FAQ = [
  { q: "Are you open to international relocation?", a: "Yes — Tony is available for international opportunities and is accustomed to operating across France, Belgium, Netherlands, the UK and the United States." },
  { q: "What types of engagements do you accept?", a: "Executive quality leadership roles, senior QA/QC management, regional quality manager positions, and selective consulting mandates for major energy and infrastructure programs." },
  { q: "Which sectors do you serve?", a: "Oil & Gas, Power Generation (conventional and nuclear), Petrochemical, EPC, Offshore, Renewables, Infrastructure, Manufacturing and Industrial Construction." },
  { q: "How quickly can you mobilize?", a: "Availability depends on current engagements; please reach out directly to discuss timeline and program specifics." },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Discuss executive quality leadership, international programs or consulting mandates."
        subtitle="For recruiters, executive search firms, hiring executives and operators seeking a proven quality leader for their most demanding programs."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <Section>
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-14 items-start">
          <div>
            <div className="relative">
              <div className="absolute -inset-4 border border-gold/40" />
              <img src={headshot} alt="Tony Anderson" className="relative w-full aspect-[4/5] object-cover" />
            </div>
            <div className="mt-8 space-y-4">
              <div className="eyebrow">Direct Contact</div>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-navy-deep hover:text-gold">
                <Mail size={16} className="text-gold" /> {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-navy-deep hover:text-gold">
                <Phone size={16} className="text-gold" /> {CONTACT.phone}
              </a>
              <div className="flex items-center gap-3 text-charcoal/80">
                <MapPin size={16} className="text-gold" /> {CONTACT.address}
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase bg-navy-deep text-white hover:bg-steel">
                  <Linkedin size={14} /> LinkedIn
                </a>
                <a href={CONTACT.resume} download className="inline-flex items-center gap-2 px-4 py-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase border border-navy-deep text-navy-deep hover:bg-navy-deep hover:text-white">
                  <Download size={14} /> Resume
                </a>
              </div>
            </div>
          </div>

          <div className="border border-hairline bg-white p-8 md:p-10">
            <div className="eyebrow">Executive Enquiry</div>
            <h2 className="font-display text-3xl text-navy-deep mt-2">Send a message</h2>
            {sent ? (
              <div className="mt-8 border border-gold/40 bg-surface p-6">
                <div className="font-display text-xl text-navy-deep">Thank you.</div>
                <p className="mt-2 text-sm text-charcoal/80">Your message has been noted. Tony will respond personally within one business day.</p>
              </div>
            ) : (
              <form
                className="mt-6 grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Full Name" name="name" required />
                  <Field label="Company / Firm" name="company" />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <Field label="Subject" name="subject" required />
                <div>
                  <label className="text-[10px] tracking-[0.22em] uppercase text-navy-deep">Message</label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="mt-2 w-full border border-hairline bg-background px-4 py-3 text-sm focus:outline-none focus:border-navy-deep"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase bg-navy-deep text-white hover:bg-steel"
                >
                  <Send size={14} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>

      <Section bg="surface">
        <SectionHeading eyebrow="Availability" title="Open to executive quality leadership engagements globally" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Briefcase, title: "Executive Leadership", body: "Regional Quality Manager, QA/QC Manager and senior quality leadership mandates." },
            { icon: Globe, title: "International Opportunities", body: "Available across Europe, the Americas, the Middle East and global program environments." },
            { icon: Plane, title: "Travel & Relocation", body: "Open to project-based travel and international relocation for the right opportunity." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-white border border-hairline p-8">
              <Icon className="text-gold" size={24} />
              <h3 className="mt-4 font-display text-xl text-navy-deep">{title}</h3>
              <p className="mt-2 text-sm text-charcoal/80 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Frequently Asked" title="Executive engagement FAQ" />
        <div className="max-w-3xl mx-auto divide-y divide-hairline border-y border-hairline">
          {FAQ.map((f) => (
            <div key={f.q} className="py-6">
              <div className="font-display text-lg text-navy-deep">{f.q}</div>
              <p className="mt-2 text-sm text-charcoal/80 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.22em] uppercase text-navy-deep">{label}{required && <span className="text-gold"> *</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-hairline bg-background px-4 py-3 text-sm focus:outline-none focus:border-navy-deep"
      />
    </div>
  );
}
