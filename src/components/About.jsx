import siteConfig from "../config/siteConfig";
import useScrollReveal from "../hooks/useScrollReveal";
import "./About.css";

/**
 * About section — short bio with avatar placeholder.
 */
export default function About() {
    const { personal } = siteConfig;
    const revealRef = useScrollReveal();

    /* Build initials from name for the avatar fallback */
    const initials = personal.name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2);

    return (
        <section id="about" className="section about">
            <div className="container" ref={revealRef}>
                <h2 className="section__title">About Me</h2>
                <p className="section__subtitle">A little background about who I am.</p>

                <div className="about__grid">
                    {/* Avatar */}
                    <div className="about__avatar-wrapper">
                        {personal.avatarUrl ? (
                            <img
                                src={personal.avatarUrl}
                                alt={personal.name}
                                className="about__avatar"
                            />
                        ) : (
                            <div className="about__avatar about__avatar--initials">
                                {initials}
                            </div>
                        )}
                    </div>

                    {/* Bio text */}
                    <div className="about__text">
                        {personal.about.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}

                        {personal.resumeUrl && personal.resumeUrl !== "#" && (
                            <a
                                href={personal.resumeUrl}
                                className="btn btn--primary"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ marginTop: "1.5rem" }}
                            >
                                Download Resume
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
