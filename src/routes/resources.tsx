import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, Section } from "@/components/site/PageShell";
import { CONTACT } from "@/lib/content";
import { Download, FileText, ShieldCheck, User, Briefcase, Award } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Executive Resources & Downloads — Tony Anderson" },
      { name: "description", content: "Download the executive resume, statement of purpose, letter of intent, project portfolio summary and certifications of Tony Anderson." },
      { property: "og:title", content: "Executive Resources — Tony Anderson" },
      { property: "og:description", content: "Executive download center for recruiters, executive search firms and hiring executives." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Resources,
});

const RES = [
  { icon: FileText, title: "Executive Resume", desc: "Comprehensive executive résumé detailing 20+ years of QA/QC leadership across global programs.", file: CONTACT.resume, tag: "PDF · Latest" },
  { icon: ShieldCheck, title: "Statement of Purpose", desc: "Executive statement outlining professional purpose, leadership approach and international ambitions.", file: CONTACT.sop, tag: "PDF" },
  { icon: User, title: "Letter of Intent", desc: "Formal letter of intent for executive quality management engagements worldwide.", file: CONTACT.loi, tag: "PDF" },
  { icon: Briefcase, title: "Executive Biography", desc: "Extended executive biography suitable for press, speaking engagements and board introductions.", file: CONTACT.resume, tag: "On Request" },
  { icon: Award, title: "AWS CWI Certificate", desc: "American Welding Society Certified Welding Inspector credential — active through 2028.", file: "/docs/AWS_CWI_Certification.pdf", tag: "Credential" },
  { icon: Award, title: "API Source Inspector Certificate", desc: "American Petroleum Institute Certified Source Inspector — active through 2027.", file: "/docs/API_SI_Certification.pdf", tag: "Credential" },
];

function Resources() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Executive Resources"
        title="Executive downloads for recruiters, search firms and hiring executives."
        subtitle="Direct access to the documentation that supports executive-level quality leadership conversations."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Resources" }]}
      />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RES.map(({ icon: Icon, title, desc, file, tag }) => (
            <div key={title} className="group border border-hairline bg-white p-8 flex flex-col hover:border-gold transition-all hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 grid place-items-center border border-gold/50 text-gold">
                  <Icon size={22} />
                </div>
                <span className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{tag}</span>
              </div>
              <h3 className="mt-6 font-display text-xl text-navy-deep leading-tight">{title}</h3>
              <p className="mt-3 text-sm text-charcoal/80 leading-relaxed flex-1">{desc}</p>
              <a href={file} download className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-navy-deep group-hover:text-gold">
                <Download size={14} /> Download
              </a>
            </div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
