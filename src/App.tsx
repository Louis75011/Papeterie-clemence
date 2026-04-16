import { motion } from "motion/react";
import { useState, useCallback } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";
import Personalization from "./components/Personalization";
import Footer from "./components/Footer";
import { Info } from "lucide-react";

export type ActiveCategory = "Tout" | "Religieux" | "Variés";

export default function App() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("Tout");

  const selectCategory = useCallback((cat: ActiveCategory) => {
    setActiveCategory(cat);
    // scroll vers la grille après mise à jour de l'état
    setTimeout(() => {
      document.getElementById("grille-produits")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-sage/30 selection:text-brand-ink">
      <Header />

      <main>
        <Hero onDiscoverClick={() => selectCategory("Tout")} />

        <Categories onSelectCategory={selectCategory} activeCategory={activeCategory} />

        <ProductGrid activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <Personalization />

        {/* About Section */}
        <section id="a-propos" className="relative py-24 bg-brand-white overflow-hidden" aria-labelledby="about-heading">
          {/* Décor floral en fond bas */}
          <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none select-none" aria-hidden="true">
            <img
              src="/images/footer_design_floral_clemence.jpg"
              alt=""
              className="w-full h-full object-cover object-top opacity-15"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Portrait illustré avec décor floral autour */}
              <div className="order-2 lg:order-1">
                <div className="relative flex items-center justify-center">
                  {/* Cercle floral décoratif derrière */}
                  <div className="absolute inset-0 rounded-full overflow-hidden opacity-20 scale-110" aria-hidden="true">
                    <img
                      src="/images/footer_design_floral_clemence.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Blob déco */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-peach/30 rounded-full blur-2xl" aria-hidden="true" />
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-brand-mint/30 rounded-full blur-2xl" aria-hidden="true" />

                  {/* Portrait dessiné — taille généreuse, pas de rognage */}
                  <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full bg-brand-mint/20 shadow-2xl shadow-brand-sage/15 overflow-hidden border-8 border-brand-white">
                    <img
                      src="/images/clemence-visage-logo.jpg"
                      alt="Portrait illustré de Clémence d'Ogny, illustratrice"
                      className="w-full h-full object-contain p-4"
                      loading="lazy"
                      width="420"
                      height="420"
                    />
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-peach/20 rounded-full text-[10px] uppercase tracking-widest font-bold text-brand-sage mb-6">
                  <Info size={12} aria-hidden="true" />
                  L'artiste derrière le pinceau
                </div>
                <h2 id="about-heading" className="text-4xl lg:text-5xl font-serif mb-8 leading-tight">
                  Clémence d'Ogny, <br />
                  <span className="italic text-brand-sage">Illustratrice.</span>
                </h2>
                <div className="space-y-6 text-brand-ink/70 leading-relaxed">
                  <p>
                    Passionnée par le dessin depuis toujours, je partage ma vision d'une papeterie douce, poétique et porteuse de sens.
                  </p>
                  <p>
                    Basée en Île-de-France, je travaille essentiellement à l'aquarelle et au trait fin pour capturer la délicatesse des visages et la beauté de la nature. Chaque illustration est une invitation à la contemplation et à la joie.
                  </p>
                  <p>
                    Mon travail s'articule autour de deux axes : la célébration de la foi chrétienne à travers des images de saints et de sacrements, et la création de designs variés pour tous les moments de la vie.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-8 border-t border-brand-sage/20 pt-12">
                  <div>
                    <p className="text-3xl font-serif text-brand-sage mb-1">100%</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Fait Main</p>
                  </div>
                  <div>
                    <p className="text-3xl font-serif text-brand-sage mb-1">2026</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Depuis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-brand-sage">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-[3rem] p-12 lg:p-20 border border-white/20"
            >
              <h2 className="text-4xl lg:text-6xl font-serif text-white mb-8">Prêt à donner vie <br /> à vos projets ?</h2>
              <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto">
                Qu'il s'agisse d'une commande groupée pour une paroisse ou d'une illustration unique, je suis à votre écoute.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/33600000000"
                  className="px-10 py-5 bg-white text-brand-sage rounded-full font-bold hover:bg-brand-ink hover:text-white transition-all shadow-xl shadow-black/10"
                >
                  Me contacter sur WhatsApp
                </a>
                <a
                  href="mailto:clemence@clemence-papeterie-studio.fr"
                  className="px-10 py-5 border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Envoyer un email
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
