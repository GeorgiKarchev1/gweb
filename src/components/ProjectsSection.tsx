"use client";

import { motion } from "framer-motion";
import shopifyLogo from "@/assets/shopify-logo.png";
import calculatorImg from "@/assets/calculator.webp";
import poddrujkaImg from "@/assets/poddrujka.webp";
import speedImg from "@/assets/speed.webp";

const projects = [
  { name: "Alpha Supplements", desc: "Онлайн магазин за хранителни добавки с премиум дизайн.", tech: "Shopify", img: shopifyLogo, domain: "alphasupplements.bg" },
  { name: "Urban Wear", desc: "Модерен магазин за градска мода с фокус върху UX.", tech: "Custom Code", img: calculatorImg, domain: "urbanwear.bg" },
  { name: "Coffee Shop", desc: "Стилен магазин с кафе аксесоари и артикули.", tech: "Shopify", img: poddrujkaImg, domain: "coffeeshop.bg" },
  { name: "Fitness Pro", desc: "Магазин за фитнес оборудване и екипировка.", tech: "Shopify", img: speedImg, domain: "fitnesspro.bg" },
];

const ProjectsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl font-display font-bold text-foreground text-center mb-4"
        >
          Избрани <span className="text-gradient">проекти</span>
        </motion.h2>
        <p className="text-muted-foreground text-center text-lg mb-16">
          Виж как трансформираме идеите в печеливши бизнеси.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover:glass-card-elevated transition-all duration-500"
            >
              <div className="relative h-40 bg-secondary flex items-center justify-center overflow-hidden">
                <img src={p.img.src} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded-md bg-card/80 backdrop-blur text-foreground">
                  {p.domain}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-foreground mb-1">{p.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{p.desc}</p>
                <span className="text-xs font-medium text-primary">Изграден с: {p.tech}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
