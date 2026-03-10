"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

const projects = [
    { name: "Alpha Supplements", desc: "Онлайн магазин за хранителни добавки с премиум дизайн.", domain: "alphasupplements.bg", tech: "shopify", img: "/imgs/Untitled design.png" },
    { name: "Urban Wear", desc: "Модерен магазин за градска мода с фокус върху UX.", domain: "urbanwear.bg", tech: "custom", img: "/imgs/calculator.webp" },
    { name: "Coffee Shop", desc: "Стилен магазин с кафе аксесоари и артикули.", domain: "coffeeshop.bg", tech: "shopify", img: "/imgs/poddrujka.webp" },
    { name: "Fitness Pro", desc: "Магазин за фитнес оборудване и екипировка.", domain: "fitnesspro.bg", tech: "shopify", img: "/imgs/speed.webp" },
];

export default function Projects() {
    const [visibleCount, setVisibleCount] = useState(4);
    const showAll = visibleCount >= projects.length;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Избрани проекти</h2>
                    <p>Виж как трансформираме идеите в печеливши бизнеси.</p>
                </div>

                <div className={styles.grid}>
                    {projects.slice(0, visibleCount).map((p, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.visual}>
                                <div className={styles.browser}>
                                    <div className={styles.browserBar}>
                                        <span className={`${styles.dot} ${styles.red}`} />
                                        <span className={`${styles.dot} ${styles.yellow}`} />
                                        <span className={`${styles.dot} ${styles.green}`} />
                                        <div className={styles.address}>{p.domain}</div>
                                    </div>
                                    <div className={styles.browserContent}>
                                        <Image src={p.img} alt={p.name} width={500} height={400} className={styles.screenshot} loading="lazy" />
                                        <div className={styles.viewOverlay}>
                                            <span className={styles.viewBtn}>Виж на живо ↗</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <h3>{p.name}</h3>
                                <p className={styles.desc}>{p.desc}</p>
                                <div className={styles.techRow}>
                                    <span className={styles.techLabel}>Изграден с:</span>
                                    <span className={`${styles.techBadge} ${p.tech === "shopify" ? styles.shopify : styles.custom}`}>
                                        {p.tech === "shopify" ? "Shopify" : "Custom Code"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {projects.length > 4 && (
                    <div className={styles.footer}>
                        <button className={styles.showMore} onClick={() => setVisibleCount(showAll ? 4 : projects.length)}>
                            {showAll ? "Покажи по-малко" : "Покажи още"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
