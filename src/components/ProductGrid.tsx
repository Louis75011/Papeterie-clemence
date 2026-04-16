import { motion, AnimatePresence } from "motion/react";
import { Heart, Plus } from "lucide-react";
import { cn } from "@/src/lib/utils";
import type { ActiveCategory } from "../App";

const products = [
  // — Religieux & Catholique —
  {
    id: 1,
    name: "Souvenir de ma Première Communion",
    category: "Religieux" as ActiveCategory,
    price: { eur: 4.50, chf: 5.00 },
    image: "/images/illust-communion-D2Z8td6V.png",
    alt: "Illustration communion — calice et raisins aquarelle",
  },
  {
    id: 2,
    name: "Souvenir de mon Baptême",
    category: "Religieux" as ActiveCategory,
    price: { eur: 4.50, chf: 5.00 },
    image: "/images/bapteme.jpg",
    alt: "Illustration baptême aquarelle",
  },
  {
    id: 3,
    name: "Confirmation — Colombe & Flamme",
    category: "Religieux" as ActiveCategory,
    price: { eur: 4.50, chf: 5.00 },
    image: "/images/illust-confirmation-C_g2TXTw.png",
    alt: "Illustration confirmation catholique aquarelle",
  },
  {
    id: 4,
    name: "Souvenir de Baptême — Variante 2",
    category: "Religieux" as ActiveCategory,
    price: { eur: 4.50, chf: 5.00 },
    image: "/images/illust-bapteme-2-ERDYIm.png",
    alt: "Illustration de baptême variante 2 aquarelle",
  },
  {
    id: 5,
    name: "Images Pieuses — Collection",
    category: "Religieux" as ActiveCategory,
    price: { eur: 5.00, chf: 5.50 },
    image: "/images/illust-pieuses-CEIDOjSx.png",
    alt: "Collection images pieuses aquarelle — roses et Vierge",
  },
  // — Designs Variés & Floraux —
  {
    id: 6,
    name: "Marque-pages Fleuris",
    category: "Variés" as ActiveCategory,
    price: { eur: 3.50, chf: 4.00 },
    image: "/images/illust-marque-pages-fleurs-DnHZTXzw.png",
    alt: "Marque-pages illustrés fleurs aquarelle",
  },
  {
    id: 7,
    name: "Vœux en Fleurs",
    category: "Variés" as ActiveCategory,
    price: { eur: 4.00, chf: 4.50 },
    image: "/images/illust-voeux-fleurs-D_MCAupn.png",
    alt: "Carte de vœux florale aquarelle — couronnes de fleurs",
  },
  {
    id: 8,
    name: "Affiche Florale",
    category: "Variés" as ActiveCategory,
    price: { eur: 6.00, chf: 6.50 },
    image: "/images/illust-affiches-fleurs-sgkePPU3.png",
    alt: "Affiche illustrée fleurs aquarelle",
  },
  {
    id: 9,
    name: "Papeterie Enveloppe & Fleurs",
    category: "Variés" as ActiveCategory,
    price: { eur: 5.00, chf: 5.50 },
    image: "/images/illust-papeterie-CZwG-5nb.png",
    alt: "Set de papeterie — enveloppe et motifs floraux",
  },
  {
    id: 10,
    name: "Collection Complète — Toutes images pieuses",
    category: "Religieux" as ActiveCategory,
    price: { eur: 12.00, chf: 13.00 },
    image: "/images/ensemble-promo.png",
    alt: "Collection complète d'illustrations pieuses aquarelle",
  },
];

const FILTERS: { label: string; value: ActiveCategory }[] = [
  { label: "Tout voir", value: "Tout" },
  { label: "Religieux & Catholique", value: "Religieux" },
  { label: "Floraux & Variés", value: "Variés" },
];

interface ProductGridProps {
  activeCategory: ActiveCategory;
  onCategoryChange: (cat: ActiveCategory) => void;
}

export default function ProductGrid({ activeCategory, onCategoryChange }: ProductGridProps) {
  const filtered = activeCategory === "Tout"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const heading =
    activeCategory === "Religieux" ? "Collection Religieuse & Catholique"
      : activeCategory === "Variés" ? "Collection Floraux & Variés"
        : "Toutes les Créations";

  return (
    <section id="grille-produits" className="py-24 bg-brand-cream/40" aria-labelledby="creations-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header + filtres */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h2
              key={heading}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              id="creations-heading"
              className="text-4xl font-serif mb-4"
            >
              {heading}
            </motion.h2>
            <p className="text-brand-ink/60">
              {filtered.length} illustration{filtered.length > 1 ? "s" : ""} disponible{filtered.length > 1 ? "s" : ""}
            </p>
          </div>

          <div className="flex flex-wrap gap-3" role="group" aria-label="Filtres de catégorie">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => onCategoryChange(f.value)}
                aria-pressed={activeCategory === f.value}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage",
                  activeCategory === f.value
                    ? "bg-brand-sage text-white shadow-md"
                    : "border border-brand-ink/10 hover:bg-brand-white"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bannière de catégorie */}
        <AnimatePresence mode="wait">
          {activeCategory !== "Tout" && (
            <motion.div
              key={activeCategory + "-banner"}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-10"
            >
              <div className={cn(
                "rounded-2xl p-6 flex items-center gap-4",
                activeCategory === "Religieux" ? "bg-brand-sage/10" : "bg-brand-cream/80"
              )}>
                <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={activeCategory === "Religieux" ? "/images/illust-pieuses-CEIDOjSx.png" : "/images/illust-marque-pages-fleurs-DnHZTXzw.png"}
                    alt=""
                    className="w-full h-full object-cover"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-sage mb-1">
                    {activeCategory === "Religieux" ? "Foi & Sacrement" : "Floral & Poétique"}
                  </p>
                  <p className="text-sm text-brand-ink/70">
                    {activeCategory === "Religieux"
                      ? "Baptêmes, communions, confirmations et images de dévotion — illustrés à l'aquarelle."
                      : "Papeterie florale, marque-pages, affiches et vœux pour toutes les occasions."}
                  </p>
                </div>
                <button
                  onClick={() => onCategoryChange("Tout")}
                  className="ml-auto text-xs text-brand-ink/40 hover:text-brand-ink transition-colors underline underline-offset-2"
                >
                  Voir tout
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grille produits */}
        <motion.ul
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 list-none p-0"
        >
          {filtered.map((product, idx) => (
            <motion.li
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
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
                    Commander
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
        </motion.ul>
      </div>
    </section>
  );
}


