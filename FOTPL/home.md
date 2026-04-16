---
layout: fopl
title: Friends of the Poway Library
permalink: /home
description: Friends of the Poway Library — supporting literacy, community programs, and the Poway Library since 1978.
fopl_nav_active: home
---

<style>
  body { background: #023b0f; }

  /* ── Scroll-reveal animation ── */
  .fopl-reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .fopl-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── Typewriter cursor ── */
  .fopl-typewriter-cursor {
    display: inline-block;
    width: 3px;
    height: 1em;
    background: #fff;
    margin-left: 4px;
    vertical-align: text-bottom;
    animation: fopl-blink 0.75s step-end infinite;
  }
  @keyframes fopl-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  /* ── Hero ── */
  .fopl-hero {
    background: #023b0f;
    color: #fff;
    padding: 48px 24px 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .fopl-hero-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    margin-bottom: 8px;
  }

  .fopl-hero-logo {
    height: 56px;
    width: auto;
    flex-shrink: 0;
  }

  .fopl-hero h1 {
    font-family: 'Cabin', sans-serif;
    font-size: 2.4rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: 0.02em;
    color: #fff;
    border: none;
    text-align: center;
    line-height: 1.2;
  }
  .fopl-hero .fopl-hero-tagline {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: rgba(255,255,255,0.5);
    font-family: 'Cabin', sans-serif;
    font-weight: 600;
    margin: 0 0 10px;
    text-align: center;
    display: block;
    width: 100%;
  }
  .fopl-hero p {
    font-size: 1.05rem;
    opacity: 0.8;
    margin: 12px 0 28px;
    line-height: 1.7;
    text-align: center;
    max-width: 540px;
  }
  .fopl-hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .fopl-hero-btn {
    display: inline-block;
    padding: 11px 28px;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border-radius: 6px;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s, background 0.2s, color 0.2s;
  }
  .fopl-hero-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(0,0,0,0.3);
  }
  .fopl-hero-btn.primary { background: #f0c341; color: #1a2e1a; }
  .fopl-hero-btn.primary:hover { background: #f5d777; }
  .fopl-hero-btn.outline { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.5); }
  .fopl-hero-btn.outline:hover { background: rgba(255,255,255,0.1); border-color: #fff; }
  .fopl-hero-btn.games {
    background: transparent;
    color: #fff;
    border: 2px solid rgba(255,255,255,0.5);
  }
  .fopl-hero-btn.games:hover { background: rgba(255,255,255,0.1); border-color: #fff; }

  /* ── Stats counter strip ── */
  .fopl-stats {
    background: #012d0b;
    padding: 36px 40px;
    display: flex;
    justify-content: center;
    gap: 60px;
    flex-wrap: wrap;
    border-top: 1px solid rgba(255,255,255,0.06);
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  body.fopl-dark .fopl-stats { background: #111; }
  .fopl-stat {
    text-align: center;
    color: #fff;
  }
  .fopl-stat-number {
    font-family: 'Cabin', sans-serif;
    font-size: 2.4rem;
    font-weight: 700;
    color: #f0c341;
    line-height: 1;
    margin-bottom: 6px;
  }
  .fopl-stat-label {
    font-family: 'Cabin', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(255,255,255,0.55);
  }

  /* ── Cards ── */
  .fopl-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 32px 40px 20px;
    background: transparent;
    max-width: 1060px;
    margin: 0 auto;
  }
  body.fopl-dark .fopl-cards { background: transparent; }

  /* ── CSS mini book for card icon ── */
  .css-book {
    width: 28px; height: 36px;
    position: relative;
    display: inline-block;
  }
  .css-book .spine {
    position: absolute; left: 0; top: 0;
    width: 6px; height: 100%;
    background: #023b0f;
    border-radius: 2px 0 0 2px;
  }
  .css-book .cover {
    position: absolute; left: 6px; top: 0;
    width: 22px; height: 100%;
    background: #2e7d32;
    border-radius: 0 3px 3px 0;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.25);
  }
  .css-book .page-line {
    position: absolute; top: 10px; left: 12px;
    width: 12px; height: 2px;
    background: rgba(255,255,255,0.5);
    border-radius: 1px;
    box-shadow: 0 5px 0 rgba(255,255,255,0.4), 0 10px 0 rgba(255,255,255,0.3);
  }

  .fopl-card-flip {
    perspective: 900px;
    min-height: 260px;
  }
  .fopl-card-flip-inner {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 260px;
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    transform-style: preserve-3d;
  }
  .fopl-card-flip:hover .fopl-card-flip-inner {
    transform: rotateY(180deg);
  }
  .fopl-card-front, .fopl-card-back {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    border-radius: 10px;
    padding: 28px 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .fopl-card-front {
    background: #fff;
    box-shadow: 0 2px 12px rgba(0,0,0,0.1);
    border: 1px solid rgba(255,255,255,0.08);
  }
  body.fopl-dark .fopl-card-front {
    background: #1e1e1e;
    box-shadow: 0 1px 8px rgba(0,0,0,0.3);
  }
  .fopl-card-back {
    background: #012d0b;
    color: #fff;
    transform: rotateY(180deg);
    border: 1px solid rgba(255,255,255,0.1);
  }
  body.fopl-dark .fopl-card-back {
    background: #0a1f0e;
  }
  .fopl-card-back p {
    font-size: 0.92rem;
    line-height: 1.7;
    margin: 0 0 18px;
    color: rgba(255,255,255,0.85);
  }
  .fopl-card-back a {
    display: inline-block;
    color: #fff;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    text-decoration: none;
    border: 1.5px solid rgba(255,255,255,0.5);
    border-radius: 6px;
    padding: 8px 20px;
    transition: background 0.2s, border-color 0.2s;
  }
  .fopl-card-back a:hover { background: rgba(255,255,255,0.12); border-color: #fff; }

  /* Staggered card entrance */
  .fopl-card-flip.fopl-reveal { transition-delay: 0s; }
  .fopl-card-flip.fopl-reveal:nth-child(2) { transition-delay: 0.08s; }
  .fopl-card-flip.fopl-reveal:nth-child(3) { transition-delay: 0.16s; }
  .fopl-card-flip.fopl-reveal:nth-child(4) { transition-delay: 0.24s; }

  .fopl-card-icon {
    width: 48px; height: 48px;
    margin: 0 auto 12px;
    border-radius: 10px;
    background: #e8f5e9;
    color: #023b0f;
    font-family: 'Cabin', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  body.fopl-dark .fopl-card-icon { background: #1a3d1f; color: #58e87a; }
  .fopl-card-front h3 {
    font-family: 'Cabin', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #023b0f;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0 0 8px;
    border: none;
  }
  body.fopl-dark .fopl-card-front h3 { color: #e8f5e9; }
  .fopl-card-front p { font-size: 0.9rem; color: #666; line-height: 1.6; margin: 0; }
  body.fopl-dark .fopl-card-front p { color: #999; }
  .fopl-card-flip-hint {
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(2,59,15,0.25);
    font-family: 'Cabin', sans-serif;
    font-weight: 600;
    margin-top: 12px;
  }
  body.fopl-dark .fopl-card-flip-hint { color: rgba(255,255,255,0.2); }

  /* ── About strip ── */
  .fopl-about {
    padding: 44px 40px;
    max-width: 780px;
    margin: 0 auto;
    text-align: center;
    background: rgba(255,255,255,0.03);
    border-radius: 12px;
    margin-top: 12px;
  }
  .fopl-about h2 {
    font-family: 'Cabin', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: #fff !important;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin: 0 0 14px;
    border: none;
  }
  .fopl-about p { font-size: 1rem; color: rgba(255,255,255,0.8) !important; line-height: 1.8; margin: 0; }

  /* ── Quick Links section ── */
  .fopl-quick-links {
    background: #012d0b;
    padding: 40px 40px;
    text-align: center;
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  body.fopl-dark .fopl-quick-links { background: #111; }
  .fopl-quick-links h2 {
    font-family: 'Cabin', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: rgba(255,255,255,0.9);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin: 0 0 24px;
    border: none;
  }
  body.fopl-dark .fopl-quick-links h2 { color: #e8f5e9; }
  .fopl-quick-links-grid {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    max-width: 700px;
    margin: 0 auto;
  }
  .fopl-quick-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: transparent;
    color: #fff;
    font-family: 'Cabin', sans-serif;
    font-weight: 600;
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-decoration: none;
    border-radius: 6px;
    border: 1.5px solid rgba(255,255,255,0.25);
    transition: transform 0.2s, background 0.2s, border-color 0.2s;
  }
  .fopl-quick-link:hover {
    background: rgba(255,255,255,0.08);
    border-color: rgba(255,255,255,0.5);
    transform: translateY(-1px);
  }
  body.fopl-dark .fopl-quick-link {
    border-color: rgba(88,232,122,0.3);
    color: #e8f5e9;
  }
  body.fopl-dark .fopl-quick-link:hover {
    background: rgba(88,232,122,0.1);
    border-color: #2db84d;
  }
  .fopl-quick-link svg {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
  }

  /* ── Dark mode body overrides ── */
  body.fopl-dark { background: #121212 !important; }
  body.fopl-dark .fopl-hero { background: #121212; }
  body.fopl-dark .fopl-about { color: #fff; }

  @media (max-width: 900px) {
    .fopl-hero { padding: 24px 20px 28px; }
  }
  @media (max-width: 640px) {
    .fopl-hero h1 { font-size: 1.6rem; }
    .fopl-hero-row { flex-direction: column; gap: 8px; }
    .fopl-hero-logo { height: 44px; }
    .fopl-cards { padding: 28px 18px; gap: 16px; grid-template-columns: repeat(2, 1fr); }
    .fopl-about { padding: 32px 20px; }
    .fopl-stats { padding: 28px 20px; gap: 32px; }
    .fopl-stat-number { font-size: 1.8rem; }
    .fopl-quick-links { padding: 32px 20px; }
    .fopl-card-flip { min-height: 240px; }
    .fopl-card-flip-inner { min-height: 240px; }
  }
</style>

<!-- Hero -->
<div class="fopl-hero">
  <div class="fopl-hero-center" style="text-align:center;padding:0 24px;max-width:680px;margin:0 auto;">
    <p class="fopl-hero-tagline">Supporting literacy since 1978</p>
    <div class="fopl-hero-row">
      <img class="fopl-hero-logo" src="{{ '/FOTPL/Images/fopllogo.png' | relative_url }}" alt="FOPL Logo">
      <h1 id="fopl-hero-title"></h1>
    </div>
    <p>
      A nonprofit volunteer organization supporting the Poway Library
      through fundraising, advocacy, and community programs.
    </p>
    <div class="fopl-hero-btns">
      <a class="fopl-hero-btn primary" href="/bookstore">Visit Our Bookstore</a>
      <a class="fopl-hero-btn outline" href="/contact">Get Involved</a>
      <a class="fopl-hero-btn games" href="/puzzles">Play Games</a>
    </div>
  </div>
</div>

<!-- Stats counter -->
<div class="fopl-stats fopl-reveal">
  <div class="fopl-stat">
    <div class="fopl-stat-number" data-target="48">0</div>
    <div class="fopl-stat-label">Years Serving Poway</div>
  </div>
  <div class="fopl-stat">
    <div class="fopl-stat-number" data-target="1978">0</div>
    <div class="fopl-stat-label">Year Founded</div>
  </div>
  <div class="fopl-stat">
    <div class="fopl-stat-number">501(c)(3)</div>
    <div class="fopl-stat-label">Nonprofit Organization</div>
  </div>
</div>

<!-- Feature cards (book-flip) -->
<div class="fopl-cards">
  <div class="fopl-card-flip fopl-reveal">
    <div class="fopl-card-flip-inner">
      <div class="fopl-card-front">
        <div class="fopl-card-icon">
          <div class="css-book"><div class="spine"></div><div class="cover"></div><div class="page-line"></div></div>
        </div>
        <h3>Bookstore</h3>
        <p>Gently used books, magazines, DVDs, puzzles and more — all at great prices.</p>
        <span class="fopl-card-flip-hint">Hover to flip</span>
      </div>
      <div class="fopl-card-back">
        <p>Browse thousands of titles organized by genre. New inventory arrives weekly from generous community donations.</p>
        <a href="/bookstore">Browse the Store</a>
      </div>
    </div>
  </div>
  <div class="fopl-card-flip fopl-reveal">
    <div class="fopl-card-flip-inner">
      <div class="fopl-card-front">
        <div class="fopl-card-icon">News</div>
        <h3>Newsletters</h3>
        <p>Stay up to date with our latest news, events, and library updates.</p>
        <span class="fopl-card-flip-hint">Hover to flip</span>
      </div>
      <div class="fopl-card-back">
        <p>Monthly updates featuring upcoming events, new arrivals, volunteer spotlights, and community stories.</p>
        <a href="/news">Read Newsletters</a>
      </div>
    </div>
  </div>
  <div class="fopl-card-flip fopl-reveal">
    <div class="fopl-card-flip-inner">
      <div class="fopl-card-front">
        <div class="fopl-card-icon">Help</div>
        <h3>Volunteer</h3>
        <p>Help sort donations, staff the bookstore, and support your community.</p>
        <span class="fopl-card-flip-hint">Hover to flip</span>
      </div>
      <div class="fopl-card-back">
        <p>Join our team of dedicated volunteers. Flexible schedules available — every hour makes a difference.</p>
        <a href="/contact">Join Us</a>
      </div>
    </div>
  </div>
  <div class="fopl-card-flip fopl-reveal">
    <div class="fopl-card-flip-inner">
      <div class="fopl-card-front">
        <div class="fopl-card-icon">Visit</div>
        <h3>Visit Us</h3>
        <p>13137 Poway Rd, Poway CA 92064</p>
        <span class="fopl-card-flip-hint">Hover to flip</span>
      </div>
      <div class="fopl-card-back">
        <p>Located inside the Poway Branch Library. Call us at <strong>858-513-2862</strong> for hours and directions.</p>
        <a href="/contact">Get Directions</a>
      </div>
    </div>
  </div>
</div>

<!-- About -->
<div class="fopl-about fopl-reveal">
  <h2>About Us</h2>
  <p>
    The Friends of the Poway Library is a 501(c)(3) nonprofit organization dedicated to
    enriching our community through support of the Poway Branch Library. We raise funds
    through our used bookstore and special sales, and use those funds to sponsor library
    programs, purchase materials, and advocate for library services.
  </p>
</div>

<!-- Quick Links (displaced nav items) -->
<div class="fopl-quick-links fopl-reveal">
  <h2>Explore More</h2>
  <div class="fopl-quick-links-grid">
    <a class="fopl-quick-link" href="/history">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      History
    </a>
    <a class="fopl-quick-link" href="/catalog">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
      Catalog
    </a>
    <a class="fopl-quick-link" href="/news">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      Newsletters
    </a>
    <a class="fopl-quick-link" href="/puzzles">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="9" height="9" rx="1"/><rect x="13" y="2" width="9" height="9" rx="1"/><rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/></svg>
      Puzzles &amp; Games
    </a>
    <a class="fopl-quick-link" href="/contact">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      Contact Us
    </a>
  </div>
</div>

<!-- Typewriter + Scroll-reveal + Counter + Dark mode scripts -->
<script>
(function() {
  // ── Dark mode: restore from localStorage ──
  if (localStorage.getItem('fopl_dark') === '1') {
    document.body.classList.add('fopl-dark');
  }

  // Typewriter effect for hero title
  const title = 'Friends of the Poway Library';
  const el = document.getElementById('fopl-hero-title');
  if (el) {
    let i = 0;
    const cursor = document.createElement('span');
    cursor.className = 'fopl-typewriter-cursor';
    el.textContent = '';
    el.appendChild(cursor);
    function type() {
      if (i < title.length) {
        el.insertBefore(document.createTextNode(title[i]), cursor);
        i++;
        setTimeout(type, 55);
      } else {
        setTimeout(function() { cursor.style.display = 'none'; }, 2000);
      }
    }
    type();
  }

  // Scroll-reveal with IntersectionObserver
  const reveals = document.querySelectorAll('.fopl-reveal');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function(el) { obs.observe(el); });
  } else {
    reveals.forEach(function(el) { el.classList.add('visible'); });
  }

  // Counter animation for stats
  const counters = document.querySelectorAll('.fopl-stat-number[data-target]');
  if ('IntersectionObserver' in window) {
    const cObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1800;
          const start = performance.now();
          function step(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          cObs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    counters.forEach(function(el) { cObs.observe(el); });
  }
})();
</script>


