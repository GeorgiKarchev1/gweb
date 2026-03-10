"use client";

import { motion } from "framer-motion";

const projects = [
  { name: "The Agency Course", desc: "Платформа за обучение и развитие на дигитални агенции.", tech: "Custom Code", imgSrc: "/imgs/corka.png", domain: "theagencycourse.bg", url: "https://theagencycourse.bg" },
  { name: "AI Marketing", desc: "Иновативна платформа за маркетинг с изкуствен интелект.", tech: "Custom Code", imgSrc: "/imgs/aimarketing.png", domain: "aimarketing.bg", url: "https://aimarketing.bg" },
  { name: "ClaimRadar", desc: "Намери непотърсени пари и активи по целия свят.", tech: "Custom Code", imgSrc: "/imgs/claimradar.png", domain: "claimradar.net", url: "https://claimradar.net" },
  { name: "KR Shoes Store", desc: "Онлайн магазин за обувки с модерен дизайн.", tech: "Custom Code", imgSrc: "/imgs/krshoes.png", domain: "krshoesstore.com", url: "https://krshoesstore.com" },
  { name: "InPlay Gear", desc: "Иновативен EVA протектор за футболисти.", tech: "Custom Code", imgSrc: "/imgs/inplaygear.png", domain: "inplaygear.com", url: "https://inplaygear.com" },
  { name: "Готов за час", desc: "Онлайн платформа за бързи услуги.", tech: "Custom Code", imgSrc: "/imgs/gotovzachas.png", domain: "gotovzachas.com", url: "https://gotovzachas.com" },
  { name: "Editing.bg", desc: "Професионално видео монтиране за завладяващо съдържание.", tech: "Custom Code", imgSrc: "/imgs/editingbg.png", domain: "editing.bg", url: "https://editing.bg" },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover:glass-card-elevated transition-all duration-500"
            >
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img src={p.imgSrc} alt={p.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-foreground mb-1">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{p.desc}</p>
                  <span className="text-xs font-medium text-primary">Изграден с: {p.tech}</span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
