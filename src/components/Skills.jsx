import siteConfig from "../config/siteConfig";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Skills.css";

/**
 * Skills section — categorized skill badges displayed in a grid.
 */
export default function Skills() {
    const { skills } = siteConfig;
    const revealRef = useScrollReveal();

    return (
        <section id="skills" className="section skills">
            <div className="container" ref={revealRef}>
                <h2 className="section__title">Skills</h2>
                <p className="section__subtitle">Technologies and tools I work with.</p>

                <div className="skills__grid">
                    {skills.map((group) => (
                        <div key={group.category} className="skills__category">
                            <h3 className="skills__category-title">{group.category}</h3>
                            <div className="skills__badges">
                                {group.items.map((skill) => (
                                    <span key={skill} className="skills__badge">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
