"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Features.module.css";

export default function Features() {
    const typingRef = useRef(null);

    useEffect(() => {
        const words = ["Номер едно", "Топ позиция", "Твоят бизнес"];
        let wordIndex = 0, charIndex = 0, isDeleting = false;
        const el = typingRef.current;
        if (!el) return;

        function type() {
            const word = words[wordIndex];
            if (isDeleting) {
                el.textContent = word.substring(0, charIndex - 1);
                charIndex--;
            } else {
                el.textContent = word.substring(0, charIndex + 1);
                charIndex++;
            }
            if (!isDeleting && charIndex === word.length) {
                isDeleting = true;
                setTimeout(type, 1500);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 50 : 100);
            }
        }
        type();
    }, []);

    return (
        <section className={styles.section} id="why-gweb">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Технологично Превъзходство</h2>
                    <p>Всеки детайл е проектиран за максимална конверсия.</p>
                </div>

                <div className={styles.grid}>
                    {/* Tracking */}
                    <div className={`${styles.box} ${styles.boxTracking}`}>
                        <div className={styles.boxText}>
                            <h3>Проследяване на поръчката</h3>
                            <p>Клиентите знаят къде е пратката им във всеки момент.</p>
                        </div>
                        <div className={styles.trackingVisual}>
                            <div className={styles.trackDot}>📦</div>
                            <div className={styles.trackLine} />
                            <div className={styles.trackDot}>🚛</div>
                            <div className={styles.trackLine} />
                            <div className={styles.trackDot}>✅</div>
                        </div>
                    </div>

                    {/* Mobile First */}
                    <div className={`${styles.box} ${styles.boxMobile}`}>
                        <div className={styles.boxText}>
                            <h3>Mobile First</h3>
                            <p>Над 70% от клиентите пазаруват през телефон. Ние правим пътя до поръчката мигновен.</p>
                        </div>
                        <div className={styles.mobileVisual}>
                            <div className={styles.phoneFrame}>
                                <div className={styles.phoneScreen}>
                                    <div className={styles.phoneHeader} />
                                    <div className={styles.phoneBtn} />
                                    <div className={styles.phoneLine} />
                                    <div className={styles.phoneLine} style={{ width: "60%" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEO */}
                    <div className={`${styles.box} ${styles.boxSeo}`}>
                        <div className={styles.seoVisual}>
                            <div className={styles.searchBar}>
                                <span className={styles.searchIcon}>🔍</span>
                                <div className={styles.typewriter}>
                                    <span className={styles.typingText} ref={typingRef} />
                                    <span className={styles.cursor}>|</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.boxText}>
                            <h3>SEO Оптимизация</h3>
                            <p>Бъдете пред конкуренцията, когато клиентите търсят в <span className={styles.googleText}><span style={{ color: "#4285F4" }}>G</span><span style={{ color: "#EA4335" }}>o</span><span style={{ color: "#FBBC04" }}>o</span><span style={{ color: "#4285F4" }}>g</span><span style={{ color: "#34A853" }}>l</span><span style={{ color: "#EA4335" }}>e</span></span>.</p>
                        </div>
                    </div>

                    {/* GDPR */}
                    <div className={`${styles.box} ${styles.boxLegal}`}>
                        <div className={styles.legalContent}>
                            <div className={styles.boxText}>
                                <div className={styles.gdprHeader}>
                                    <span className={styles.legalIcon}>⚖️</span>
                                    <h3>GDPR Защита</h3>
                                </div>
                                <p>Автоматично генерирани политики за съгласие и защита на данни.</p>
                            </div>
                            <div className={styles.terminal}>
                                <div className={styles.termDots}><span /><span /><span /></div>
                                <div className={styles.termCode}>
                                    {">"} Generating Policy...<br />
                                    {">"} Cookie Consent: <span className={styles.termOk}>OK</span><br />
                                    {">"} ToS Agreement: <span className={styles.termOk}>Signed</span><br />
                                    <span className={styles.termCursor}>_</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Speed */}
                    <div className={`${styles.box} ${styles.boxSpeed}`}>
                        <div className={styles.speedLeft}>
                            <div className={styles.speedHeader}>
                                <span className={styles.speedIcon}>⚡</span>
                                <h3>Светкавична Скорост</h3>
                            </div>
                            <p className={styles.speedText}>Никой не обича да чака. Вашият магазин ще зарежда моментално.</p>
                        </div>
                        <div className={styles.speedRight}>
                            <div className={styles.rocketVisual}>
                                <Image
                                    src="/imgs/speed.webp"
                                    alt="Speed Rocket"
                                    fill
                                    className={styles.rocketImg}
                                    sizes="(max-width: 900px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
