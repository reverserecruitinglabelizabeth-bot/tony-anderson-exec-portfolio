import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, Section, SectionHeading } from "@/components/site/PageShell";
import { INSIGHTS } from "@/lib/content";
import { Mic, Newspaper, Radio, Trophy } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Executive Insights & Thought Leadership — Tony Anderson" },
      { name: "description", content: "Executive perspectives on quality leadership, operational excellence, compliance, risk and continuous improvement in global energy and infrastructure programs." },
      { property: "og:title", content: "Executive Insights — Tony Anderson" },
      { property: "og:description", content: "Thought leadership on quality strategy, governance and delivery for international programs." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: Insights,
});

function Insights() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Executive Insights"
        title="Perspectives on quality leadership, governance and operational excellence."
        subtitle="A curated set of executive themes drawn from two decades of program leadership — with new publications, keynotes and conversations to follow."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Insights" }]}
      />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSIGHTS.map((i) => (
            <article key={i.title} className="border border-hairline bg-white p-8 hover:border-gold transition-colors">
              <div className="text-[10px] tracking-[0.22em] uppercase text-gold">{i.cat}</div>
              <h3 className="mt-3 font-display text-xl text-navy-deep leading-tight">{i.title}</h3>
              <p className="mt-4 text-sm text-charcoal/80 leading-relaxed">{i.excerpt}</p>
              <div className="mt-6 text-[11px] tracking-[0.18em] uppercase text-muted-foreground">Forthcoming</div>
            </article>
          ))}
        </div>
      </Section>

      <Section bg="surface">
        <SectionHeading eyebrow="Speaking · Media · Recognition" title="Available for keynotes, panels and long-form conversations" />
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: Mic, title: "Keynote Speaking", body: "Quality leadership, EPC governance and operational excellence." },
            { icon: Newspaper, title: "Publications", body: "Executive commentary on quality strategy and program delivery." },
            { icon: Radio, title: "Podcasts & Interviews", body: "Available for long-form industry conversations." },
            { icon: Trophy, title: "Recognition", body: "Track record acknowledged by international clients and partners." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-white border border-hairline p-6">
              <Icon className="text-gold" size={22} />
              <div className="mt-4 font-display text-lg text-navy-deep">{title}</div>
              <p className="mt-2 text-sm text-charcoal/75 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
