import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero, Section } from "@/components/site/PageShell";
import { PROJECTS } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Executive Project Portfolio — Tony Anderson" },
      { name: "description", content: "Executive case studies from Tony Anderson's international quality leadership on EDF, INEOS, BP, Chevron, Total, Hinkley Point C, Vattenfall, Transocean and more." },
      { property: "og:title", content: "Executive Project Portfolio — Tony Anderson" },
      { property: "og:description", content: "Global energy, EPC, petrochemical and infrastructure programs led with quality excellence." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Executive Project Portfolio"
        title="Case studies from the world's most demanding energy and infrastructure programs."
        subtitle="Each project below is presented as an executive case study — challenge, strategy, execution and business outcome — rather than a résumé line."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
      />

      <Section>
        <div className="grid gap-6">
          {PROJECTS.map((p, i) => (
            <article
              key={p.slug}
              className="group border border-hairline bg-white hover:border-gold transition-colors"
            >
              <div className="grid lg:grid-cols-[280px_1fr] gap-0">
                <div className="relative bg-navy-deep text-white p-8 flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 blueprint-bg opacity-20" />
                  <div className="relative">
                    <div className="text-[10px] tracking-[0.22em] uppercase text-gold">Case Study {String(i + 1).padStart(2, "0")}</div>
                    <div className="mt-3 font-display text-2xl leading-tight">{p.client}</div>
                    <div className="mt-2 text-xs tracking-[0.15em] uppercase text-white/60">{p.industry}</div>
                  </div>
                  <div className="relative mt-8 text-xs tracking-[0.15em] uppercase text-white/60">{p.year}</div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl md:text-3xl text-navy-deep leading-tight">{p.name}</h3>
                  <div className="mt-6 grid md:grid-cols-2 gap-x-10 gap-y-5">
                    {[
                      { k: "Challenge", v: p.challenge },
                      { k: "Strategy", v: p.strategy },
                      { k: "Execution", v: p.execution },
                      { k: "Business Outcome", v: p.outcome },
                    ].map(({ k, v }) => (
                      <div key={k}>
                        <div className="text-[10px] tracking-[0.22em] uppercase text-gold">{k}</div>
                        <p className="mt-2 text-sm text-charcoal/80 leading-relaxed">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase bg-navy-deep text-white hover:bg-steel">
            Discuss a Program <ArrowRight size={14} />
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}
