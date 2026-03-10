"use client";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import Image from "next/image";
import styles from "./Services.module.css";

const services = [
    {
        title: "Нов Shopify Магазин",
        desc: "Пълно изграждане на онлайн магазин от нулата. Получаваш работещ бизнес, готов за продажби до 7 дни.",
        tags: ["Готов до 7 дни", "SEO Оптимизация"],
        btn: "Стартирай Сега",
        href: "#plan",
        img: "/imgs/calculator.webp",
        wide: true,
    },
    {
        title: "Редизайн & Одит",
        desc: "Модернизирай визията си, за да вдъхва повече доверие.",
        tags: ["Premium UI", "UX Одит"],
        btn: "Запази Час",
        href: "#contact",
        calLink: "gweb.bg/poddrujka",
        img: "/imgs/redesign.webp",
    },
    {
        title: "Месечна Поддръжка",
        desc: "Ние се грижим за техническите ъпдейти и сигурността.",
        tags: ["Speed Boost", "24/7 Мониторинг"],
        btn: "Свържи се с нас",
        href: "#contact",
        calLink: "gweb.bg/poddrujka",
        img: "/imgs/poddrujka.webp",
    },
];

export default function Services() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("init", "poddrujka", { origin: "https://app.cal.eu" });
            cal.ns.poddrujka("ui", {
                styles: { branding: { brandColor: "#5e8e3e" } },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    return (
        <section className={styles.section} id="services">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Нашите Услуги</h2>
                </div>

                <div className={styles.grid}>
                    {services.map((s, i) => (
                        <div key={i} className={`${styles.card} ${s.wide ? styles.cardWide : ""}`}>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{s.title}</h3>
                                <p className={styles.cardDesc}>{s.desc}</p>
                                <div className={styles.tags}>
                                    {s.tags.map((t) => (
                                        <span key={t} className={styles.tag}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#446e48" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                {s.calLink ? (
                                    <div
                                        className={styles.cardBtn}
                                        data-cal-namespace="poddrujka"
                                        data-cal-link={s.calLink}
                                        data-cal-config='{"layout":"month_view"}'
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {s.btn}
                                    </div>
                                ) : (
                                    <a href={s.href} className={styles.cardBtn} onClick={(e) => { e.preventDefault(); const el = document.querySelector(s.href); if (el) { const top = el.getBoundingClientRect().top + window.pageYOffset - 120; window.scrollTo({ top, behavior: "smooth" }); } }}>
                                        {s.btn}
                                    </a>
                                )}
                            </div>
                            <div className={styles.cardVisual}>
                                {s.img && (
                                    <Image
                                        src={s.img}
                                        alt={s.title}
                                        width={400}
                                        height={300}
                                        className={styles.cardImg}
                                        loading="lazy"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
