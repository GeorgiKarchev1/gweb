"use client";
import { useEffect, useRef } from "react";
import styles from "./Timeline.module.css";

const steps = [
    { num: "01", title: "Избери план", desc: "Обсъждаме целите, нишата и конкуренцията.", icon: "👥" },
    { num: "02", title: "Капаро & Старт", desc: "Финализираме детайлите и започваме работа.", icon: "💳" },
    { num: "03", title: "Изработка", desc: "Дизайн, разработка и настройки на магазина.", icon: "🔧" },
    { num: "04", title: "Ready to Sell", desc: "Тестваме, пускаме и оптимизираме за продажби.", icon: "🚀" },
];

export default function Timeline() {
    const trackRef = useRef(null);

    useEffect(() => {
        const update = () => {
            if (!trackRef.current) return;
            const rows = trackRef.current.querySelectorAll(`.${styles.row}`);
            const trigger = window.innerHeight * 0.65;
            rows.forEach((row) => {
                const rect = row.getBoundingClientRect();
                if (rect.top + 24 < trigger) row.classList.add(styles.active);
                else row.classList.remove(styles.active);
            });
        };
        window.addEventListener("scroll", update, { passive: true });
        update();
        return () => window.removeEventListener("scroll", update);
    }, []);

    return (
        <section className={styles.section} id="process">
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.sticky}>
                        <h2>
                            Как изграждаме<br className={styles.mobBr} /> успешни уебсайтове
                        </h2>
                        <p>Процесът ни е оптимизиран за скорост, качество и резултати.</p>
                        <a href="#contact" className={styles.btn} onClick={(e) => { e.preventDefault(); const el = document.querySelector("#contact"); if (el) { const top = el.getBoundingClientRect().top + window.pageYOffset - 120; window.scrollTo({ top, behavior: "smooth" }); } }}>
                            Започни проекта →
                        </a>
                    </div>
                </div>

                <div className={styles.right} ref={trackRef}>
                    {steps.map((step, i) => (
                        <div key={i} className={`${styles.row} ${i === steps.length - 1 ? styles.isLast : ""}`}>
                            <div className={styles.markerCol}>
                                <div className={styles.marker}>{step.num}</div>
                                {i < steps.length - 1 && <div className={styles.connector} />}
                            </div>
                            <div className={styles.card}>
                                <div className={styles.cardContent}>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                                <div className={styles.cardIcon}>{step.icon}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
