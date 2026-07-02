import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero, Section } from "@/components/site/PageShell";
import { EXPERTISE } from "@/lib/content";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Core Expertise — Tony Anderson" },
      { name: "description", content: "Executive quality expertise: QMS, ISO 9001, auditing, supplier quality, mechanical completion, welding inspection, NDT, DESP/PED compliance and more." },
      { property: "og:title", content: "Core Expertise — Tony Anderson" },
      { property: "og:description", content: "A comprehensive quality expertise map across governance, compliance, execution and technical inspection." },
      { property: "og:url", content: "/expertise" },
    ],
    links: [{ rel: "canonical", href: "/expertise" }],
  }),
  component: Expertise,
});

const CATS = ["All", "Governance", "Compliance", "Execution", "Technical", "Supply Chain"];

function Expertise() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const items = EXPERTISE.filter((e) => cat === "All" || e.cat === cat);

  return (
    <PageShell>
      <PageHero
        eyebrow="Core Expertise"
        title="A comprehensive quality capability map — from governance to the fabrication floor."
        subtitle="Two decades of practitioner-led expertise organized into the disciplines Fortune 500 quality leaders rely on."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Expertise" }]}
      />

      <Section>
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 text-[11px] font-semibold tracking-[0.18em] uppercase border transition-colors ${
                cat === c ? "bg-navy-deep text-white border-navy-deep" : "border-hairline text-navy-deep hover:border-navy-deep"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {items.map((e) => {
            const isOpen = open === e.title;
            return (
              <div key={e.title} className="border border-hairline bg-white">
                <button
                  onClick={() => setOpen(isOpen ? null : e.title)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-surface"
                >
                  <div>
                    <div className="text-[10px] tracking-[0.22em] uppercase text-gold">{e.cat}</div>
                    <div className="mt-2 font-display text-xl text-navy-deep">{e.title}</div>
                  </div>
                  <div className="mt-1 shrink-0 h-8 w-8 grid place-items-center border border-hairline text-navy-deep">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-charcoal/80 leading-relaxed border-t border-hairline pt-4">
                        {e.desc}
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
