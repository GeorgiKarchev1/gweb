"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import calculatorImg from "@/assets/calculator.webp";
import redesignImg from "@/assets/redesign.webp";
import poddrujkaImg from "@/assets/poddrujka.webp";

const services = [
  {
    title: "Нов Shopify Магазин",
    desc: "Пълно изграждане на онлайн магазин от нулата. Получаваш работещ бизнес, готов за продажби до 7 дни.",
    tags: ["Готов до 7 дни", "SEO Оптимизация"],
    cta: "Стартирай Сега",
    img: calculatorImg,
  },
  {
    title: "Редизайн & Одит",
    desc: "Модернизирай визията си, за да вдъхва повече доверие.",
    tags: ["Premium UI", "UX Одит"],
    cta: "Запази Час",
    img: redesignImg,
  },
  {
    title: "Месечна Поддръжка",
    desc: "Ние се грижим за техническите ъпдейти и сигурността.",
    tags: ["Speed Boost", "24/7 Мониторинг"],
    cta: "Свържи се с нас",
    img: poddrujkaImg,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl font-display font-bold text-foreground text-center mb-16"
        >
          Нашите <span className="text-gradient">Услуги</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden group hover:glass-card-elevated transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.img.src}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {s.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="hero" size="sm" className="w-full" asChild>
                  <a href="#contact">{s.cta}</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
