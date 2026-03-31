---
layout: fopl
title: Checkpoint #2 Pitch Script — Friends of the Poway Library
permalink: /fopl-pitch-script
description: Review-ready planning and pitch script with user-flow visuals, site walkthrough, deployment links, and feature progress.
fopl_nav_active: home
---

<style>
  body { background: #f4f8f4; }

  .pitch-wrap {
    max-width: 1100px;
    margin: 0 auto;
    padding: 26px 16px 52px;
  }

  .pitch-hero {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    background:
      linear-gradient(120deg, rgba(2,59,15,0.86), rgba(5,82,24,0.78)),
      url('/FOTPL/foplbuilding.png') center/cover no-repeat;
    color: #fff;
    padding: 44px 28px;
    box-shadow: 0 8px 26px rgba(2,59,15,0.24);
  }
  .pitch-hero h1 {
    margin: 0 0 10px;
    color: #fff;
    border: none;
    font-family: 'Cabin', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 1.9rem;
  }
  .pitch-hero p {
    margin: 0;
    max-width: 760px;
    line-height: 1.7;
    font-size: 1.02rem;
    opacity: 0.95;
  }

  .quick-links {
    margin-top: 16px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .quick-links a {
    text-decoration: none;
    padding: 7px 12px;
    border-radius: 999px;
    background: rgba(255,255,255,0.16);
    border: 1px solid rgba(255,255,255,0.35);
    color: #fff;
    font-size: 0.74rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-weight: 700;
  }

  .pitch-grid {
    margin-top: 18px;
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 16px;
  }
  .card {
    background: #fff;
    border: 1px solid #d6e2d6;
    border-radius: 10px;
    box-shadow: 0 3px 14px rgba(2,59,15,0.08);
    padding: 18px;
  }
  .card h2 {
    margin: 0 0 12px;
    border: none;
    color: #023b0f;
    font-family: 'Cabin', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 1rem;
  }

  .flow {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 8px;
    align-items: stretch;
  }
  .flow-step {
    border: 1px solid #d6e2d6;
    background: #f7fbf7;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    font-size: 0.82rem;
    line-height: 1.45;
    color: #2f4a32;
    font-weight: 700;
  }
  .flow-step b {
    display: block;
    color: #023b0f;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 4px;
    font-size: 0.68rem;
  }

  .route-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 8px;
  }
  .route-list li {
    border: 1px solid #dce8dc;
    border-radius: 8px;
    padding: 10px;
    background: #f9fcf9;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: baseline;
  }
  .route-list code {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-weight: 700;
    color: #023b0f;
    background: #edf5ed;
    padding: 2px 6px;
    border-radius: 4px;
  }
  .route-list span { color: #4f5f50; font-size: 0.9rem; }

  .img-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    margin-top: 10px;
  }
  .img-card {
    border: 1px solid #dce8dc;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
  }
  .img-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    display: block;
  }
  .img-card p {
    margin: 0;
    padding: 8px 10px;
    font-size: 0.8rem;
    color: #3f5242;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    background: #f6faf6;
  }

  .bar-chart {
    display: grid;
    gap: 10px;
  }
  .bar-row {
    display: grid;
    grid-template-columns: 145px 1fr 44px;
    gap: 8px;
    align-items: center;
    font-size: 0.84rem;
    color: #2f4a32;
    font-weight: 700;
  }
  .bar-track {
    height: 12px;
    border-radius: 999px;
    background: #dce9dc;
    overflow: hidden;
  }
  .bar-fill {
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, #1f7a32, #53a466);
  }

  .script {
    margin-top: 16px;
    background: #fff;
    border: 1px solid #d6e2d6;
    border-left: 5px solid #023b0f;
    border-radius: 10px;
    box-shadow: 0 3px 14px rgba(2,59,15,0.08);
    padding: 18px;
  }
  .script h2 {
    margin: 0 0 10px;
    border: none;
    color: #023b0f;
    font-family: 'Cabin', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 1rem;
  }
  .script p {
    margin: 0 0 10px;
    line-height: 1.75;
    color: #2a382b;
  }

  @media (max-width: 920px) {
    .pitch-grid { grid-template-columns: 1fr; }
    .flow { grid-template-columns: 1fr 1fr; }
    .img-row { grid-template-columns: 1fr; }
    .bar-row { grid-template-columns: 120px 1fr 40px; }
  }

  @media (max-width: 580px) {
    .flow { grid-template-columns: 1fr; }
  }
