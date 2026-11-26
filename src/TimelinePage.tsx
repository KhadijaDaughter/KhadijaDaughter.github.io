export default function TimelinePage() {
  return (
    <main id="main" className="page-main timeline-page" tabIndex={-1}>
      <section className="timeline-hero">
        <span className="eyebrow">EXAMPLE PROJECT IDEAS</span>
        <h1>Creative <span className="gradient-text">notebook</span></h1>
        <p>Starter prompts for stories, art, and small discoveries. Replace them with approved projects whenever they are ready.</p>
      </section>

      <section className="content-section portfolio-video-timeline" aria-labelledby="project-ideas-heading">
        <div className="section-heading">
          <span className="eyebrow">A FEW PLACES TO BEGIN</span>
          <h2 id="project-ideas-heading">Ideas in progress.</h2>
          <p>These are generated examples, not personal facts or finished work.</p>
        </div>
        <div className="feature-grid">
          <article className="feature-card"><span className="feature-icon">01</span><h3>A story spark</h3><p>Imagine a tiny door that appears somewhere unexpected. What might be behind it?</p></article>
          <article className="feature-card"><span className="feature-icon">02</span><h3>A color study</h3><p>Choose three colors and use them to create a picture, pattern, or mood board.</p></article>
          <article className="feature-card"><span className="feature-icon">03</span><h3>A new discovery</h3><p>Pick a topic, ask a question, and collect one new thing to learn about it.</p></article>
        </div>
      </section>
    </main>
  );
}
