import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" aria-label="Présentation">
      {/* Fond dégradé charte */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cream/60 via-brand-white to-brand-mint/20 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-sage/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-brand-sage mb-6">
              <span className="w-1 h-1 bg-brand-sage rounded-full" aria-hidden="true" />
              Illustratrice Indépendante
            </div>
            <h1 className="text-6xl lg:text-8xl font-serif leading-[0.9] mb-8">
              L'art de la <br />
              <span className="text-brand-sage italic">papeterie</span> <br />
              poétique.
            </h1>
            <p className="text-lg text-brand-ink/60 max-w-md mb-10 leading-relaxed">
              Des illustrations délicates pour célébrer les moments précieux de la vie. 
              Créations originales, religieuses et variées, pensées avec douceur.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#catalogue"
                className="px-8 py-4 bg-brand-ink text-brand-white rounded-full font-medium hover:bg-brand-sage transition-colors flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage"
              >
                Découvrir le catalogue
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <a 
                href="#personnalisation"
                className="px-8 py-4 border border-brand-ink/20 rounded-full font-medium hover:bg-brand-sage/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage"
              >
                Personnalisation
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Image principale : ensemble floral */}
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-brand-mint/20 relative z-10 shadow-2xl shadow-brand-sage/10">
              <img 
                src="/images/ensemble-promo.png" 
                alt="Collection papeterie florale Clémence d'Ogny — ensemble promotionnel"
                className="w-full h-full object-cover"
                width="800"
                height="1000"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-cream/30 to-transparent" aria-hidden="true" />
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-peach/20 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-sage/10 rounded-full blur-3xl" aria-hidden="true" />
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 top-1/4 bg-brand-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-brand-sage/10 border border-brand-sage/10 z-20 hidden sm:block"
              aria-hidden="true"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-sage/20 flex items-center justify-center text-brand-sage">
                  ✨
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-sage">Fait Main</p>
                  <p className="text-[10px] text-brand-ink/60">Illustrations originales</p>
                </div>
              </div>
            </motion.div>

            {/* Vignette floral secondaire en bas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-8 -left-8 w-36 h-36 rounded-2xl overflow-hidden shadow-lg border-4 border-brand-white z-20 hidden lg:block"
            >
              <img 
                src="/images/footer_design_floral_clemence.jpg"
                alt="Motif floral Clémence"
                className="w-full h-full object-cover"
                width="144"
                height="144"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