</style>

<div class="pitch-wrap">
  <section class="pitch-hero">
    <h1>Checkpoint #2 Planning + Pitch</h1>
    <p>
      Friends of the Poway Library platform walkthrough for review: deployment evidence, user journey,
      key features, and progress toward the Sprint 9 goals.
    </p>
    <div class="quick-links">
      <a href="https://pages.opencodingsociety.com/csp/sprint9/objectives" target="_blank" rel="noopener">Sprint 9 Objectives</a>
      <a href="https://pages.opencodingsociety.com/capstone/" target="_blank" rel="noopener">Capstone Home</a>
      <a href="/home">Our Home</a>
      <a href="/catalog">Catalog</a>
      <a href="/puzzles">Games</a>
      <a href="/login">Login</a>
    </div>
  </section>

  <section class="pitch-grid">
    <article class="card">
      <h2>User Flow Through The Site</h2>
      <div class="flow">
        <div class="flow-step"><b>Step 1</b>Visit <code>/home</code><br/>See mission, programs, navigation.</div>
        <div class="flow-step"><b>Step 2</b>Open <code>/catalog</code><br/>Search/filter books by category and age.</div>
        <div class="flow-step"><b>Step 3</b>Use <code>/login</code><br/>Create account and keep session state.</div>
        <div class="flow-step"><b>Step 4</b>Play <code>/puzzles</code><br/>Engagement loop with XP and streaks.</div>
        <div class="flow-step"><b>Step 5</b>Return + Retain<br/>New events, books, and daily game play.</div>
      </div>

      <div class="img-row">
        <div class="img-card">
          <img src="/FOTPL/foplbuilding.png" alt="Poway Library building" />
          <p>Community-Focused Landing Experience</p>
        </div>
        <div class="img-card">
          <img src="/FOTPL/bookstoresign.png" alt="Friends of the Poway Library bookstore sign" />
          <p>Bookstore + Discovery Journey</p>
        </div>
      </div>
    </article>

    <article class="card">
      <h2>Live Route Map</h2>
      <ul class="route-list">
        <li><code>/home</code><span>Hero, calendar, and mission communication</span></li>
        <li><code>/catalog</code><span>Interactive book grid, filters, detail modal</span></li>
        <li><code>/login</code><span>Sign in/register with backend API</span></li>
        <li><code>/puzzles</code><span>Game hub with progress tracking</span></li>
        <li><code>/word-scramble</code><span>Daily + practice rounds, multi-level gameplay</span></li>
      </ul>

      <h2 style="margin-top:16px;">Progress Graph (Checkpoint #2)</h2>
      <div class="bar-chart">
        <div class="bar-row"><span>Deployment</span><div class="bar-track"><div class="bar-fill" style="width: 85%;"></div></div><span>85%</span></div>
        <div class="bar-row"><span>Frontend UX</span><div class="bar-track"><div class="bar-fill" style="width: 78%;"></div></div><span>78%</span></div>
        <div class="bar-row"><span>Backend/API</span><div class="bar-track"><div class="bar-fill" style="width: 72%;"></div></div><span>72%</span></div>
        <div class="bar-row"><span>Testing</span><div class="bar-track"><div class="bar-fill" style="width: 64%;"></div></div><span>64%</span></div>
        <div class="bar-row"><span>Pitch Readiness</span><div class="bar-track"><div class="bar-fill" style="width: 80%;"></div></div><span>80%</span></div>
      </div>
    </article>
  </section>

  <section class="script">
    <h2>Presentation Script (Use This)</h2>
    <p>
      Today we are presenting the Friends of the Poway Library platform as a user-centered community product.
      The primary requirement is deployment, and our live routes are visible here: home, catalog, login, puzzles,
      and word scramble.
    </p>
    <p>
      The user journey starts at the home page, moves into catalog discovery, supports account-based interaction,
      and then reinforces retention through games and daily challenges. This improves on a static informational site
      by adding searchable inventory, interactive engagement, and repeat-visit mechanics.
    </p>
    <p>
      Our wow features are: interactive catalog filtering and detail views, account-based workflows,
      and game progression with XP/streak behavior. For Checkpoint #2, we are focused on completing deployment,
      expanding test evidence, and finalizing capstone references for review.
    </p>
  </section>
</div>
