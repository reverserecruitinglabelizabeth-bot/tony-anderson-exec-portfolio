import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, CONTACT } from "@/lib/content";

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-background/95 backdrop-blur-md border-b border-hairline shadow-[0_1px_20px_-8px_oklch(0.22_0.05_260/0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-executive flex items-center justify-between h-20">
        <Link to="/" className="group flex items-center gap-3">
          <span
            className={`h-9 w-9 grid place-items-center border ${
              solid ? "border-navy-deep text-navy-deep" : "border-white text-white"
            } font-display text-lg tracking-tight`}
          >
            TA
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span
              className={`font-display text-lg tracking-tight ${
                solid ? "text-navy-deep" : "text-white"
              }`}
            >
              Tony Anderson
            </span>
            <span
              className={`text-[10px] tracking-[0.22em] uppercase font-semibold mt-1 ${
                solid ? "text-muted-foreground" : "text-white/70"
              }`}
            >
              Quality Executive
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                solid ? "text-charcoal hover:text-navy-deep" : "text-white/90 hover:text-white"
              }`}
              activeProps={{
                className: `px-3 py-2 text-sm font-semibold relative ${
                  solid ? "text-navy-deep" : "text-white"
                } after:content-[''] after:absolute after:left-3 after:right-3 after:bottom-1 after:h-px after:bg-gold`,
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={CONTACT.resume}
            download
            className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-[0.15em] uppercase border border-gold text-gold hover:bg-gold hover:text-navy-deep transition-colors"
          >
            Resume
          </a>
        </div>

        <button
          className={`lg:hidden p-2 ${solid ? "text-navy-deep" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-hairline">
          <nav className="container-executive py-4 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-charcoal border-b border-hairline last:border-0"
                activeProps={{ className: "py-3 text-sm font-semibold text-navy-deep border-b border-hairline last:border-0" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={CONTACT.resume}
              download
              className="mt-4 inline-flex justify-center items-center px-4 py-3 text-xs font-semibold tracking-[0.15em] uppercase bg-navy-deep text-white"
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
