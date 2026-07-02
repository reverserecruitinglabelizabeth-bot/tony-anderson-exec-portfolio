import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero, Section } from "@/components/site/PageShell";
import { EXPERIENCE } from "@/lib/content";
import { ChevronDown, MapPin, Calendar, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Executive Experience — Tony Anderson" },
      { name: "description", content: "Executive career timeline of Tony Anderson — QA/QC leadership at EDF, BP, INEOS, Chevron, Total, Wood, Lloyd's Register, Transocean and Vattenfall." },
      { property: "og:title", content: "Executive Experience — Tony Anderson" },
      { property: "og:description", content: "Two decades of quality leadership across global energy, EPC and infrastructure programs." },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: Experience,
});

function Experience() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <PageShell>
      <PageHero
        eyebrow="Executive Experience"
        title="A career built on delivery — from ASNT inspector to Regional Quality Executive."
        subtitle="Each engagement below expands into a premium executive case study. Explore the leadership, business impact, quality systems and deliverables that define Tony's career trajectory."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Experience" }]}
      />

      <Section>
        <div className="space-y-4">
          {EXPERIENCE.map((role, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border border-hairline bg-white">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left p-6 md:p-8 grid md:grid-cols-[minmax(0,1fr)_auto] gap-6 items-start hover:bg-surface transition-colors"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.15em] uppercase text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gold" />{role.period}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={12} className="text-gold" />{role.location}</span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl md:text-3xl text-navy-deep leading-tight">{role.role}</h3>
                    <div className="mt-1 text-steel font-semibold">{role.company}</div>
                    <p className="mt-3 text-charcoal/80 leading-relaxed max-w-3xl">{role.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {role.tags.map((t) => (
                        <span key={t} className="text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 border border-hairline text-navy-deep">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 h-10 w-10 grid place-items-center border border-hairline text-navy-deep">
                    <ChevronDown size={18} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 grid md:grid-cols-[1fr_2fr] gap-8 border-t border-hairline">
                        <div>
                          <div className="eyebrow">Executive Case Study</div>
                          <p className="mt-3 text-sm text-charcoal/75 leading-relaxed">
                            Leadership, governance and delivery highlights from this
                            engagement — beyond a résumé bullet list.
                          </p>
                          <div className="mt-6 flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-navy-deep">
                            <Briefcase size={14} className="text-gold" /> Key Deliverables
                          </div>
                        </div>
                        <ul className="space-y-3">
                          {role.bullets.map((b, j) => (
                            <li key={j} className="flex gap-4 text-charcoal/85 leading-relaxed">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold rounded-full" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Section>
    </PageShell>
  );
}
