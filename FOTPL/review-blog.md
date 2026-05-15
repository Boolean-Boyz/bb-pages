---
layout: fopl
title: Executive Review — Friends of the Poway Library
permalink: /review
description: A recap of our executive review — the feedback we received, what we did well, and what we'll improve.
fopl_nav_active: home
---

<style>
  body { background: #0f1a12; overflow-x: hidden; }

  /* ── Grain overlay ── */
  .fopl-grain {
    position: fixed; inset: 0; pointer-events: none; z-index: 9999; opacity: 0.035;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-repeat: repeat; background-size: 200px 200px;
  }

  /* ── Spotlight ── */
  .fopl-spotlight {
    position: fixed; width: 400px; height: 400px; border-radius: 50%;
    background: radial-gradient(circle, rgba(212,168,83,0.06) 0%, transparent 70%);
    pointer-events: none; z-index: 1; transform: translate(-50%, -50%);
    transition: left 0.3s ease-out, top 0.3s ease-out, opacity 0.4s;
    opacity: 0; will-change: left, top;
  }
  .fopl-spotlight.active { opacity: 1; }

  /* ── Particles ── */
  .fopl-particles { position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
  .fopl-particle {
    position: absolute; font-family: 'Libre Baskerville', serif;
    color: rgba(212,168,83,0.1); animation: fopl-float linear infinite;
    will-change: transform; user-select: none; pointer-events: none;
  }
  @keyframes fopl-float {
    0%   { transform: translateY(100vh) rotate(0deg); opacity: 0; }
    10%  { opacity: 1; }
    90%  { opacity: 1; }
    100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
  }

  /* ── Scroll reveal ── */
  .fopl-reveal {
    opacity: 0; transform: translateY(36px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .fopl-reveal.visible { opacity: 1; transform: translateY(0); }

  /* ── Hero ── */
  .blog-hero {
    color: #fff;
    padding: 100px 40px 90px;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center; position: relative; overflow: hidden; min-height: 65vh;
  }
  .blog-hero::before {
    content: ''; position: absolute; inset: -50%;
    background:
      radial-gradient(ellipse at 20% 50%, rgba(212,168,83,0.07) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 20%, rgba(45,184,77,0.04) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 80%, rgba(212,168,83,0.04) 0%, transparent 50%);
    animation: fopl-mesh 16s ease-in-out infinite alternate; pointer-events: none; z-index: 0;
  }
  @keyframes fopl-mesh {
    0%   { transform: scale(1) rotate(0deg); }
    100% { transform: scale(1.1) rotate(2deg); }
  }
  .blog-hero > * { position: relative; z-index: 2; }

  .blog-hero-eyebrow {
    font-family: 'Cabin', sans-serif; font-size: 0.65rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.35em; color: rgba(212,168,83,0.55);
    margin: 0 0 28px;
  }
  .blog-hero-eyebrow::before, .blog-hero-eyebrow::after {
    content: '\2022'; display: inline-block; margin: 0 12px;
    font-size: 0.4rem; vertical-align: middle; color: rgba(212,168,83,0.3);
  }
  .blog-hero h1 {
    font-family: 'Libre Baskerville', serif; font-size: 3.4rem; font-weight: 700;
    color: #fff; margin: 0 0 20px; border: none; line-height: 1.1;
    letter-spacing: -0.02em; text-transform: none;
  }
  .blog-hero-sub {
    font-family: 'Lato', sans-serif; font-weight: 300; font-size: 1.05rem;
    color: rgba(255,255,255,0.45); max-width: 440px; line-height: 1.9; margin: 0 auto;
  }

  /* ── Scroll hint ── */
  .fopl-scroll-hint {
    position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    z-index: 3; opacity: 0.3;
  }
  .fopl-scroll-hint span {
    font-family: 'Cabin', sans-serif; font-size: 0.6rem;
    text-transform: uppercase; letter-spacing: 0.2em; color: #fff;
  }
  .fopl-scroll-arrow {
    width: 16px; height: 16px;
    border-right: 1.5px solid rgba(255,255,255,0.5);
    border-bottom: 1.5px solid rgba(255,255,255,0.5);
    transform: rotate(45deg); animation: fopl-bob 2s ease-in-out infinite;
  }
  @keyframes fopl-bob {
    0%, 100% { transform: rotate(45deg) translate(0,0); }
    50%       { transform: rotate(45deg) translate(3px,3px); }
  }

  /* ── Wrap ── */
  .blog-wrap { max-width: 900px; margin: 0 auto; padding: 72px 32px 96px; position: relative; z-index: 2; }

  /* ── Section label ── */
  .blog-label {
    font-family: 'Cabin', sans-serif; font-size: 0.65rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.22em; color: rgba(212,168,83,0.55);
    margin: 0 0 28px; display: block; text-align: center;
  }

  /* ── Intro glass block ── */
  .blog-intro {
    background: rgba(255,255,255,0.05); backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.08); border-radius: 16px;
    padding: 36px 40px; margin-bottom: 64px;
    font-family: 'Libre Baskerville', serif; font-size: 1.08rem;
    line-height: 2; color: rgba(255,255,255,0.7); font-style: italic;
    text-align: center; position: relative;
  }
  .blog-intro::before {
    content: '\201C'; font-size: 5rem; line-height: 1;
    color: rgba(212,168,83,0.15); font-family: 'Libre Baskerville', serif;
    position: absolute; top: 8px; left: 24px;
  }

  /* ── Gold line divider ── */
  .blog-divider {
    display: flex; align-items: center; justify-content: center;
    padding: 12px 0 48px;
  }
  .blog-divider-inner {
    width: 100%; max-width: 600px; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(212,168,83,0.3), rgba(212,168,83,0.3), transparent);
    position: relative;
  }
  .blog-divider-dot {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    background: #0f1a12; padding: 4px 10px;
  }

  /* ── Pros / Cons grid ── */
  .feedback-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 64px; }
  @media (max-width: 640px) { .feedback-grid { grid-template-columns: 1fr; } }

  .feedback-card {
    background: rgba(255,255,255,0.05); backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.08); border-radius: 16px;
    padding: 28px 30px; transition: border-color 0.4s, background 0.4s;
  }
  .feedback-card:hover { background: rgba(255,255,255,0.07); }
  .feedback-card.pros { border-top: 2px solid rgba(45,184,77,0.5); }
  .feedback-card.cons { border-top: 2px solid rgba(212,68,68,0.5); }
  .feedback-card.pros:hover { border-color: rgba(45,184,77,0.6); border-top-color: rgba(45,184,77,0.7); }
  .feedback-card.cons:hover { border-color: rgba(212,68,68,0.4); border-top-color: rgba(212,68,68,0.7); }

  .feedback-card-head {
    display: flex; align-items: center; gap: 10px;
    font-family: 'Cabin', sans-serif; font-size: 0.72rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 20px;
  }
  .feedback-card.pros .feedback-card-head { color: rgba(100,220,120,0.8); }
  .feedback-card.cons .feedback-card-head { color: rgba(240,100,100,0.8); }
  .feedback-card-head-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
  .pros .feedback-card-head-dot { background: rgba(100,220,120,0.8); }
  .cons .feedback-card-head-dot { background: rgba(240,100,100,0.8); }

  .feedback-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
  .feedback-list li {
    display: flex; align-items: flex-start; gap: 12px;
    font-family: 'Lato', sans-serif; font-weight: 300;
    font-size: 0.95rem; color: rgba(255,255,255,0.7); line-height: 1.7;
  }
  .feedback-list li svg { flex-shrink: 0; margin-top: 3px; }

  /* ── Pull quote ── */
  .blog-quote {
    background: rgba(212,168,83,0.06); border: 1px solid rgba(212,168,83,0.18);
    border-radius: 16px; padding: 40px 48px; margin-bottom: 64px;
    text-align: center; position: relative;
  }
  .blog-quote::before {
    content: '\201C'; font-family: 'Libre Baskerville', serif; font-size: 6rem; line-height: 1;
    color: rgba(212,168,83,0.15); position: absolute; top: 0px; left: 24px;
  }
  .blog-quote p {
    font-family: 'Libre Baskerville', serif; font-size: 1.25rem; font-style: italic;
    color: rgba(255,255,255,0.8); line-height: 1.8; margin: 0 0 16px;
  }
  .blog-quote cite {
    font-family: 'Cabin', sans-serif; font-size: 0.7rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.15em; color: rgba(212,168,83,0.6);
  }

  /* ── Takeaways ── */
  .takeaway-list { display: flex; flex-direction: column; gap: 2px; margin-bottom: 64px; }
  .takeaway-item {
    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px; padding: 24px 28px; display: flex; gap: 20px;
    align-items: flex-start; transition: background 0.3s, border-color 0.3s;
    margin-bottom: 12px;
  }
  .takeaway-item:hover { background: rgba(255,255,255,0.07); border-color: rgba(212,168,83,0.2); }
  .takeaway-num {
    flex-shrink: 0; width: 34px; height: 34px; border-radius: 50%;
    background: rgba(212,168,83,0.1); border: 1px solid rgba(212,168,83,0.25);
    color: #d4a853; font-family: 'Cabin', sans-serif; font-size: 0.82rem; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
  }
  .takeaway-body h4 {
    font-family: 'Cabin', sans-serif; font-size: 0.78rem; font-weight: 700;
    color: rgba(212,168,83,0.75); text-transform: uppercase; letter-spacing: 0.1em;
    margin: 0 0 6px; border: none;
  }
  .takeaway-body p {
    font-family: 'Lato', sans-serif; font-weight: 300;
    font-size: 0.95rem; color: rgba(255,255,255,0.6); line-height: 1.75; margin: 0;
  }

  /* ── Quotes grid ── */
  .quotes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 0; }
  @media (max-width: 640px) { .quotes-grid { grid-template-columns: 1fr; } }

  .quote-card {
    background: rgba(212,168,83,0.05); border: 1px solid rgba(212,168,83,0.14);
    border-radius: 14px; padding: 28px 28px 22px; position: relative;
    transition: background 0.3s, border-color 0.3s;
  }
  .quote-card:hover { background: rgba(212,168,83,0.09); border-color: rgba(212,168,83,0.25); }
  .quote-mark {
    font-family: 'Libre Baskerville', serif; font-size: 3.5rem; line-height: 1;
    color: rgba(212,168,83,0.2); position: absolute; top: 10px; left: 18px;
  }
  .quote-card p {
    font-family: 'Libre Baskerville', serif !important; font-size: 0.98rem !important; font-style: italic !important;
    color: rgba(255,255,255,0.75) !important; line-height: 1.8 !important; margin: 0 0 14px !important; padding-top: 8px !important;
  }
  .quote-card cite {
    font-family: 'Cabin', sans-serif !important; font-size: 0.65rem !important; font-weight: 700 !important;
    text-transform: uppercase !important; letter-spacing: 0.14em !important; color: rgba(212,168,83,0.5) !important;
    font-style: normal !important;
  }

  /* ── Closing ── */
  .blog-closing {
    background: rgba(255,255,255,0.04); border: 1px solid rgba(212,168,83,0.15);
    border-radius: 16px; padding: 36px 40px; text-align: center;
  }
  .blog-closing p {
    font-family: 'Lato', sans-serif; font-weight: 300; font-size: 1rem;
    color: rgba(255,255,255,0.65); line-height: 1.9; margin: 0;
  }
  .blog-closing strong { color: #d4a853; font-weight: 600; }

  @media (max-width: 640px) {
    .blog-hero { padding: 72px 20px 64px; min-height: 55vh; }
    .blog-hero h1 { font-size: 2.2rem; }
    .blog-wrap { padding: 48px 18px 64px; }
    .blog-intro { padding: 28px 24px; }
    .blog-quote { padding: 32px 28px; }
  }
</style>

<div class="fopl-grain"></div>
<div class="fopl-spotlight" id="blog-spotlight"></div>
<div class="fopl-particles" id="blog-particles"></div>

<!-- Hero -->
<div class="blog-hero">
  <p class="blog-hero-eyebrow fopl-reveal">Micron Tech Man · April 2026</p>
  <h1 class="fopl-reveal">What We Learned</h1>
  <p class="blog-hero-sub fopl-reveal">
    A look at the feedback from our capstone review with Micron Tech Man: what landed, what missed, and where we go from here.
  </p>
  <div class="fopl-scroll-hint">
    <span>Scroll</span>
    <div class="fopl-scroll-arrow"></div>
  </div>
</div>

<div class="blog-wrap">

  <!-- Pros / Cons -->
  <span class="blog-label fopl-reveal">Feedback Breakdown</span>
  <div class="feedback-grid fopl-reveal">

    <div class="feedback-card pros">
      <div class="feedback-card-head">
        <span class="feedback-card-head-dot"></span>
        What Went Well
      </div>
      <ul class="feedback-list">
        <li>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(100,220,120,0.7)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          The facial scanner was a standout feature that draws people in.
        </li>
        <li>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(100,220,120,0.7)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          The book scanner was noted as a cool and practical addition.
        </li>
        <li>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(100,220,120,0.7)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          The capstone page was detailed and closely represented the project.
        </li>
        <li>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(100,220,120,0.7)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          The clickable trees showed personality and a sense of fun in the design.
        </li>
      </ul>
    </div>

    <div class="feedback-card cons">
      <div class="feedback-card-head">
        <span class="feedback-card-head-dot"></span>
        What We Can Improve
      </div>
      <ul class="feedback-list">
        <li>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(240,100,100,0.7)" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          We spoke negatively about the previous website. Let the work speak for itself.
        </li>
        <li>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(240,100,100,0.7)" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          We did not introduce ourselves at the start of the presentation.
        </li>
        <li>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(240,100,100,0.7)" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          We didn&rsquo;t show the user vs. admin experience side by side.
        </li>
      </ul>
    </div>

  </div>

  <!-- Takeaways -->
  <span class="blog-label fopl-reveal">What We Are Taking Forward</span>
  <div class="takeaway-list">

    <div class="takeaway-item fopl-reveal">
      <div class="takeaway-num">1</div>
      <div class="takeaway-body">
        <h4>Lead with introductions</h4>
        <p>Future presentations will open with a proper team introduction covering names, roles, and what each person contributed before the demo begins.</p>
      </div>
    </div>

    <div class="takeaway-item fopl-reveal">
      <div class="takeaway-num">2</div>
      <div class="takeaway-body">
        <h4>Show the full user vs. admin experience</h4>
        <p>We will build out a demo flow showing the same features from both angles: a visitor browsing the catalog vs. an admin editing it, a user viewing the calendar vs. an admin adding events, and the public site vs. the admin dashboard.</p>
      </div>
    </div>

    <div class="takeaway-item fopl-reveal">
      <div class="takeaway-num">3</div>
      <div class="takeaway-body">
        <h4>Stay positive</h4>
        <p>There is no need to put down previous work to make our project look better. We will focus entirely on what our platform offers and let the features make the case.</p>
      </div>
    </div>

    <div class="takeaway-item fopl-reveal">
      <div class="takeaway-num">4</div>
      <div class="takeaway-body">
        <h4>Keep the personality</h4>
        <p>Micron Tech Man responded well to the fun, human touches like the face scanner, the clickable trees, and the games. We will keep building with that same spirit.</p>
      </div>
    </div>

  </div>

  <!-- Closing -->
  <div class="blog-closing fopl-reveal">
    <p>Specific, honest feedback is one of the most useful things you can walk away from a review with. We are proud of what the team built and are taking every note forward.</p>
  </div>

  <!-- Divider -->
  <div class="blog-divider" style="padding-top:48px;">
    <div class="blog-divider-inner">
      <div class="blog-divider-dot">
        <svg width="20" height="16" viewBox="0 0 24 20" fill="none" stroke="rgba(212,168,83,0.5)" stroke-width="1.5">
          <path d="M2 3h6a4 4 0 0 1 4 4 4 4 0 0 1 4-4h6"/>
          <path d="M2 3v14a1 1 0 0 0 1 1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 0 1-1V3"/>
        </svg>
      </div>
    </div>
  </div>

  <!-- Quotes -->
  <span class="blog-label fopl-reveal">Words From the Review</span>
  <div class="quotes-grid fopl-reveal">

    <div class="quote-card">
      <div class="quote-mark">&ldquo;</div>
      <p>The facial scanner is an amazing hook for people. It&rsquo;s cool that you are also trying to have fun with this.</p>
      <cite>Micron Tech Man</cite>
    </div>

    <div class="quote-card">
      <div class="quote-mark">&ldquo;</div>
      <p>It&rsquo;s remarkable how you guys are really thinking about the user&rsquo;s experience while using this website.</p>
      <cite>Micron Tech Man</cite>
    </div>

    <div class="quote-card">
      <div class="quote-mark">&ldquo;</div>
      <p>I like the words you guys are using like &ldquo;We want to bring the user back.&rdquo;</p>
      <cite>Micron Tech Man</cite>
    </div>

    <div class="quote-card">
      <div class="quote-mark">&ldquo;</div>
      <p>This website looks very well organized.</p>
      <cite>Micron Tech Man</cite>
    </div>

  </div>

</div>

<script>
(function() {
  // Spotlight
  var spotlight = document.getElementById('blog-spotlight');
  document.addEventListener('mousemove', function(e) {
    spotlight.style.left = e.clientX + 'px';
    spotlight.style.top  = e.clientY + 'px';
    spotlight.classList.add('active');
  });
  document.addEventListener('mouseleave', function() {
    spotlight.classList.remove('active');
  });

  // Particles
  var container = document.getElementById('blog-particles');
  var glyphs = ['A','B','p','e','§','&','L','r','k','d','R','f','¶','N','S','W','m','T'];
  for (var i = 0; i < 16; i++) {
    var p = document.createElement('div');
    p.className = 'fopl-particle';
    p.textContent = glyphs[i % glyphs.length];
    var size = 10 + Math.random() * 16;
    p.style.fontSize = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (18 + Math.random() * 28) + 's';
    p.style.animationDelay = -(Math.random() * 30) + 's';
    p.style.opacity = 0.05 + Math.random() * 0.08;
    container.appendChild(p);
  }

  // Scroll reveal
  var reveals = document.querySelectorAll('.fopl-reveal');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function(el) { obs.observe(el); });
  } else {
    reveals.forEach(function(el) { el.classList.add('visible'); });
  }
})();
</script>
