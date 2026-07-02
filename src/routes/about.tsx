import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero, Section, SectionHeading } from "@/components/site/PageShell";
import { INDUSTRIES, CONTACT } from "@/lib/content";
import { Globe, Compass, Target, Award, Download } from "lucide-react";
import headshot from "@/assets/tony-headshot.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tony Anderson — Executive Biography & Leadership Philosophy" },
      { name: "description", content: "Executive biography, leadership philosophy, career journey and global experience of Tony Anderson, international Regional Quality Manager and QA/QC Executive." },
      { property: "og:title", content: "About Tony Anderson — Executive Biography" },
      { property: "og:description", content: "Career journey, leadership philosophy and global experience of a Fortune-500-caliber quality executive." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const TIMELINE = [
  { year: "2004", label: "Enters industrial inspection — ASNT NDT Level II" },
  { year: "2011", label: "US refinery quality supervision — Flint Hills Resources" },
  { year: "2012", label: "Client surveyor for Transocean deepwater programs" },
  { year: "2014", label: "Founds Integrity Inspections consultancy in Europe" },
  { year: "2018", label: "QA/QC Manager on Wood Group / Borealis petrochemical program" },
  { year: "2020", label: "Senior surveillance role on Chevron Anchor & Ballymore" },
  { year: "2022", label: "QA/QC leadership on BP petroleum infrastructure" },
  { year: "2024", label: "QA/QC Manager, INEOS Project One — one of Europe's largest petrochemical programs" },
  { year: "2025", label: "QA/QC Manager, EDF Power Generation Program with Bonatti Spa" },
];

function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Tony Anderson"
        title="An executive quality leader shaped by two decades on the world's most complex programs."
        subtitle="A career built at the intersection of governance, engineering discipline and international operating environments — from US refineries to European petrochemical mega-projects and offshore programs across three continents."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <Section>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div>
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 border border-gold/40" />
              <img src={headshot} alt="Tony Anderson" className="relative w-full aspect-[4/5] object-cover" />
            </div>
            <div className="mt-8 border-l-2 border-gold pl-5">
              <div className="eyebrow">Executive Profile</div>
              <div className="mt-2 font-display text-2xl text-navy-deep leading-snug">Tony Anderson</div>
              <div className="text-sm text-muted-foreground mt-1">Regional Quality Manager · QA/QC Executive</div>
              <div className="text-sm text-muted-foreground">Sète, France · Available Internationally</div>
            </div>
          </div>

          <div className="space-y-6 text-charcoal/85 leading-relaxed">
            <div className="eyebrow">Executive Biography</div>
            <h2 className="font-display text-4xl md:text-5xl text-navy-deep leading-tight">
              A career defined by governance, delivery and global operating discipline.
            </h2>
            <p className="text-lg">
              Tony Anderson has spent more than twenty years building and leading quality
              organizations on the programs that power global industry — refineries,
              petrochemical complexes, offshore drilling assets, subsea systems, offshore
              wind, nuclear new-builds and continental oil & gas infrastructure.
            </p>
            <p>
              His career began in the technical trenches of industrial inspection as an ASNT
              NDT Level II specialist across RT, UT, MT, PT and VT methods. From there he
              moved into supervisory quality control at major US refineries before relocating
              to Europe to serve as a resident client surveyor for Transocean's deepwater
              drilling programs.
            </p>
            <p>
              In 2014 he founded <strong className="text-navy-deep">Integrity Inspections EUR</strong>,
              an independent consultancy that grew into a trusted partner for EDF, BP, INEOS,
              Chevron, Total, Wood, Bonatti, Vinci Energies, Framatome, Lloyd's Register and
              Vattenfall. Today he serves as QA/QC Manager on EDF's power generation
              infrastructure with Bonatti Spa, following senior roles on INEOS Project One and
              BP petroleum infrastructure refurbishments.
            </p>
            <p>
              His leadership philosophy is direct: quality is a strategic business enabler.
              The strongest organizations run quality as a discipline of governance,
              transparency and continuous improvement — protecting delivery, reducing risk
              and creating measurable business value on every project.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <a href={CONTACT.resume} download className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-[0.18em] uppercase bg-navy-deep text-white hover:bg-steel">
                <Download size={14} /> Download Resume
              </a>
              <a href={CONTACT.sop} download className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-[0.18em] uppercase border border-navy-deep text-navy-deep hover:bg-navy-deep hover:text-white">
                Statement of Purpose
              </a>
              <a href={CONTACT.loi} download className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-[0.18em] uppercase border border-navy-deep text-navy-deep hover:bg-navy-deep hover:text-white">
                Letter of Intent
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="surface">
        <SectionHeading eyebrow="Mission · Vision · Values" title="A leadership framework built for high-stakes programs" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Mission", body: "To build quality organizations that protect delivery, reduce risk and enable operational excellence for the world's most demanding energy and infrastructure operators." },
            { icon: Compass, title: "Vision", body: "To advance quality as a strategic executive discipline — deeply integrated with commercial, technical and safety leadership at the top of every major project." },
            { icon: Award, title: "Values", body: "Integrity, governance, discipline, transparency and continuous improvement — executed with respect for people, standards and the operators we serve." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-white border border-hairline p-8">
              <Icon className="text-gold" size={26} />
              <h3 className="mt-5 font-display text-2xl text-navy-deep">{title}</h3>
              <p className="mt-3 text-sm text-charcoal/80 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Career Timeline" title="A journey across continents, sectors and programs" />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-hairline" />
          {TIMELINE.map((t, i) => (
            <div key={t.year} className={`relative mb-10 flex md:grid md:grid-cols-2 gap-6 items-start ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:[direction:ltr]"}`}>
                <div className="font-display text-3xl text-gold">{t.year}</div>
                <div className="mt-2 text-charcoal/85 leading-snug">{t.label}</div>
              </div>
              <div className="hidden md:block" />
              <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-gold ring-4 ring-background" />
            </div>
          ))}
        </div>
      </Section>

      <Section bg="surface">
        <SectionHeading eyebrow="Global Experience" title="Delivering across international operating environments" />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-charcoal/85 leading-relaxed">
              Tony has led and supported programs across France, Belgium, Netherlands,
              United Kingdom and the United States — working with international EPC
              contractors, classification societies and operator-side quality organizations.
              He is fluent in English (native) and French, with deep familiarity with
              European regulatory frameworks including DESP, PED and ISO 9001.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["France", "Belgium", "Netherlands", "United Kingdom", "United States", "Global Programs"].map((c) => (
                <div key={c} className="flex items-center gap-2 border border-hairline bg-white px-4 py-3">
                  <Globe size={14} className="text-gold" />
                  <span className="text-sm text-navy-deep font-medium">{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] border border-hairline bg-white grid place-items-center p-10">
            <svg viewBox="0 0 400 240" className="w-full h-full text-navy-deep/10">
              <path
                fill="currentColor"
                d="M40 80 L80 60 L120 70 L160 55 L200 65 L240 50 L280 60 L320 45 L360 55 L360 180 L40 180 Z M60 100 Q100 90 140 100 T220 100 T300 100 T340 100"
              />
            </svg>
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
              {[[1, 2], [2, 2], [3, 1], [4, 2], [3, 3], [1, 3]].map(([x, y], i) => (
                <div key={i} className="relative" style={{ gridColumn: x, gridRow: y }}>
                  <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_0_6px_oklch(0.74_0.11_82/0.15)]" />
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Global Operating Footprint</div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Industries Served" title="Deep sector fluency across the industrial economy" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INDUSTRIES.map((ind) => (
            <div key={ind.name} className="border border-hairline p-6">
              <div className="eyebrow">Sector</div>
              <div className="mt-2 font-display text-xl text-navy-deep">{ind.name}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link to="/experience" className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase bg-navy-deep text-white hover:bg-steel">
            Explore Full Experience
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}
