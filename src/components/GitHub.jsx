import { useState, useEffect } from "react";
import siteConfig from "../config/siteConfig";
import useScrollReveal from "../hooks/useScrollReveal";
import "./GitHub.css";

/**
 * GitHub section — fetches public repos via GitHub API and displays
 * the top repos sorted by stars. Falls back gracefully on error.
 */
export default function GitHub() {
    const { githubUsername, socialLinks } = siteConfig;
    const githubLink = socialLinks.find((l) => l.platform === "GitHub")?.url || "#";
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const revealRef = useScrollReveal();

    useEffect(() => {
        if (!githubUsername || githubUsername === "yourusername") {
            setLoading(false);
            return;
        }

        fetch(
            `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`
        )
            .then((res) => {
                if (!res.ok) throw new Error("GitHub API error");
                return res.json();
            })
            .then((data) => {
                /* Sort by stars descending, pick top 6 */
                const sorted = data
                    .filter((r) => !r.fork)
                    .sort((a, b) => b.stargazers_count - a.stargazers_count)
                    .slice(0, 6);
                setRepos(sorted);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [githubUsername]);

    return (
        <section id="github" className="section github-section">
            <div className="container" ref={revealRef}>
                <h2 className="section__title">GitHub</h2>
                <p className="section__subtitle">
                    My open-source work and contributions.
                </p>

                {loading && (
                    <div className="github__loading">
                        <div className="github__loading-dot" />
                        <div className="github__loading-dot" />
                        <div className="github__loading-dot" />
                    </div>
                )}

                {error && (
                    <p className="github__error">
                        Unable to load repositories. Please check back later.
                    </p>
                )}



                {repos.length > 0 && (
                    <div className="github__grid">
                        {repos.map((repo) => (
                            <a
                                key={repo.id}
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github__repo-card"
                            >
                                <div className="github__repo-header">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                                    </svg>
                                    <h4 className="github__repo-name">{repo.name}</h4>
                                </div>
                                {repo.description && (
                                    <p className="github__repo-desc">{repo.description}</p>
                                )}
                                <div className="github__repo-meta">
                                    {repo.language && (
                                        <span className="github__repo-lang">
                                            <span className="github__lang-dot" />
                                            {repo.language}
                                        </span>
                                    )}
                                    <span className="github__repo-stars">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                        {repo.stargazers_count}
                                    </span>
                                    <span className="github__repo-forks">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" /></svg>
                                        {repo.forks_count}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                )}

                <div className="github__profile-link">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--outline"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        View GitHub Profile
                    </a>
                </div>
            </div>
        </section>
    );
}
