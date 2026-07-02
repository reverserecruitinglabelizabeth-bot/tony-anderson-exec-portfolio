import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({
  children,
  transparentNav = false,
}: {
  children: ReactNode;
  transparentNav?: boolean;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar transparent={transparentNav} />
      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; to?: string }[];
}) {
  return (
    <section className="relative bg-navy-deep text-white overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 blueprint-bg opacity-40" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-steel/30 blur-3xl" />
      <div className="container-executive relative">
        {breadcrumbs && (
          <nav className="text-xs tracking-[0.18em] uppercase text-white/60 mb-6">
            {breadcrumbs.map((b, i) => (
              <span key={i}>
                {b.to ? (
                  <a href={b.to} className="hover:text-gold">{b.label}</a>
                ) : (
                  <span>{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <span className="mx-2 text-gold">/</span>}
              </span>
            ))}
          </nav>
        )}
        <div className="eyebrow text-gold">{eyebrow}</div>
        <h1 className="font-display text-4xl md:text-6xl mt-4 max-w-4xl leading-[1.05]">{title}</h1>
        {subtitle && (
          <p className="mt-6 text-base md:text-lg text-white/75 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
        <div className="mt-10 h-px w-24 bg-gold" />
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  bg = "white",
}: {
  children: ReactNode;
  className?: string;
  bg?: "white" | "surface" | "navy";
}) {
  const bgClass =
    bg === "surface" ? "bg-surface" : bg === "navy" ? "bg-navy-deep text-white" : "bg-background";
  return (
    <section className={`py-20 md:py-28 ${bgClass} ${className}`}>
      <div className="container-executive">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : ""} max-w-3xl mb-14`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2
        className={`font-display text-3xl md:text-5xl mt-3 leading-[1.1] ${
          invert ? "text-white" : "text-navy-deep"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${invert ? "text-white/75" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
