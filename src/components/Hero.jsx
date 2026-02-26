import { useCallback } from "react";
import siteConfig from "../config/siteConfig";
import "./Hero.css";

/**
 * Hero section — large intro with name, title, tagline, and CTA.
 */
export default function Hero() {
    const { personal } = siteConfig;

    /* Ripple effect on CTA button click */
    const createRipple = useCallback((e) => {
        const btn = e.currentTarget;
        const circle = document.createElement("span");
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        circle.style.width = circle.style.height = `${size}px`;
        circle.style.left = `${e.clientX - rect.left - size / 2}px`;
        circle.style.top = `${e.clientY - rect.top - size / 2}px`;
        circle.classList.add("ripple");
        btn.appendChild(circle);
        setTimeout(() => circle.remove(), 600);
    }, []);

    return (
        <section id="hero" className="hero">
            <div className="container hero__container">
                {/* Decorative floating shapes */}
                <div className="hero__shapes" aria-hidden="true">
                    <div className="hero__shape hero__shape--1" />
                    <div className="hero__shape hero__shape--2" />
                    <div className="hero__shape hero__shape--3" />
                </div>

                <div className="hero__content">
                    <p className="hero__greeting">Hello, I'm</p>
                    <h1 className="hero__name">{personal.name}</h1>
                    <h2 className="hero__title">{personal.title}</h2>
                    <p className="hero__tagline">{personal.tagline}</p>

                    <div className="hero__cta">
                        <a
                            href="#projects"
                            className="btn btn--primary"
                            onClick={createRipple}
                        >
                            View My Work
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </a>
                        <a href="#contact" className="btn btn--outline">
                            Get in Touch
                        </a>
                    </div>
                    {/* Scroll indicator */}
                    <div className="hero__scroll-indicator" aria-hidden="true">
                        <div className="hero__scroll-mouse">
                            <div className="hero__scroll-wheel" />
                        </div>
                        <span>Scroll down</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
