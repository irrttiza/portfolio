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
        title: "nalla developer",
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
            title: "Breed Prediction Model",
            description:
                "Designed and implemented an AI model to identify animal breeds from images. Handled dataset preprocessing, augmentation, and labeling, followed by training a deep learning classifier for multi-class prediction. Conducted performance evaluation and optimization to improve generalization and reduce overfitting.",
            techStack: ["Python", "TensorFlow", "OpenCV", "Numpy", "Pandas"],
            github: "https://github.com/irrttiza/breed-prediction-model",
            live: "",
        },
        {
            title: "Alzheimer's Disease Risk Prediction",
            description:
                "This project applies a Decision Tree classifier to predict Alzheimer's disease risk using approximately 70,000 patient records. After preprocessing and label encoding, the model is trained and evaluated with standard metrics, offering an interpretable, interactive tool to support early risk assessment in healthcare settings.",
            techStack: ["Python", "Matplotlib", "Numpy"],
            github: "https://github.com/irrttiza/alzheimers-prediction",
            live: "",
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
