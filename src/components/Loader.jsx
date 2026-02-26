import { useState, useEffect } from "react";
import "./Loader.css";

/**
 * Loader — full-screen spinning loader that fades out once content is ready.
 */
export default function Loader({ onFinish }) {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => onFinish && onFinish(), 500);
        }, 1200);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className={`loader ${fadeOut ? "loader--hidden" : ""}`} aria-label="Loading">
            <div className="loader__spinner">
                <div className="loader__ring"></div>
                <span className="loader__text">Loading</span>
            </div>
        </div>
    );
}
