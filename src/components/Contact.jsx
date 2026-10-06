import { useState } from "react";
import Reveal from "./Reveal";

/**
 * EmailJS setup (free, no backend needed):
 * 1. Create an account at https://www.emailjs.com/
 * 2. Add an Email Service (e.g. Gmail) -> copy the Service ID
 * 3. Create an Email Template -> copy the Template ID
 *    (use {{from_name}}, {{from_email}}, {{message}} as template variables)
 * 4. Go to Account > General -> copy your Public Key
 * 5. Paste all three values below.
 */
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // "sending" | "sent" | "error"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Use mailto fallback when EmailJS is not configured — opens user's mail client
    setStatus("sending");

    if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID") {
      const subject = encodeURIComponent(`Portfolio contact from ${form.name || form.email}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      const mailto = `mailto:bagyashkumar@gmail.com?subject=${subject}&body=${body}`;
      // Open user's default mail client with prefilled message
      window.location.href = mailto;
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      return;
    }

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
        }),
      });

      if (!res.ok) throw new Error("Send failed");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <Reveal direction="up">
          <p className="eyebrow">~/contact</p>
          <h2 className="section-title">Let's work together</h2>
        </Reveal>

        <div className="contact-grid">
          <Reveal direction="left" className="contact-links">
            <a
              className="contact-link"
              href="mailto:bagyashkumar@gmail.com"
            >
              <span className="label">email</span>
              <span className="value">bagyashkumar@gmail.com</span>
            </a>
            <a className="contact-link" href="tel:+919834924939">
              <span className="label">phone</span>
              <span className="value">+91 98349 24939</span>
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/yashkumar-baghele-6053b6251/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">linkedin</span>
              <span className="value">yashkumar-baghele</span>
            </a>
            <a
              className="contact-link"
              href="https://github.com/Yashkumar20022"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">github</span>
              <span className="value">Yashkumar20022</span>
            </a>
            <a className="contact-link" href="#hero">
              <span className="label">location</span>
              <span className="value">Nagpur, Maharashtra</span>
            </a>
          </Reveal>

          <Reveal direction="right" delay={150}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
              />
            </div>
            <div className="field">
              <label htmlFor="email">Your email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity or project..."
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "sent" && (
              <p className="form-status">Message sent — thanks for reaching out!</p>
            )}
            {status === "error" && (
              <p className="form-status error">
                Form isn't connected yet — add your EmailJS keys in Contact.jsx,
                or email me directly using the link on the left.
              </p>
            )}
          </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
