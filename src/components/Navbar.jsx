import { useState, useCallback } from "react";
import siteConfig from "../config/siteConfig";
import useActiveSection from "../hooks/useActiveSection";
import "./Navbar.css";

/**
 * Navbar — sticky navigation bar with mobile hamburger, active section
 * highlight, and dark/light theme toggle.
 */
export default function Navbar({ theme, toggleTheme }) {
    const { navLinks, personal } = siteConfig;
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const activeId = useActiveSection(sectionIds);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = useCallback(() => setMenuOpen(false), []);

    return (
        <header className="navbar" role="banner">
            <nav className="navbar__inner container" aria-label="Main navigation">
                {/* Logo / Name */}
                <a href="#hero" className="navbar__logo">
                    {personal.name.split(" ")[0]}
                    <span className="navbar__logo-dot">.</span>
                </a>

                {/* Desktop + Mobile nav links */}
                <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`navbar__link ${activeId === link.href.replace("#", "") ? "navbar__link--active" : ""
                                    }`}
                                onClick={handleLinkClick}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right-side controls */}
                <div className="navbar__controls">
                    {/* Theme toggle */}
                    <button
                        className="navbar__theme-btn"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    >
                        {theme === "dark" ? (
                            /* Sun icon */
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                        ) : (
                            /* Moon icon */
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>

                    {/* Hamburger */}
                    <button
                        className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>
        </header>
    );
}
