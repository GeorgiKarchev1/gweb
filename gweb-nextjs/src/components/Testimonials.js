"use client";
import styles from "./Testimonials.module.css";

const testimonials = [
    { name: "Иван Петров", text: "Изключителен професионализъм! Магазинът ми започна да продава още на първата седмица.", stars: 5 },
    { name: "Мария Иванова", text: "Дизайнът е уникален и много удобен за клиентите. Горещо препоръчвам услугите им.", stars: 5 },
];

export default function Testimonials() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.textBlock}>
                    <h2>Вижте какво казват клиентите</h2>
                    <p>Реални отзиви от хора, които вече развиват бизнеса си с нас.</p>
                </div>

                <div className={styles.videoCard}>
                    <div className={styles.videoPlaceholder}>
                        <span>📹 Видео ревюта скоро</span>
                    </div>
                </div>

                <div className={styles.testimColumn}>
                    {testimonials.map((t, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.stars}>{"★".repeat(t.stars)}</div>
                            <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>{t.name[0]}</div>
                                <span>{t.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
