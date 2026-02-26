import { useEffect, useRef } from "react";

/**
 * Custom hook — IntersectionObserver-based scroll reveal.
 * Automatically applies "scroll-reveal" class on mount and
 * adds "revealed" class when the element enters the viewport.
 *
 * @param {object} options - IntersectionObserver options
 * @returns {React.RefObject} ref to attach to the element
 */
export default function useScrollReveal(options = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        // Apply the initial hidden state
        node.classList.add("scroll-reveal");

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    observer.unobserve(entry.target); // animate once
                }
            },
            { threshold: 0.1, ...options }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [options]);

    return ref;
}
