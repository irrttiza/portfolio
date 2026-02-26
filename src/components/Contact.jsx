import { useState, useCallback } from "react";
import siteConfig from "../config/siteConfig";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Contact.css";

/**
 * Contact section — frontend-only contact form with validation.
 */
export default function Contact() {
    const { personal } = siteConfig;
    const revealRef = useScrollReveal();

    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = useCallback(() => {
        const errs = {};
        if (!form.name.trim()) errs.name = "Name is required.";
        if (!form.email.trim()) errs.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            errs.email = "Enter a valid email.";
        if (!form.message.trim()) errs.message = "Message is required.";
        return errs;
    }, [form]);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (errors[e.target.name]) {
            setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        console.log("Form submitted:", form);
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section id="contact" className="section contact">
            <div className="container" ref={revealRef}>
                <h2 className="section__title">Get in Touch</h2>
                <p className="section__subtitle">
                    Have a project in mind or just want to say hi? Drop me a message.
                </p>

                <div className="contact__grid">
                    {/* Info side */}
                    <div className="contact__info">
                        <div className="contact__info-card">
                            <div className="contact__info-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <a href={`mailto:${personal.email}`}>{personal.email}</a>
                            </div>
                        </div>
                        <div className="contact__info-card">
                            <div className="contact__info-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <div>
                                <h4>Location</h4>
                                <p>Available Remotely</p>
                            </div>
                        </div>
                    </div>

                    {/* Form side */}
                    <form className="contact__form" onSubmit={handleSubmit} noValidate>
                        <div className="contact__field">
                            <label htmlFor="contact-name">Name</label>
                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={form.name}
                                onChange={handleChange}
                                className={errors.name ? "contact__input--error" : ""}
                            />
                            {errors.name && <span className="contact__error">{errors.name}</span>}
                        </div>

                        <div className="contact__field">
                            <label htmlFor="contact-email">Email</label>
                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                placeholder="john@example.com"
                                value={form.email}
                                onChange={handleChange}
                                className={errors.email ? "contact__input--error" : ""}
                            />
                            {errors.email && <span className="contact__error">{errors.email}</span>}
                        </div>

                        <div className="contact__field">
                            <label htmlFor="contact-message">Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows="5"
                                placeholder="Tell me about your project..."
                                value={form.message}
                                onChange={handleChange}
                                className={errors.message ? "contact__input--error" : ""}
                            />
                            {errors.message && (
                                <span className="contact__error">{errors.message}</span>
                            )}
                        </div>

                        <button type="submit" className="btn btn--primary">
                            Send Message
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                        </button>

                        {submitted && (
                            <p className="contact__success">
                                ✓ Message sent successfully! I'll get back to you soon.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
