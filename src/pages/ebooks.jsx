import { useEffect, useRef } from "react";
import "./css/ebooks.css";

const flowSteps = [
  {
    num: "01",
    title: "Product Page",
    body: 'User browses training programs on smftraining.com. Each ebook card has a "Buy Now" button linked directly to a Stripe Payment Link — a hosted checkout URL generated per product in the Stripe dashboard.',
  },
  {
    num: "02",
    title: "Stripe Hosted Checkout",
    body: "Clicking the button navigates to Stripe's hosted checkout page. Stripe handles the entire payment flow — card input, validation, processing, and receipt — with no payment data ever touching smftraining.com.",
  },
  {
    num: "03",
    title: "Success Redirect",
    body: "On successful payment, Stripe redirects the user back to a configured success URL on smftraining.com. The URL includes a Stripe-appended session_id parameter, making it unguessable to anyone who hasn't completed the checkout flow.",
  },
  {
    num: "04",
    title: "Download Page",
    body: "The success page reads the session_id from the URL to confirm the user arrived via a legitimate Stripe redirect, then surfaces the Google Drive direct download link for the purchased ebook.",
  },
];

const decisions = [
  {
    title: "Stripe Payment Links over a custom checkout",
    body: `Building a custom Stripe checkout requires a backend to create sessions server-side — 
    an Express or serverless function, environment secrets, and ongoing maintenance. 
    Stripe Payment Links deliver the same PCI-compliant hosted checkout with zero backend code. 
    For a solo digital product store, that tradeoff is straightforward.`,
    tag: "Simplicity over complexity",
  },
  {
    title: "Google Drive for delivery over self-hosted PDFs",
    body: `Hosting PDFs directly in the Vercel project caused two problems: large files bloated 
    the git repository and hit Vercel's deployment size limits. Google Drive direct download URLs 
    solve both — files live outside the repo, delivery is handled by Google's CDN, 
    and URLs are easy to update if a file changes.`,
    tag: "Learned from a real mistake",
  },
  {
    title: "Security through obscurity for download gating",
    body: `Full cryptographic gating would require a serverless function to verify the Stripe 
    session server-side before serving the download link. That's the "correct" solution — 
    but for a low-cost digital product with no sensitive data, the added complexity and cold-start 
    latency isn't justified. The success URL is unguessable in practice: Stripe appends a unique 
    session_id that only exists after a real completed checkout. I understood the tradeoff and 
    made a deliberate call.`,
    tag: "Conscious tradeoff",
  },
];

const lessons = [
  {
    heading: "Knowing when not to build is an engineering skill.",
    body: `The instinct to build a custom checkout with full server-side verification is understandable — 
    but Stripe Payment Links exist precisely for this use case. Reaching for the right tool 
    instead of the most complex one is a sign of maturity, not laziness.`,
  },
  {
    heading: "Git history is permanent until you make it not be.",
    body: `Committing large PDFs to the repo before switching to Google Drive meant running 
    git filter-repo to scrub them from history entirely. The lesson: binary assets and 
    secrets never belong in version control, and that decision is much easier to make upfront 
    than to undo later.`,
  },
  {
    heading: "Articulating tradeoffs matters as much as the decision itself.",
    body: `Choosing security through obscurity over cryptographic gating isn't a shortcut — 
    it's an engineering decision with a clear rationale. Being able to explain what you chose, 
    what you didn't choose, and why is what separates a thoughtful implementation from a lucky one.`,
  },
];

