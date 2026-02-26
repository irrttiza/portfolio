import { useEffect, useState } from "react";

/**
 * Custom hook — tracks which section is currently in view.
 * Returns the id of the active section.
 *
 * @param {string[]} sectionIds - array of section element ids
 * @returns {string} currently active section id
 */
export default function useActiveSection(sectionIds) {
    const [activeId, setActiveId] = useState(sectionIds[0] || "");

    useEffect(() => {
        const observers = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveId(id);
                    }
                },
                { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, [sectionIds]);

    return activeId;
}
