---
layout: fopl
title: FOTPL Product Pitch Board
permalink: /fopl-pitch-script
description: A visual sales pitch board for the Friends of the Poway Library web platform.
fopl_nav_active: home
---

<style>
  body { background: #f3f7f3; }

  .board {
    max-width: 1140px;
    margin: 0 auto;
    padding: 24px 16px 56px;
  }

  .top {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 14px;
  }

  .hero {
    border-radius: 12px;
    padding: 34px 26px;
    background:
      linear-gradient(130deg, rgba(2,59,15,0.9), rgba(7,96,32,0.76)),
      url('/FOTPL/Images/foplbuilding.png') center/cover no-repeat;
    color: #fff;
    box-shadow: 0 10px 28px rgba(2,59,15,0.22);
  }
  .hero h1 {
    margin: 0 0 10px;
    border: none;
    color: #fff;
    font-family: 'Cabin', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 2rem;
  }
  .hero p {
    margin: 0;
    max-width: 680px;
    line-height: 1.7;
    font-size: 1.03rem;
    opacity: 0.96;
  }
  .tagline {
    margin-top: 14px;
    display: inline-block;
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.35);
    border-radius: 999px;
    padding: 7px 12px;
    font-size: 0.74rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 700;
  }

  .evidence {
    background: #fff;
    border: 1px solid #d7e4d7;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 4px 16px rgba(2,59,15,0.08);
  }
  .evidence h2 {
    margin: 0 0 10px;
    border: none;
    color: #023b0f;
    font-family: 'Cabin', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.96rem;
  }
  .evidence a {
    display: block;
    text-decoration: none;
    margin-bottom: 8px;
    padding: 9px 10px;
    border-radius: 8px;
    background: #f6fbf6;
    border: 1px solid #dbe8db;
    color: #234927;
    font-size: 0.88rem;
    font-weight: 700;
  }

  .middle {
    margin-top: 14px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }

  .tile {
    background: #fff;
    border: 1px solid #d7e4d7;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 4px 16px rgba(2,59,15,0.08);
  }
  .tile h3 {
    margin: 0 0 8px;
    border: none;
    color: #023b0f;
    font-family: 'Cabin', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.9rem;
  }
  .tile p {
    margin: 0;
    font-size: 0.92rem;
    color: #3b513e;
    line-height: 1.6;
  }

  .tour {
    margin-top: 14px;
    background: #fff;
    border: 1px solid #d7e4d7;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 4px 16px rgba(2,59,15,0.08);
  }
  .tour h2 {
    margin: 0 0 12px;
    border: none;
    color: #023b0f;
    font-family: 'Cabin', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.96rem;
  }
  .steps {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 10px;
  }
  .step {
    border: 1px solid #dce9dc;
    border-radius: 10px;
    background: #f7fcf7;
    padding: 10px;
  }
  .step .n {
    font-size: 0.72rem;
    color: #1f5e28;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 700;
    margin-bottom: 4px;
  }
  .step .r {
    display: inline-block;
    background: #edf6ed;
    border: 1px solid #d3e4d3;
    border-radius: 6px;
    padding: 1px 6px;
    color: #023b0f;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.78rem;
    margin-bottom: 5px;
    font-weight: 700;
  }
  .step p {
    margin: 0;
    color: #445b47;
    font-size: 0.84rem;
    line-height: 1.45;
  }

  .visuals {
    margin-top: 14px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }
  .shot {
    border: 1px solid #d7e4d7;
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 4px 16px rgba(2,59,15,0.08);
  }
  .shot img {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
  }
  .shot div {
    padding: 10px 12px;
    font-size: 0.84rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #295030;
    background: #f6fbf6;
  }

  .script {
    margin-top: 14px;
    background: #fff;
    border: 1px solid #d7e4d7;
    border-left: 5px solid #023b0f;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 4px 16px rgba(2,59,15,0.08);
  }
  .script h2 {
    margin: 0 0 10px;
    border: none;
    color: #023b0f;
    font-family: 'Cabin', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.96rem;
  }
  .script p {
    margin: 0 0 10px;
    color: #2c3f2f;
    line-height: 1.75;
  }

  @media (max-width: 980px) {
    .top { grid-template-columns: 1fr; }
    .middle { grid-template-columns: 1fr; }
    .steps { grid-template-columns: 1fr 1fr; }
    .visuals { grid-template-columns: 1fr; }
  }

  @media (max-width: 560px) {
    .steps { grid-template-columns: 1fr; }
  }
