"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
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
              { icon: Mail, label: "Имейл", value: "help@gweb.bg" },
              { icon: Phone, label: "Телефон", value: "0895739335" },
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
              { key: "name" as const, label: "Име", type: "text", required: true },
              { key: "email" as const, label: "Имейл", type: "email", required: true },
              { key: "phone" as const, label: "Телефон", type: "tel", required: false },
            ].map((field) => (
              <div key={field.key}>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  {field.label}{field.required && <span className="text-primary ml-0.5">*</span>}
                </label>
                <input
                  type={field.type}
                  value={form[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  required={field.required}
                  disabled={status === "loading" || status === "success"}
                />
              </div>
            ))}
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Съобщение<span className="text-primary ml-0.5">*</span>
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                required
                disabled={status === "loading" || status === "success"}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
              />
            </div>

            {/* Feedback messages */}
            {status === "success" && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 text-primary">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <p className="text-sm font-medium">Запитването е изпратено! Ще се свържем с теб до 24 часа.</p>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-destructive/10 text-destructive">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p className="text-sm font-medium">Нещо се обърка. Опитай отново или се свържи директно с нас.</p>
              </div>
            )}

            <Button
              variant="hero"
              size="lg"
              className="w-full flex items-center gap-2"
              type="submit"
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
              {status === "loading" ? "Изпращане..." : status === "success" ? "Изпратено!" : "Изпрати запитване"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
