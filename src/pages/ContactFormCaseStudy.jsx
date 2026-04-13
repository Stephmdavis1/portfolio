import React, { useEffect, useRef } from "react";
import "./css/contactformcasestudy.css";

const layers = [
  {
    num: "01",
    title: "Honeypot Field",
    body: `A hidden input rendered in the DOM but invisible to real users via CSS. Automated bots that 
        crawl and blindly fill form fields will populate it. If the field has any value on submission, 
        the request is silently dropped — no error shown, no feedback given to the attacker.`,
  },
  {
    num: "02",
    title: "Google reCAPTCHA v2",
    body: `The "I'm not a robot" checkbox, integrated via react-google-recaptcha. The submit button 
        stays disabled until a valid token is present. The token is passed alongside every EmailJS 
        request — no token, no API call. Google's risk engine handles the heavy lifting.`,
  },
  {
    num: "03",
    title: "EmailJS Scoped Credentials",
    body: `EmailJS handles email delivery entirely from the client — no SMTP credentials exposed, 
        no backend required. The service key is scoped to a single template and origin domain, 
        limiting blast radius if the key were ever compromised. All credentials live in Vite 
        environment variables, injected at build time via Vercel — never in the repo.`,
  },
];

const lessons = [
  {
    heading: "Layering beats any single method.",
    body: `reCAPTCHA alone can be defeated by CAPTCHA-solving services. Honeypots alone 
        can be skipped by smarter bots. Together, they require an attacker to solve two independent 
        problems simultaneously — which makes the form not worth targeting.`,
  },
  {
    heading: "Silent failures are better UX for bots.",
    body: `When the honeypot triggers, there's no error message — the form appears to succeed. 
        This prevents bots from learning they've been detected and adjusting their approach.`,
  },
  {
    heading: "Env vars need to be part of the architecture from day one.",
    body: `Scoping EmailJS credentials to environment variables from the start meant there was 
        never a risk of keys appearing in git history — a lesson I'd already internalized while 
        cleaning up large files from the smftraining.com repo using git filter-repo.`,
  },
  {
    heading: `Security doesn't require infrastructure.`,
    body: `This solution handles production-level spam protection entirely client-side — 
        no servers, no databases, no monthly bills — by choosing the right third-party tools 
        and composing them thoughtfully.`,
  },
];
export default function ContactFormCaseStudy() {
  const fadeRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cs-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };

  return (
    <div className="cs-page">
      {/* ── HERO ── */}
      <section className="cs-hero">
        <div className="container">
          <span className="cs-tag">Case Study</span>
          <h1 className="cs-hero-title">Contact Form Security</h1>
          <p className="cs-hero-sub">
            Building a production-ready contact form with three independent
            layers of anti-spam protection — no backend, no dedicated spam
            service, zero unwanted messages.
          </p>
          <div className="cs-meta-row">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Project</span>
              <span className="cs-meta-value">smftraining.com</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Stack</span>
              <span className="cs-meta-value">React · Vite · Vercel</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Category</span>
              <span className="cs-meta-value">Frontend Security</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Status</span>
              <span className="cs-meta-value">Live in Production</span>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-divider" />

      {/* ── BODY ── */}
      <div className="container cs-body">
        {/* Tech pills */}
        <div className="cs-pills cs-fade" ref={addRef}>
          {["EmailJS", "reCAPTCHA v2", "Honeypot Fields"].map((t) => (
            <span key={t} className="cs-pill cs-pill--accent">
              {t}
            </span>
          ))}
          {["React", "Controlled Components", "Vite Env Vars", "Vercel"].map(
            (t) => (
              <span key={t} className="cs-pill">
                {t}
              </span>
            )
          )}
        </div>

        {/* Problem */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">The Problem</p>
          <h2 className="cs-section-heading">
            A fully client-side app with a form that needed to be trustworthy
          </h2>
          <p className="cs-body-text">
            smftraining.com is a static React app deployed on Vercel. No Express
            server, no database, no server-side session handling — just a Vite
            build served from the edge. I needed a contact form that reliably
            delivered real inquiries to my inbox without becoming a spam relay
            the moment a bot found it.
          </p>
          <p className="cs-body-text">
            The challenge: implement meaningful security entirely on the client
            side, using only third-party services and frontend logic.
          </p>
          <div className="cs-callout">
            <span className="cs-callout-label">The Constraint</span>
            With no backend to validate requests or rate-limit submissions,
            every protection had to work at the browser level. That meant
            thinking like an attacker — what's the cheapest way to abuse this
            form, and how do I make each method not worth the effort?
          </div>
        </div>

        {/* Solution layers */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">The Solution</p>
          <h2 className="cs-section-heading">
            Three independent layers, each targeting a different threat
          </h2>
          <p className="cs-body-text">
            Rather than relying on any single protection, I stacked three
            mechanisms that each catch different types of abuse. A sophisticated
            bot that defeats one layer is still likely to fail on another.
          </p>
          <div className="cs-layers">
            {layers.map((layer, i) => (
              <div
                key={layer.num}
                className="cs-layer cs-fade"
                ref={addRef}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="cs-layer-num">{layer.num}</div>
                <div className="cs-layer-body">
                  <h3 className="cs-layer-title">{layer.title}</h3>
                  <p className="cs-layer-text">{layer.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">Implementation</p>
          <h2 className="cs-section-heading">The submit handler</h2>
          <p className="cs-body-text">
            The honeypot check runs first — it's cheap and kills the
            lowest-effort bots before any API call is made. reCAPTCHA validation
            follows, then EmailJS delivery.
          </p>

          <div className="cs-code-block">
            <span className="cs-code-filename">ContactForm.jsx</span>
            <pre className="cs-code-pre">{`const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Layer 1: Honeypot — bots fill hidden fields, humans don't
        if (formData.honeypot) {
          return; // Silent drop — no feedback to attacker
        }
      
        // Layer 2: reCAPTCHA token must be present
        if (!captchaToken) {
          setError('Please complete the reCAPTCHA verification.');
          return;
        }
      
        // Layer 3: EmailJS delivery with scoped env var credentials
        try {
          await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
              from_name:     formData.name,
              from_email:    formData.email,
              message:       formData.message,
              captcha_token: captchaToken,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          );
          setSubmitted(true);
        } catch (err) {
          setError('Something went wrong. Please try again.');
        }
      };`}</pre>
          </div>

          <p className="cs-body-text" style={{ marginTop: "1.5rem" }}>
            The honeypot field itself is invisible to users but present in the
            DOM — exactly what a bot scanning and filling fields would interact
            with.
          </p>

          <div className="cs-code-block">
            <span className="cs-code-filename">
              ContactForm.jsx — honeypot field
            </span>
            <pre className="cs-code-pre">{`{/* Hidden from users, visible to bots */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />`}</pre>
          </div>
        </div>

        {/* Results */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">Results</p>
          <h2 className="cs-section-heading">
            A form that works exactly as intended
          </h2>
          <div className="cs-metrics">
            {[
              { value: "0", label: "Spam messages received" },
              { value: "3", label: "Security layers active" },
              { value: "$0", label: "Monthly infrastructure cost" },
              { value: "0", label: "Backend servers required" },
            ].map((m) => (
              <div key={m.label} className="cs-metric">
                <span className="cs-metric-value">{m.value}</span>
                <span className="cs-metric-label">{m.label}</span>
              </div>
            ))}
          </div>
          <p className="cs-body-text">
            The form has been live since launch with no spam deliveries. Real
            inquiries arrive cleanly. The entire security stack costs nothing to
            run and requires no maintenance.
          </p>
        </div>

        {/* Lessons */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">What I Learned</p>
          <h2 className="cs-section-heading">
            Defense in depth applies at the frontend layer too
          </h2>
          <div className="cs-lessons">
            {lessons.map((l, i) => (
              <div
                key={i}
                className="cs-lesson cs-fade"
                ref={addRef}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="cs-lesson-dot" />
                <p className="cs-body-text">
                  <strong>{l.heading}</strong> {l.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOOTER NAV ── */}
      <div className="cs-footer-nav">
        <div className="container cs-footer-inner">
          <a href="/portfolio" className="btn cs-nav-btn">
            ← All Projects
          </a>
          <div className="cs-next">
            <span className="cs-meta-label">Next Case Study</span>
            <a href="/ebooks" className="cs-next-link">
              Stripe + Ebook Download Flow →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
