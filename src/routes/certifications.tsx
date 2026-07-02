import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, Section, SectionHeading } from "@/components/site/PageShell";
import { CERTIFICATIONS } from "@/lib/content";
import { Award, ShieldCheck, GraduationCap, Users } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications & Credentials — Tony Anderson" },
      { name: "description", content: "AWS CWI, API Source Inspector, OSHA 10, GIES 2 and former ASNT Level II — credentials underpinning Tony Anderson's executive quality practice." },
      { property: "og:title", content: "Certifications & Credentials — Tony Anderson" },
      { property: "og:description", content: "Active international quality, inspection and safety credentials." },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: Certs,
});

function Certs() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Certifications & Credentials"
        title="Internationally recognized credentials underpinning executive quality leadership."
        subtitle="A portfolio of active certifications spanning welding inspection, source inspection, industrial safety and non-destructive testing."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Certifications" }]}
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((c) => (
            <div key={c.name} className="border border-hairline bg-white p-8 flex gap-6">
              <div className="shrink-0 h-14 w-14 grid place-items-center border border-gold/50 text-gold">
                <Award size={24} />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] tracking-[0.22em] uppercase text-gold">{c.body}</div>
                <h3 className="mt-2 font-display text-xl text-navy-deep leading-tight">{c.name}</h3>
                <div className="mt-2 text-xs text-steel font-semibold">{c.status}</div>
                <p className="mt-3 text-sm text-charcoal/80 leading-relaxed">{c.desc}</p>
                {c.file && (
                  <a href={c.file} target="_blank" rel="noreferrer" className="mt-4 inline-block text-[11px] font-semibold tracking-[0.18em] uppercase text-navy-deep border-b border-gold pb-0.5 hover:text-gold">
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="surface">
        <SectionHeading eyebrow="Professional Development" title="Continuous learning and industry engagement" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: GraduationCap, title: "Ongoing Training", body: "Continuous professional development in ISO 9001, DESP/PED, welding codes, NDT methods and executive quality leadership." },
            { icon: Users, title: "Industry Memberships", body: "Engaged with the American Welding Society, American Petroleum Institute and international quality communities." },
            { icon: ShieldCheck, title: "Standards Fluency", body: "Practical fluency with ISO 9001, ASME B31.3, API 510/570/653, AWS D1.1, EN and DESP/PED frameworks." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-white border border-hairline p-8">
              <Icon className="text-gold" size={26} />
              <h3 className="mt-5 font-display text-xl text-navy-deep">{title}</h3>
              <p className="mt-3 text-sm text-charcoal/80 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
