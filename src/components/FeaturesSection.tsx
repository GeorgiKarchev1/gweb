"use client";

import { motion } from "framer-motion";
import { Package, Smartphone, Search, Shield, Zap } from "lucide-react";
import speedImg from "@/assets/speed.webp";
import poruchkiImg from "@/assets/poruchki.webp";

const MobileVisual = () => (
  <div className="flex items-center justify-center py-10">
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="w-32 h-52 rounded-[22px] border-2 border-primary/35 bg-background/90 shadow-2xl flex flex-col overflow-hidden">
        <div className="h-5 bg-primary/10 flex items-center justify-center shrink-0">
          <div className="w-10 h-1.5 rounded-full bg-primary/30" />
        </div>
        <div className="flex-1 p-2.5 flex flex-col gap-2">
          <div className="h-9 rounded-lg bg-primary/10 flex items-center px-2 gap-2">
            <div className="w-6 h-6 rounded bg-primary/40 shrink-0" />
            <div className="flex flex-col gap-1">
              <div className="w-12 h-1 rounded-full bg-primary/50" />
              <div className="w-8 h-1 rounded-full bg-primary/25" />
            </div>
            <div className="ml-auto text-[9px] font-bold text-primary">89 лв</div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="h-12 rounded-lg bg-primary/10" />
            <div className="h-12 rounded-lg bg-primary/10" />
          </div>
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="h-7 rounded-lg bg-primary flex items-center justify-center shadow-sm"
          >
            <span className="text-[9px] font-bold text-primary-foreground">Купи сега</span>
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ repeat: Infinity, duration: 2.2, delay: 0.5 }}
        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary/40"
      />
    </motion.div>
  </div>
);

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

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* 1. Проследяване — col-span-2, image edge-to-edge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 glass-card rounded-2xl overflow-hidden group hover:glass-card-elevated transition-all duration-500"
          >
            <img
              src={poruchkiImg.src}
              alt="Проследяване на поръчката"
              className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="p-6 flex flex-col gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">Проследяване на поръчката</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Клиентите знаят къде е пратката им във всеки момент.</p>
            </div>
          </motion.div>

          {/* 2. Mobile First — col-span-1, animated visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="glass-card rounded-2xl overflow-hidden group hover:glass-card-elevated transition-all duration-500"
          >
            <MobileVisual />
            <div className="p-6 flex flex-col gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">Mobile First</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Над 70% от клиентите пазаруват през телефон. Ние правим пътя до поръчката мигновен.</p>
            </div>
          </motion.div>

          {/* 3. Светкавична Скорост — col-span-1, image edge-to-edge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="glass-card rounded-2xl overflow-hidden group hover:glass-card-elevated transition-all duration-500"
          >
            <img
              src={speedImg.src}
              alt="Светкавична Скорост"
              className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="p-6 flex flex-col gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">Светкавична Скорост</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Никой не обича да чака. Вашият магазин ще зарежда моментално.</p>
            </div>
          </motion.div>

          {/* 4. SEO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass-card rounded-2xl overflow-hidden group hover:glass-card-elevated transition-all duration-500"
          >
            <div className="h-36 bg-gradient-to-br from-primary/8 to-accent/10 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center shadow-lg"
                >
                  <Search className="w-7 h-7 text-primary" />
                </motion.div>
                <div className="flex gap-1">
                  {[1, 2, 3].map((n) => (
                    <motion.div
                      key={n}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: n * 0.2 }}
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-2">
              <h3 className="font-display font-bold text-lg text-foreground">SEO Оптимизация</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Бъдете пред конкуренцията в Google.</p>
            </div>
          </motion.div>

          {/* 5. GDPR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="glass-card rounded-2xl overflow-hidden group hover:glass-card-elevated transition-all duration-500"
          >
            <div className="h-36 bg-gradient-to-br from-accent/8 to-primary/10 flex items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center shadow-lg"
              >
                <Shield className="w-7 h-7 text-primary" />
              </motion.div>
            </div>
            <div className="p-6 flex flex-col gap-2">
              <h3 className="font-display font-bold text-lg text-foreground">GDPR Защита</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Автоматични политики за съгласие и защита на данни.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
