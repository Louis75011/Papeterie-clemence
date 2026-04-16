import { motion } from "motion/react";
import { Heart, Plus } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Souvenir de ma Première Communion",
    category: "Religieux",
    price: { eur: 4.50, chf: 5.00 },
    image: "/images/illust-communion-D2Z8td6V.png",
    alt: "Illustration communion — calice et raisins aquarelle",
  },
  {
    id: 2,
    name: "Souvenir de mon Baptême",
    category: "Religieux",
    price: { eur: 4.50, chf: 5.00 },
    image: "/images/bapteme.jpg",
    alt: "Illustration baptême aquarelle",
  },
  {
    id: 3,
    name: "Confirmation — Colombe & Flamme",
    category: "Religieux",
    price: { eur: 4.50, chf: 5.00 },
    image: "/images/illust-confirmation-C_g2TXTw.png",
    alt: "Illustration confirmation catholique aquarelle",
  },
  {
    id: 4,
    name: "Souvenir de Baptême — Variante 2",
    category: "Religieux",
    price: { eur: 4.50, chf: 5.00 },
    image: "/images/illust-bapteme-2-ERDYlm.png",
    alt: "Illustration de baptême variante 2 aquarelle",
  },
  {
    id: 5,
    name: "Marque-pages Fleuris",
    category: "Variés",
    price: { eur: 3.50, chf: 4.00 },
    image: "/images/illust-marque-pages-fleurs-DnHZTXzw.png",
    alt: "Marque-pages illustrés fleurs aquarelle",
  },
  {
    id: 6,
    name: "Vœux en Fleurs",
    category: "Variés",
    price: { eur: 4.00, chf: 4.50 },
    image: "/images/illust-voeux-fleurs-D_MCAupn.png",
    alt: "Carte de vœux florale aquarelle",
  }
];

export default function ProductGrid() {
  return (
    <section className="py-24 bg-brand-cream/40" aria-labelledby="creations-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 id="creations-heading" className="text-4xl font-serif mb-4">Dernières Créations</h2>
            <p className="text-brand-ink/60">Une sélection de nos illustrations les plus appréciées.</p>
          </div>
          <div className="flex gap-4" role="group" aria-label="Filtres de catégorie">
            <button className="px-6 py-2 rounded-full border border-brand-ink/10 text-sm font-medium hover:bg-brand-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage">Tout voir</button>
            <button className="px-6 py-2 rounded-full bg-brand-sage/10 text-brand-sage text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage" aria-pressed="true">Religieux</button>
            <button className="px-6 py-2 rounded-full border border-brand-ink/10 text-sm font-medium hover:bg-brand-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage">Variés</button>
          </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 list-none p-0">
          {products.map((product, idx) => (
            <motion.li
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-brand-white mb-6 relative shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500">
                <img 
                  src={product.image} 
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width="400"
                  height="500"
                />
                <button 
                  className="absolute top-4 right-4 p-2 bg-brand-white/80 backdrop-blur-md rounded-full text-brand-ink/40 hover:text-red-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                  aria-label={`Ajouter ${product.name} aux favoris`}
                >
                  <Heart size={18} aria-hidden="true" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-full py-3 bg-brand-ink text-brand-white rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-brand-sage transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage">
                    <Plus size={16} aria-hidden="true" />
                    Ajouter au panier
                  </button>
                </div>
              </div>
              <div className="px-2">
                <p className="text-[10px] uppercase tracking-widest text-brand-sage font-bold mb-1">{product.category}</p>
                <h3 className="font-serif text-xl mb-2 group-hover:text-brand-sage transition-colors">{product.name}</h3>
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="text-brand-ink"><span className="sr-only">Prix : </span>{product.price.eur.toFixed(2)} €</span>
                  <span className="text-brand-ink/40">{product.price.chf.toFixed(2)} CHF</span>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function ProductGrid() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-serif mb-4">Dernières Créations</h2>
            <p className="text-brand-ink/60">Une sélection de nos illustrations les plus appréciées.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full border border-brand-ink/10 text-sm font-medium hover:bg-white transition-colors">Tout voir</button>
            <button className="px-6 py-2 rounded-full bg-brand-sage/10 text-brand-sage text-sm font-medium">Religieux</button>
            <button className="px-6 py-2 rounded-full border border-brand-ink/10 text-sm font-medium hover:bg-white transition-colors">Variés</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white mb-6 relative shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-brand-ink/40 hover:text-red-400 transition-colors">
                  <Heart size={18} />
                </button>
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-full py-3 bg-brand-ink text-white rounded-xl text-sm font-medium flex items-center justify-center gap-2">
                    <Plus size={16} />
                    Ajouter au panier
                  </button>
                </div>
              </div>
              <div className="px-2">
                <p className="text-[10px] uppercase tracking-widest text-brand-sage font-bold mb-1">{product.category}</p>
                <h4 className="font-serif text-xl mb-2 group-hover:text-brand-sage transition-colors">{product.name}</h4>
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="text-brand-ink">{product.price.eur.toFixed(2)} €</span>
                  <span className="text-brand-ink/40">{product.price.chf.toFixed(2)} CHF</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
