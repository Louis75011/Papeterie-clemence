import { MessageCircle, Mail, Instagram, MapPin, Truck, CreditCard } from "lucide-react";
import { ReactNode } from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-ink text-brand-cream pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img src="/images/logo-clemence.png" alt="" className="w-10 h-10 object-contain opacity-80" width="40" height="40" aria-hidden="true" />
              <div className="flex flex-col">
                <span className="font-serif text-3xl tracking-tight leading-none">Clémence d'Ogny</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-sage font-semibold mt-1">Papeterie & Illustrations</span>
              </div>
            </div>
            <p className="text-brand-cream/50 text-sm leading-relaxed mb-8">
              Illustratrice indépendante basée en Île-de-France.
              Créations poétiques pour embellir votre quotidien et vos événements.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<Instagram size={20} />} href="#" />
              <SocialLink icon={<MessageCircle size={20} />} href="https://wa.me/33600000000" />
              <SocialLink icon={<Mail size={20} />} href="mailto:contact@litote-compagnie.fr" />
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-brand-cream/60">
              <li><a href="#catalogue" className="hover:text-brand-sage transition-colors">Catalogue complet</a></li>
              <li><a href="#personnalisation" className="hover:text-brand-sage transition-colors">Sur-mesure</a></li>
              <li><a href="#a-propos" className="hover:text-brand-sage transition-colors">L'artiste</a></li>
              <li><a href="#" className="hover:text-brand-sage transition-colors">Conditions de vente</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-8">Informations</h4>
            <ul className="space-y-6">
              <InfoItem
                icon={<Truck size={18} />}
                title="Livraison"
                desc="Expédition par la poste en France et en Suisse."
              />
              <InfoItem
                icon={<CreditCard size={18} />}
                title="Paiement"
                desc="Règlements acceptés en EUR (€) et CHF (Fr.)."
              />
              <InfoItem
                icon={<MapPin size={18} />}
                title="Localisation"
                desc="Île-de-France, France."
              />
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-8">Contact Direct</h4>
            <p className="text-sm text-brand-cream/60 mb-6">
              Une question ? Un projet ? N'hésitez pas à me contacter via WhatsApp pour un échange rapide.
            </p>
            <a
              href="https://wa.me/33600000000"
              className="inline-flex items-center gap-3 bg-brand-sage hover:bg-white hover:text-brand-sage transition-all px-6 py-3 rounded-full text-sm font-bold"
            >
              <MessageCircle size={18} />
              WhatsApp Video / Chat
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-brand-cream/30 font-bold">
          <p>© 2026 Clémence d'Ogny. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-cream transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-cream">Mentions Légales</a>
            <a href="#" className="hover:text-brand-cream transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-cream">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, href }: { icon: ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full border border-brand-cream/10 flex items-center justify-center text-brand-cream/60 hover:border-brand-sage hover:text-brand-sage transition-all"
    >
      {icon}
    </a>
  );
}

function InfoItem({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <li className="flex gap-4">
      <div className="text-brand-sage mt-1">{icon}</div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
        <p className="text-xs text-brand-cream/40 leading-relaxed">{desc}</p>
      </div>
    </li>
  );
}
