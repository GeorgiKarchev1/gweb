"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const typewriterWords = ["продава", "работи", "печели", "расте"];

export default function Hero() {
    const [word, setWord] = useState(typewriterWords[0]);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(typewriterWords[0].length);
    const [wordIndex, setWordIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const speed = 100;
        const deleteSpeed = 50;
        const delay = 2000;
        const currentWord = typewriterWords[wordIndex];

        if (isDeleting) {
            if (charIndex > 0) {
                timeoutRef.current = setTimeout(() => {
                    setWord(currentWord.substring(0, charIndex - 1));
                    setCharIndex((c) => c - 1);
                }, deleteSpeed);
            } else {
                setIsDeleting(false);
                const next = (wordIndex + 1) % typewriterWords.length;
                setWordIndex(next);
                setCharIndex(0);
            }
        } else {
            if (charIndex < currentWord.length) {
                timeoutRef.current = setTimeout(() => {
                    setWord(currentWord.substring(0, charIndex + 1));
                    setCharIndex((c) => c + 1);
                }, speed);
            } else {
                timeoutRef.current = setTimeout(() => setIsDeleting(true), delay);
            }
        }

        return () => clearTimeout(timeoutRef.current);
    }, [charIndex, isDeleting, wordIndex]);

    const handleScroll = (e) => {
        e.preventDefault();
        const el = document.querySelector("#services");
        if (el) {
            const top = el.getBoundingClientRect().top + window.pageYOffset - 120;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.bgImage}>
                <Image
                    src="/imgs/Adobe Express - file-min.webp"
                    alt="Gweb hero background"
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    quality={85}
                />
                <div className={styles.overlay} />
            </div>

            <div className={styles.content}>
                <div className={styles.textWrapper}>
                    <h1 className={styles.title}>
                        <span className={styles.line1}>Създай своя</span>
                        <span className={styles.line2}>онлайн магазин</span>
                        <span className={styles.line3}>
                            който <span className={styles.typewriter}>{word}</span>
                            <span className={styles.cursor}>|</span>
                        </span>
                    </h1>
                    <p className={styles.description}>
                        Професионално изграждане на Shopify магазини с персонализиран дизайн, SEO оптимизация и бърза доставка за 3-7 дни.
                    </p>
                    <div className={styles.buttons}>
                        <a href="#plan" className={`btn btn-primary ${styles.btnPrimary}`} onClick={(e) => { e.preventDefault(); const el = document.querySelector("#plan"); if (el) { const top = el.getBoundingClientRect().top + window.pageYOffset - 120; window.scrollTo({ top, behavior: "smooth" }); } }}>
                            Започни сега
                        </a>
                        <a href="#services" className={`btn btn-outline ${styles.btnOutline}`} onClick={handleScroll}>
                            Разгледай услугите
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
