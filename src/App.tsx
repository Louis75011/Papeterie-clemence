import { motion } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";
import Personalization from "./components/Personalization";
import Footer from "./components/Footer";
import { Info } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-sage/30 selection:text-brand-ink">
      <Header />
      
      <main>
        <Hero />
        
        <Categories />
        
        <ProductGrid />
        
        <Personalization />

        {/* About Section */}
        <section id="a-propos" className="py-24 bg-brand-white" aria-labelledby="about-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl shadow-brand-sage/10 relative">
                  <img 
                    src="/images/clemence-visage-logo.jpg" 
                    alt="Portrait de Clémence d'Ogny, illustratrice" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="800"
                    height="800"
                  />
                  <div className="absolute inset-0 border-[20px] border-white/20 rounded-[4rem]" aria-hidden="true" />
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
