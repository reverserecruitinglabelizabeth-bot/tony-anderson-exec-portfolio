import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Award, Globe, Building2, ShieldCheck, Quote } from "lucide-react";
import { PageShell, Section, SectionHeading } from "@/components/site/PageShell";
import { Counter } from "@/components/site/Counter";
import { STATS, CLIENTS, INDUSTRIES, EXPERTISE, PROJECTS, CERTIFICATIONS, CONTACT } from "@/lib/content";
import headshot from "@/assets/tony-headshot.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tony Anderson — Regional Quality Manager & QA/QC Executive" },
      { name: "description", content: "Executive portfolio of Tony Anderson — 20+ years of international quality leadership across energy, EPC, oil & gas, petrochemical, offshore and power generation projects." },
      { property: "og:title", content: "Tony Anderson — Executive Quality Leadership" },
      { property: "og:description", content: "Strategic quality leadership across global energy, infrastructure, EPC, petrochemical, offshore and power generation projects." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell transparentNav>
      {/* 1. Hero */}
      <section className="relative min-h-screen bg-navy-deep text-white overflow-hidden flex items-center pt-28 pb-16">
        <div className="absolute inset-0 blueprint-bg opacity-40" />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-steel/40 blur-3xl" />
        <div className="container-executive relative grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="eyebrow text-gold">Executive Portfolio · Global Quality Leadership</div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02]">
              Tony <span className="text-gold">Anderson</span>
            </h1>
            <div className="mt-6 h-px w-24 bg-gold" />
            <p className="mt-6 font-display text-xl md:text-2xl text-white/90 leading-snug">
              Regional Quality Manager · QA/QC Manager · Quality Assurance & Compliance Executive
            </p>
            <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
              Delivering strategic quality leadership across global energy, infrastructure, EPC,
              petrochemical, offshore and power generation projects through operational
              excellence, governance, compliance and continuous improvement.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={CONTACT.resume}
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase bg-gold text-navy-deep hover:bg-gold-soft transition-colors"
              >
                <Download size={14} /> Executive Resume
              </a>
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase border border-white/40 text-white hover:bg-white hover:text-navy-deep transition-colors"
              >
                Explore Experience <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase text-white/80 hover:text-gold transition-colors"
              >
                <Mail size={14} /> Contact Tony
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto"
          >
            <div className="absolute inset-0 -m-8 rounded-full border border-gold/30" />
            <div className="absolute inset-0 -m-16 rounded-full border border-white/10" />
            <div className="relative h-[320px] w-[320px] md:h-[440px] md:w-[440px] rounded-full overflow-hidden bg-white border-4 border-gold shadow-[0_30px_80px_-20px_oklch(0.74_0.11_82/0.4)]">
              <img src={headshot} alt="Tony Anderson — Executive Portrait" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-navy-deep px-5 py-2 shadow-lg text-[10px] tracking-[0.22em] uppercase font-semibold">
              Sète · France · Global
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats */}
      <Section bg="surface">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left border-l-0 md:border-l md:first:border-l-0 border-hairline md:pl-6">
              <div className="font-display text-5xl md:text-6xl text-navy-deep">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-xs tracking-[0.15em] uppercase text-muted-foreground max-w-[16ch] mx-auto md:mx-0">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Trusted by */}
      <Section>
        <SectionHeading eyebrow="Trusted By" title="Serving the world's most demanding operators" align="center" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-hairline border border-hairline">
          {CLIENTS.map((c) => (
            <div key={c} className="bg-white h-24 grid place-items-center transition-all hover:bg-navy-deep group">
              <span className="font-display text-xl text-charcoal/70 group-hover:text-gold transition-colors tracking-wide">
                {c}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Executive Overview */}
      <Section bg="surface">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="eyebrow">Executive Overview</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-navy-deep leading-tight">
              Two decades of quality leadership across the world's most complex programs.
            </h2>
            <div className="mt-6 h-px w-24 bg-gold" />
          </div>
          <div className="space-y-6 text-charcoal/85 leading-relaxed">
            <p className="text-lg">
              Tony Anderson is a strategic quality management executive with 20+ years of
              international experience leading QA/QC, compliance, inspection, auditing and
              supplier quality programs across oil & gas, energy, petrochemical, power
              generation, infrastructure, offshore, manufacturing and EPC environments.
            </p>
            <p>
              He has built and led multidisciplinary quality teams, implemented Quality
              Management Systems, driven contractor and supplier compliance, developed
              inspection and testing frameworks, managed complex audit programs, reduced
              quality risk and ensured successful project execution for major global
              organizations including EDF, BP, INEOS, Chevron, Total, Wood, Bonatti, Vinci
              Energies, Framatome, Lloyd's Register, Transocean and Vattenfall.
            </p>
            <p>
              Recognized for delivering quality governance, regulatory compliance, operational
              excellence, stakeholder engagement and continuous improvement across large-scale
              industrial construction and energy infrastructure projects.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { icon: ShieldCheck, k: "Leadership" },
                { icon: Award, k: "Quality Governance" },
                { icon: Building2, k: "Operational Excellence" },
                { icon: Globe, k: "International Experience" },
              ].map(({ icon: Icon, k }) => (
                <div key={k} className="flex items-center gap-3 border border-hairline bg-white px-4 py-3">
                  <Icon size={18} className="text-gold" />
                  <span className="text-sm font-medium text-navy-deep">{k}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Leadership Philosophy */}
      <Section bg="navy">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="mx-auto text-gold" size={40} />
          <blockquote className="mt-8 font-display text-2xl md:text-4xl leading-snug text-white">
            "Quality should function as a strategic business enabler — not solely as a
            compliance requirement. The strongest organizations build quality systems that
            reduce risk, drive performance and create measurable business value."
          </blockquote>
          <div className="mt-8 text-xs tracking-[0.22em] uppercase text-gold">
            Tony Anderson — Leadership Philosophy
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-white">
          {[
            { t: "Mission", d: "Build quality organizations that protect delivery, reduce risk and enable operational excellence." },
            { t: "Vision", d: "Advance quality as a strategic executive discipline across the global energy and infrastructure sector." },
            { t: "Principle", d: "Governance, transparency and continuous improvement — executed with discipline, at every level." },
          ].map((b) => (
            <div key={b.t} className="border-t border-gold/40 pt-6">
              <div className="eyebrow">{b.t}</div>
              <p className="mt-3 text-white/80 leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. Industries */}
      <Section>
        <SectionHeading eyebrow="Industries Served" title="Quality leadership across the global energy and industrial complex" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
          {INDUSTRIES.map((ind) => (
            <div key={ind.name} className="bg-white p-8 group hover:bg-navy-deep transition-colors duration-500 cursor-default">
              <div className="text-gold text-xs tracking-[0.22em] uppercase font-semibold">Sector</div>
              <h3 className="font-display text-2xl mt-3 text-navy-deep group-hover:text-white transition-colors">{ind.name}</h3>
              <p className="mt-4 text-sm text-muted-foreground group-hover:text-white/75 transition-colors leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. Core Expertise Preview */}
      <Section bg="surface">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <SectionHeading eyebrow="Core Expertise" title="Executive capabilities that define delivery" />
          <Link to="/expertise" className="text-xs font-semibold tracking-[0.18em] uppercase text-navy-deep border-b border-gold pb-1 hover:text-gold">
            View Full Expertise →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EXPERTISE.slice(0, 12).map((e) => (
            <div key={e.title} className="bg-white border border-hairline p-6 hover:border-gold transition-colors">
              <div className="text-[10px] tracking-[0.22em] uppercase text-gold font-semibold">{e.cat}</div>
              <div className="mt-3 font-display text-lg text-navy-deep leading-snug">{e.title}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. Featured Projects */}
      <Section>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <SectionHeading eyebrow="Featured Programs" title="Signature executive engagements" />
          <Link to="/projects" className="text-xs font-semibold tracking-[0.18em] uppercase text-navy-deep border-b border-gold pb-1 hover:text-gold">
            View All Projects →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.slice(0, 4).map((p) => (
            <Link
              key={p.slug}
              to="/projects"
              className="group relative bg-navy-deep text-white p-10 overflow-hidden border border-navy-deep hover:border-gold transition-colors"
            >
              <div className="absolute inset-0 blueprint-bg opacity-30" />
              <div className="relative">
                <div className="text-xs tracking-[0.22em] uppercase text-gold">{p.industry}</div>
                <h3 className="font-display text-2xl md:text-3xl mt-4 leading-tight">{p.name}</h3>
                <p className="mt-4 text-sm text-white/70 leading-relaxed line-clamp-3">{p.challenge}</p>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs tracking-[0.18em] uppercase text-white/60">{p.year}</span>
                  <ArrowRight size={18} className="text-gold transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase bg-navy-deep text-white hover:bg-steel">
            Explore Executive Case Studies <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* 9. Certifications preview */}
      <Section bg="surface">
        <SectionHeading eyebrow="Credentials" title="Certifications that underpin executive quality delivery" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.slice(0, 5).map((c) => (
            <div key={c.name} className="bg-white border border-hairline p-6 hover:border-gold transition-colors">
              <Award className="text-gold" size={22} />
              <h3 className="mt-4 font-display text-lg text-navy-deep leading-snug">{c.name}</h3>
              <div className="mt-2 text-xs tracking-[0.15em] uppercase text-muted-foreground">{c.body}</div>
              <div className="mt-3 text-xs text-gold font-semibold">{c.status}</div>
            </div>
          ))}
          <Link to="/certifications" className="bg-navy-deep text-white p-6 flex flex-col justify-between hover:bg-steel transition-colors">
            <div>
              <div className="eyebrow">View All</div>
              <h3 className="mt-4 font-display text-lg">Full Certification Portfolio</h3>
            </div>
            <ArrowRight className="text-gold mt-8" size={22} />
          </Link>
        </div>
      </Section>

      {/* 10. Executive CTA */}
      <Section bg="navy">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <div className="eyebrow">Executive Engagement</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-white leading-tight">
              Ready to lead your next major program.
            </h2>
            <p className="mt-6 text-white/75 max-w-xl leading-relaxed">
              Available for Regional Quality Manager, QA/QC Manager and executive quality
              leadership assignments internationally — including consulting, contract and
              permanent opportunities across energy, EPC and infrastructure.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href={CONTACT.resume} download className="w-full text-center px-6 py-4 text-xs font-semibold tracking-[0.18em] uppercase bg-gold text-navy-deep hover:bg-gold-soft">
              Download Executive Resume
            </a>
            <Link to="/experience" className="w-full text-center px-6 py-4 text-xs font-semibold tracking-[0.18em] uppercase border border-white/40 text-white hover:bg-white hover:text-navy-deep">
              Review Full Experience
            </Link>
            <Link to="/contact" className="w-full text-center px-6 py-4 text-xs font-semibold tracking-[0.18em] uppercase text-white/80 hover:text-gold">
              Contact Tony Anderson →
            </Link>
          </div>
        </div>
      </Section>

      {/* 11. Testimonials */}
      <Section>
        <SectionHeading eyebrow="Professional Testimonials" title="Perspectives from clients and colleagues" subtitle="Elegant placeholder cards ready to feature future endorsements from partners, clients and executive stakeholders." />
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-surface border border-hairline p-8 relative">
              <Quote size={28} className="text-gold" />
              <p className="mt-4 text-charcoal/80 leading-relaxed italic">
                "A future testimonial from a senior executive, project director or client
                stakeholder will be featured here — highlighting Tony's leadership, delivery
                and commitment to quality excellence."
              </p>
              <div className="mt-6 pt-6 border-t border-hairline">
                <div className="font-display text-navy-deep">Executive Stakeholder</div>
                <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">Global Energy & Infrastructure</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
