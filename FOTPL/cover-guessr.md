---
layout: fopl
title: Cover Guessr — Friends of the Poway Library
permalink: /cover-guessr
description: Guess blurred book covers as they progressively reveal.
fopl_nav_active: puzzles
---

<style>
    @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;600;700&display=swap');

    :root {
      --bg: #f4f8f4;
      --bg-2: #edf5ed;
      --panel: #ffffff;
      --panel-strong: #fff;
      --ink: #213526;
      --muted: #587258;
      --line: rgba(2, 59, 15, 0.14);
      --green: #023b0f;
      --green-soft: #dff0e6;
      --red: #9d2c2c;
      --red-soft: #f6dddb;
      --gold: #9b7429;
      --gold-soft: #f2e8cf;
      --shadow: 0 4px 16px rgba(2, 59, 15, 0.08);
      --radius: 12px;
    }


    * { box-sizing: border-box; }
    html, body { height: 100%; }
    body {
      margin: 0;
      color: var(--ink);
      font-family: "Cabin", sans-serif;
      background: var(--bg);
    }

    body::before {
      display: none;
    }

    a { color: inherit; }

    .page {
      width: min(1220px, calc(100vw - 28px));
      margin: 0 auto;
      padding: 16px 0 28px;
      position: relative;
      z-index: 1;
    }

    .topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 16px;
      padding: 8px 4px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      min-width: 0;
    }

    .brand-mark {
      width: 44px;
      height: 44px;
      border-radius: 8px;
      display: grid;
      place-items: center;
      background: #023b0f;
      color: #fff;
      font-family: "Cabin", sans-serif;
      font-size: 1.05rem;
      letter-spacing: 0.08em;
      font-weight: 700;
      box-shadow: 0 6px 16px rgba(2, 59, 15, 0.16);
      flex: 0 0 auto;
    }

    .brand-copy { min-width: 0; }

    .brand-copy strong {
      display: block;
      font-family: "Cabin", sans-serif;
      font-size: 1.25rem;
      line-height: 1.1;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #023b0f;
    }

    .brand-copy span {
      display: block;
      color: var(--muted);
      font-size: 0.82rem;
      margin-top: 2px;
    }

    .toplink {
      padding: 10px 14px;
      text-decoration: none;
      border-radius: 999px;
      border: 1px solid #cad8cc;
      background: #eff6f0;
      color: var(--green);
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .hero {
      display: block;
      margin-bottom: 18px;
    }

    .panel {
      background: var(--panel);
      border: 1px solid #d7e4d7;
      box-shadow: var(--shadow);
      border-radius: var(--radius);
    }

    .hero-copy {
      padding: 18px 20px 16px;
      position: relative;
      overflow: hidden;
      border-top: 4px solid #023b0f;
    }

    .hero-copy::after {
      content: "";
      position: absolute;
      inset: auto -60px -100px auto;
      width: 220px;
      height: 220px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(2, 59, 15, 0.12), transparent 68%);
      pointer-events: none;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 11px;
      border-radius: 999px;
      background: rgba(31, 99, 53, 0.08);
      border: 1px solid rgba(31, 99, 53, 0.12);
      color: var(--green);
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .hero-copy h1 {
      margin: 12px 0 10px;
      font-family: "Cabin", sans-serif;
      font-size: clamp(1.8rem, 4.5vw, 3rem);
      line-height: 1.05;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #023b0f;
    }

    .hero-copy p {
      margin: 0;
      max-width: 100%;
      color: var(--muted);
      font-size: 0.92rem;
      line-height: 1.55;
    }

    .quick-rules {
      margin: 12px 0 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .quick-rules li {
      border: 1px solid #d4e2d5;
      background: #f6fbf6;
      border-radius: 999px;
      padding: 5px 10px;
      font-size: 0.74rem;
      font-weight: 700;
      color: #2f5133;
      letter-spacing: 0.02em;
    }

    .hero-aside {
      padding: 16px;
      display: grid;
      gap: 12px;
    }

    .mode-card {
      border-radius: 18px;
      border: 1px solid rgba(31, 45, 35, 0.10);
      background: rgba(255, 255, 255, 0.76);
      padding: 16px;
    }

    .mode-title {
      margin: 0 0 10px;
      font-size: 0.74rem;
      text-transform: uppercase;
      letter-spacing: 0.09em;
      font-weight: 800;
      color: var(--muted);
    }

    .mode-grid {
      display: grid;
      gap: 8px;
    }

    .mode-row {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 8px;
    }

    .seg-btn {
      border: 1px solid rgba(31, 45, 35, 0.12);
      background: #fff;
      color: var(--ink);
      padding: 10px 10px;
      border-radius: 12px;
      font: inherit;
      font-weight: 800;
      cursor: pointer;
      transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
    }

    .seg-btn:hover { transform: translateY(-1px); }
    .seg-btn.active {
      background: #023b0f;
      color: #fff;
      border-color: transparent;
      box-shadow: 0 6px 14px rgba(2, 59, 15, 0.15);
    }

    .toggle-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      border: 1px solid rgba(31, 45, 35, 0.10);
      background: #fff;
      border-radius: 14px;
      padding: 11px 12px;
    }

    .toggle-copy strong {
      display: block;
      font-size: 0.9rem;
      margin-bottom: 2px;
    }

    .toggle-copy span {
      display: block;
      color: var(--muted);
      font-size: 0.78rem;
      line-height: 1.35;
    }

    .switch {
      position: relative;
      width: 52px;
      height: 30px;
      flex: 0 0 auto;
    }

    .switch input {
      width: 1px;
      height: 1px;
      opacity: 0;
      position: absolute;
    }

    .switch-ui {
      position: absolute;
      inset: 0;
      border-radius: 999px;
      background: #d6ddd2;
      border: 1px solid rgba(31, 45, 35, 0.10);
      transition: background 0.25s ease;
    }

    .switch-ui::after {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
      transition: transform 0.25s ease;
    }

    .switch input:checked + .switch-ui {
      background: #023b0f;
    }

    .switch input:checked + .switch-ui::after {
      transform: translateX(22px);
    }

    .action-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 2px;
    }

    .primary-btn,
    .secondary-btn {
      border: none;
      border-radius: 14px;
      padding: 12px 16px;
      font: inherit;
      font-weight: 800;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
    }

    .primary-btn {
      background: #023b0f;
      color: #fff;
      box-shadow: 0 8px 16px rgba(2, 59, 15, 0.16);
    }

    .secondary-btn {
      background: #f6faf6;
      color: #1f3d22;
      border: 1px solid #c7d6c8;
    }

    .primary-btn:hover,
    .secondary-btn:hover { transform: translateY(-1px); }

    .game-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(300px, 340px);
      gap: 18px;
      align-items: start;
    }

    .game-sidebar {
      display: grid;
      gap: 14px;
      position: sticky;
      top: 16px;
      align-self: start;
    }

    .game-panel {
      padding: 18px;
      overflow: hidden;
      position: relative;
    }

    .hud {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 12px;
      margin-bottom: 14px;
    }

    .hud-pill {
      border-radius: 16px;
      border: 1px solid rgba(31, 45, 35, 0.12);
      background: rgba(255, 255, 255, 0.72);
      padding: 10px 14px;
      min-height: 58px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      box-shadow: 0 8px 20px rgba(31, 45, 35, 0.05);
    }

    .hud-label {
      display: block;
      color: var(--muted);
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 800;
      margin-bottom: 2px;
    }

    .hud-value {
      display: block;
      font-size: 1.05rem;
      font-weight: 800;
      color: var(--ink);
    }

    .hud-center {
      font-family: "Cabin", sans-serif;
      font-size: 1.35rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      text-align: center;
      color: var(--green);
    }

    .subline {
      margin-bottom: 14px;
      color: var(--muted);
      font-size: 0.92rem;
      line-height: 1.5;
    }

    .playbook {
      margin-bottom: 14px;
      border: 1px solid #d7e4d7;
      border-radius: 12px;
      background: #f7fbf7;
      padding: 12px;
      display: grid;
      gap: 10px;
    }

    .playbook-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
    }

    .playbook-now {
      font-size: 0.88rem;
      font-weight: 700;
      color: #1d4a24;
    }

    .playbook-steps {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 8px;
    }

    .play-step {
      border: 1px solid #d6e3d6;
      border-radius: 10px;
      background: #fff;
      color: #587258;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.02em;
      padding: 9px 8px;
      display: flex;
      align-items: center;
      gap: 7px;
      line-height: 1.35;
    }

    .play-step-num {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: #edf4ee;
      color: #2f5133;
      font-size: 0.7rem;
      font-weight: 800;
      flex: 0 0 auto;
    }

    .play-step.active {
      border-color: #8cb992;
      background: #eef8ef;
      color: #1f4b26;
      box-shadow: 0 0 0 1px rgba(2, 59, 15, 0.05) inset;
    }

    .play-step.active .play-step-num {
      background: #023b0f;
      color: #fff;
    }

    .stage {
      display: grid;
      gap: 16px;
    }

    .cover-shell {
      position: relative;
      border-radius: 24px;
      background: linear-gradient(180deg, rgba(31, 45, 35, 0.08), rgba(31, 45, 35, 0.03));
      border: 1px solid rgba(31, 45, 35, 0.10);
      padding: 14px;
      overflow: hidden;
    }

    .cover-frame {
      position: relative;
      height: min(60vh, 560px);
      min-height: 340px;
      border-radius: 20px;
      overflow: hidden;
      background:
        linear-gradient(180deg, rgba(28, 34, 28, 0.88), rgba(43, 51, 45, 0.82)),
        #252b27;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
    }

    .cover-frame img,
    .cover-fallback {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }

    .cover-frame img {
      object-fit: contain;
      padding: 18px;
      filter: blur(20px) saturate(0.95) contrast(1.06);
      transform: scale(1.02);
      transition: filter 0.28s ease, transform 0.28s ease, opacity 0.25s ease;
      opacity: 0;
    }

    .cover-frame img.ready { opacity: 1; }

    .cover-frame img.revealed {
      filter: blur(0) saturate(1.02) contrast(1.02);
      transform: scale(1);
    }

    .cover-fallback {
      display: none;
      place-items: center;
      padding: 24px;
      color: rgba(255, 255, 255, 0.92);
      text-align: center;
      background:
        radial-gradient(circle at top, rgba(185, 129, 45, 0.25), transparent 34%),
        linear-gradient(180deg, rgba(31, 45, 35, 0.96), rgba(19, 28, 22, 0.98));
    }

    .fallback-card {
      max-width: 320px;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(255, 255, 255, 0.05);
      padding: 22px 20px;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.16);
    }

    .fallback-card h3 {
      margin: 0 0 8px;
      font-family: "Cormorant Garamond", serif;
      font-size: 2rem;
      line-height: 0.95;
    }

    .fallback-card p {
      margin: 0;
      opacity: 0.82;
      line-height: 1.55;
      font-size: 0.92rem;
    }

    .cover-overlay {
      position: absolute;
      inset: auto 0 0 0;
      padding: 14px;
      display: grid;
      gap: 10px;
      background: linear-gradient(180deg, transparent, rgba(10, 14, 12, 0.72));
      color: #fff;
    }

    .reveal-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      font-size: 0.8rem;
      font-weight: 800;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .reveal-track {
      height: 10px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.14);
      overflow: hidden;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
    }

    .reveal-fill {
      width: 0%;
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(90deg, #d8b06a, #f2d18a);
      transition: width 0.28s ease;
    }

    .cover-actions {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
    }

    .cover-actions .primary-btn,
    .cover-actions .secondary-btn {
      padding: 11px 14px;
      border-radius: 13px;
    }

    .small-note {
      font-size: 0.78rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.45;
      align-self: center;
    }

    .round-panel {
      display: grid;
      gap: 14px;
    }

    .info-card {
      border-radius: 18px;
      border: 1px solid rgba(31, 45, 35, 0.10);
      background: rgba(255, 255, 255, 0.78);
      padding: 16px;
    }

    .section-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 10px;
    }

    .section-head h2 {
      margin: 0;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.09em;
      color: var(--muted);
      font-weight: 800;
    }

    .pill-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      min-height: 44px;
    }

    .clue-pill,
    .status-pill,
    .setting-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 12px;
      border-radius: 999px;
      border: 1px solid rgba(31, 45, 35, 0.10);
      background: #fff;
      color: var(--ink);
      font-size: 0.84rem;
      line-height: 1.35;
      box-shadow: 0 8px 16px rgba(31, 45, 35, 0.05);
      animation: rise 0.28s ease both;
    }

    .clue-pill {
      background: linear-gradient(135deg, #fff, #f9f5ec);
    }

    .status-pill.good {
      background: var(--green-soft);
      border-color: rgba(31, 99, 53, 0.18);
      color: var(--green);
    }

    .status-pill.bad {
      background: var(--red-soft);
      border-color: rgba(157, 44, 44, 0.18);
      color: var(--red);
    }

    .status-pill.info {
      background: #f4f0e6;
      color: #6a4f1b;
      border-color: rgba(185, 129, 45, 0.22);
    }

    .year-guess {
      display: grid;
      gap: 12px;
    }
    .year-scale {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      font-size: 0.76rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--muted);
    }
    .year-readout {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 12px;
      border-radius: 16px;
      border: 1px solid rgba(31, 45, 35, 0.10);
      background: linear-gradient(180deg, #fff, #f8f5ee);
      padding: 12px 14px;
    }
    .year-readout strong {
      font-family: "Cabin", sans-serif;
      font-size: 1.7rem;
      line-height: 1;
      color: var(--green);
    }
    .year-readout span {
      color: var(--muted);
      font-size: 0.82rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .guess-slider {
      width: 100%;
      accent-color: var(--green);
    }
    .guess-actions {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }
    .guess-actions .primary-btn {
      min-width: 170px;
    }

    .feedback {
      border-radius: 18px;
      border: 1px solid rgba(31, 45, 35, 0.10);
      background: rgba(255, 255, 255, 0.84);
      padding: 14px 16px;
      min-height: 70px;
      line-height: 1.55;
    }

    .feedback strong { display: block; margin-bottom: 4px; }

    .feedback.good {
      border-color: rgba(31, 99, 53, 0.16);
      background: linear-gradient(180deg, #f2fbf4, #e4f3e8);
    }

    .feedback.bad {
      border-color: rgba(157, 44, 44, 0.16);
      background: linear-gradient(180deg, #fff5f4, #fae4e2);
    }

    .feedback.info {
      border-color: rgba(185, 129, 45, 0.14);
      background: linear-gradient(180deg, #faf6eb, #f3ead3);
    }

    .round-result {
      display: none;
      margin-top: 14px;
      border-radius: 20px;
      border: 1px solid rgba(31, 45, 35, 0.12);
      background: rgba(255, 255, 255, 0.92);
      box-shadow: 0 12px 30px rgba(31, 45, 35, 0.08);
      padding: 16px;
      animation: rise 0.22s ease both;
    }

    .round-result.show {
      display: block;
    }

    .round-result.good {
      border-color: rgba(31, 99, 53, 0.2);
      background: linear-gradient(180deg, #f3fbf5, #e4f3e8);
    }

    .round-result.bad {
      border-color: rgba(157, 44, 44, 0.2);
      background: linear-gradient(180deg, #fff4f3, #f8e1df);
    }

    .result-kicker {
      font-size: 0.72rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 800;
      color: var(--muted);
      margin-bottom: 6px;
    }

    .result-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 8px;
    }

    .result-title {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 900;
    }

    .result-delta {
      font-size: 1.15rem;
      font-weight: 900;
      border-radius: 999px;
      padding: 7px 12px;
      background: rgba(255, 255, 255, 0.74);
      border: 1px solid rgba(31, 45, 35, 0.1);
    }

    .result-answer {
      color: var(--muted);
      line-height: 1.5;
      margin: 0 0 12px;
    }

    .end-card {
      display: none;
      margin-top: 18px;
      padding: 22px;
      border-radius: 24px;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.90), rgba(247, 240, 228, 0.92));
      border: 1px solid rgba(31, 45, 35, 0.10);
      box-shadow: var(--shadow);
    }

    .end-card.show { display: block; }

    .end-head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }

    .end-head h2 {
      margin: 0 0 8px;
      font-family: "Cabin", sans-serif;
      font-size: clamp(1.3rem, 3vw, 2rem);
      line-height: 1.05;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #023b0f;
    }

    .score-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      border-radius: 999px;
      background: linear-gradient(135deg, rgba(31, 99, 53, 0.12), rgba(185, 129, 45, 0.12));
      border: 1px solid rgba(31, 45, 35, 0.12);
      color: var(--ink);
      font-weight: 800;
    }

    .leaderboard {
      padding: 16px;
      position: static;
      align-self: auto;
    }

    .leaderboard-list {
      display: grid;
      gap: 10px;
    }

    .leader-row {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 10px;
      align-items: center;
      padding: 12px;
      border-radius: 16px;
      border: 1px solid rgba(31, 45, 35, 0.08);
      background: rgba(255, 255, 255, 0.8);
    }

    .leader-rank {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: rgba(31, 99, 53, 0.10);
      color: var(--green);
      font-size: 0.8rem;
      font-weight: 900;
      flex: 0 0 auto;
    }

    .leader-copy strong,
    .leader-copy span {
      display: block;
    }

    .leader-copy strong {
      font-size: 0.92rem;
      margin-bottom: 2px;
    }

    .leader-copy span {
      color: var(--muted);
      font-size: 0.76rem;
    }

    .leader-score {
      font-weight: 900;
      color: var(--green);
      white-space: nowrap;
    }

    .status-line {
      margin-top: 10px;
      color: var(--muted);
      font-size: 0.84rem;
      line-height: 1.45;
    }

    .hidden { display: none !important; }

    @keyframes rise {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 1080px) {
      .game-grid {
        grid-template-columns: 1fr;
      }

      .game-sidebar {
        position: static;
      }
    }

    @media (max-width: 720px) {
      .page { width: min(100vw - 18px, 1220px); padding-top: 10px; }
      .topbar { flex-direction: column; align-items: flex-start; }
      .hero-copy,
      .hero-aside,
      .game-panel,
      .leaderboard { padding: 16px; }
      .hero-copy { padding: 14px; }
      .hud { grid-template-columns: 1fr; }
      .hud-center { order: -1; }
      .playbook-steps { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .guess-actions { flex-direction: column; align-items: stretch; }
      .guess-actions .primary-btn { width: 100%; }
      .cover-frame { min-height: 300px; height: 58vh; }
      .mode-row { grid-template-columns: 1fr; }
      .cover-actions { flex-direction: column; align-items: stretch; }
      .cover-actions .primary-btn,
      .cover-actions .secondary-btn { width: 100%; }
      .end-head { flex-direction: column; }
    }
  </style>

  <div class="page">
    <header class="topbar">
      <a class="brand" href="/puzzles">
        <div class="brand-mark">CG</div>
        <div class="brand-copy">
          <strong>Cover Guessr</strong>
          <span>Friends of the Poway Library</span>
        </div>
      </a>
      <a class="toplink" href="/puzzles">Back to Puzzles</a>
    </header>

    <section class="hero">
      <div class="panel hero-copy">
        <span class="eyebrow">Blur, clue, guess</span>
        <h1>Place your year pin before the cover gets too clear.</h1>
        <p>
          Each round starts with a heavily blurred image related to the book. Reveal more of the image,
          unlock clue pills one by one, and pin the publication year as close as possible.
          The less help you use and the closer your year guess, the higher your score.
        </p>
        <ul class="quick-rules">
          <li>5 rounds total</li>
          <li>Up to 5,000 each round</li>
          <li>Reveal and clue actions reduce score</li>
          <li>Closer year guess earns more</li>
        </ul>
      </div>
    </section>

    <div class="game-grid">
      <section class="panel game-panel">
        <div class="hud">
          <div class="hud-pill">
            <div>
              <span class="hud-label">Score</span>
              <span class="hud-value" id="score-value">0</span>
            </div>
          </div>
          <div class="hud-center" id="game-title">Guess the Year</div>
          <div class="hud-pill">
            <div>
              <span class="hud-label">Round</span>
              <span class="hud-value" id="round-value">1 / 5</span>
            </div>
          </div>
        </div>

        <div class="subline" id="round-subline">Reveal the cover, read the clues, and pin the publication year as close as you can.</div>

        <div class="playbook" aria-live="polite">
          <div class="playbook-head">
            <span class="hud-label">Round Playbook</span>
            <span class="playbook-now" id="playbook-now">Step 1: Inspect the image first.</span>
          </div>
          <ol class="playbook-steps" id="playbook-steps">
            <li class="play-step active" data-step="1"><span class="play-step-num">1</span><span>Inspect image</span></li>
            <li class="play-step" data-step="2"><span class="play-step-num">2</span><span>Use reveals / clues</span></li>
            <li class="play-step" data-step="3"><span class="play-step-num">3</span><span>Place year pin</span></li>
            <li class="play-step" data-step="4"><span class="play-step-num">4</span><span>Lock and review</span></li>
          </ol>
        </div>

        <div class="stage">
          <div class="cover-shell">
            <div class="cover-frame">
              <img id="cover-image" alt="Blurred book cover" loading="eager" referrerpolicy="no-referrer">
              <div class="cover-fallback" id="cover-fallback">
                <div class="fallback-card">
                  <h3 id="fallback-title">Loading cover...</h3>
                  <p id="fallback-body">Connecting to Open Library cover service...</p>
                </div>
              </div>
              <div class="cover-overlay">
                <div class="reveal-meta">
                  <span id="reveal-label">0% revealed</span>
                  <span id="blur-label">Blur 20px</span>
                </div>
                <div class="reveal-track" aria-hidden="true">
                  <div class="reveal-fill" id="reveal-fill"></div>
                </div>
                <div class="cover-actions">
                  <div class="small-note" id="cover-note">Each reveal click reduces your potential score by the current difficulty decay.</div>
                  <button class="primary-btn" id="reveal-btn" type="button">Reveal more</button>
                </div>
              </div>
            </div>
          </div>

          <div class="info-card">
            <div class="section-head">
              <h2>Step 2: Optional clues</h2>
              <button class="secondary-btn" id="clue-btn" type="button">Reveal clue</button>
            </div>
            <div class="pill-row" id="clue-list"></div>
          </div>

          <div class="info-card">
            <div class="section-head">
              <h2>Step 3: Place your year guess</h2>
              <span class="setting-pill" id="round-potential-pill">Round value 5,000</span>
            </div>
            <div class="year-guess">
              <div class="year-readout">
                <span>Guess</span>
                <strong id="guess-year-value">1950</strong>
                <span>Actual hidden</span>
              </div>
              <input class="guess-slider" id="guess-year" type="range" min="1800" max="2026" step="1" value="1950" aria-label="Guess the publication year">
              <div class="year-scale">
                <span>1800</span>
                <span>2026</span>
              </div>
              <div class="guess-actions">
                <button class="primary-btn" id="guess-btn" type="button">Lock in guess</button>
                <div class="small-note">Drag the pin to your best year, then lock it in.</div>
              </div>
            </div>
          </div>

          <div class="feedback info" id="feedback">
            <strong>Ready.</strong>
            <span>Make your first reveal or pin your best year guess.</span>
          </div>

          <div class="round-result" id="round-result">
            <div class="result-kicker" id="result-kicker">Round Result</div>
            <div class="result-head">
              <h3 class="result-title" id="result-title">Nice guess</h3>
              <div class="result-delta" id="result-delta">+0</div>
            </div>
            <p class="result-answer" id="result-answer">The correct year was ...</p>
            <button class="primary-btn" id="result-next-btn" type="button">Next Round</button>
          </div>
        </div>

        <div class="end-card" id="end-card">
          <div class="end-head">
            <div>
              <h2>Game complete</h2>
              <div class="status-line" id="final-summary">Your score is ready to share.</div>
            </div>
            <div class="score-badge" id="final-score-badge">0 points</div>
          </div>
          <div class="action-row">
            <button class="primary-btn" id="share-score-btn" type="button">Share Score</button>
            <button class="secondary-btn" id="play-again-btn" type="button">Play Again</button>
          </div>
        </div>
      </section>

      <aside class="game-sidebar">
        <section class="panel hero-aside">
          <div class="mode-card">
            <p class="mode-title">Game Controls</p>
            <div class="mode-grid">
              <div class="mode-row" id="mode-row">
                <button class="seg-btn active" type="button" data-mode="classic">Classic</button>
                <button class="seg-btn" type="button" data-mode="hard">Hard</button>
                <button class="seg-btn" type="button" data-mode="expert">Expert</button>
              </div>
              <div class="toggle-row">
                <div class="toggle-copy">
                  <strong>Timer mode</strong>
                  <span>30 seconds per round with a time bonus for quick guesses.</span>
                </div>
                <label class="switch" aria-label="Toggle timer mode">
                  <input id="timer-toggle" type="checkbox">
                  <span class="switch-ui"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="action-row">
            <button class="primary-btn" id="restart-btn" type="button">New Game</button>
            <button class="secondary-btn" id="share-final-btn" type="button" disabled>Share Score</button>
          </div>
          <div class="status-line">
            Settings apply to the next game. Start a new run after changing mode.
          </div>
        </section>

        <section class="panel leaderboard">
          <div class="section-head">
            <h2>Local Leaderboard</h2>
            <span class="setting-pill" id="best-score-pill">Best 0</span>
          </div>
          <div class="leaderboard-list" id="leaderboard-list"></div>
          <div class="status-line">Saved in your browser with localStorage. Highest scores stay on top.</div>
        </section>
      </aside>
    </div>
  </div>

  <script>
    const BOOKS = [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        cover_id: 10590366,
        clues: [
          "A Jazz Age novel set on Long Island.",
          "A mysterious millionaire hosts lavish parties.",
          "The green light across the bay is a lasting symbol."
        ],
        choices: ["The Great Gatsby", "The Sun Also Rises", "A Moveable Feast", "Tender Is the Night"]
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        cover_id: 14351077,
        clues: [
          "A Southern courtroom drama.",
          "Narrated by Scout Finch.",
          "Atticus Finch becomes a moral center of the story."
        ],
        choices: ["To Kill a Mockingbird", "Go Set a Watchman", "Of Mice and Men", "The Catcher in the Rye"]
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        cover_id: 13148521,
        clues: [
          "A sharp portrait of class and courtship.",
          "Elizabeth Bennet and Mr. Darcy trade judgments.",
          "One of the most quoted openings in English fiction."
        ],
        choices: ["Pride and Prejudice", "Emma", "Sense and Sensibility", "Jane Eyre"]
      },
      {
        title: "The Hobbit",
        author: "J. R. R. Tolkien",
        year: 1937,
        cover_id: 14627509,
        clues: [
          "A reluctant traveler leaves Bag End.",
          "There is a riddle game in the dark.",
          "A dragon guards treasure under a mountain."
        ],
        choices: ["The Hobbit", "The Lord of the Rings", "The Silmarillion", "The Name of the Wind"]
      },
      {
        title: "Jane Eyre",
        author: "Charlotte Bronte",
        year: 1847,
        cover_id: 8235363,
        clues: [
          "A governess enters a brooding country house.",
          "The story mixes romance, mystery, and independence.",
          "A hidden secret changes everything at Thornfield."
        ],
        choices: ["Jane Eyre", "Wuthering Heights", "Villette", "Rebecca"]
      },
      {
        title: "Moby-Dick",
        author: "Herman Melville",
        year: 1851,
        cover_id: 10544254,
        clues: [
          "A whaling voyage becomes an obsession.",
          "Ahab hunts a legendary white whale.",
          "Call me Ishmael opens the tale."
        ],
        choices: ["Moby-Dick", "The Old Man and the Sea", "Treasure Island", "20,000 Leagues Under the Sea"]
      },
      {
        title: "Frankenstein or The Modern Prometheus",
        author: "Mary Shelley",
        year: 1818,
        cover_id: 12356249,
        clues: [
          "A scientist brings life to a stitched-together being.",
          "The story is often called the first science-fiction novel.",
          "The real monster may not be the one with the visible scars."
        ],
        choices: ["Frankenstein or The Modern Prometheus", "Dracula", "Dr. Jekyll and Mr. Hyde", "The Time Machine"]
      },
      {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        year: 1890,
        cover_id: 14314858,
        clues: [
          "A portrait changes while the subject stays young.",
          "Beauty, vanity, and corruption drive the plot.",
          "One witty writer in the 1890s made it infamous."
        ],
        choices: ["The Picture of Dorian Gray", "The Importance of Being Earnest", "The Happy Prince", "The Secret Garden"]
      },
      {
        title: "Little Women",
        author: "Louisa May Alcott",
        year: 1868,
        cover_id: 8775559,
        clues: [
          "Four sisters grow up during the Civil War era.",
          "Jo March is the most stubborn of the family.",
          "A classic about domestic life and ambition."
        ],
        choices: ["Little Women", "Anne of Green Gables", "Heidi", "A Little Princess"]
      },
      {
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        year: 1911,
        cover_id: 12622062,
        clues: [
          "A locked garden helps heal lonely children.",
          "A sickly boy and a stubborn orphan uncover the mystery.",
          "Moors, gardens, and fresh air matter a great deal."
        ],
        choices: ["The Secret Garden", "The Little Prince", "Peter Pan", "Charlotte's Web"]
      },
      {
        title: "The Adventures of Sherlock Holmes",
        author: "Arthur Conan Doyle",
        year: 1892,
        cover_id: 6717853,
        clues: [
          "A consulting detective lives on Baker Street.",
          "Watson narrates many of the cases.",
          "The book is a collection of short mysteries."
        ],
        choices: ["The Adventures of Sherlock Holmes", "Dracula", "The Hound of the Baskervilles", "The Sign of the Four"]
      },
      {
        title: "Anne of Green Gables",
        author: "Lucy Maud Montgomery",
        year: 1908,
        cover_id: 1464104,
        clues: [
          "A red-haired orphan arrives by mistake.",
          "Green Gables is on Prince Edward Island.",
          "Imagination and mischief are part of the charm."
        ],
        choices: ["Anne of Green Gables", "Little Women", "Pollyanna", "Rebecca of Sunnybrook Farm"]
      },
      {
        title: "Dracula",
        author: "Bram Stoker",
        year: 1897,
        cover_id: 12216503,
        clues: [
          "Letters and diaries tell a gothic horror story.",
          "A vampire count travels from Transylvania.",
          "The novel helped define modern vampire fiction."
        ],
        choices: ["Dracula", "Frankenstein", "Carmilla", "The Picture of Dorian Gray"]
      },
      {
        title: "Treasure Island",
        author: "Robert Louis Stevenson",
        year: 1883,
        cover_id: 13859660,
        clues: [
          "A map, a mutiny, and a one-legged sailor set the plot in motion.",
          "Long John Silver is one of the great pirates in fiction.",
          "X marks the spot on a buried treasure island."
        ],
        choices: ["Treasure Island", "Kidnapped", "Robinson Crusoe", "Moby-Dick"]
      },
      {
        title: "The Call of the Wild",
        author: "Jack London",
        year: 1903,
        cover_id: 12393037,
        clues: [
          "A dog is pulled from domestic life into the Yukon.",
          "The wild grows stronger with every turn.",
          "Buck answers an ancient call."
        ],
        choices: ["The Call of the Wild", "White Fang", "Black Beauty", "Where the Red Fern Grows"]
      },
      {
        title: "Emma",
        author: "Jane Austen",
        year: 1815,
        cover_id: 9278312,
        clues: [
          "A matchmaking heroine is often the least self-aware person in the room.",
          "The title character thinks she understands everyone.",
          "Another very famous Austen courtship novel."
        ],
        choices: ["Emma", "Pride and Prejudice", "Persuasion", "Northanger Abbey"]
      },
      {
        title: "The Time Machine",
        author: "H. G. Wells",
        year: 1895,
        cover_id: 9009316,
        clues: [
          "A Victorian inventor travels far into the future.",
          "The Eloi and the Morlocks live in a split society.",
          "One of the earliest and best-known time-travel stories."
        ],
        choices: ["The Time Machine", "The War of the Worlds", "The Invisible Man", "The Island of Doctor Moreau"]
      },
      {
        title: "The Wonderful Wizard of Oz",
        author: "L. Frank Baum",
        year: 1900,
        cover_id: 552443,
        clues: [
          "A girl from Kansas follows a yellow brick road.",
          "Three companions want courage, brains, and a heart.",
          "Toto is the dog who starts it all."
        ],
        choices: ["The Wonderful Wizard of Oz", "The Marvelous Land of Oz", "Alice's Adventures in Wonderland", "Peter Pan"]
      },
      {
        title: "The Count of Monte Cristo",
        author: "Alexandre Dumas",
        year: 1844,
        cover_id: 8851690,
        clues: [
          "An unjust prison sentence leads to a famous escape.",
          "Revenge is a central theme of the story.",
          "The hero returns under a new identity with a fortune."
        ],
        choices: ["The Count of Monte Cristo", "The Three Musketeers", "Les Miserables", "The Man in the Iron Mask"]
      },
      {
        title: "The Wind in the Willows",
        author: "Kenneth Grahame",
        year: 1908,
        cover_id: 13335427,
        clues: [
          "Riverbank adventures feature Mole, Rat, Badger, and Toad.",
          "A motorcar-loving Toad causes constant trouble.",
          "The book mixes whimsy with country life."
        ],
        choices: ["The Wind in the Willows", "The Water-Babies", "The Jungle Book", "Bambi, a Life in the Woods"]
      }
    ];

    const STORAGE_KEY = "cover_guessr_leaderboard_v1";
    const BEST_KEY = "cover_guessr_best_v1";
    const MODES = {
      classic: {
        label: "Classic",
        startBlur: 20,
        revealStep: 4,
        revealPenalty: 400,
        cluePenalty: 600,
        yearPenalty: 90,
        timerBonus: 0.4
      },
      hard: {
        label: "Hard",
        startBlur: 24,
        revealStep: 3,
        revealPenalty: 500,
        cluePenalty: 700,
        yearPenalty: 110,
        timerBonus: 0.45
      },
      expert: {
        label: "Expert",
        startBlur: 28,
        revealStep: 2,
        revealPenalty: 650,
        cluePenalty: 850,
        yearPenalty: 130,
        timerBonus: 0.5
      }
    };

    const TOTAL_ROUNDS = 5;
    const TIMER_SECONDS = 30;

    const els = {
      scoreValue: document.getElementById("score-value"),
      roundValue: document.getElementById("round-value"),
      roundSubline: document.getElementById("round-subline"),
      gameTitle: document.getElementById("game-title"),
      coverImage: document.getElementById("cover-image"),
      coverFallback: document.getElementById("cover-fallback"),
      fallbackTitle: document.getElementById("fallback-title"),
      fallbackBody: document.getElementById("fallback-body"),
      revealLabel: document.getElementById("reveal-label"),
      blurLabel: document.getElementById("blur-label"),
      revealFill: document.getElementById("reveal-fill"),
      clueList: document.getElementById("clue-list"),
      clueBtn: document.getElementById("clue-btn"),
      revealBtn: document.getElementById("reveal-btn"),
      guessYear: document.getElementById("guess-year"),
      guessYearValue: document.getElementById("guess-year-value"),
      guessBtn: document.getElementById("guess-btn"),
      feedback: document.getElementById("feedback"),
      roundPotentialPill: document.getElementById("round-potential-pill"),
      restartBtn: document.getElementById("restart-btn"),
      shareScoreBtn: document.getElementById("share-score-btn"),
      shareFinalBtn: document.getElementById("share-final-btn"),
      playAgainBtn: document.getElementById("play-again-btn"),
      endCard: document.getElementById("end-card"),
      finalSummary: document.getElementById("final-summary"),
      finalScoreBadge: document.getElementById("final-score-badge"),
      leaderboardList: document.getElementById("leaderboard-list"),
      bestScorePill: document.getElementById("best-score-pill"),
      roundResult: document.getElementById("round-result"),
      resultKicker: document.getElementById("result-kicker"),
      resultTitle: document.getElementById("result-title"),
      resultDelta: document.getElementById("result-delta"),
      resultAnswer: document.getElementById("result-answer"),
      resultNextBtn: document.getElementById("result-next-btn"),
      timerToggle: document.getElementById("timer-toggle"),
      modeButtons: Array.from(document.querySelectorAll("[data-mode]")),
      coverNote: document.getElementById("cover-note"),
      playbookNow: document.getElementById("playbook-now"),
      playSteps: Array.from(document.querySelectorAll(".play-step"))
    };

    const state = {
      mode: "classic",
      timerMode: false,
      score: 0,
      roundPotential: 5000,
      roundIndex: 0,
      roundBooks: [],
      currentBook: null,
      clueIndex: 0,
      revealClicks: 0,
      currentBlur: MODES.classic.startBlur,
      answered: false,
      gameActive: false,
      guessYear: 1950,
      timerLeft: TIMER_SECONDS,
      timerId: null,
      leaderboard: [],
      coverCandidates: [],
      coverCandidateIndex: 0,
      coverRequestKey: ""
    };

    function shuffle(list) {
      const copy = [...list];
      for (let index = copy.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
      }
      return copy;
    }

    function formatScore(value) {
      return Math.max(0, Math.round(value)).toLocaleString();
    }

    function formatTime(seconds) {
      const safe = Math.max(0, Math.ceil(seconds));
      const minutes = String(Math.floor(safe / 60)).padStart(2, "0");
      const remainder = String(safe % 60).padStart(2, "0");
      return `${minutes}:${remainder}`;
    }

    function getMode() {
      return MODES[state.mode] || MODES.classic;
    }

    function getDisplayScore() {
      return state.score;
    }

    function getGuessYear() {
      return Number(els.guessYear?.value || state.guessYear || 1950);
    }

    async function fetchGoogleCoverCandidate(book) {
      const title = encodeURIComponent(book.title || "");
      const author = encodeURIComponent(book.author || "");
      const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}&maxResults=1`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          return null;
        }
        const payload = await response.json();
        const item = payload?.items?.[0];
        const imageLinks = item?.volumeInfo?.imageLinks;
        const candidate = imageLinks?.thumbnail || imageLinks?.smallThumbnail || null;
        return candidate ? candidate.replace(/^http:/, "https:") : null;
      } catch (error) {
        return null;
      }
    }

    function buildOpenLibraryCandidates(coverId) {
      const id = String(coverId || "").trim();
      if (!id) {
        return [];
      }
      return [
        `https://covers.openlibrary.org/b/id/${id}-L.jpg?default=false`,
        `https://covers.openlibrary.org/b/id/${id}-M.jpg?default=false`,
        `https://covers.openlibrary.org/b/id/${id}-S.jpg?default=false`
      ];
    }

    function showCoverFallback(title, body) {
      els.fallbackTitle.textContent = title;
      els.fallbackBody.textContent = body;
      els.coverFallback.style.display = "grid";
    }

    function tryNextCoverCandidate() {
      state.coverCandidateIndex += 1;
      if (state.coverCandidateIndex < state.coverCandidates.length) {
        showCoverFallback("Loading cover...", "Trying another related image.");
        els.coverImage.src = state.coverCandidates[state.coverCandidateIndex];
        return;
      }
      showCoverFallback(
        `Could not load ${state.currentBook.title}`,
        "This cover is unavailable right now, but you can still play the round with clues and year guessing."
      );
    }

    async function resolveCoverArt(book, requestKey) {
      const googleCandidate = await fetchGoogleCoverCandidate(book);
      if (state.coverRequestKey !== requestKey) {
        return;
      }

      const openLibraryCandidates = buildOpenLibraryCandidates(book.cover_id);
      state.coverCandidates = [
        ...(googleCandidate ? [googleCandidate] : []),
        ...openLibraryCandidates.filter((candidate) => candidate !== googleCandidate)
      ];
      state.coverCandidateIndex = 0;

      if (state.coverCandidates.length) {
        showCoverFallback("Loading related art...", "Fetching an image tied to the book.");
        els.coverImage.src = state.coverCandidates[0];
      } else {
        showCoverFallback(
          `No image available for ${book.title}`,
          "This round still works with clues and year guessing."
        );
      }
    }

    function updateModeButtons() {
      for (const button of els.modeButtons) {
        button.classList.toggle("active", button.dataset.mode === state.mode);
      }
    }

    function updateCover() {
      const mode = getMode();
      const revealedPct = Math.max(0, Math.min(100, Math.round(((mode.startBlur - state.currentBlur) / mode.startBlur) * 100)));
      els.coverImage.style.filter = `blur(${state.currentBlur}px) saturate(0.95) contrast(1.06)`;
      els.coverImage.classList.toggle("revealed", state.currentBlur <= 0);
      els.revealFill.style.width = `${revealedPct}%`;
      els.revealLabel.textContent = `${revealedPct}% revealed`;
      els.blurLabel.textContent = `Blur ${state.currentBlur}px`;
    }

    function updateHUD() {
      els.scoreValue.textContent = formatScore(getDisplayScore());
      els.roundValue.textContent = `${Math.min(state.roundIndex + 1, TOTAL_ROUNDS)} / ${TOTAL_ROUNDS}`;
      els.roundPotentialPill.textContent = `Round value ${formatScore(Math.max(200, state.roundPotential))}`;

      const mode = getMode();
      const timerTag = state.timerMode && state.gameActive && !state.answered
        ? ` | ${formatTime(state.timerLeft)} left`
        : "";
      const modeName = mode.label;
      els.roundSubline.textContent = state.gameActive
        ? `Mode: ${modeName}${state.timerMode ? " with timer" : ""}${timerTag}. Reveal the cover, read the clues, and place your year pin.`
        : "Start a new game to play five rounds with fresh covers and clues.";
    }

    function setFeedback(kind, title, body) {
      els.feedback.className = `feedback ${kind}`;
      els.feedback.innerHTML = `<strong>${title}</strong><span>${body}</span>`;
    }

    function setPlayStep(step) {
      const normalized = Math.max(1, Math.min(4, Number(step) || 1));
      const labels = {
        1: "Step 1: Inspect the image first.",
        2: "Step 2: Use reveals or clues if needed.",
        3: "Step 3: Place your best year pin.",
        4: "Step 4: Lock and review the result."
      };

      if (els.playbookNow) {
        els.playbookNow.textContent = labels[normalized];
      }

      if (Array.isArray(els.playSteps)) {
        for (const item of els.playSteps) {
          item.classList.toggle("active", Number(item.dataset.step) === normalized);
        }
      }
    }

    function clearClues() {
      els.clueList.innerHTML = "";
    }

    function renderClues() {
      clearClues();
      const clues = state.currentBook?.clues.slice(0, state.clueIndex) || [];
      for (const clue of clues) {
        const pill = document.createElement("span");
        pill.className = "clue-pill";
        pill.textContent = clue;
        els.clueList.appendChild(pill);
      }
      els.clueBtn.disabled = !state.currentBook || state.answered || state.clueIndex >= (state.currentBook?.clues.length || 0) || state.clueIndex >= 3;
    }

    function renderGuessControl() {
      if (!els.guessYear) {
        return;
      }
      els.guessYear.value = String(state.guessYear);
      els.guessYearValue.textContent = String(state.guessYear);
      els.guessYear.disabled = !state.currentBook || state.answered;
      els.guessBtn.disabled = !state.currentBook || state.answered;
    }

    function renderLeaderboard() {
      const entries = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      state.leaderboard = entries;
      els.leaderboardList.innerHTML = "";

      if (!entries.length) {
        els.leaderboardList.innerHTML = '<div class="status-pill info">No scores yet. Finish a game to set the first benchmark.</div>';
        els.bestScorePill.textContent = "Best 0";
        localStorage.setItem(BEST_KEY, "0");
        return;
      }

      const best = entries[0].score || 0;
      els.bestScorePill.textContent = `Best ${formatScore(best)}`;
      localStorage.setItem(BEST_KEY, String(best));

      entries.slice(0, 5).forEach((entry, index) => {
        const row = document.createElement("div");
        row.className = "leader-row";
        const date = new Date(entry.date).toLocaleDateString([], { month: "short", day: "numeric" });
        row.innerHTML = `
          <div class="leader-rank">${index + 1}</div>
          <div class="leader-copy">
            <strong>${entry.mode}${entry.timerMode ? " + Timer" : ""}</strong>
            <span>${date} · ${entry.rounds}/${TOTAL_ROUNDS} rounds</span>
          </div>
          <div class="leader-score">${formatScore(entry.score)}</div>
        `;
        els.leaderboardList.appendChild(row);
      });
    }

    function saveScore(score) {
      const current = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      current.push({
        score,
        mode: getMode().label,
        timerMode: state.timerMode,
        rounds: TOTAL_ROUNDS,
        date: new Date().toISOString()
      });
      current.sort((left, right) => right.score - left.score || new Date(right.date) - new Date(left.date));
      const trimmed = current.slice(0, 10);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
      renderLeaderboard();
    }

    function clearTimer() {
      if (state.timerId) {
        clearInterval(state.timerId);
        state.timerId = null;
      }
    }

    function startTimer() {
      clearTimer();
      if (!state.timerMode || !state.gameActive || state.answered) {
        return;
      }
      state.timerLeft = TIMER_SECONDS;
      updateHUD();
      state.timerId = setInterval(() => {
        if (!state.gameActive || state.answered) {
          clearTimer();
          return;
        }
        state.timerLeft -= 1;
        if (state.timerLeft <= 0) {
          state.timerLeft = 0;
          clearTimer();
          submitGuess();
          return;
        }
        updateHUD();
      }, 1000);
    }

    function loadRound() {
      state.currentBook = state.roundBooks[state.roundIndex];
      state.clueIndex = 0;
      state.revealClicks = 0;
      state.answered = false;
      state.roundPotential = 5000;
      state.currentBlur = getMode().startBlur;
      state.gameActive = true;
      state.guessYear = 1950;
      if (els.guessYear) {
        els.guessYear.value = String(state.guessYear);
      }
      state.coverRequestKey = `${state.roundIndex}:${state.currentBook.title}:${Date.now()}`;

      els.coverImage.classList.remove("ready", "revealed");
      els.coverImage.style.opacity = 0;
      showCoverFallback("Loading cover...", `Pulling art for ${state.currentBook.title} by ${state.currentBook.author}.`);
      els.coverImage.alt = `${state.currentBook.title} cover`;
      els.coverImage.onload = () => {
        els.coverImage.classList.add("ready");
        els.coverImage.style.opacity = 1;
        els.coverFallback.style.display = "none";
      };

      els.coverImage.onerror = () => {
        tryNextCoverCandidate();
      };

      state.coverCandidates = [];
      state.coverCandidateIndex = 0;
      resolveCoverArt(state.currentBook, state.coverRequestKey);

      els.clueBtn.disabled = false;
      els.revealBtn.disabled = false;
      els.shareFinalBtn.disabled = true;
      els.endCard.classList.remove("show");
      els.roundResult.className = "round-result";
      renderClues();
      renderGuessControl();
      updateCover();
      updateHUD();
      setPlayStep(1);
      setFeedback("info", `Round ${state.roundIndex + 1} of ${TOTAL_ROUNDS}`, `Place the year as close as you can to the hidden publication year.`);
      els.coverNote.textContent = state.timerMode
        ? `Timer mode is active. Every second counts toward a stronger score multiplier.`
        : `Each reveal click reduces your final score, so guess early if you are confident.`;
      startTimer();
    }

    function resetGuessControl() {
      renderGuessControl();
    }

    function revealMore() {
      if (!state.currentBook || state.answered) {
        return;
      }

      const mode = getMode();
      if (state.currentBlur <= 0) {
        els.revealBtn.disabled = true;
        return;
      }

      state.revealClicks += 1;
      state.currentBlur = Math.max(0, state.currentBlur - mode.revealStep);
      state.roundPotential = Math.max(200, state.roundPotential - mode.revealPenalty);
      setPlayStep(2);
      updateCover();
      updateHUD();
      setFeedback("info", "More of the cover is visible.", `Reveal clicks reduce this round by ${formatScore(mode.revealPenalty)} points.`);

      if (state.currentBlur <= 0) {
        els.revealBtn.disabled = true;
      }
    }

    function revealClue() {
      if (!state.currentBook || state.answered) {
        return;
      }

      if (state.clueIndex >= state.currentBook.clues.length || state.clueIndex >= 3) {
        els.clueBtn.disabled = true;
        return;
      }

      state.clueIndex += 1;
      state.roundPotential = Math.max(200, state.roundPotential - getMode().cluePenalty);
      setPlayStep(2);
      renderClues();
      updateHUD();
      setFeedback("info", "A clue appeared.", `Text clues cost ${formatScore(getMode().cluePenalty)} points each.`);
    }

    function finishRound(correct, earnedScore = 0, title = "", body = "", delta = 0) {
      state.answered = true;
      clearTimer();
      els.revealBtn.disabled = true;
      els.clueBtn.disabled = true;
      els.guessBtn.disabled = true;
      if (els.guessYear) {
        els.guessYear.disabled = true;
      }
      els.coverImage.classList.add("revealed");
      state.currentBlur = 0;
      updateCover();
      els.shareFinalBtn.disabled = false;
      if (earnedScore > 0) {
        state.score += earnedScore;
      }
      updateHUD();

      setFeedback(correct ? "good" : "bad", title, body);
      setPlayStep(4);

      els.roundResult.className = `round-result show ${correct ? "good" : "bad"}`;
      els.resultKicker.textContent = `Round ${state.roundIndex + 1} Result`;
      els.resultTitle.textContent = title;
      els.resultDelta.textContent = `${delta >= 0 ? "+" : "-"}${formatScore(Math.abs(delta))}`;
      els.resultAnswer.textContent = `The answer was ${state.currentBook.title} by ${state.currentBook.author} (${state.currentBook.year}).`;
      els.resultNextBtn.textContent = state.roundIndex >= TOTAL_ROUNDS - 1 ? "See Final Score" : "Next Round";
    }

    function submitGuess() {
      if (!state.currentBook || state.answered) {
        return;
      }

      const guessedYear = getGuessYear();
      const actualYear = Number(state.currentBook.year || 0);
      const yearDistance = Math.abs(guessedYear - actualYear);
      const mode = getMode();
      const distancePenalty = Math.min(4800, yearDistance * mode.yearPenalty);
      const timerMultiplier = state.timerMode ? (1 + (state.timerLeft / TIMER_SECONDS) * mode.timerBonus) : 1;
      const earnedScore = Math.max(200, Math.round(Math.max(200, state.roundPotential - distancePenalty) * timerMultiplier));
      const delta = earnedScore - state.roundPotential;
      state.roundPotential = earnedScore;
      finishRound(true, earnedScore, "Guess locked.", `You guessed ${guessedYear}. The actual year was ${actualYear}.`, delta);
    }

    function nextRound() {
      const lastRound = state.roundIndex >= TOTAL_ROUNDS - 1;
      if (lastRound) {
        finishGame();
        return;
      }

      state.roundIndex += 1;
      els.feedback.innerHTML = "";
      els.feedback.className = "feedback info";
      els.roundResult.className = "round-result";
      loadRound();
      resetGuessControl();
      updateHUD();
    }

    function finishGame() {
      clearTimer();
      state.gameActive = false;
      state.currentBook = null;
      els.roundResult.className = "round-result";
      els.endCard.classList.add("show");
      els.shareFinalBtn.disabled = false;
      const finalScore = state.score;
      const summary = `You finished ${TOTAL_ROUNDS} rounds in ${getMode().label}${state.timerMode ? " timer" : ""} mode.`;
      els.finalSummary.textContent = summary;
      els.finalScoreBadge.textContent = `${formatScore(finalScore)} points`;
      setFeedback("info", "Game complete.", "Start a new run to challenge a different set of books.");
      saveScore(finalScore);
      updateHUD();
    }

    function buildShareText() {
      const mode = getMode().label;
      const timerText = state.timerMode ? " with Timer" : "";
      return `Book Year Guessr: ${formatScore(state.score)} points\nMode: ${mode}${timerText}\nFriends of the Poway Library`;
    }

    async function shareScore() {
      const text = buildShareText();
      try {
        await navigator.clipboard.writeText(text);
        setFeedback("good", "Score copied.", "Paste it anywhere you want to share your result.");
      } catch (error) {
        window.prompt("Copy your score", text);
      }
    }

    function startNewGame() {
      clearTimer();
      state.score = 0;
      state.roundIndex = 0;
      state.roundBooks = shuffle(BOOKS).slice(0, TOTAL_ROUNDS);
      state.answered = false;
      state.currentBook = null;
      state.timerLeft = TIMER_SECONDS;
      els.roundResult.className = "round-result";
      els.endCard.classList.remove("show");
      els.shareFinalBtn.disabled = true;
      loadRound();
      updateHUD();
      renderLeaderboard();
    }

    els.guessYear.addEventListener("input", () => {
      state.guessYear = Number(els.guessYear.value);
      els.guessYearValue.textContent = String(state.guessYear);
      if (state.gameActive && !state.answered) {
        setPlayStep(3);
      }
    });
    els.guessBtn.addEventListener("click", submitGuess);

    function applyMode(modeName) {
      state.mode = modeName;
      updateModeButtons();
      updateHUD();
      if (!state.gameActive) {
        state.currentBlur = getMode().startBlur;
        updateCover();
      }
    }

    els.revealBtn.addEventListener("click", revealMore);
    els.clueBtn.addEventListener("click", revealClue);
    els.resultNextBtn.addEventListener("click", nextRound);
    els.restartBtn.addEventListener("click", startNewGame);
    els.playAgainBtn.addEventListener("click", startNewGame);
    els.shareScoreBtn.addEventListener("click", shareScore);
    els.shareFinalBtn.addEventListener("click", shareScore);
    els.timerToggle.addEventListener("change", () => {
      state.timerMode = els.timerToggle.checked;
      if (state.gameActive && !state.answered) {
        if (state.timerMode) {
          startTimer();
        } else {
          clearTimer();
          state.timerLeft = TIMER_SECONDS;
        }
      }
      updateHUD();
      els.coverNote.textContent = state.timerMode
        ? `Timer mode is active. Every second counts toward a stronger score multiplier.`
        : `Each reveal click reduces your final score, so guess early if you are confident.`;
    });

    for (const button of els.modeButtons) {
      button.addEventListener("click", () => applyMode(button.dataset.mode));
    }

    renderLeaderboard();
    updateModeButtons();
    updateHUD();
    updateCover();
    startNewGame();
  </script>