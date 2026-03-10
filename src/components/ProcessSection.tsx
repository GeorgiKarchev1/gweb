"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Избери план", desc: "Обсъждаме целите, нишата и конкуренцията.", icon: "👥" },
  { num: "02", title: "Капаро & Старт", desc: "Финализираме детайлите и започваме работа.", icon: "💳" },
  { num: "03", title: "Изработка", desc: "Дизайн, разработка и настройки на магазина.", icon: "🔧" },
  { num: "04", title: "Ready to Sell", desc: "Тестваме, пускаме и оптимизираме за продажби.", icon: "🚀" },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-4"
            >
              Как изграждаме{" "}
              <span className="text-gradient">успешни</span> уебсайтове
            </motion.h2>
            <p className="text-muted-foreground text-lg mb-8">
              Процесът ни е оптимизиран за скорост, качество и резултати.
            </p>
            <a href="#contact" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
              Започни проекта →
            </a>
          </div>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 flex items-center gap-6 hover:glass-card-elevated transition-all duration-300"
              >
                <span className="text-sm font-display font-bold text-primary bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                  {step.num}
                </span>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
                <span className="text-2xl">{step.icon}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
