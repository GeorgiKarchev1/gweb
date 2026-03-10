"use client";

import { motion } from "framer-motion";
import { Package, Smartphone, Search, Shield, Zap } from "lucide-react";
import speedImg from "@/assets/speed.webp";
import poruchkiImg from "@/assets/poruchki.webp";

const TrackingVisual = () => (
  <div className="relative h-44 bg-gradient-to-br from-primary/5 to-primary/15 flex items-center justify-center overflow-hidden">
    <div className="flex items-center px-4">
      {["Поръчано", "Обработва\nсе", "Изпратено", "Доставено"].map((step, i) => (
        <div key={step} className="flex items-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-1.5"
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shadow-md ${
                i < 3 ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary border-2 border-primary/40"
              }`}
            >
              {i < 3 ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            <span className="text-[9px] text-muted-foreground text-center w-14 leading-tight whitespace-pre-line">{step}</span>
          </motion.div>
          {i < 3 && (
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: i * 0.2 + 0.15, duration: 0.3 }}
              viewport={{ once: true }}
              style={{ transformOrigin: "left" }}
              className={`h-0.5 w-5 mx-1 mb-5 rounded-full ${i < 2 ? "bg-primary" : "bg-primary/25"}`}
            />
          )}
        </div>
      ))}
    </div>
  </div>
);

const MobileVisual = () => (
  <div className="relative h-44 bg-gradient-to-br from-primary/5 to-primary/15 flex items-center justify-center overflow-hidden">
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="w-28 h-36 rounded-[18px] border-2 border-primary/35 bg-background/90 shadow-xl flex flex-col overflow-hidden">
        {/* notch */}
        <div className="h-4 bg-primary/10 flex items-center justify-center shrink-0">
          <div className="w-8 h-1.5 rounded-full bg-primary/30" />
        </div>
        {/* content */}
        <div className="flex-1 p-2 flex flex-col gap-1.5">
          {/* product card */}
          <div className="h-8 rounded-lg bg-primary/10 flex items-center px-2 gap-1.5">
            <div className="w-5 h-5 rounded bg-primary/40 shrink-0" />
            <div className="flex flex-col gap-0.5">
              <div className="w-10 h-1 rounded-full bg-primary/50" />
              <div className="w-7 h-1 rounded-full bg-primary/25" />
            </div>
            <div className="ml-auto text-[8px] font-bold text-primary">89 лв</div>
          </div>
          {/* grid */}
          <div className="grid grid-cols-2 gap-1">
            <div className="h-10 rounded-lg bg-primary/10" />
            <div className="h-10 rounded-lg bg-primary/10" />
          </div>
          {/* CTA */}
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="h-6 rounded-lg bg-primary flex items-center justify-center shadow-sm"
          >
            <span className="text-[8px] font-bold text-primary-foreground">Купи сега</span>
          </motion.div>
        </div>
      </div>
    </motion.div>

    {/* floating ping */}
    <motion.div
      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
      transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
      className="absolute top-5 right-10 w-6 h-6 rounded-full bg-primary/30"
    />
  </div>
);

const SpeedVisual = () => (
  <div className="relative h-44 bg-gradient-to-br from-primary/5 to-primary/15 flex items-center justify-center overflow-hidden px-8">
    <div className="w-full flex flex-col gap-3.5">
      {[
        { label: "Performance", value: 98, delay: 0 },
        { label: "Speed Index", value: 95, delay: 0.15 },
        { label: "LCP", value: 92, delay: 0.3 },
      ].map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <span className="text-[10px] text-muted-foreground w-20 shrink-0">{item.label}</span>
          <div className="flex-1 h-2 rounded-full bg-primary/15 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item.value}%` }}
              transition={{ delay: item.delay, duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-full rounded-full bg-primary"
            />
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: item.delay + 0.7 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold text-primary w-6 text-right"
          >
            {item.value}
          </motion.span>
        </div>
      ))}
      <div className="flex justify-end mt-1">
        <span className="text-[9px] text-muted-foreground/60">Google PageSpeed Insights</span>
      </div>
    </div>
  </div>
);

const features = [
  {
    icon: Package,
    title: "Проследяване на поръчката",
    desc: "Клиентите знаят къде е пратката им във всеки момент.",
    img: poruchkiImg,
    Visual: null,
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    desc: "Над 70% от клиентите пазаруват през телефон. Ние правим пътя до поръчката мигновен.",
    img: null,
    Visual: MobileVisual,
  },
  {
    icon: Zap,
    title: "Светкавична Скорост",
    desc: "Никой не обича да чака. Вашият магазин ще зарежда моментално.",
    img: speedImg,
    Visual: null,
  },
];

const smallFeatures = [
  { icon: Search, title: "SEO Оптимизация", desc: "Бъдете пред конкуренцията в Google." },
  { icon: Shield, title: "GDPR Защита", desc: "Автоматични политики за съгласие и защита на данни." },
];

const FeaturesSection = () => {
  return (
    <section id="why" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Технологично <span className="text-gradient">Превъзходство</span>
          </h2>
          <p className="text-muted-foreground text-lg">Всеки детайл е проектиран за максимална конверсия.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover:glass-card-elevated transition-all duration-500"
            >
              {f.img ? (
                <div className="relative h-44 overflow-hidden">
                  <img src={f.img.src} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ) : f.Visual ? (
                <f.Visual />
              ) : null}
              <div className="p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {smallFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
