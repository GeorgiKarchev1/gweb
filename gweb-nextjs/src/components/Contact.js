"use client";
import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you'd send this to an API
        console.log("Form submitted:", form);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setForm({ name: "", email: "", phone: "", message: "" });
        }, 3000);
    };

    return (
        <>
            <section className={styles.section} id="contact">
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.left}>
                            <h2>Готов ли си да започнеш?</h2>
                            <p>Изпрати ни запитване и ще се свържем с теб до 24 часа.</p>
                            <div className={styles.info}>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>📧</span>
                                    <div>
                                        <strong>Имейл</strong>
                                        <br /><span>contact@gweb.bg</span>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>📱</span>
                                    <div>
                                        <strong>Телефон</strong>
                                        <br /><span>0895739335</span>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>⏰</span>
                                    <div>
                                        <strong>Работно време</strong>
                                        <br /><span>Пон - Пет, 9:00 - 18:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.right}>
                            {submitted ? (
                                <div className={styles.success}>
                                    <span className={styles.successIcon}>✅</span>
                                    <h3>Запитването е изпратено!</h3>
                                    <p>Ще се свържем с вас в рамките на 24 часа.</p>
                                </div>
                            ) : (
                                <form className={styles.form} onSubmit={handleSubmit}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="contact-name">Име</label>
                                            <input type="text" id="contact-name" name="name" value={form.name} onChange={handleChange} placeholder="Вашето име" required />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="contact-email">Имейл</label>
                                            <input type="email" id="contact-email" name="email" value={form.email} onChange={handleChange} placeholder="email@example.com" required />
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="contact-phone">Телефон</label>
                                        <input type="tel" id="contact-phone" name="phone" value={form.phone} onChange={handleChange} placeholder="0895739335" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="contact-message">Съобщение</label>
                                        <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} placeholder="Разкажете ни за вашия проект..." rows="4" required />
                                    </div>
                                    <button type="submit" className={styles.submitBtn}>
                                        Изпрати запитване →
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
