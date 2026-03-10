"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Благодарим! Ще се свържем с вас до 24 часа.");
  };

  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Готов ли си да <span className="text-gradient">започнеш</span>?
          </h2>
          <p className="text-muted-foreground text-lg">Изпрати ни запитване и ще се свържем с теб до 24 часа.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Имейл", value: "contact@gweb.bg" },
              { icon: Phone, label: "Телефон", value: "0895739335" },
              { icon: Clock, label: "Работно време", value: "Пон - Пет, 9:00 - 18:00" },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-display font-semibold text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-4">
            {[
              { key: "name" as const, label: "Име", type: "text" },
              { key: "email" as const, label: "Имейл", type: "email" },
              { key: "phone" as const, label: "Телефон", type: "tel" },
            ].map((field) => (
              <div key={field.key}>
                <label className="text-sm font-medium text-foreground mb-1 block">{field.label}</label>
                <input
                  type={field.type}
                  value={form[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            ))}
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Съобщение</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
              />
            </div>
            <Button variant="hero" size="lg" className="w-full" type="submit">
              Изпрати запитване
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
