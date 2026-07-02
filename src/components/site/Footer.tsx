import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, FileText, MapPin, Phone } from "lucide-react";
import { NAV, CONTACT } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80 mt-24">
      <div className="container-executive py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 grid place-items-center border border-gold text-gold font-display text-lg">TA</span>
            <div className="leading-tight">
              <div className="font-display text-xl text-white">Tony Anderson</div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-gold mt-1">Quality Executive</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
            Delivering strategic quality leadership across global energy, infrastructure, EPC,
            petrochemical, offshore and power generation programs — through governance,
            compliance and operational excellence.
          </p>
          <div className="mt-8 space-y-2 text-sm text-white/70">
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 hover:text-gold transition-colors">
              <Mail size={16} className="text-gold" /> {CONTACT.email}
            </a>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-gold transition-colors">
              <Phone size={16} className="text-gold" /> {CONTACT.phone}
            </a>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-gold" /> {CONTACT.address}
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-display text-white text-lg mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-white/70 hover:text-gold transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white text-lg mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
            </li>
            <li>
              <a href={CONTACT.resume} download className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors">
                <FileText size={14} /> Executive Resume
              </a>
            </li>
            <li>
              <a href={CONTACT.sop} download className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors">
                <FileText size={14} /> Statement of Purpose
              </a>
            </li>
            <li>
              <a href={CONTACT.loi} download className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors">
                <FileText size={14} /> Letter of Intent
              </a>
            </li>
            <li>
              <Link to="/contact" className="text-white/70 hover:text-gold transition-colors">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-executive py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Tony Anderson. Executive Quality Leadership. All rights reserved.</div>
          <div className="tracking-[0.22em] uppercase text-gold/80">Governance · Compliance · Excellence</div>
        </div>
      </div>
    </footer>
  );
}
