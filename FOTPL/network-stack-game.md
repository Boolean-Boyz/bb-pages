---
layout: fopl
title: Network Stack Challenge — Friends of the Poway Library
permalink: /network-stack-game
description: Test your HTTP and OSI networking knowledge with the Network Stack Challenge at the Friends of the Poway Library.
fopl_nav_active: puzzles
---

<style>
  body { background: #f4f8f4; }
  .fopl-logo-wrap img { height: 90px; }

  /* ── Page layout ── */
  .net-outer {
    max-width: 1020px; margin: 0 auto; padding: 20px 16px 48px;
    display: flex; gap: 22px; align-items: flex-start;
    min-height: calc(100vh - 90px);
  }
  .net-main { flex: 1; min-width: 0; }
  .net-header {
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 1px solid #d8dfd8; padding-bottom: 10px; margin-bottom: 16px;
  }
  .net-title {
    font-family: 'Cabin', sans-serif; font-size: 1.45rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em; color: #023b0f;
  }
  .net-btn-link { text-decoration: none; color: #023b0f; font-size: 1.3rem; }

  /* ── Trivia card ── */
  .net-card {
    background: #fff; border-top: 4px solid #023b0f; border-radius: 8px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.09); padding: 24px;
  }
  .net-date {
    font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.06em;
    color: #6b756b; margin-bottom: 10px; font-weight: 700;
  }
  .net-mode-row {
    display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 12px;
  }
  .net-mode-chip {
    font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.07em;
    font-weight: 700; border-radius: 999px; padding: 5px 10px;
    border: 1px solid #bfd1bf; background: #f1f7f1; color: #2f5133;
  }
  .net-mode-chip.practice { background: #fff6e8; border-color: #e9cf9c; color: #6d4b14; }
  .net-mode-note { margin: 0; font-size: 0.84rem; color: #5d695e; font-weight: 700; }

  /* ── Layer badge ── */
  .layer-badge {
    display: inline-flex; align-items: center; gap: 8px;
    border-radius: 6px; padding: 6px 12px; margin-bottom: 12px;
    font-family: 'Cabin', sans-serif; font-size: 0.82rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em;
    border: 1.5px solid transparent; transition: background 0.25s, color 0.25s;
  }
  .layer-badge .lbadge-dot {
    width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0;
  }

  .net-progress { margin: 0 0 8px; color: #4f5d4f; font-size: 0.9rem; font-weight: 700; }
  .net-question {
    font-size: 1.1rem; line-height: 1.5; color: #173117; margin: 0 0 14px;
    font-weight: 700; font-family: 'Cabin', sans-serif;
  }
  .net-options { display: grid; gap: 10px; }
  .net-option {
    border: 1px solid #cfd9cf; background: #fff; color: #1d2f1f;
    border-radius: 8px; padding: 12px 14px; text-align: left;
    cursor: pointer; font-size: 0.97rem; font-family: 'Lato', sans-serif;
    transition: border-color 0.15s, background 0.15s;
  }
  .net-option:hover:not([disabled]) { border-color: #99b39d; background: #f7fbf7; }
  .net-option[disabled] { opacity: 0.9; cursor: default; }
  .net-option.correct { background: #d7f1db; border-color: #2e7d32; }
  .net-option.wrong { background: #fae1e1; border-color: #a52c2c; }

  .net-feedback {
    margin-top: 14px; padding: 10px 12px; border-radius: 6px;
    background: #eef6ee; color: #1f4a20; font-size: 0.94rem;
    border: 1px solid #cadfca; display: none; line-height: 1.55;
  }
  .net-feedback.show { display: block; }

  .net-actions { margin-top: 12px; display: flex; gap: 10px; flex-wrap: wrap; }
  .net-next {
    border: none; background: #023b0f; color: #fff; border-radius: 6px;
    padding: 10px 16px; cursor: pointer; font-family: 'Cabin', sans-serif;
    font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
    display: none;
  }
  .net-next.show { display: inline-block; }
  .net-btn-alt {
    border: 1px solid #c7d6c8; background: #f6faf6; color: #1f3d22;
    border-radius: 6px; padding: 10px 14px; cursor: pointer;
    font-family: 'Cabin', sans-serif; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.82rem;
  }
  .net-btn-alt:hover { background: #edf5ed; }

  .net-session {
    margin-top: 16px; background: #f8fbf8; border: 1px solid #dbe7db;
    border-radius: 7px; padding: 10px 12px; font-size: 0.84rem;
    color: #4e5d50; font-weight: 700;
  }

  /* ── Stats row ── */
  .stats-row {
    display: grid; grid-template-columns: repeat(4, minmax(0,1fr));
    gap: 10px; margin-top: 18px;
  }
  .stat-box {
    background: #f1f7f1; border-radius: 7px; padding: 10px;
    border: 1px solid #dce8dc; text-align: center;
  }
  .stat-num { font-family: 'Cabin', sans-serif; font-size: 1.35rem; font-weight: 700; color: #023b0f; line-height: 1; }
  .stat-label { font-size: 0.72rem; color: #6a736a; text-transform: uppercase; letter-spacing: 0.06em; margin-top: 4px; font-weight: 700; }

  /* ── OSI Stack panel ── */
  .osi-col {
    width: 230px; flex-shrink: 0;
  }
  .osi-panel {
    background: #fff; border-top: 4px solid #023b0f; border-radius: 8px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.09); padding: 16px;
    position: sticky; top: 16px;
  }
  .osi-panel-title {
    font-family: 'Cabin', sans-serif; font-size: 0.78rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em; color: #4a5e4a;
    margin-bottom: 10px;
  }
  .osi-layer {
    border-radius: 5px; padding: 8px 10px; margin-bottom: 5px;
    border: 1.5px solid transparent; transition: all 0.25s;
    cursor: default;
  }
  .osi-layer-num {
    font-family: 'Cabin', sans-serif; font-size: 0.68rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em; opacity: 0.75;
  }
  .osi-layer-name {
    font-family: 'Cabin', sans-serif; font-size: 0.88rem; font-weight: 700;
    line-height: 1.2;
  }
  .osi-layer-desc {
    font-size: 0.7rem; margin-top: 2px; opacity: 0.8; line-height: 1.3;
  }
  /* Default (inactive) state */
  .osi-layer { background: #f4f8f4; border-color: #dce8dc; color: #4a5e4a; }
  /* Active state — set via JS by adding .active class */
  .osi-layer.active { transform: translateX(3px); }

  /* Layer-specific active colors */
  .osi-layer[data-layer="7"].active { background: #4a0080; border-color: #4a0080; color: #fff; }
  .osi-layer[data-layer="6"].active { background: #b33000; border-color: #b33000; color: #fff; }
  .osi-layer[data-layer="5"].active { background: #b35a00; border-color: #b35a00; color: #fff; }
  .osi-layer[data-layer="4"].active { background: #7a6600; border-color: #7a6600; color: #fff; }
  .osi-layer[data-layer="3"].active { background: #023b0f; border-color: #023b0f; color: #fff; }
  .osi-layer[data-layer="2"].active { background: #004080; border-color: #004080; color: #fff; }
  .osi-layer[data-layer="1"].active { background: #4a4a4a; border-color: #4a4a4a; color: #fff; }

  /* Layer-specific dot colors (for the badge) */
  .dot-7 { background: #4a0080; }
  .dot-6 { background: #b33000; }
  .dot-5 { background: #b35a00; }
  .dot-4 { background: #7a6600; }
  .dot-3 { background: #023b0f; }
  .dot-2 { background: #004080; }
  .dot-1 { background: #4a4a4a; }

  /* Layer badge bg/color variants (match OSI colors) */
  .badge-7 { background: #f3e8ff; border-color: #9f55d3; color: #4a0080; }
  .badge-6 { background: #fff0eb; border-color: #d4624a; color: #7a1e00; }
  .badge-5 { background: #fff4e8; border-color: #d4844a; color: #7a3500; }
  .badge-4 { background: #fffbe8; border-color: #c9b544; color: #5a4a00; }
  .badge-3 { background: #eef6ee; border-color: #5a9b66; color: #023b0f; }
  .badge-2 { background: #e8f0ff; border-color: #4a80cc; color: #003070; }
  .badge-1 { background: #f0f0f0; border-color: #888; color: #333; }

  .osi-caption {
    margin-top: 10px; padding: 8px 10px; border-radius: 5px;
    background: #f4f8f4; border: 1px solid #dce8dc;
    font-size: 0.76rem; color: #3a4e3a; line-height: 1.4; min-height: 52px;
  }

  /* ── Responsive ── */
  @media (max-width: 780px) {
    .net-outer { flex-direction: column; }
    .osi-col { width: 100%; }
    .osi-panel { position: static; }
    .osi-layer-desc { display: none; }
    .osi-layers-grid {
      display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px;
    }
    .osi-layer { margin-bottom: 0; padding: 6px 4px; text-align: center; }
    .osi-layer-num { display: none; }
    .osi-layer-name { font-size: 0.72rem; }
    .osi-caption { display: none; }
    .osi-panel-title { margin-bottom: 6px; }
  }
  @media (max-width: 560px) {
    .stats-row { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .osi-layer-name { font-size: 0.6rem; }
  }

  /* ── Character scene ── */
  .char-scene { margin: -24px -24px 20px; height: 200px; overflow: hidden; border-radius: 4px 4px 0 0; }
  .char-scene canvas { display: block; width: 100%; height: 200px; }

  /* ── OSI vs TCP/IP comparison panel ── */
  .tcpip-wrap { margin-bottom: 14px; }
  .tcpip-toggle {
    width: 100%; background: #f1f7f1; border: 1px solid #c8d8c8; border-radius: 6px;
    padding: 10px 14px; cursor: pointer; font-family: 'Cabin', sans-serif;
    font-weight: 700; font-size: 0.84rem; text-align: left; color: #1f3d22;
    display: flex; justify-content: space-between; align-items: center;
  }
  .tcpip-toggle:hover { background: #e8f2e8; }
  .tcpip-content {
    border: 1px solid #c8d8c8; border-top: none; border-radius: 0 0 6px 6px;
    background: #fff; padding: 14px; display: none;
  }
  .tcpip-content.open { display: block; }
  .tcpip-grid {
    display: grid; grid-template-columns: 1fr auto 1fr; gap: 0; align-items: start;
  }
  .tcpip-col-head {
    font-family: 'Cabin', sans-serif; font-size: 0.78rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em; padding: 6px 10px;
    border-radius: 5px 5px 0 0; text-align: center;
  }
  .tcpip-col-head.osi { background: #023b0f; color: #fff; }
  .tcpip-col-head.tcpip { background: #1a3a6a; color: #fff; }
  .tcpip-col-note { font-size: 0.72rem; color: #5d6d5e; text-align: center; padding: 4px 8px 8px; }
  .tcpip-rows { border: 1px solid #d4e0d4; border-radius: 0 0 5px 5px; overflow: hidden; }
  .tcpip-rows.osi-col { border-color: #8ab88a; }
  .tcpip-rows.tcp-col { border-color: #8aabb8; }
  .tcpip-layer {
    padding: 7px 10px; border-bottom: 1px solid #e8f0e8; font-size: 0.82rem;
    display: flex; align-items: center; gap: 6px;
  }
  .tcpip-layer:last-child { border-bottom: none; }
  .tcpip-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
  .tcpip-arrow-col { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 0 8px; gap: 0; }
  .tcpip-arrow { font-size: 0.7rem; color: #8a9e8a; line-height: 1.8; }
  .tcpip-note-box {
    margin-top: 10px; background: #f4f8f4; border: 1px solid #d0ddd0;
    border-radius: 5px; padding: 8px 10px; font-size: 0.78rem; color: #3a4e3a; line-height: 1.45;
  }

  /* ── MTU Minigame ── */
  .mtu-wrap {
    background: #fff8e8; border: 2px solid #c8a020; border-radius: 8px;
    padding: 16px; margin-bottom: 14px; display: none;
  }
  .mtu-wrap.show { display: block; }
  .mtu-title {
    font-family: 'Cabin', sans-serif; font-size: 1rem; font-weight: 700;
    color: #5a3a00; margin-bottom: 4px;
  }
  .mtu-desc { font-size: 0.86rem; color: #5a4a20; margin-bottom: 14px; line-height: 1.4; }
  .mtu-frame-builder { display: flex; gap: 0; flex-wrap: wrap; margin-bottom: 14px; align-items: stretch; }
  .mtu-slot {
    border: 2px solid #d0c080; border-radius: 5px; background: #fffbe8;
    padding: 8px 6px; text-align: center; min-width: 80px; flex: 1;
    margin-right: 3px;
  }
  .mtu-slot:last-child { margin-right: 0; }
  .mtu-slot-label { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #7a5a00; margin-bottom: 6px; }
  .mtu-slot select {
    width: 100%; border: 1px solid #c8b060; border-radius: 4px;
    background: #fff; padding: 5px 4px; font-size: 0.82rem; color: #3a2a00;
    cursor: pointer;
  }
  .mtu-slot select.correct { background: #d7f1db; border-color: #2e7d32; }
  .mtu-slot select.wrong { background: #fae1e1; border-color: #a52c2c; }
  .mtu-total {
    font-family: 'Cabin', sans-serif; font-size: 0.9rem; font-weight: 700;
    color: #3a2a00; margin-bottom: 10px;
  }
  .mtu-total span { font-size: 1.1rem; color: #023b0f; }
  .mtu-check {
    border: none; background: #023b0f; color: #fff; border-radius: 6px;
    padding: 9px 16px; cursor: pointer; font-family: 'Cabin', sans-serif;
    font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.82rem;
    margin-right: 8px;
  }
  .mtu-check:hover { background: #045218; }
  .mtu-skip {
    border: 1px solid #c8d0c8; background: #f6faf6; color: #3a4e3a;
    border-radius: 6px; padding: 9px 14px; cursor: pointer;
    font-family: 'Cabin', sans-serif; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.82rem;
  }
  .mtu-feedback {
    margin-top: 10px; padding: 9px 11px; border-radius: 5px;
    font-size: 0.88rem; display: none;
  }
  .mtu-feedback.show { display: block; }
  .mtu-feedback.ok { background: #d7f1db; border: 1px solid #2e7d32; color: #1f4a20; }
  .mtu-feedback.err { background: #fae1e1; border: 1px solid #a52c2c; color: #6c1e1e; }

  @media (max-width: 560px) {
    .mtu-slot { min-width: 60px; }
    .mtu-slot-label { font-size: 0.6rem; }
    .tcpip-grid { grid-template-columns: 1fr 16px 1fr; }
  }
</style>

<div class="net-outer">

  <!-- ── Left: Trivia card ── -->
  <div class="net-main">
    <div class="net-header">
      <div class="net-title">Network Stack Challenge</div>
      <a class="net-btn-link" href="/puzzles" title="All Games">All Games</a>
    </div>

    <!-- OSI vs TCP/IP comparison panel -->
    <div class="tcpip-wrap">
      <button class="tcpip-toggle" id="tcpip-toggle" type="button">
        <span>OSI Model vs TCP/IP Stack — What's the difference?</span>
        <span id="tcpip-arrow">▼</span>
      </button>
      <div class="tcpip-content" id="tcpip-content">
        <div class="tcpip-grid">
          <div>
            <div class="tcpip-col-head osi">OSI Model (7 layers)</div>
            <div class="tcpip-col-note">Theoretical guideline — not directly implemented</div>
            <div class="tcpip-rows osi-col">
              <div class="tcpip-layer"><span class="tcpip-dot" style="background:#4a0080"></span>7 — Application</div>
              <div class="tcpip-layer"><span class="tcpip-dot" style="background:#b33000"></span>6 — Presentation</div>
              <div class="tcpip-layer"><span class="tcpip-dot" style="background:#b35a00"></span>5 — Session</div>
              <div class="tcpip-layer"><span class="tcpip-dot" style="background:#7a6600"></span>4 — Transport</div>
              <div class="tcpip-layer"><span class="tcpip-dot" style="background:#023b0f"></span>3 — Network</div>
              <div class="tcpip-layer"><span class="tcpip-dot" style="background:#004080"></span>2 — Data Link</div>
              <div class="tcpip-layer"><span class="tcpip-dot" style="background:#4a4a4a"></span>1 — Physical</div>
            </div>
          </div>
          <div class="tcpip-arrow-col">
            <div class="tcpip-arrow">↔</div>
            <div class="tcpip-arrow">↕</div>
            <div class="tcpip-arrow">↔</div>
            <div class="tcpip-arrow">↔</div>
            <div class="tcpip-arrow">↔</div>
            <div class="tcpip-arrow">↔</div>
            <div class="tcpip-arrow">↕</div>
          </div>
          <div>
            <div class="tcpip-col-head tcpip">TCP/IP Stack (4–5 layers)</div>
            <div class="tcpip-col-note">Practical standard — actually used on the internet</div>
            <div class="tcpip-rows tcp-col">
              <div class="tcpip-layer" style="background:#f3e8ff"><span class="tcpip-dot" style="background:#4a0080"></span>Application (L5–7)</div>
              <div class="tcpip-layer" style="background:#f3e8ff"><span class="tcpip-dot" style="background:#4a0080"></span>↳ HTTP, HTTPS, DNS, TLS</div>
              <div class="tcpip-layer" style="background:#f3e8ff"><span class="tcpip-dot" style="background:#4a0080"></span>↳ (incl. Presentation + Session)</div>
              <div class="tcpip-layer" style="background:#fffbe8"><span class="tcpip-dot" style="background:#7a6600"></span>Transport (TCP/UDP)</div>
              <div class="tcpip-layer" style="background:#eef6ee"><span class="tcpip-dot" style="background:#023b0f"></span>Internet / Network (IP)</div>
              <div class="tcpip-layer" style="background:#e8f0ff"><span class="tcpip-dot" style="background:#004080"></span>Network Access (L1–2)</div>
              <div class="tcpip-layer" style="background:#e8f0ff"><span class="tcpip-dot" style="background:#004080"></span>↳ Ethernet, Wi-Fi, MAC</div>
            </div>
          </div>
        </div>
        <div class="tcpip-note-box">
          <strong>Key insight:</strong> OSI is an abstract 7-layer <em>reference model</em> — it was designed to standardize how networks communicate. TCP/IP is the <em>actual protocol suite</em> that powers the internet, collapsing OSI layers 5–7 into one Application layer and layers 1–2 into one Network Access layer. In real deployments: your <strong>flask.opencodingsociety.com</strong> runs over TCP/IP on an AWS EC2 instance fronted by Nginx — no software directly "implements" OSI layers, but they help us <em>reason</em> about what happens at each level.
        </div>
      </div>
    </div>

    <div class="net-card">
      <div class="char-scene"><canvas id="char-canvas" data-npc="network" height="200"></canvas></div>

      <!-- MTU Minigame -->
      <div class="mtu-wrap" id="mtu-wrap">
        <div class="mtu-title">Bonus: MTU Frame Assembly Challenge (+50 pts if correct)</div>
        <div class="mtu-desc">You're at Layer 4 — Transport. Before TCP segments leave, they're wrapped in an Ethernet frame. Select the correct byte size for each frame component:</div>
        <div class="mtu-frame-builder">
          <div class="mtu-slot">
            <div class="mtu-slot-label">Frame Header</div>
            <select id="mtu-s0"><option value="">—</option><option value="4">4 B</option><option value="8">8 B</option><option value="14">14 B</option><option value="20">20 B</option></select>
          </div>
          <div class="mtu-slot">
            <div class="mtu-slot-label">IP Header</div>
            <select id="mtu-s1"><option value="">—</option><option value="10">10 B</option><option value="20">20 B</option><option value="40">40 B</option><option value="64">64 B</option></select>
          </div>
          <div class="mtu-slot">
            <div class="mtu-slot-label">TCP Header</div>
            <select id="mtu-s2"><option value="">—</option><option value="10">10 B</option><option value="20">20 B</option><option value="40">40 B</option><option value="80">80 B</option></select>
          </div>
          <div class="mtu-slot">
            <div class="mtu-slot-label">Max Payload</div>
            <select id="mtu-s3"><option value="">—</option><option value="1024">1024 B</option><option value="1460">1460 B</option><option value="1492">1492 B</option><option value="1500">1500 B</option></select>
          </div>
          <div class="mtu-slot">
            <div class="mtu-slot-label">Frame Tail</div>
            <select id="mtu-s4"><option value="">—</option><option value="2">2 B</option><option value="4">4 B</option><option value="8">8 B</option><option value="16">16 B</option></select>
          </div>
        </div>
        <div class="mtu-total">Frame total: <span id="mtu-total">—</span></div>
        <button class="mtu-check" id="mtu-check" type="button">Check Frame</button>
        <button class="mtu-skip" id="mtu-skip" type="button">Skip</button>
        <div class="mtu-feedback" id="mtu-feedback"></div>
      </div>

      <div class="net-date" id="net-date"></div>
      <div class="net-mode-row">
        <span class="net-mode-chip" id="net-mode-chip">Daily</span>
        <p class="net-mode-note" id="net-mode-note">Daily round counts toward streak and overall progress.</p>
      </div>

      <div class="layer-badge" id="layer-badge">
        <span class="lbadge-dot" id="lbadge-dot"></span>
        <span id="lbadge-text"></span>
      </div>

      <p class="net-progress" id="net-progress"></p>
      <h2 class="net-question" id="net-question"></h2>
      <div class="net-options" id="net-options"></div>
      <div class="net-feedback" id="net-feedback"></div>

      <div class="net-actions">
        <button type="button" class="net-next" id="net-next">Next Question</button>
        <button type="button" class="net-btn-alt" id="net-practice">Practice Round</button>
        <button type="button" class="net-btn-alt" id="net-daily" style="display:none">Back to Daily</button>
      </div>

      <div class="net-session" id="net-session">Practice rounds this visit: 0</div>

      <div class="stats-row">
        <div class="stat-box"><div class="stat-num" id="stat-played">0</div><div class="stat-label">Rounds</div></div>
        <div class="stat-box"><div class="stat-num" id="stat-acc">0%</div><div class="stat-label">Accuracy</div></div>
        <div class="stat-box"><div class="stat-num" id="stat-streak">0</div><div class="stat-label">Streak</div></div>
        <div class="stat-box"><div class="stat-num" id="stat-max">0</div><div class="stat-label">Best Streak</div></div>
      </div>
    </div>
  </div>

  <!-- ── Right: OSI Stack visual ── -->
  <div class="osi-col">
    <div class="osi-panel">
      <div class="osi-panel-title">OSI Model</div>
      <div class="osi-layers-grid" id="osi-layers">
        <div class="osi-layer" data-layer="7">
          <div class="osi-layer-num">Layer 7</div>
          <div class="osi-layer-name">Application</div>
          <div class="osi-layer-desc">HTTP/S, DNS, Nginx, Flask</div>
        </div>
        <div class="osi-layer" data-layer="6">
          <div class="osi-layer-num">Layer 6</div>
          <div class="osi-layer-name">Presentation</div>
          <div class="osi-layer-desc">TLS/SSL, Certbot</div>
        </div>
        <div class="osi-layer" data-layer="5">
          <div class="osi-layer-num">Layer 5</div>
          <div class="osi-layer-name">Session</div>
          <div class="osi-layer-desc">WebSockets, sessions</div>
        </div>
        <div class="osi-layer" data-layer="4">
          <div class="osi-layer-num">Layer 4</div>
          <div class="osi-layer-name">Transport</div>
          <div class="osi-layer-desc">TCP/UDP, ports, segments</div>
        </div>
        <div class="osi-layer" data-layer="3">
          <div class="osi-layer-num">Layer 3</div>
          <div class="osi-layer-name">Network</div>
          <div class="osi-layer-desc">IP routing, AWS routing</div>
        </div>
        <div class="osi-layer" data-layer="2">
          <div class="osi-layer-num">Layer 2</div>
          <div class="osi-layer-name">Data Link</div>
          <div class="osi-layer-desc">Ethernet frames, MAC</div>
        </div>
        <div class="osi-layer" data-layer="1">
          <div class="osi-layer-num">Layer 1</div>
          <div class="osi-layer-name">Physical</div>
          <div class="osi-layer-desc">Cables, fiber, Wi-Fi</div>
        </div>
      </div>
      <div class="osi-caption" id="osi-caption">Select a question to see the active layer.</div>
    </div>
  </div>

</div>

<script>
{
const BACKEND = window.FOPL_BACKEND;
const ROUND_SIZE = 7;
const DATE_KEY  = 'fopl_net_stack_day';
const STATE_KEY = 'fopl_net_stack_state';
const STATS_KEY = 'fopl_net_stack_stats';

// ── Question bank: 2 questions per OSI layer ──
const QUESTIONS = [
  // Layer 7 — Application
  {
    layer: 7,
    question: 'Nginx forwards all traffic from port 443 to Flask on port 8587. What is this architecture pattern called?',
    options: ['Forward Proxy', 'Reverse Proxy', 'Load Balancer', 'API Gateway'],
    answer: 1,
    fact: 'A reverse proxy sits in front of your internal services. Users connect to Nginx on port 443; Nginx secretly forwards the request to Flask on port 8587 — exposing clean URLs without revealing internal ports.'
  },
  {
    layer: 7,
    question: 'What HTTP method does a browser automatically send before a cross-origin API request to check if it\'s permitted?',
    options: ['GET', 'POST', 'PUT', 'OPTIONS'],
    answer: 3,
    fact: 'The browser sends a preflight OPTIONS request with "Access-Control-Request-Method" headers. If Nginx\'s CORS config approves the origin, it returns 204 No Content and the real request proceeds. This never reaches Flask.'
  },
  // Layer 6 — Presentation
  {
    layer: 6,
    question: 'What tool automatically manages SSL/TLS certificates on the AWS EC2 server to enable HTTPS?',
    options: ['Docker', 'Certbot', 'Gunicorn', 'Nginx'],
    answer: 1,
    fact: 'Certbot (via Let\'s Encrypt) provisions and auto-renews SSL/TLS certificates for free. These certificates allow HTTPS — encrypting all data between the browser and server so it can\'t be intercepted in transit.'
  },
  {
    layer: 6,
    question: 'In the OSI model, at which layer does TLS encryption and decryption occur?',
    options: ['Layer 4 — Transport', 'Layer 5 — Session', 'Layer 6 — Presentation', 'Layer 7 — Application'],
    answer: 2,
    fact: 'TLS belongs to the Presentation Layer (L6) — it handles data encryption, decryption, and format translation. In the simplified TCP/IP model, this is folded into the Application Layer, which is why HTTPS is still called an "application" protocol.'
  },
  // Layer 5 — Session
  {
    layer: 5,
    question: 'Which technology upgrades an HTTP connection into a persistent, real-time bidirectional channel?',
    options: ['REST API', 'WebSocket', 'HTTP/2 Push', 'Server-Sent Events'],
    answer: 1,
    fact: 'WebSockets use HTTP\'s "Upgrade: websocket" header to convert a request-response connection into a persistent full-duplex channel. Once upgraded, both client and server can push messages at any time — ideal for live chat or real-time collaboration.'
  },
  {
    layer: 5,
    question: 'After a WebSocket upgrade is accepted, what HTTP status code does the server return?',
    options: ['200 OK', '204 No Content', '101 Switching Protocols', '301 Moved Permanently'],
    answer: 2,
    fact: 'HTTP 101 Switching Protocols signals that the server agreed to change from HTTP to WebSocket. The same TCP connection is now a persistent WebSocket. Nginx must pass "Upgrade" and "Connection" headers to the backend for this to work.'
  },
  // Layer 4 — Transport
  {
    layer: 4,
    question: 'With an MTU of 1500 bytes, what is the maximum data payload per TCP segment?',
    options: ['1500 bytes', '1480 bytes', '1460 bytes', '1024 bytes'],
    answer: 2,
    fact: 'MTU 1500 − IP header (20 bytes) − TCP header (20 bytes) = 1460 bytes per segment. Large HTTP responses are split across multiple TCP segments and reassembled in order at the destination using TCP sequence numbers.'
  },
  {
    layer: 4,
    question: 'What is the correct sequence of the TCP three-way handshake?',
    options: ['ACK → SYN → SYN-ACK', 'SYN-ACK → SYN → ACK', 'SYN → ACK → SYN-ACK', 'SYN → SYN-ACK → ACK'],
    answer: 3,
    fact: 'SYN: client says "want to connect?" — SYN-ACK: server says "yes, ready!" — ACK: client confirms "great, let\'s go." This three-step handshake ensures both sides are ready and agree on sequence numbers before any HTTP data flows.'
  },
  // Layer 3 — Network
  {
    layer: 3,
    question: 'What is the size of an IPv4 header added to each TCP segment at the Network Layer?',
    options: ['4 bytes', '14 bytes', '20 bytes', '40 bytes'],
    answer: 2,
    fact: 'The IPv4 header is 20 bytes and contains: source IP, destination IP, TTL (time-to-live), protocol (TCP = 6), and a header checksum. Routers read only this layer to route packets across the internet to the AWS EC2 server.'
  },
  {
    layer: 3,
    question: 'When your JavaScript fetch() calls flask.opencodingsociety.com, what does DNS do?',
    options: ['Validates the SSL certificate', 'Resolves the domain name to an IP address', 'Selects the Flask port number', 'Adds CORS headers to the request'],
    answer: 1,
    fact: 'DNS (Domain Name System) translates human-readable hostnames like flask.opencodingsociety.com into machine-readable IP addresses like 3.233.212.71. Without DNS, every fetch() call would require a hardcoded IP address.'
  },
  // Layer 2 — Data Link
  {
    layer: 2,
    question: 'What is the total byte size of an Ethernet frame carrying a full 1500-byte IP packet?',
    options: ['1500 bytes', '1514 bytes', '1518 bytes', '1522 bytes'],
    answer: 2,
    fact: 'Ethernet frame = 14-byte header (6 dest MAC + 6 src MAC + 2 EtherType) + 1500-byte IP payload + 4-byte CRC error-checking tail = 1518 bytes. The CRC lets the receiver detect corrupted frames and request retransmission.'
  },
  {
    layer: 2,
    question: 'What type of addresses does the Data Link Layer use to identify devices on a local network?',
    options: ['IP addresses', 'Port numbers', 'MAC addresses', 'Domain names'],
    answer: 2,
    fact: 'MAC (Media Access Control) addresses are 48-bit hardware identifiers burned into each network interface card. Unlike IP addresses (which stay the same end-to-end), MAC addresses are only used for local hops — routers swap them at each network boundary.'
  },
  // Layer 1 — Physical
  {
    layer: 1,
    question: 'What does the Physical Layer convert Ethernet frames into for actual transmission?',
    options: ['IP packets', 'Electrical, optical, or radio signals', 'JSON payloads', 'TCP segments'],
    answer: 1,
    fact: 'The Physical Layer converts binary 0s and 1s into physical signals: voltage changes over copper wire, light pulses in fiber optics, or radio waves for Wi-Fi. Your entire HTTP request — headers, JSON body, and all — travels as these raw signals.'
  },
  {
    layer: 1,
    question: 'Which physical transmission medium carries data as pulses of light at very high speed?',
    options: ['Copper wire (Cat6)', 'Coaxial cable', 'Fiber optic cable', 'Wi-Fi (802.11)'],
    answer: 2,
    fact: 'Fiber optic cables transmit data as pulses of light through glass or plastic strands — reaching speeds of hundreds of Gbps over thousands of kilometers with minimal signal loss. Internet backbone infrastructure and data centers rely heavily on fiber optics.'
  }
];

// Layer metadata
const LAYER_META = {
  7: { name: 'Layer 7 — Application',   short: 'Application',   caption: 'HTTP/S, DNS, Nginx routing, Flask API, CORS, preflight requests.' },
  6: { name: 'Layer 6 — Presentation',  short: 'Presentation',  caption: 'TLS/SSL encryption via Certbot. Data formatting before the app layer.' },
  5: { name: 'Layer 5 — Session',       short: 'Session',       caption: 'WebSocket sessions, connection management, Upgrade handshake.' },
  4: { name: 'Layer 4 — Transport',     short: 'Transport',     caption: 'TCP segments, 3-way handshake, port numbers, 1460-byte payloads.' },
  3: { name: 'Layer 3 — Network',       short: 'Network',       caption: 'IP packets, 20-byte IP headers, DNS resolution, AWS routing.' },
  2: { name: 'Layer 2 — Data Link',     short: 'Data Link',     caption: 'Ethernet frames, MAC addresses, 14-byte header, 4-byte CRC tail.' },
  1: { name: 'Layer 1 — Physical',      short: 'Physical',      caption: 'Electrical/optical signals, copper wire, fiber optics, Wi-Fi radio waves.' }
};

// ── State ──
let mode = 'daily';
let dailyState = null;
let practiceState = null;
let practiceRoundsThisVisit = 0;

function getDayId() { return window.foplGetDayId(); }

function seededShuffle(arr, seed) {
  const out = arr.slice();
  let s = seed;
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 48271) % 2147483647;
    const j = s % (i + 1);
    const tmp = out[i]; out[i] = out[j]; out[j] = tmp;
  }
  return out;
}

// Daily: pick exactly one question per layer (7 questions), ordered L7→L1
function getDailyIndexes() {
  const day = Number(getDayId());
  const layers = [7, 6, 5, 4, 3, 2, 1];
  const result = [];
  layers.forEach((layer, li) => {
    const pool = QUESTIONS.map((q, i) => ({ q, i })).filter(({ q }) => q.layer === layer);
    const shuffled = seededShuffle(pool, day * 7919 + li * 1237 + 1);
    result.push(shuffled[0].i);
  });
  return result;
}

function getPracticeIndexes() {
  const noise = Math.floor(Math.random() * 999983);
  const seed = Math.floor(Date.now() / 1000) + noise + practiceRoundsThisVisit * 97;
  const all = QUESTIONS.map((_, i) => i);
  const shuffled = seededShuffle(all, seed);
  return shuffled.slice(0, ROUND_SIZE);
}

function makeState(idxs, roundMode) {
  return { index: 0, score: 0, answered: [], finished: false, counted: false, idxs, mode: roundMode };
}

function loadStats() {
  return JSON.parse(localStorage.getItem(STATS_KEY) || '{"played":0,"correct":0,"total":0,"streak":0,"maxStreak":0}');
}
function saveStats(s) { localStorage.setItem(STATS_KEY, JSON.stringify(s)); }

function syncStatsView(stats) {
  const pct = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;
  document.getElementById('stat-played').textContent  = String(stats.played);
  document.getElementById('stat-acc').textContent     = `${pct}%`;
  document.getElementById('stat-streak').textContent  = String(stats.streak);
  document.getElementById('stat-max').textContent     = String(stats.maxStreak);
}

async function postResult(correct) { return window.foplPostResult('network_stack', !!correct, 1); }

function addOverallProgress(game, points, won) { return window.foplAddOverallProgress(game, points, won); }

// ── OSI visual ──
function highlightLayer(layerNum) {
  document.querySelectorAll('.osi-layer').forEach(el => el.classList.remove('active'));
  if (layerNum) {
    const el = document.querySelector(`.osi-layer[data-layer="${layerNum}"]`);
    if (el) el.classList.add('active');
    document.getElementById('osi-caption').textContent = LAYER_META[layerNum]?.caption || '';
  }
}

function setLayerBadge(layerNum) {
  const badge = document.getElementById('layer-badge');
  const dot   = document.getElementById('lbadge-dot');
  const text  = document.getElementById('lbadge-text');
  badge.className = `layer-badge badge-${layerNum}`;
  dot.className   = `lbadge-dot dot-${layerNum}`;
  text.textContent = LAYER_META[layerNum]?.name || '';
  highlightLayer(layerNum);
}

// ── Rendering ──
function clearFeedback() {
  const el = document.getElementById('net-feedback');
  el.classList.remove('show'); el.textContent = '';
}
function showFeedback(msg) {
  const el = document.getElementById('net-feedback');
  el.classList.add('show'); el.textContent = msg;
}

function lockChoices(chosen, answer) {
  document.querySelectorAll('.net-option').forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === answer) btn.classList.add('correct');
    if (idx === chosen && idx !== answer) btn.classList.add('wrong');
  });
}

function updateModeBanner() {
  const chip = document.getElementById('net-mode-chip');
  const note = document.getElementById('net-mode-note');
  if (mode === 'daily') {
    chip.textContent = 'Daily'; chip.classList.remove('practice');
    note.textContent = 'Daily round counts toward streak and overall progress.';
  } else {
    chip.textContent = 'Practice'; chip.classList.add('practice');
    note.textContent = 'Practice rounds do not affect your daily streak or completion.';
  }
  document.getElementById('net-session').textContent = `Practice rounds this visit: ${practiceRoundsThisVisit}`;
  document.getElementById('net-daily').style.display = mode === 'practice' ? 'inline-block' : 'none';
}

function renderRound(state) {
  const qi   = state.idxs[state.index];
  const q    = QUESTIONS[qi];
  const opts = document.getElementById('net-options');
  const next = document.getElementById('net-next');

  updateModeBanner();
  setLayerBadge(q.layer);

  document.getElementById('net-date').textContent = mode === 'daily'
    ? `Daily Challenge · ${new Date().toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric' })}`
    : 'Practice Mode · Unlimited Rounds';
  document.getElementById('net-progress').textContent =
    `Question ${state.index + 1} of ${state.idxs.length}  ·  Score ${state.score}`;
  document.getElementById('net-question').textContent = q.question;
  clearFeedback();
  next.classList.remove('show');

  opts.innerHTML = '';
  q.options.forEach((text, idx) => {
    const btn = document.createElement('button');
    btn.className = 'net-option'; btn.type = 'button'; btn.textContent = text;
    btn.addEventListener('click', () => {
      if (state.finished || state.answered[state.index] !== undefined) return;
      const correct = idx === q.answer;
      state.answered[state.index] = idx;
      if (correct) state.score += 1;
      lockChoices(idx, q.answer);
      showFeedback((correct ? '✓ Correct! ' : '✗ Not quite. ') + q.fact);
      next.classList.add('show');
      if (state.mode === 'daily') saveDayState(state);
      if (window.charScene) {
        const rm=['Packets delivered!','Routing success!','Signal received clearly!'];
        const wm=['Packet lost. Retry!','Check your OSI layers!','Firewall blocked that one.'];
        const ms=correct?rm:wm; const m=ms[Math.floor(Math.random()*ms.length)];
        if(correct)window.charScene.npcRight(m);else window.charScene.npcWrong(m);
        window.charScene.aiComment(correct);
      }
    });
    opts.appendChild(btn);
  });

  const prior = state.answered[state.index];
  if (prior !== undefined) {
    lockChoices(prior, q.answer);
    showFeedback((prior === q.answer ? '✓ Correct! ' : '✗ Not quite. ') + q.fact);
    next.classList.add('show');
  }
}

async function finishRound(state) {
  state.finished = true;
  if (state.mode === 'daily' && !state.counted) {
    const stats = loadStats();
    stats.played  += 1;
    stats.correct += state.score;
    stats.total   += state.idxs.length;
    if (state.score >= Math.ceil(state.idxs.length * 0.6)) {
      stats.streak += 1;
      stats.maxStreak = Math.max(stats.maxStreak, stats.streak);
    } else {
      stats.streak = 0;
    }
    saveStats(stats);
    syncStatsView(stats);
    await postResult(state.score === state.idxs.length);
    addOverallProgress('network_stack', state.score * 30, state.score >= Math.ceil(state.idxs.length * 0.6));
    state.counted = true;
  }
  if (state.mode === 'daily') saveDayState(state);
  updateModeBanner();
  document.getElementById('net-progress').textContent = `Final Score  ${state.score} / ${state.idxs.length}`;
  document.getElementById('net-question').textContent = state.mode === 'daily'
    ? 'Daily round complete! Switch to Practice for unlimited rounds.'
    : 'Practice round complete. Start another or go back to Daily.';
  document.getElementById('net-options').innerHTML = '';
  const msg = state.score === state.idxs.length
    ? 'Perfect score — expert-level networking knowledge!'
    : `Nice work! You got ${state.score} of ${state.idxs.length} correct.`;
  showFeedback(state.mode === 'daily' ? msg : `${msg} Practice results do not count toward daily progress.`);
  document.getElementById('net-next').classList.remove('show');
  highlightLayer(null);
  document.getElementById('layer-badge').style.display = 'none';
}

function saveDayState(state) {
  localStorage.setItem(DATE_KEY, getDayId());
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

function loadDayState(dayId, idxs) {
  if (localStorage.getItem(DATE_KEY) !== dayId) return makeState(idxs, 'daily');
  const saved = JSON.parse(localStorage.getItem(STATE_KEY) || 'null');
  if (!saved || !Array.isArray(saved.idxs) || saved.idxs.join(',') !== idxs.join(',')) return makeState(idxs, 'daily');
  saved.mode = 'daily';
  return saved;
}

// ── Game entry points ──
function runDaily() {
  const dayId = getDayId();
  const idxs  = getDailyIndexes();
  dailyState  = loadDayState(dayId, idxs);
  mode = 'daily';
  document.getElementById('layer-badge').style.display = '';

  const next = document.getElementById('net-next');
  if (dailyState.finished || dailyState.index >= dailyState.idxs.length) {
    finishRound(dailyState);
    return;
  }
  renderRound(dailyState);
  next.onclick = advanceActive;
}

function startPractice() {
  mode = 'practice';
  practiceState = makeState(getPracticeIndexes(), 'practice');
  practiceRoundsThisVisit += 1;
  document.getElementById('layer-badge').style.display = '';
  renderRound(practiceState);
  document.getElementById('net-next').onclick = advanceActive;
}

function showDaily() {
  mode = 'daily';
  const dayId = getDayId();
  const idxs  = getDailyIndexes();
  dailyState  = loadDayState(dayId, idxs);
  document.getElementById('layer-badge').style.display = '';
  if (dailyState.finished || dailyState.index >= dailyState.idxs.length) {
    finishRound(dailyState);
    return;
  }
  renderRound(dailyState);
  document.getElementById('net-next').onclick = advanceActive;
}

function advanceActive() {
  const active = mode === 'daily' ? dailyState : practiceState;
  if (!active) return;
  active.index += 1;
  if (active.index >= active.idxs.length) { finishRound(active); return; }
  if (active.mode === 'daily') saveDayState(active);
  renderRound(active);
}

document.getElementById('net-practice').addEventListener('click', startPractice);
document.getElementById('net-daily').addEventListener('click', showDaily);

syncStatsView(loadStats());
runDaily();

// ── OSI vs TCP/IP toggle ──
document.getElementById('tcpip-toggle').addEventListener('click', function() {
  const c = document.getElementById('tcpip-content');
  const a = document.getElementById('tcpip-arrow');
  const open = c.classList.toggle('open');
  a.textContent = open ? '▲' : '▼';
});

// ── MTU Minigame ──
const MTU_ANSWERS = [14, 20, 20, 1460, 4];
let mtuDone = false;

// Override renderRound to intercept L4 questions and show MTU game first
const _origRenderRound = renderRound;
window._netRenderRound = function(state) {
  const qi = state.idxs[state.index];
  const q = QUESTIONS[qi];
  if (q.layer === 4 && !mtuDone) {
    document.getElementById('mtu-wrap').classList.add('show');
    // Hide the quiz content while MTU is shown
    document.getElementById('net-question').textContent = 'Complete the MTU challenge above first!';
    document.getElementById('net-options').innerHTML = '';
    document.getElementById('net-feedback').classList.remove('show');
    document.getElementById('net-next').classList.remove('show');
    document.getElementById('layer-badge').style.display = '';
    setLayerBadge(4);
    document.getElementById('net-date').textContent = 'Layer 4 — Transport Layer Bonus';
    document.getElementById('net-progress').textContent = 'Bonus challenge before question ' + (state.index + 1);
    window._pendingRoundState = state;
    return;
  }
  _origRenderRound(state);
};

// Patch advanceActive and renderRound calls to use our override
const origAdvance = advanceActive;
window.advanceActive = function() {
  const active = mode === 'daily' ? dailyState : practiceState;
  if (!active) return;
  active.index += 1;
  if (active.index >= active.idxs.length) { finishRound(active); return; }
  if (active.mode === 'daily') saveDayState(active);
  window._netRenderRound(active);
};
document.getElementById('net-next').onclick = window.advanceActive;

// Patch runDaily and startPractice render calls
const origRunDaily = runDaily;
window.runDailyPatched = function() {
  const dayId = getDayId();
  const idxs = getDailyIndexes();
  dailyState = loadDayState(dayId, idxs);
  mode = 'daily';
  mtuDone = false;
  document.getElementById('layer-badge').style.display = '';
  if (dailyState.finished || dailyState.index >= dailyState.idxs.length) {
    finishRound(dailyState); return;
  }
  window._netRenderRound(dailyState);
  document.getElementById('net-next').onclick = window.advanceActive;
};

// MTU live total calculator
function mtuCalcTotal() {
  let total = 0; let allSet = true;
  for (let i = 0; i < 5; i++) {
    const v = parseInt(document.getElementById('mtu-s'+i).value || '0');
    if (!v) { allSet = false; total += 0; } else total += v;
  }
  document.getElementById('mtu-total').textContent = allSet ? total + ' bytes' : '— (select all)';
}
for (let i = 0; i < 5; i++) {
  document.getElementById('mtu-s'+i).addEventListener('change', mtuCalcTotal);
}

function mtuFinish(bonus) {
  mtuDone = true;
  document.getElementById('mtu-wrap').classList.remove('show');
  const state = window._pendingRoundState;
  if (state) {
    if (bonus) addOverallProgress('network_stack_mtu', 50, true);
    _origRenderRound(state);
    document.getElementById('net-next').onclick = window.advanceActive;
  }
}

document.getElementById('mtu-check').addEventListener('click', function() {
  const vals = [14,20,20,1460,4];
  let allCorrect = true; let allSet = true;
  for (let i = 0; i < 5; i++) {
    const sel = document.getElementById('mtu-s'+i);
    const v = parseInt(sel.value || '0');
    if (!v) { allSet = false; break; }
    if (v === vals[i]) { sel.className = 'correct'; } else { sel.className = 'wrong'; allCorrect = false; }
  }
  if (!allSet) {
    const fb = document.getElementById('mtu-feedback');
    fb.className = 'mtu-feedback show err'; fb.textContent = 'Select a value for all 5 slots first.'; return;
  }
  const fb = document.getElementById('mtu-feedback');
  if (allCorrect) {
    fb.className = 'mtu-feedback show ok';
    fb.textContent = 'Perfect! 14 + 20 + 20 + 1460 + 4 = 1518 bytes. +50 bonus points!';
    if (window.charScene) { window.charScene.npcRight('MTU mastered!'); window.charScene.aiComment(true); }
    setTimeout(() => mtuFinish(true), 1800);
  } else {
    fb.className = 'mtu-feedback show err';
    fb.textContent = 'Not quite. Correct: Frame Header=14B, IP Header=20B, TCP Header=20B, Max Payload=1460B, CRC Tail=4B. Total=1518B.';
    if (window.charScene) { window.charScene.npcWrong('Check the byte sizes!'); window.charScene.aiComment(false); }
    setTimeout(() => mtuFinish(false), 2800);
  }
});

document.getElementById('mtu-skip').addEventListener('click', () => mtuFinish(false));
}

// ── Character Scene (Network: Router + Firewall) ──
(function(){
const cvs=document.getElementById('char-canvas');
if(!cvs)return;
const ctx=cvs.getContext('2d');
let W=0,H=200,tick=0;
let nA='idle',nAT=0,nM='',nMT=0;
let aB='',aBT=0,aLoad=false;
function resize(){const p=cvs.parentElement;if(!p)return;W=p.clientWidth;cvs.width=W;cvs.height=H;}
function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
function bbl(bx,by,txt){if(!txt)return;ctx.font='11px sans-serif';const mw=Math.min(150,W*0.3);const words=txt.split(' ');const lines=[];let cur='';words.forEach(w=>{const t=cur?cur+' '+w:w;if(ctx.measureText(t).width>mw-14&&cur){lines.push(cur);cur=w;}else cur=t;});if(cur)lines.push(cur);const bw=mw,bh=lines.length*14+12;const rx=Math.max(2,Math.min(W-bw-2,bx-bw/2)),ry=by-bh-10;ctx.shadowColor='rgba(0,0,0,0.2)';ctx.shadowBlur=5;ctx.fillStyle='#fffef5';rr(rx,ry,bw,bh,5);ctx.fill();ctx.shadowBlur=0;ctx.strokeStyle='#c8a04a';ctx.lineWidth=1.5;rr(rx,ry,bw,bh,5);ctx.stroke();ctx.beginPath();ctx.moveTo(bx-5,ry+bh);ctx.lineTo(bx,ry+bh+7);ctx.lineTo(bx+5,ry+bh);ctx.fillStyle='#fffef5';ctx.fill();ctx.strokeStyle='#c8a04a';ctx.stroke();ctx.fillStyle='#3a2a0a';ctx.textAlign='center';ctx.textBaseline='top';lines.forEach((l,i)=>ctx.fillText(l,rx+bw/2,ry+6+i*14));}
function drawBg(){ctx.fillStyle='#c4956a';ctx.fillRect(0,0,W,H-45);ctx.fillStyle='#2d5e3a';ctx.fillRect(0,H-45,W,45);ctx.fillStyle='rgba(255,230,100,0.07)';ctx.fillRect(0,H-45,W,3);const ns=Math.max(2,Math.floor(W/130)),sw=Math.floor(W/ns)-6;for(let i=0;i<ns;i++){const sx=i*(sw+6)+3,sy=8;ctx.fillStyle='#7a4e22';rr(sx,sy,sw,H-58,3);ctx.fill();const BC=['#a83030','#2a5e8a','#3a8a3a','#8a6a1a','#5a1a8a','#8a3a1a','#1a7a6a','#8a1a4a'];for(let s=0;s<3;s++){const by2=sy+8+s*36;ctx.fillStyle='#9a6030';ctx.fillRect(sx+2,by2+26,sw-4,3);let bx2=sx+3,ci=(i*7+s*4)%8;while(bx2<sx+sw-8){const bw2=6+(ci%3)*3,bh2=16+(ci%4)*3;ctx.fillStyle=BC[ci%8];ctx.fillRect(bx2,by2+26-bh2,bw2,bh2);ctx.fillStyle='rgba(0,0,0,0.12)';ctx.fillRect(bx2+bw2-2,by2+26-bh2,2,bh2);bx2+=bw2+1;ci++;}}}const g=ctx.createRadialGradient(W/2,-10,0,W/2,-10,H);g.addColorStop(0,'rgba(255,210,100,0.1)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);}
function drawLib(cx,fy){const by=fy+Math.sin(tick*0.04)*2;ctx.fillStyle='#111';ctx.fillRect(cx-5,by+24,5,3);ctx.fillRect(cx,by+24,5,3);ctx.fillStyle='#1a3a1a';ctx.fillRect(cx-4,by+16,3,8);ctx.fillRect(cx+1,by+16,3,8);ctx.fillStyle='#4a7a5a';ctx.fillRect(cx-7,by,14,16);ctx.fillStyle='#fff';ctx.fillRect(cx-2,by,4,5);ctx.fillStyle='#4a7a5a';ctx.fillRect(cx-10,by+2,3,9);ctx.fillRect(cx+7,by+2,3,9);ctx.fillStyle='#f5c9a0';ctx.fillRect(cx-10,by+11,3,3);ctx.fillRect(cx+7,by+11,3,3);ctx.fillStyle='#f5c9a0';ctx.fillRect(cx-2,by-5,4,5);ctx.fillRect(cx-5,by-14,10,11);ctx.fillStyle='#3a1e0a';ctx.fillRect(cx-5,by-14,10,4);ctx.fillRect(cx-7,by-11,3,8);ctx.fillStyle='#1a1a1a';ctx.fillRect(cx-3,by-9,2,2);ctx.fillRect(cx+1,by-9,2,2);ctx.strokeStyle='#333';ctx.lineWidth=1;ctx.strokeRect(cx-5,by-11,4,4);ctx.strokeRect(cx+1,by-11,4,4);ctx.beginPath();ctx.moveTo(cx-1,by-9);ctx.lineTo(cx+1,by-9);ctx.stroke();ctx.fillStyle='#fff';ctx.fillRect(cx-4,by+6,8,5);ctx.fillStyle='#023b0f';ctx.font='bold 4px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('LIB',cx,by+9);}
function drawRouter(cx,fy){let ox=cx,oy=fy;if(nA==='happy')oy+=Math.sin(tick*0.25)*7;if(nA==='shake')ox+=Math.sin(tick*0.6)*5;ctx.fillStyle='#1e3a5a';rr(ox-18,oy-2,36,20,5);ctx.fill();ctx.fillStyle='#2a5a8a';rr(ox-18,oy-2,36,5,3);ctx.fill();const lc=nA==='happy'?['#00ff88','#00ff88','#00ff88']:nA==='shake'?['#ff4444','#ff4444','#ff4444']:['#00aa44',tick%60<30?'#ffaa00':'#004422','#3366cc'];lc.forEach((c,i)=>{ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(ox-8+i*8,oy+6,2.5,2.5,0,0,Math.PI*2);ctx.fill();});for(let i=0;i<4;i++){ctx.fillStyle='#0e2038';ctx.fillRect(ox-13+i*7,oy+11,5,3);}ctx.strokeStyle='#3a7aaa';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(ox+10,oy-2);ctx.lineTo(ox+14,oy-16);ctx.stroke();ctx.fillStyle=tick%80<40?'#ff6622':'#aa4400';ctx.beginPath();ctx.ellipse(ox+14,oy-17,2.5,2.5,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#6a9fc4';ctx.font='bold 7px monospace';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('ROUTER',ox,oy+4);}
function drawFW(cx,fy){const ox=cx,oy=fy;ctx.fillStyle='#7a2008';ctx.beginPath();ctx.moveTo(ox,oy-22);ctx.lineTo(ox+15,oy-11);ctx.lineTo(ox+15,oy+5);ctx.quadraticCurveTo(ox+13,oy+18,ox,oy+24);ctx.quadraticCurveTo(ox-13,oy+18,ox-15,oy+5);ctx.lineTo(ox-15,oy-11);ctx.closePath();ctx.fill();ctx.fillStyle='#b83818';ctx.beginPath();ctx.moveTo(ox,oy-15);ctx.lineTo(ox+10,oy-6);ctx.lineTo(ox+10,oy+4);ctx.quadraticCurveTo(ox+8,oy+13,ox,oy+18);ctx.quadraticCurveTo(ox-8,oy+13,ox-10,oy+4);ctx.lineTo(ox-10,oy-6);ctx.closePath();ctx.fill();const ft=tick*0.15;[-5,0,5].forEach((fx,fi)=>{const fh=7+Math.sin(ft+fi*1.3)*3;ctx.fillStyle=`rgba(255,${80+fi*40},0,0.8)`;ctx.beginPath();ctx.moveTo(ox+fx-3,oy+10);ctx.quadraticCurveTo(ox+fx,oy-fh+8,ox+fx+3,oy+10);ctx.fill();});ctx.fillStyle='rgba(255,255,255,0.9)';ctx.font='bold 12px monospace';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('F',ox,oy+2);ctx.fillStyle=aLoad?(tick%20<10?'#ffaa00':'#ff8800'):'#ff4444';ctx.beginPath();ctx.ellipse(ox-3.5,oy-4,2.2,2.2,0,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.ellipse(ox+3.5,oy-4,2.2,2.2,0,0,Math.PI*2);ctx.fill();}
function loop(){tick++;nAT=Math.max(0,nAT-1);nMT=Math.max(0,nMT-1);aBT=Math.max(0,aBT-1);if(nAT===0)nA='idle';if(nMT===0)nM='';if(aBT===0&&!aLoad)aB='';if(!W)resize();ctx.clearRect(0,0,W,H);drawBg();const fy=H-45-28;const pX=Math.max(45,W*0.12),nX=Math.floor(W/2),aX=Math.min(W-45,W*0.85);drawLib(pX,fy);drawRouter(nX,fy);if(nM)bbl(nX,H-45-50,nM);drawFW(aX,fy);if(aB)bbl(aX,H-45-50,aB);requestAnimationFrame(loop);}
window.charScene={
  npcRight(m){nA='happy';nAT=80;nM=m;nMT=200;},
  npcWrong(m){nA='shake';nAT=50;nM=m;nMT=180;},
  async aiComment(ok){aLoad=true;aB='...';aBT=9999;try{const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json','anthropic-version':'2023-06-01'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:100,system:'You are a fun game character in a library game. Give one short (max 15 words), encouraging or playful comment based on whether the player just got something right or wrong. Be fun and library-themed.',messages:[{role:'user',content:ok?'The player got the networking question right!':'The player got the networking question wrong.'}]})});const d=await r.json();aB=d.content?.[0]?.text||(ok?'Packet delivered!':'Check your routing table!');}catch{aB=ok?'Signal strong!':'Packet lost. Resend!';}aLoad=false;aBT=300;}
};
resize();new ResizeObserver(resize).observe(cvs.parentElement);loop();
})();
</script>
