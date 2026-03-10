"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import desktopBg from "@/assets/desktopbackground.webp";
import mobileBg from "@/assets/mobileimg.webp";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Desktop background */}
      <img
        src={desktopBg.src}
        alt="Gweb hero background"
        className="absolute inset-0 w-full h-full object-cover object-bottom hidden md:block"
      />
      {/* Mobile background */}
      <img
        src={mobileBg.src}
        alt="Gweb hero background mobile"
        className="absolute inset-0 w-full h-full object-cover object-bottom md:hidden"
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6">
            Създай своя{" "}
            <span className="text-gradient">онлайн магазин</span>{" "}
            който продава
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body">
            Професионално изграждане на Shopify магазини с персонализиран дизайн, SEO оптимизация и бърза доставка за 3-7 дни.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#plan">Започни сега</a>
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#services">Разгледай услугите</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
