import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

const categories = [
  {
    id: "religieux",
    title: "Religieux & Catholique",
    description: "Saints, sacrements et souvenirs de foi pour accompagner les moments de grâce.",
    image: "/images/illust-pieuses-CEIDOjSx.png",
    color: "bg-brand-sage/10",
    accent: "group-hover:bg-brand-sage/20",
  },
  {
    id: "varies",
    title: "Designs Variés",
    description: "Illustrations poétiques et motifs délicats pour toutes les occasions de la vie.",
    image: "/images/illust-marque-pages-fleurs-DnHZTXzw.png",
    color: "bg-brand-cream/60",
    accent: "group-hover:bg-brand-peach/20",
  }
];

export default function Categories() {
  return (
    <section id="catalogue" className="py-24 bg-brand-white" aria-labelledby="categories-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="categories-heading" className="text-4xl lg:text-5xl font-serif mb-6">Explorez nos univers</h2>
          <p className="text-brand-ink/60">
            Deux collections distinctes pour répondre à vos besoins, que ce soit pour une célébration religieuse ou un message d'amitié.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={cn(
                "group relative overflow-hidden rounded-[2.5rem] p-10 flex flex-col justify-end min-h-[500px] transition-colors duration-500",
                cat.color,
                cat.accent
              )}
            >
              <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <img 
                  src={cat.image} 
                  alt=""
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-serif mb-4">{cat.title}</h3>
                <p className="text-brand-ink/70 mb-8 max-w-sm">{cat.description}</p>
                <a 
                  href={`#${cat.id}`}
                  className="inline-block px-6 py-3 bg-brand-ink text-brand-white rounded-full text-sm font-medium hover:bg-brand-sage transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage"
                >
                  Voir la collection
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
