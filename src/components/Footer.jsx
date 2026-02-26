import siteConfig from "../config/siteConfig";
import "./Footer.css";

/**
 * Footer — social links + copyright.
 * Uses CSS-based icons instead of inline SVGs to avoid Brave Shields blocking.
 */

/* Platform display labels */
const platformLabels = {
    GitHub: "GH",
    LinkedIn: "in",
    Twitter: "𝕏",
    Instagram: "IG",
    Email: "✉",
};

export default function Footer() {
    const { socialLinks, personal } = siteConfig;
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer__inner">
                <div className="footer__social">
                    {socialLinks.map((link) => (
                        <a
                            key={link.platform}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__social-link"
                            aria-label={link.platform}
                            title={link.platform}
                        >
                            <span className="footer__icon-text">
                                {platformLabels[link.platform] || link.platform[0]}
                            </span>
                            <span className="footer__icon-label">{link.platform}</span>
                        </a>
                    ))}
                </div>

                <p className="footer__copy">
                    &copy; {year} {personal.name}. Built with React.
                </p>
            </div>
        </footer>
    );
}
