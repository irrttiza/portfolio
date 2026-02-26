/**
 * ============================================================
 *  SITE CONFIGURATION — Single source of truth
 *  Replace all placeholder values with your own information.
 * ============================================================
 */

const siteConfig = {
    /* ---- Personal ---- */
    personal: {
        name: "Mohammad Irtiza Rahmani",
        title: "FULL STACK DEVELOPER",
        tagline: "Building elegant solutions to complex problems.",
        email: "irtizarahmani5@gmail.com",
        resumeUrl: "#", // link to your resume PDF
        avatarUrl: "", // path or URL to your photo (leave empty for initials)
        about: [
            "I'm a passionate developer who loves creating beautiful, performant web applications. With expertise in modern JavaScript frameworks and a keen eye for design, I turn ideas into polished digital products.",
            "When I'm not coding, you'll find me exploring open-source projects, writing technical articles, or learning new technologies. I believe in clean code, continuous learning, and building things that make a difference.",
        ],
    },

    /* ---- Skills (categorized) ---- */
    skills: [
        {
            category: "Frontend",
            items: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Next.js"],
        },
        {
            category: "Backend",
            items: ["Node.js", "Express", "Python", "Django", "REST APIs"],
        },
        {
            category: "Database",
            items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
        },
        {
            category: "Tools & DevOps",
            items: ["Git", "GitHub", "Docker", "VS Code", "Linux", "CI/CD"],
        },
    ],

    /* ---- Projects ---- */
    projects: [
        {
            title: "Alpha",
            description:
                "A brief description of your project. What it does, why you built it, and what makes it special.",
            techStack: ["React", "Node.js", "MongoDB"],
            github: "https://github.com/irrttiza/project-one",
            live: "https://project-one.example.com",
        },
        {
            title: "Beta",
            description:
                "A brief description of your second project. Highlight the key features and technologies used.",
            techStack: ["Python", "Django", "PostgreSQL"],
            github: "https://github.com/irrttiza/project-two",
            live: "https://project-two.example.com",
        },
        {
            title: "Gamma",
            description:
                "A brief description of your third project. Explain what problem it solves and your approach.",
            techStack: ["Next.js", "TypeScript", "Firebase"],
            github: "https://github.com/irrttiza/project-three",
            live: "https://project-three.example.com",
        },
    ],

    /* ---- GitHub ---- */
    githubUsername: "irrttiza", // used by GitHub API to fetch repos

    /* ---- Social links ---- */
    socialLinks: [
        { platform: "GitHub", url: "https://github.com/irrttiza" },
        { platform: "LinkedIn", url: "https://linkedin.com/in/irrttiza" },
        { platform: "Twitter", url: "https://twitter.com/irrttiza" },
        { platform: "Instagram", url: "https://instagram.com/irrttiza" },
        { platform: "Email", url: "mailto:irtizarahmani5@gmail.com" },
    ],

    /* ---- Navigation links ---- */
    navLinks: [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "GitHub", href: "#github" },
        { label: "Contact", href: "#contact" },
    ],
};

export default siteConfig;
