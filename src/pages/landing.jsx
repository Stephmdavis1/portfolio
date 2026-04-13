import pardotcode from "../assets/ProjectsDataImages/Pardot/pardotcode.png";
import { useEffect, useRef } from "react";
import "../components/Work/Pardot/pardot.css";

const techStack = {
  accent: ["Pardot / MC Account Engagement", "Bootstrap", "Pardot Content Regions"],
  neutral: ["HTML", "CSS", "Dark Mode / Light Mode", "Mobile Responsive", "Salesforce"],
};

const problems = [
  {
    num: "01",
    title: "Templates weren't mobile responsive",
    body: "Pardot's pre-built landing page templates don't reflow for smaller screens. In 2024, that's not a minor inconvenience — it's a conversion killer. The client and designer were forced to work within rigid fixed dimensions just to avoid a broken mobile experience.",
  },
  {
    num: "02",
    title: "No room for brand expression",
    body: "Pre-built templates lock you into Pardot's aesthetic. Our nonprofit client had a distinct brand identity — color palette, typography, tone — that the out-of-the-box templates simply couldn't accommodate without major visual compromise.",
  },
  {
    num: "03",
    title: "Marketers couldn't make updates without a developer",
    body: "Any content change required touching the underlying HTML. That meant every image swap, link update, or copy edit came back to the dev team — a bottleneck that slowed down campaigns and frustrated the client.",
  },
];

const solution = [
  {
    num: "01",
    title: "Bootstrap grid for true mobile responsiveness",
    body: "Built the template on Bootstrap's responsive grid system, replacing all fixed-width layouts. Content now reflows cleanly across all screen sizes — from desktop down to mobile — without any designer workarounds or dimension constraints.",
  },
  {
    num: "02",
    title: "Pardot Content Regions for marketer-friendly editing",
    body: "Content regions are designated areas within a Pardot template that non-technical users can edit directly in the Pardot UI — swapping images, updating links, rewriting copy — without touching a single line of HTML. The template handles the structure; the marketer handles the content.",
  },
  {
    num: "03",
    title: "Dark mode / light mode + full brand integration",
    body: "Implemented a CSS-based dark/light mode toggle and integrated the client's full brand palette — colors, fonts, spacing — directly into the template variables. The designer now works in a system that reflects the brand by default, not one they have to fight against.",
  },
];

const lessons = [
  {
    heading: "Platform constraints are design problems in disguise.",
    body: "Pardot's template limitations weren't a technical dead end — they were a signal that the right tool (Bootstrap + content regions) hadn't been applied yet. Reframing the constraint as a solvable problem led to a better outcome than working around it.",
  },
  {
    heading: "Non-technical users are stakeholders too.",
    body: "Building something a developer can maintain isn't enough if the people using it daily — marketers, campaign managers, clients — can't update it without filing a ticket. Content regions shifted ownership of the content back to the people who own it.",
  },
  {
    heading: "Mobile responsiveness is a business requirement, not a nice-to-have.",
    body: "For a nonprofit using landing pages to drive donations and lead generation, a broken mobile experience directly affects revenue. Framing the rebuild as a business impact decision — not just a technical improvement — made the case for the project easy.",
  },
];

