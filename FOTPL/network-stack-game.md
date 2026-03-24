---
layout: fopl
title: Network Stack Challenge — Friends of the Poway Library
permalink: /network-stack-game
description: Test your HTTP and OSI networking knowledge with the Network Stack Challenge at the Friends of the Poway Library.
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; font-family: 'Lato', sans-serif; background: #f4f8f4; }

  .fopl-nav {
    background: #023b0f; display: flex; align-items: center;
    justify-content: space-between; padding: 0 30px; flex-wrap: wrap;
  }
  .fopl-logo-wrap img { height: 90px; width: auto; padding: 8px 0; display: block; }
  .fopl-nav-links { display: flex; list-style: none; margin: 0; padding: 0; }
  .fopl-nav-links li a {
    display: block; color: #fff; text-decoration: none;
    font-family: 'Cabin', sans-serif; font-size: 0.88rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.04em;
    padding: 16px 16px; transition: background 0.2s;
  }
  .fopl-nav-links li a:hover,
  .fopl-nav-links li.active a { background: rgba(255,255,255,0.12); }
  .fopl-nav-has-dropdown { position: relative; }
  .fopl-nav-dropdown {
    display: none; position: absolute; top: 100%; right: 0;
    background: #fff; border-radius: 4px; box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    list-style: none; margin: 0; padding: 6px 0; min-width: 140px; z-index: 1000;
  }
  .fopl-nav-dropdown.open { display: block; }
  .fopl-nav-dropdown li a {
    display: block; padding: 10px 18px; color: #023b0f;
    font-family: 'Cabin', sans-serif; font-size: 0.88rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.04em; text-decoration: none; background: none;
  }
  .fopl-nav-dropdown li a:hover { background: #f4f8f4 !important; }
  #nav-auth-item a#nav-auth-link {
    background: rgba(255,255,255,0.15); border: 1.5px solid rgba(255,255,255,0.45);
    border-radius: 20px; padding: 8px 18px; margin: 8px 0;
    font-size: 0.85rem; letter-spacing: 0.05em;
  }
  #nav-auth-item a#nav-auth-link:hover { background: rgba(255,255,255,0.28); }

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

  /* ── Footer ── */
  .fopl-footer {
    background: #023b0f; color: rgba(255,255,255,0.7);
    text-align: center; padding: 18px; font-size: 0.85rem;
  }
  .fopl-footer a { color: rgba(255,255,255,0.85); text-decoration: none; }

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
</style>

<nav class="fopl-nav">
  <div class="fopl-logo-wrap">
    <img src="/FOTPL/fopllogo.png" alt="Friends of the Poway Library" />
  </div>
  <ul class="fopl-nav-links">
    <li><a href="/home">Home</a></li>
    <li><a href="/history">History</a></li>
    <li><a href="/bookstore">Bookstore</a></li>
    <li><a href="/news">Newsletters</a></li>
    <li class="active"><a href="/puzzles">Puzzles</a></li>
    <li><a href="/contact">Contact Us</a></li>
    <li id="nav-auth-item"><a href="/login" id="nav-auth-link">Sign In</a>
      <ul class="fopl-nav-dropdown" id="nav-auth-dropdown">
        <li><a href="/profile">Profile</a></li>
        <li><a href="#" id="nav-signout-btn">Sign Out</a></li>
      </ul>
    </li>
  </ul>
</nav>

<div class="net-outer">

  <!-- ── Left: Trivia card ── -->
  <div class="net-main">
    <div class="net-header">
      <div class="net-title">Network Stack Challenge</div>
      <a class="net-btn-link" href="/puzzles" title="All Games">All Games</a>
    </div>

    <div class="net-card">
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

<div class="fopl-footer">
  &copy; 2025 Friends of the Poway Library &mdash;
  <a href="https://powayfriends.org">powayfriends.org</a>
</div>

<script>
{
const BACKEND = 'http://127.0.0.1:8587';
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

function getDayId() {
  const epoch = new Date('2024-01-01T00:00:00');
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return String(Math.floor((today - epoch) / 86400000));
}

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

async function postResult(correct) {
  const user = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  if (!user) return;
  try {
    await fetch(`${BACKEND}/api/fopl/puzzle/stats`, {
      method: 'POST', credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ game: 'network_stack', won: !!correct, guesses: 1 })
    });
  } catch {}
}

function addOverallProgress(game, points, won) {
  const overall = JSON.parse(localStorage.getItem('fopl_games_overall_v1') || '{"xp":0,"sessions":0,"wins":0,"byGame":{}}');
  overall.xp = Number(overall.xp || 0) + Math.max(0, Number(points || 0));
  overall.sessions = Number(overall.sessions || 0) + 1;
  if (won) overall.wins = Number(overall.wins || 0) + 1;
  overall.byGame = overall.byGame || {};
  overall.byGame[game] = Number(overall.byGame[game] || 0) + Math.max(0, Number(points || 0));
  overall.updatedAt = Date.now();
  localStorage.setItem('fopl_games_overall_v1', JSON.stringify(overall));
}

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

// ── Auth nav ──
const foplUser = JSON.parse(localStorage.getItem('fopl_user') || 'null');
const authItem = document.getElementById('nav-auth-item');
const authLink = document.getElementById('nav-auth-link');
const dropdown = document.getElementById('nav-auth-dropdown');
const signoutBtn = document.getElementById('nav-signout-btn');
if (foplUser && authLink) {
  authItem.classList.add('fopl-nav-has-dropdown');
  authLink.textContent = foplUser.name.split(' ')[0];
  authLink.href = '#';
  authLink.onclick = (e) => { e.preventDefault(); dropdown.classList.toggle('open'); };
  document.addEventListener('click', (e) => {
    if (!authItem.contains(e.target)) dropdown.classList.remove('open');
  });
  signoutBtn.onclick = async (e) => {
    e.preventDefault();
    await fetch(`${BACKEND}/api/fopl/login`, { method: 'DELETE', credentials: 'include' }).catch(() => {});
    localStorage.removeItem('fopl_user');
    window.location.href = '/home';
  };
}

document.getElementById('net-practice').addEventListener('click', startPractice);
document.getElementById('net-daily').addEventListener('click', showDaily);

syncStatsView(loadStats());
runDaily();
}
</script>
