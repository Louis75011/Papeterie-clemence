import { motion } from "motion/react";
import { Sparkles, Palette, Send } from "lucide-react";
import { ReactNode } from "react";

export default function Personalization() {
  return (
    <section id="personnalisation" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-sage/5 rounded-[3.5rem] p-8 lg:p-20 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 bg-brand-sage/20 rounded-2xl flex items-center justify-center text-brand-sage mb-8">
                <Sparkles size={24} />
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif mb-8 leading-tight">
                Une illustration <br />
                <span className="italic text-brand-sage">à votre image.</span>
              </h2>
              <p className="text-brand-ink/60 text-lg mb-10 leading-relaxed">
                Vous souhaitez une création unique pour un événement particulier ?
                Je vous propose de personnaliser mes illustrations ou d'en créer une entièrement sur mesure pour vous.
              </p>

              <ul className="space-y-6 mb-12">
                <FeatureItem
                  icon={<Palette size={20} />}
                  title="Couleurs & Détails"
                  desc="Adaptez les teintes et les éléments graphiques à votre thème."
                />
                <FeatureItem
                  icon={<Send size={20} />}
                  title="Textes Personnalisés"
                  desc="Ajoutez des prénoms, des dates ou des citations choisies."
                />
              </ul>

              <button className="px-10 py-5 bg-brand-sage text-white rounded-full font-medium hover:bg-brand-ink transition-colors shadow-lg shadow-brand-sage/20">
                Demander un devis personnalisé
              </button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <img src="/images/illust-affiches-fleurs-sgkePPU3.png" alt="Affiche florale illustrée" className="rounded-3xl shadow-lg" loading="lazy" width="400" height="500" />
                  <img src="/images/illust-papeterie-CZwG-5nb.png" alt="Papeterie personnalisée" className="rounded-3xl shadow-lg" loading="lazy" width="400" height="300" />
                </motion.div>
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4 pt-12"
                >
                  <img src="/images/illust-voeux-fleurs-D_MCAupn.png" alt="Vœux illustrés fleurs" className="rounded-3xl shadow-lg" loading="lazy" width="400" height="300" />
                  <img src="/images/illust-communion-D2Z8td6V.png" alt="Illustration communion personnalisée" className="rounded-3xl shadow-lg" loading="lazy" width="400" height="500" />
                </motion.div>
              </div>

              {/* Decorative circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-peach/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <li className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-sage shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-sm uppercase tracking-wider mb-1">{title}</h4>
        <p className="text-sm text-brand-ink/50">{desc}</p>
      </div>
    </li>
  );
}
