"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useEffect } from "react";

const plans = [
  {
    name: "Старт",
    desc: "Перфектен за стартиращи бизнеси.",
    price: "500 лв.",
    priceEur: "256 €",
    deposit: "100 лв. / 51 €",
    features: ["до 10 продукта", "Mobile first", "Базово SEO", "Оптимизация на скоростта", "Генериране на политики", "Проследяване на поръчка"],
    popular: false,
  },
  {
    name: "Бизнес",
    desc: "Всичко необходимо за растящ бизнес.",
    price: "1200 лв.",
    priceEur: "614 €",
    deposit: "240 лв. / 123 €",
    features: ["всичко от Старт", "до 50 продукта", "Персонализиран дизайн", "Експертно SEO", "Upsell, Crossell", "Facebook pixel", "Добавяне на ревюта", "Имейл маркетинг"],
    popular: true,
  },
  {
    name: "Компания",
    desc: "Пълноценно решение за бизнеса.",
    price: "2000 лв.",
    priceEur: "1023 €",
    deposit: "400 лв. / 205 €",
    features: ["всичко от Бизнес", "Custom branding", "Неограничени продукти", "Мултивалута", "Custom chat bot", "30 дни безплатна поддръжка", "Седмични отчети"],
    popular: false,
  },
];

const PricingSection = () => {
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
    <section id="plan" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Избери своя <span className="text-gradient">план</span> за успех
          </h2>
          <p className="text-muted-foreground text-lg">Прозрачни цени без скрити такси.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 relative ${
                plan.popular
                  ? "bg-primary text-primary-foreground shadow-xl scale-105"
                  : "glass-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                  Най-избиран
                </span>
              )}
              <h3 className="font-display font-bold text-xl mb-1">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.desc}
              </p>
              <div className="mb-1">
                <span className="text-3xl font-display font-bold">{plan.price}</span>
              </div>
              <p className={`text-sm mb-1 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.priceEur}
              </p>
              <p className={`text-xs mb-6 ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                Капаро от: <strong>{plan.deposit}</strong>
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? "text-accent" : "text-primary"}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "heroOutline" : "hero"}
                className={`w-full ${plan.popular ? "bg-card/90 text-foreground hover:bg-card" : ""}`}
                data-cal-namespace="30min"
                data-cal-link="gweb.bg/30min"
                data-cal-config='{"layout":"month_view"}'
              >
                Избери план
              </Button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
