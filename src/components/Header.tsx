import { motion } from "motion/react";
import { ShoppingBag, Menu, X, MessageCircle } from "lucide-react";
import { useState, ReactNode } from "react";
import { cn } from "@/src/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-white/80 backdrop-blur-md border-b border-brand-sage/20" role="banner">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden p-2 hover:bg-brand-sage/10 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
          <a href="#" className="flex items-center gap-3" aria-label="Clémence d'Ogny — Accueil">
            <img
              src="/images/logo-clemence.png"
              alt="Logo Clémence d'Ogny"
              className="w-10 h-10 object-contain"
              width="40"
              height="40"
            />
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-tight leading-none">Clémence d'Ogny</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-sage font-semibold mt-1">Papeterie & Illustrations</span>
            </div>
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          <NavLink href="#catalogue">Catalogue</NavLink>
          <NavLink href="#personnalisation">Personnalisation</NavLink>
          <NavLink href="#a-propos">À Propos</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-brand-sage/10 rounded-full text-xs font-medium text-brand-sage">
            <span className="w-2 h-2 bg-brand-sage rounded-full animate-pulse" />
            EUR / CHF
          </div>
          <button className="p-2 hover:bg-brand-sage/10 rounded-full transition-colors relative">
            <ShoppingBag size={22} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-gold rounded-full" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="lg:hidden overflow-hidden bg-brand-white border-b border-brand-sage/20"
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          <MobileNavLink href="#catalogue" onClick={() => setIsOpen(false)}>Catalogue</MobileNavLink>
          <MobileNavLink href="#personnalisation" onClick={() => setIsOpen(false)}>Personnalisation</MobileNavLink>
          <MobileNavLink href="#a-propos" onClick={() => setIsOpen(false)}>À Propos</MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>

          <div className="pt-6 border-t border-brand-sage/10 flex items-center justify-between">
            <span className="text-sm font-medium">Devises acceptées</span>
            <span className="text-sm font-semibold text-brand-sage">EUR & CHF</span>
          </div>

          <a
            href="https://wa.me/33600000000"
            className="flex items-center justify-center gap-2 bg-brand-sage text-white py-4 rounded-xl font-medium"
          >
            <MessageCircle size={20} />
            Nous contacter sur WhatsApp
          </a>
        </div>
      </motion.div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-brand-ink/70 hover:text-brand-ink transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold transition-all group-hover:w-full" />
    </a>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: ReactNode; onClick: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-2xl font-serif text-brand-ink"
    >
      {children}
    </a>
  );
}
