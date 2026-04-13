import qgivimg from "../assets/ProjectsDataImages/Qgiv/fullscreennew.png";
import { useEffect, useRef } from "react";
import "../components/Work/Qgiv/Qgiv.css";

const techStack = {
  accent: ["Qgiv Donation Platform", "A/B Testing", "Design Sprint"],
  neutral: ["HTML", "CSS", "Mobile Responsive", "UX Optimization", "Conversion Rate Optimization"],
};

const problems = [
  {
    num: "01",
    title: "The donation form was buried below the fold",
    body: "The original page was dense with copy explaining how donations were used, organizational background, and impact statements. All of it pushed the actual donation form down the page — meaning users had to scroll before they could even begin to give. On mobile, this was especially damaging.",
  },
  {
    num: "02",
    title: "A two-column layout competing with itself",
    body: "The existing layout split the page into two columns — content on one side, form on the other. The result was a visually crowded experience where neither element got the user's full attention. The donation form, the most important element on the page, was fighting for space it should have owned outright.",
  },
  {
    num: "03",
    title: "Trust signals were too far from the action",
    body: "Secure payment copy and trust badges (award icons, security seals) were placed away from the donation button — the exact moment a user needs reassurance before committing. The psychological distance between 'I want to give' and 'this is safe' was creating friction at the worst possible point in the flow.",
  },
];

const changes = [
  {
    num: "01",
    title: "Single column layout — form above the fold",
    body: "Rebuilt the page as a single-column layout so the donation form is the first thing a user sees when the page loads. No scrolling required to find the CTA. The organizational story moved to supporting content rather than competing content, keeping the user focused on the action that matters.",
    tag: "Layout",
  },
  {
    num: "02",
    title: "Static image on desktop, animated GIF on mobile",
    body: "Rather than eliminating the impact copy entirely, we transformed it into a single image that lives at the top of the form on desktop. On mobile, that image becomes an auto-scrolling GIF cycling through the same content — keeping the form compact while preserving the emotional context that motivates donors. A practical, platform-aware solution that served both screen sizes without compromise.",
    tag: "Content Strategy",
  },
  {
    num: "03",
    title: "Trust signals moved adjacent to the give button",
    body: "Secure payment copy and award icons were repositioned directly beside the donation submit button — the moment of highest friction in any checkout flow. The principle is simple: reassure users exactly when they need reassurance, not three scrolls away from where they act on it.",
    tag: "Conversion Psychology",
  },
];

const lessons = [
  {
    heading: "Design sprints only work if dev is in the room.",
    body: "My role wasn't just to build whatever the designers handed off — it was to flag what was technically possible within the Qgiv platform before the team committed to a direction. Catching constraints early in the sprint saved the whole team from designing something that couldn't be built.",
  },
  {
    heading: "Less copy isn't a loss — it's a strategic trade.",
    body: "The instinct to explain everything on a donation page comes from a good place. But every line of copy that isn't the donation form is friction. Converting text to a visual and an animation wasn't dumbing it down — it was respecting how people actually read on screens.",
  },
  {
    heading: "A/B test results are the only honest measure.",
    body: "Everyone on the sprint had opinions about which layout would perform better. The test settled it. Shipping a variant and letting real donor behavior decide is more valuable than any amount of internal debate — and having a winning result to point to is something most frontend work never produces.",
  },
  {
    heading: "Trust is a UX problem, not just a copy problem.",
    body: "Moving the security icons next to the give button wasn't a design preference — it was a conversion principle. Proximity between reassurance and action reduces the cognitive gap a user has to bridge. That's a pattern that applies to any checkout flow, not just nonprofit donations.",
  },
];

export default function qgiv() {
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
          <h1 className="cs-hero-title">Donation Page Design Sprint</h1>
          <p className="cs-hero-sub">
            A cross-functional design sprint to rebuild a nonprofit client's
            donation page — reducing friction, surfacing the form above the fold,
            and producing a variant that won its A/B test against the control.
          </p>
          <div className="cs-meta-row">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Client</span>
              <span className="cs-meta-value">Nonprofit via Qgiv Platform</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">2 Designers · 1 Optimization Specialist · 1 Developer</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Category</span>
              <span className="cs-meta-value">CRO · UX · Frontend</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Result</span>
              <span className="cs-meta-value cs-meta-value--win">✓ Won A/B Test</span>
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
            A donation page working against its own goal
          </h2>
          <p className="cs-body-text">
            Our nonprofit client was processing donations through Qgiv, a purpose-built
            donation platform. The page was live, functional, and generating donations —
            but analytics and user behavior data pointed to a consistent problem:
            users were dropping off before they ever reached the form.
          </p>
          <p className="cs-body-text">
            The optimization specialist flagged it. The designers proposed solutions.
            My role was to bridge both worlds — validating what was technically
            achievable within the Qgiv platform's constraints before the team
            committed to a design direction, then building the winning variant.
          </p>
          <div className="cs-callout">
            <span className="cs-callout-label">The Sprint Structure</span>
            We ran a dual-track process: design sprint first, development sprint
            following immediately after — like a focused mini waterfall. Having dev
            involved during the design phase meant no surprises at handoff.
            Every design decision was validated against what the platform could actually support.
          </div>
        </div>

        {/* Problems */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">What We Found</p>
          <h2 className="cs-section-heading">
            Three friction points killing conversions
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

        {/* Changes */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">The Solution</p>
          <h2 className="cs-section-heading">
            Three changes, each targeting a specific friction point
          </h2>
          <div className="cs-decisions">
            {changes.map((c, i) => (
              <div
                key={c.num}
                className="cs-decision cs-fade"
                ref={addRef}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="cs-decision-header">
                  <div className="cs-layer-num">{c.num}</div>
                  <div>
                    <div className="cs-decision-tag">{c.tag}</div>
                    <h3 className="cs-decision-title">{c.title}</h3>
                  </div>
                </div>
                <p className="cs-layer-text">{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshot */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">The Build</p>
          <h2 className="cs-section-heading">The finished variant</h2>
          <p className="cs-body-text">
            Single column, form above the fold, impact image at the top,
            trust signals adjacent to the give button. Everything the sprint
            identified as friction — removed.
          </p>
          <div className="cs-img-container">
            <img
              src={qgivimg}
              alt="Redesigned Qgiv donation page showing single column layout with form above the fold"
              className="cs-img"
            />
          </div>
        </div>

        {/* Results */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">Results</p>
          <h2 className="cs-section-heading">
            The variant beat the control
          </h2>
          <div className="cs-metrics">
            {[
              { value: "✓", label: "Won A/B test vs control" },
              { value: "3",  label: "Friction points resolved" },
              { value: "4",  label: "Person cross-functional team" },
              { value: "2x", label: "Sprint tracks — design then dev" },
            ].map((m) => (
              <div key={m.label} className="cs-metric">
                <span className="cs-metric-value">{m.value}</span>
                <span className="cs-metric-label">{m.label}</span>
              </div>
            ))}
          </div>
          <p className="cs-body-text">
            The redesigned page was tested against the original control and won.
            Real donor behavior confirmed what the sprint hypothesized — reducing
            visual noise, surfacing the form, and placing trust signals at the
            point of action produced a measurably better experience. The results
            now serve as a benchmark for all future donation page builds.
          </p>
        </div>

        {/* Lessons */}
        <div className="cs-section cs-fade" ref={addRef}>
          <p className="cs-section-label">What I Learned</p>
          <h2 className="cs-section-heading">
            Ship the variant, let the data decide
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
              Pardot Landing Page Template →
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