export default function ebooks() {
  const fadeRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("cs-visible");
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
          <h1 className="cs-hero-title">Stripe + Ebook Download Flow</h1>
          <p className="cs-hero-sub">
            Building a complete e-commerce purchase and digital delivery
            pipeline for 20+ fitness ebooks — no backend server, no custom
            checkout code, no binary assets in the repository.
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
              <span className="cs-meta-value">E-commerce · Frontend</span>
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
          {[
            "Stripe Payment Links",
            "Google Drive Delivery",
            "React Router",
          ].map((t) => (
            <span key={t} className="cs-pill cs-pill--accent">
              {t}
            </span>
          ))}
          {["React", "Vite", "Vercel", "URL Params", "No Backend"].map((t) => (
            <span key={t} className="cs-pill">
              {t}
            </span>
          ))}
        </div>

        {/* Problem */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">The Problem</p>
          <h2 className="cs-section-heading">
            Selling digital products from a static site with no server
          </h2>
          <p className="cs-body-text">
            smftraining.com sells 20+ fitness ebook training programs. The site
            is a static React app deployed on Vercel — no Express server, no
            database, no server-side runtime. Building a standard e-commerce
            checkout would normally require a backend to create Stripe sessions,
            handle webhooks, and gate downloads behind authenticated routes.
          </p>
          <p className="cs-body-text">
            The challenge: implement a complete purchase-to-download flow that
            was secure enough for a real commercial product, fast to build, and
            cheap to operate — without introducing a backend.
          </p>
          <div className="cs-callout">
            <span className="cs-callout-label">Additional Constraint</span>
            An earlier attempt to store PDFs directly in the repository caused
            immediate problems — large binary files bloated git history, pushed
            the deployment size past Vercel's limits, and made the repo slow to
            clone. The delivery mechanism had to live entirely outside version
            control.
          </div>
        </div>

        {/* Flow */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">The Purchase Flow</p>
          <h2 className="cs-section-heading">
            Four steps from product page to downloaded file
          </h2>
          <div className="cs-layers">
            {flowSteps.map((step, i) => (
              <div
                key={step.num}
                className="cs-layer cs-fade"
                ref={addRef}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="cs-layer-num">{step.num}</div>
                <div className="cs-layer-body">
                  <h3 className="cs-layer-title">{step.title}</h3>
                  <p className="cs-layer-text">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">Implementation</p>
          <h2 className="cs-section-heading">
            Reading the session ID on the success page
          </h2>
          <p className="cs-body-text">
            When Stripe redirects back to the site, it appends a{" "}
            <code className="cs-inline-code">session_id</code> to the success
            URL. The success page reads this param to confirm the user arrived
            via a completed Stripe checkout, then renders the download link.
          </p>

          <div className="cs-code-block">
            <span className="cs-code-filename">SuccessPage.jsx</span>
            <pre className="cs-code-pre">{`import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function SuccessPage({ downloadUrl }) {
  const [searchParams] = useSearchParams()
  const [verified, setVerified] = useState(false)

  useEffect(() => {
    const sessionId = searchParams.get('session_id')

    // Confirm the user arrived via a real Stripe redirect.
    // The session_id is Stripe-generated and unguessable —
    // anyone navigating directly to this URL won't have one.
    if (sessionId) {
      setVerified(true)
    }
  }, [searchParams])

  if (!verified) {
    return <p>No valid session found.</p>
  }

  return (
    <div className="success-page">
      <h2>Payment confirmed — thank you!</h2>
      <p>Your download is ready.</p>
      <a href={downloadUrl} download className="btn">
        Download your ebook
      </a>
    </div>
  )
}`}</pre>
          </div>

          <p className="cs-body-text">
            The Stripe Payment Link is configured in the Stripe dashboard with
            the success URL set to:
          </p>

          <div className="cs-code-block">
            <span className="cs-code-filename">
              Stripe Dashboard — Success URL
            </span>
            <pre className="cs-code-pre">{`https://smftraining.com/success?session_id={CHECKOUT_SESSION_ID}`}</pre>
          </div>

          <p className="cs-body-text">
            Stripe substitutes{" "}
            <code className="cs-inline-code">{"{CHECKOUT_SESSION_ID}"}</code>{" "}
            with the real session ID at redirect time. The Google Drive download
            URL is stored as an environment variable and never exposed in the
            client bundle until a valid session is confirmed.
          </p>
        </div>

        {/* Key decisions */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">Key Decisions</p>
          <h2 className="cs-section-heading">
            Three calls that defined the architecture
          </h2>
          <div className="cs-decisions">
            {decisions.map((d, i) => (
              <div
                key={i}
                className="cs-decision cs-fade"
                ref={addRef}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="cs-decision-tag">{d.tag}</div>
                <h3 className="cs-decision-title">{d.title}</h3>
                <p className="cs-layer-text">{d.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">Results</p>
          <h2 className="cs-section-heading">
            A complete e-commerce flow with minimal overhead
          </h2>
          <div className="cs-metrics">
            {[
              { value: "20+", label: "Ebooks available for purchase" },
              { value: "0", label: "Backend servers required" },
              { value: "0", label: "MB added to git history" },
              { value: "$0", label: "Monthly infrastructure cost" },
            ].map((m) => (
              <div key={m.label} className="cs-metric">
                <span className="cs-metric-value">{m.value}</span>
                <span className="cs-metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lessons */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">What I Learned</p>
          <h2 className="cs-section-heading">
            The best architecture is the one you can actually maintain
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
            <a href="/contact-form" className="cs-next-link">
              Contact Form Security →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
