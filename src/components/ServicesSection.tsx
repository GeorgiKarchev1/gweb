"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import calculatorImg from "@/assets/calculator.webp";
import redesignImg from "@/assets/redesign.webp";
import poddrujkaImg from "@/assets/poddrujka.webp";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Нов Shopify Магазин",
    desc: "Пълно изграждане на онлайн магазин от нулата. Получаваш работещ бизнес, готов за продажби до 7 дни.",
    tags: ["Готов до 7 дни", "SEO Оптимизация"],
    cta: "Стартирай Сега",
    img: calculatorImg,
    calNamespace: "30min",
    calLink: "gweb.bg/30min",
    number: "01",
  },
  {
    title: "Редизайн & Одит",
    desc: "Модернизирай визията си, за да вдъхва повече доверие и увеличи конверсиите.",
    tags: ["Premium UI", "UX Одит"],
    cta: "Запази Час",
    img: redesignImg,
    calNamespace: "redesign",
    calLink: "gweb.bg/redesign",
    number: "02",
  },
  {
    title: "Месечна Поддръжка",
    desc: "Ние се грижим за техническите ъпдейти и сигурността на твоя магазин.",
    tags: ["Speed Boost", "24/7 Мониторинг"],
    cta: "Свържи се с нас",
    img: poddrujkaImg,
    calNamespace: "poddrujka",
    calLink: "gweb.bg/poddrujka",
    number: "03",
  },
];

const ServicesSection = () => {
  useEffect(() => {
    if (document.getElementById("cal-script")) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function (...args: any[]) {
        const cal = C.Cal;
        if (!cal.loaded) {
          cal.ns = {}; cal.q = cal.q || [];
          const s = d.createElement("script");
          s.id = "cal-script";
          s.src = A;
          d.head.appendChild(s);
          cal.loaded = true;
        }
        if (args[0] === L) {
          const api: any = function () { p(api, arguments); };
          const ns = args[1];
          api.q = api.q || [];
          if (typeof ns === "string") {
            cal.ns[ns] = cal.ns[ns] || api;
            p(cal.ns[ns], args);
            p(cal, ["initNamespace", ns]);
          } else p(cal, args);
          return;
        }
        p(cal, args);
      };
    })(window, "https://app.cal.eu/embed/embed.js", "init");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Cal = (window as any).Cal;
    Cal("init", "30min", { origin: "https://cal.eu" });
    Cal("init", "redesign", { origin: "https://cal.eu" });
    Cal("init", "poddrujka", { origin: "https://cal.eu" });
  }, []);

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

        <div className="flex flex-col gap-5 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:glass-card-elevated transition-all duration-500"
            >
              {/* Image — fully contained, no cropping */}
              <div className="relative md:w-72 shrink-0 bg-secondary/50 flex items-center justify-center p-6 min-h-[220px]">
                <span className="absolute top-3 left-4 font-display font-bold text-4xl text-foreground/[0.06] select-none leading-none">
                  {s.number}
                </span>
                <img
                  src={s.img.src}
                  alt={s.title}
                  className="w-full h-auto max-h-48 object-contain group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>

              {/* Vertical divider (desktop only) */}
              <div className="hidden md:block w-px bg-border/60 my-6 shrink-0" />

              {/* Content */}
              <div className="flex-1 p-8 flex flex-col justify-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-display font-bold text-2xl text-foreground leading-tight">
                  {s.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>

                <div className="pt-1">
                  <Button
                    variant="hero"
                    size="sm"
                    className="flex items-center gap-2"
                    data-cal-namespace={s.calNamespace}
                    data-cal-link={s.calLink}
                    data-cal-config='{"layout":"month_view"}'
                  >
                    {s.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
