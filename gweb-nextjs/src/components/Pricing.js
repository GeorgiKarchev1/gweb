"use client";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import styles from "./Pricing.module.css";

const plans = [
    {
        title: "Старт",
        price: "500",
        priceEur: "256",
        deposit: "100",
        depositEur: "51",
        desc: "Перфектен за стартиращи бизнеси.",
        features: ["до 10 продукта", "Mobile first", "Базово SEO", "Оптимизация на скоростта", "Генериране на политики", "Проследяване на поръчка"],
        popular: false,
    },
    {
        title: "Бизнес",
        price: "1200",
        priceEur: "614",
        deposit: "240",
        depositEur: "123",
        desc: "Всичко необходимо за растящ бизнес.",
        features: ["всичко от Старт", "до 50 продукта", "Персонализиран дизайн", "Експертно SEO", "Upsell, Crossell", "Facebook pixel", "Добавяне на ревюта", "Имейл маркетинг"],
        popular: true,
    },
    {
        title: "Компания",
        price: "2000",
        priceEur: "1023",
        deposit: "400",
        depositEur: "205",
        desc: "Пълноценно решение за бизнеса.",
        features: ["всичко от бизнес", "Custom branding", "Неограничени продукти", "Мултивалута", "Custom chat bot", "30 дни безплатна поддръжка", "Изпращане на отчети всяка седмица"],
        popular: false,
    },
];

export default function Pricing() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("init", "30min", { origin: "https://app.cal.eu" });
            cal.ns["30min"]("ui", {
                styles: { branding: { brandColor: "#5e8e3e" } },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    return (
        <section className={styles.section} id="plan">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Избери своя план за успех</h2>
                    <p>Прозрачни цени без скрити такси. Започни както ти е удобно.</p>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan, i) => (
                        <div key={i} className={`${styles.card} ${plan.popular ? styles.popular : ""}`}>
                            {plan.popular && <div className={styles.badge}>Най-избиран</div>}
                            <div className={styles.cardHeader}>
                                <h3>{plan.title}</h3>
                                <p className={styles.planDesc}>{plan.desc}</p>
                                <div className={styles.priceBox}>
                                    <div className={styles.priceBgn}>{plan.price} лв.</div>
                                    <div className={styles.priceEur}>{plan.priceEur} €</div>
                                </div>
                                <p className={styles.deposit}>
                                    Капаро от: <strong>{plan.deposit} лв. / {plan.depositEur} €</strong>
                                </p>
                            </div>
                            <div className={styles.divider} />
                            <ul className={styles.features}>
                                {plan.features.map((f, fi) => (
                                    <li key={fi} className={styles.feature}>
                                        <span className={styles.check}>
                                            <svg viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.cardFooter}>
                                <a
                                    href="#contact"
                                    className={`${styles.pricingBtn} ${plan.popular ? styles.btnPrimary : styles.btnOutline}`}
                                    onClick={(e) => { e.preventDefault(); const el = document.querySelector("#contact"); if (el) { const top = el.getBoundingClientRect().top + window.pageYOffset - 120; window.scrollTo({ top, behavior: "smooth" }); } }}
                                >
                                    Избери план
                                </a>
                                <span className={styles.separator}>или</span>
                                <p
                                    className={styles.consult}
                                    data-cal-namespace="30min"
                                    data-cal-link="gweb.bg/30min"
                                    data-cal-config='{"layout":"month_view"}'
                                    style={{ cursor: "pointer" }}
                                >
                                    📅 Запази безплатен час
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Custom Plan */}
                <div className={styles.customCard}>
                    <div className={styles.customInner}>
                        <div className={styles.customLeft}>
                            <h3>Custom План</h3>
                            <ul className={styles.customFeatures}>
                                <li><svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M20 6L9 17L4 12" stroke="#5e8e3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> Пълен контрол над проекта</li>
                                <li><svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M20 6L9 17L4 12" stroke="#5e8e3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> Избираш какво да включим</li>
                                <li><svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M20 6L9 17L4 12" stroke="#5e8e3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> Плащаш само нужното</li>
                            </ul>
                            <span className={styles.customPrice}>Цена: По договаряне</span>
                            <a href="#contact" className={`${styles.pricingBtn} ${styles.btnPrimary}`} style={{ marginTop: "20px" }} onClick={(e) => { e.preventDefault(); const el = document.querySelector("#contact"); if (el) { const top = el.getBoundingClientRect().top + window.pageYOffset - 120; window.scrollTo({ top, behavior: "smooth" }); } }}>
                                Конфигурирай
                            </a>
                        </div>
                        <div className={styles.customRight}>
                            <div className={styles.customVisual}>
                                <div className={styles.customBadge}>Live калкулатор</div>
                                <h4>Виж цената в реално време</h4>
                                <p>Активирай модулите, които ти трябват и получи точна оферта за секунди.</p>
                                <div className={styles.customBars}>
                                    <div className={`${styles.bar} ${styles.bar1}`} />
                                    <div className={`${styles.bar} ${styles.bar2}`} />
                                    <div className={`${styles.bar} ${styles.bar3}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
