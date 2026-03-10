"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "./Header.module.css";

const navLinks = [
    { label: "Начало", href: "#hero" },
    { label: "Услуги", href: "#services" },
    { label: "Планове", href: "#plan" },
    { label: "Защо Gweb", href: "#why-gweb" },
    { label: "Контакти", href: "#contact" },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastY, setLastY] = useState(0);

    const handleScroll = useCallback(() => {
        const y = window.scrollY;
        if (y > lastY && y > 100) setHidden(true);
        else setHidden(false);
        setLastY(y);
    }, [lastY]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const closeMobile = () => setMobileOpen(false);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        closeMobile();
        const el = document.querySelector(href);
        if (el) {
            const headerH = 80;
            const top = el.getBoundingClientRect().top + window.pageYOffset - headerH - 40;
            window.scrollTo({ top, behavior: "smooth" });
            history.pushState(null, null, href);
        }
    };

    return (
        <>
            <header className={`${styles.header} ${hidden ? styles.headerHidden : ""}`}>
                <div className={styles.container}>
                    {/* Mobile Toggle */}
                    <button
                        className={styles.mobileToggle}
                        onClick={() => setMobileOpen(true)}
                        aria-label="Отвори меню"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>

                    {/* Logo */}
                    <a href="/" className={styles.logo} aria-label="Gweb начало">
                        <span className={styles.logoText}>Gweb</span>
                    </a>

                    {/* Desktop Nav Shell */}
                    <div className={styles.shell}>
                        <nav className={styles.desktopNav}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={styles.navLink}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                </div>
            </header>

            {/* Mobile Overlay */}
            <div
                className={`${styles.overlay} ${mobileOpen ? styles.overlayActive : ""}`}
                onClick={closeMobile}
            />

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuActive : ""}`}>
                <div className={styles.mobileHeader}>
                    <span className={styles.mobileTitle}>Меню</span>
                    <button className={styles.mobileClose} onClick={closeMobile} aria-label="Затвори">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
                <nav className={styles.mobileNav}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={styles.mobileNavLink}
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            <span>{link.label}</span>
                        </a>
                    ))}
                </nav>
                <a href="#contact" className={styles.mobileAccountBtn} onClick={(e) => handleNavClick(e, "#contact")}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span>Свържи се с нас</span>
                </a>
                <div className={styles.mobileFooter}>
                    <p>© 2025 Gweb</p>
                </div>
            </div>
        </>
    );
}
