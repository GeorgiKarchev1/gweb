"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, X, ChevronDown, BarChart2 } from "lucide-react";
import { useEffect, useState } from "react";

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

const comparisonCategories = [
  {
    name: "Основни функции",
    rows: [
      { label: "Брой продукти",             values: ["до 10",  "до 50",  "Неограничени"] },
      { label: "Mobile First",               values: [true,     true,     true] },
      { label: "Базово SEO",                 values: [true,     true,     true] },
      { label: "Оптимизация на скоростта",   values: [true,     true,     true] },
      { label: "Проследяване на поръчка",    values: [true,     true,     true] },
      { label: "Генериране на политики",     values: [true,     true,     true] },
    ],
  },
  {
    name: "Маркетинг",
    rows: [
      { label: "Персонализиран дизайн",      values: [false,    true,     true] },
      { label: "Експертно SEO",              values: [false,    true,     true] },
      { label: "Upsell & Crossell",          values: [false,    true,     true] },
      { label: "Facebook Pixel",             values: [false,    true,     true] },
      { label: "Добавяне на ревюта",         values: [false,    true,     true] },
      { label: "Имейл маркетинг",            values: [false,    true,     true] },
    ],
  },
  {
    name: "Корпоративни",
    rows: [
      { label: "Custom branding",            values: [false,    false,    true] },
      { label: "Мултивалута",                values: [false,    false,    true] },
      { label: "Custom chat bot",            values: [false,    false,    true] },
      { label: "30 дни безплатна поддръжка", values: [false,    false,    true] },
      { label: "Седмични отчети",            values: [false,    false,    true] },
    ],
  },
];

type CellValue = boolean | string;

const Cell = ({ value, isPopular }: { value: CellValue; isPopular: boolean }) => {
  if (typeof value === "string") {
    return (
      <td className={`px-4 py-3.5 text-center text-sm font-semibold ${isPopular ? "text-primary" : "text-foreground"}`}>
        {value}
      </td>
    );
  }
  return (
    <td className="px-4 py-3.5 text-center">
      {value ? (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/15 mx-auto">
          <Check className="w-3.5 h-3.5 text-primary" />
        </span>
      ) : (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted mx-auto">
          <X className="w-3.5 h-3.5 text-muted-foreground/40" />
        </span>
      )}
    </td>
  );
};

const PlanCard = ({ plan, mobile }: { plan: typeof plans[0]; mobile?: boolean }) => (
  <div
    className={`rounded-2xl p-7 relative flex flex-col ${
      mobile ? "snap-center shrink-0 w-[82vw]" : ""
    } ${plan.popular ? "bg-primary text-primary-foreground shadow-xl" : "glass-card"}`}
  >
    {plan.popular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full whitespace-nowrap">
        Най-избиран
      </span>
    )}
    <h3 className="font-display font-bold text-xl mb-1">{plan.name}</h3>
    <p className={`text-sm mb-5 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
      {plan.desc}
    </p>
    <div className="mb-1">
      <span className="text-3xl font-display font-bold">{plan.price}</span>
    </div>
    <p className={`text-sm mb-1 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
      {plan.priceEur}
    </p>
    <p className={`text-xs mb-5 ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
      Капаро от: <strong>{plan.deposit}</strong>
    </p>
    <ul className="space-y-3 mb-7 flex-1">
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
  </div>
);

const PricingSection = () => {
  const [showComparison, setShowComparison] = useState(false);

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

        {/* Heading */}
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

        {/* ── MOBILE: horizontal snap-scroll ── */}
        <div
          className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {/* leading spacer so first card sits centred */}
          <div className="shrink-0 w-[9vw]" />
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="snap-center shrink-0 w-[82vw]"
            >
              <PlanCard plan={plan} mobile />
            </motion.div>
          ))}
          {/* trailing spacer */}
          <div className="shrink-0 w-[9vw]" />
        </div>

        {/* Scroll hint dots — mobile only */}
        <div className="flex justify-center gap-2 mt-3 md:hidden">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`h-1.5 rounded-full ${p.popular ? "w-5 bg-primary" : "w-1.5 bg-border"}`}
            />
          ))}
        </div>

        {/* ── DESKTOP: 3-column grid ── */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={plan.popular ? "md:-mt-4" : ""}
            >
              <PlanCard plan={plan} />
            </motion.div>
          ))}
        </div>

        {/* ── Compare toggle button ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={() => setShowComparison((v) => !v)}
            className="flex items-center gap-2.5 px-6 py-3 rounded-full glass-card hover:glass-card-elevated transition-all duration-300 text-sm font-semibold text-foreground"
          >
            <BarChart2 className="w-4 h-4 text-primary" />
            {showComparison ? "Скрий сравнението" : "Сравни всички планове"}
            <ChevronDown
              className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${showComparison ? "rotate-180" : ""}`}
            />
          </button>
        </motion.div>

        {/* ── Comparison table ── */}
        <AnimatePresence>
          {showComparison && (
            <motion.div
              key="comparison"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div className="mt-8 max-w-5xl mx-auto">
                <div className="overflow-x-auto rounded-2xl glass-card">
                  <table className="w-full min-w-[520px] border-collapse">

                    {/* Header */}
                    <thead>
                      <tr className="border-b border-border/60">
                        <th className="px-6 py-5 text-left w-[40%]">
                          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Функция</span>
                        </th>
                        {plans.map((p) => (
                          <th key={p.name} className="px-4 py-5 text-center w-[20%] relative">
                            {p.popular && (
                              <span className="absolute top-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-accent text-accent-foreground text-[10px] font-bold rounded-full whitespace-nowrap">
                                Най-избиран
                              </span>
                            )}
                            <div className={`font-display font-bold text-base mt-4 ${p.popular ? "text-primary" : "text-foreground"}`}>
                              {p.name}
                            </div>
                            <div className={`text-xs mt-0.5 ${p.popular ? "text-primary/70" : "text-muted-foreground"}`}>
                              {p.price}
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                      {comparisonCategories.map((cat, catIdx) => (
                        <>
                          <tr key={`cat-${catIdx}`} className="bg-secondary/50">
                            <td colSpan={4} className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                              {cat.name}
                            </td>
                          </tr>
                          {cat.rows.map((row) => (
                            <tr
                              key={row.label}
                              className="border-t border-border/40 hover:bg-secondary/30 transition-colors"
                            >
                              <td className="px-6 py-3.5 text-sm text-foreground font-medium">{row.label}</td>
                              {row.values.map((val, planIdx) => (
                                <Cell key={planIdx} value={val} isPopular={plans[planIdx].popular} />
                              ))}
                            </tr>
                          ))}
                        </>
                      ))}
                    </tbody>

                    {/* Footer CTAs */}
                    <tfoot>
                      <tr className="border-t border-border/60">
                        <td className="px-6 py-5" />
                        {plans.map((p) => (
                          <td key={p.name} className="px-4 py-5 text-center">
                            <Button
                              variant={p.popular ? "hero" : "heroOutline"}
                              size="sm"
                              className="w-full text-xs"
                              data-cal-namespace="30min"
                              data-cal-link="gweb.bg/30min"
                              data-cal-config='{"layout":"month_view"}'
                            >
                              Избери
                            </Button>
                          </td>
                        ))}
                      </tr>
                    </tfoot>
                  </table>
                </div>

                {/* Mobile scroll hint */}
                <p className="text-center text-xs text-muted-foreground mt-3 md:hidden">
                  ← Скролирай за да видиш всички планове →
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default PricingSection;