export default function PardotCaseStudy() {
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
          <h1 className="cs-hero-title">Pardot Landing Page Template</h1>
          <p className="cs-hero-sub">
            Rebuilding a nonprofit client's Pardot landing pages from locked,
            non-responsive templates into a fully mobile-responsive, brand-integrated
            system that marketers can update without touching code.
          </p>
          <div className="cs-meta-row">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Client</span>
              <span className="cs-meta-value">Nonprofit Organization</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Platform</span>
              <span className="cs-meta-value">Salesforce Marketing Cloud Account Engagement</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">Developer + Designer</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Category</span>
              <span className="cs-meta-value">Email Marketing · Web</span>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-divider" />

      {/* ── BODY ── */}
      <div className="container cs-body">

        {/* Tech pills */}
        <div className="cs-pills cs-fade" ref={addRef}>
          {techStack.accent.map((t) => (
            <span key={t} className="cs-pill cs-pill--accent">{t}</span>
          ))}
          {techStack.neutral.map((t) => (
            <span key={t} className="cs-pill">{t}</span>
          ))}
        </div>

        {/* Context */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">Background</p>
          <h2 className="cs-section-heading">
            A platform with real power — and real limitations
          </h2>
          <p className="cs-body-text">
            Salesforce Marketing Cloud Account Engagement (formerly Pardot) is a
            powerful B2B marketing automation platform. Our nonprofit client was
            using it to build landing pages that collected user information and
            fed directly into automated email campaigns — driving donations,
            event signups, and volunteer recruitment.
          </p>
          <p className="cs-body-text">
            The platform works. The out-of-the-box templates don't. After attending
            multiple Salesforce Dreamforce conferences and working closely with the
            platform, it became clear that the gap between what Pardot <em>could</em> do
            and what the default templates <em>allowed</em> was entirely solvable —
            it just hadn't been solved yet.
          </p>
        </div>

        {/* Problems */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">The Problem</p>
          <h2 className="cs-section-heading">
            Three compounding issues holding the client back
          </h2>
          <div className="cs-layers">
            {problems.map((p, i) => (
              <div
                key={p.num}
                className="cs-layer cs-fade"
                ref={addRef}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="cs-layer-num">{p.num}</div>
                <div className="cs-layer-body">
                  <h3 className="cs-layer-title">{p.title}</h3>
                  <p className="cs-layer-text">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What are content regions */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">Key Concept</p>
          <h2 className="cs-section-heading">What are Pardot Content Regions?</h2>
          <p className="cs-body-text">
            Content regions are designated editable areas within a Pardot email or
            landing page template. They allow marketers to update copy, swap images,
            and change links directly in Pardot's visual editor — in real time,
            without any HTML knowledge.
          </p>
          <div className="cs-callout">
            <span className="cs-callout-label">Why this matters</span>
            The template developer defines the structure and enforces the brand rules.
            The marketer controls the content. Content regions create a clean separation
            between the two — so neither has to step on the other's work, and campaigns
            can move faster without a developer in the loop for every update.
          </div>
        </div>

        {/* Solution */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">The Solution</p>
          <h2 className="cs-section-heading">
            A custom template built on Bootstrap + Pardot Content Regions
          </h2>
          <div className="cs-layers">
            {solution.map((s, i) => (
              <div
                key={s.num}
                className="cs-layer cs-fade"
                ref={addRef}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="cs-layer-num">{s.num}</div>
                <div className="cs-layer-body">
                  <h3 className="cs-layer-title">{s.title}</h3>
                  <p className="cs-layer-text">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code screenshot */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">Implementation</p>
          <h2 className="cs-section-heading">Inside the template</h2>
          <p className="cs-body-text">
            The template combines Bootstrap's responsive grid with Pardot's
            <code className="cs-inline-code">pardot-region</code> attributes to
            define editable zones. The structural HTML and brand styles are locked
            in the template — only the content regions are exposed to the marketer.
          </p>
          <div className="cs-img-container">
            <img src={pardotcode} alt="Pardot template code showing content regions" className="cs-img" />
          </div>
        </div>

        {/* Results */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">Results</p>
          <h2 className="cs-section-heading">
            Adopted across the board
          </h2>
          <div className="cs-metrics">
            {[
              { value: "✓", label: "Increased mobile conversions" },
              { value: "✓", label: "Adopted across all campaigns" },
              { value: "✓", label: "Replaced all legacy templates" },
            ].map((m) => (
              <div key={m.label} className="cs-metric">
                <span className="cs-metric-value">{m.value}</span>
                <span className="cs-metric-label">{m.label}</span>
              </div>
            ))}
          </div>
          <p className="cs-body-text">
            The new template replaced all of the client's existing Pardot landing
            pages and became the standard across every campaign. The designer gained
            full creative freedom within the brand system, and the marketing team
            could make content updates independently — without filing a single
            dev request.
          </p>
        </div>

        {/* Lessons */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">What I Learned</p>
          <h2 className="cs-section-heading">
            The best dev work makes other people's jobs easier
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
          <a href="/portfolio" className="btn cs-nav-btn">← All Projects</a>
          <div className="cs-next">
            <span className="cs-meta-label">Next Case Study</span>
            <a href="/landing" className="cs-next-link">
              Pardot Landing Page Buildout →
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