</style>

<div class="board">
  <section class="top">
    <article class="hero">
      <h1>Friends Of The Poway Library: Product Pitch</h1>
      <p>
        We built this as a usable community platform, not a static nonprofit page. People can discover books,
        interact with content, and return through daily game experiences that reinforce literacy and participation.
      </p>
      <span class="tagline">From information-only to interaction-first</span>
    </article>

    <aside class="evidence">
      <h2>Live Evidence To Show In Review</h2>
      <a href="https://pages.opencodingsociety.com/csp/sprint9/objectives" target="_blank" rel="noopener">Sprint 9 Requirements</a>
      <a href="https://pages.opencodingsociety.com/capstone/" target="_blank" rel="noopener">Capstone Home</a>
      <a href="/home">Route: /home</a>
      <a href="/catalog">Route: /catalog</a>
      <a href="/login">Route: /login</a>
      <a href="/puzzles">Route: /puzzles</a>
      <a href="/word-scramble">Route: /word-scramble</a>
    </aside>
  </section>

  <section class="middle">
    <article class="tile">
      <h3>Customer Problem</h3>
      <p>
        Traditional library support pages are often read-once and leave users without strong next actions.
        Discovery and repeat engagement are usually weak.
      </p>
    </article>
    <article class="tile">
      <h3>Our Solution</h3>
      <p>
        A connected site flow: mission context, searchable catalog experience, account workflows,
        and game routes that keep users coming back.
      </p>
    </article>
    <article class="tile">
      <h3>What We Improve</h3>
      <p>
        Better usability than static pages, stronger retention through daily interactions,
        and a foundation for future member features and program growth.
      </p>
    </article>
  </section>

  <section class="tour">
    <h2>Product Tour: How A User Moves Through The Site</h2>
    <div class="steps">
      <div class="step"><div class="n">Step 1</div><div class="r">/home</div><p>Build trust with mission, events, and clear navigation.</p></div>
      <div class="step"><div class="n">Step 2</div><div class="r">/catalog</div><p>Search and filter books quickly instead of scanning static lists.</p></div>
      <div class="step"><div class="n">Step 3</div><div class="r">/login</div><p>Create account path for persistence and future personalization.</p></div>
      <div class="step"><div class="n">Step 4</div><div class="r">/puzzles</div><p>Enter literacy games and challenge loops that drive repeat visits.</p></div>
      <div class="step"><div class="n">Step 5</div><div class="r">/word-scramble</div><p>Use daily + practice rounds for ongoing user engagement.</p></div>
    </div>
  </section>

  <section class="visuals">
    <article class="shot">
      <img src="/FOTPL/Images/foplbuilding.png" alt="Friends of the Poway Library building" />
      <div>Local Identity + Trust</div>
    </article>
    <article class="shot">
      <img src="/FOTPL/Images/bookstoresign.png" alt="Friends of the Poway Library bookstore sign" />
      <div>Book Discovery + Conversion</div>
    </article>
  </section>

  <section class="script">
    <h2>60-Second Presentation Script</h2>
    <p>
      Our project turns the Friends of the Poway Library website into a real product experience.
      Instead of only reading information, users can discover books through interactive catalog flows,
      create account pathways, and return through game-based literacy engagement.
    </p>
    <p>
      The flow we show is home to catalog to login to puzzles and word scramble. That means we are solving both
      communication and retention. The key value is practical: better discovery, stronger participation,
      and a platform that can grow with future member and community needs.
    </p>
    <p>
      This is why our capstone is not just a visual redesign. It is a functional experience that improves
      how people interact with the library online.
    </p>
  </section>
</div>
