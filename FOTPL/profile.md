---
layout: fopl
title: My Profile — Friends of the Poway Library
permalink: /profile
description: Your Friends of the Poway Library account profile.
fopl_nav_active: profile
---

<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
<style>
  body {
    background: #0f1a12;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='5'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeBlend in='SourceGraphic' mode='screen'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='100' height='100' fill='%230f1a12' opacity='.96' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  /* ── Layout ── */
  .profile-page { max-width: 1100px; margin: 0 auto; padding: 0 0 80px; }

  /* ── Profile Hero Banner ── */
  .profile-banner {
    position: relative; height: 220px; overflow: hidden;
    background: linear-gradient(135deg, #1a2e1a 0%, #2a3e2a 40%, #1a2810 100%);
    border-bottom: 1px solid rgba(212,168,83,0.2);
  }
  .profile-banner-bg {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 30% 50%, rgba(212,168,83,0.12) 0%, transparent 70%),
                radial-gradient(ellipse at 80% 20%, rgba(100,140,100,0.1) 0%, transparent 60%);
  }
  .profile-banner-particles {
    position: absolute; inset: 0; pointer-events: none; overflow: hidden;
  }
  .banner-glyph {
    position: absolute; font-family: 'Libre Baskerville', serif; font-size: 2.5rem;
    color: rgba(212,168,83,0.06); animation: glyph-float 18s infinite ease-in-out;
  }
  @keyframes glyph-float {
    0%,100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(8deg); }
  }
  .profile-banner-change-btn {
    position: absolute; bottom: 14px; right: 20px;
    background: rgba(0,0,0,0.45); border: 1px solid rgba(212,168,83,0.3);
    color: #d4a853; padding: 7px 18px; border-radius: 20px;
    font-family: 'Cabin', sans-serif; font-size: 0.75rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em; cursor: pointer;
    transition: all 0.2s; backdrop-filter: blur(6px);
  }
  .profile-banner-change-btn:hover { background: rgba(212,168,83,0.2); border-color: rgba(212,168,83,0.6); }

  /* ── Avatar area ── */
  .profile-identity {
    display: flex; align-items: flex-end; gap: 28px;
    padding: 0 40px; margin-top: -52px; position: relative; z-index: 2;
  }
  .profile-avatar-wrap { position: relative; flex-shrink: 0; cursor: pointer; }
  .profile-avatar {
    width: 104px; height: 104px; border-radius: 50%;
    border: 4px solid #0f1a12;
    background: linear-gradient(135deg, #2a4a2a, #d4a853);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Libre Baskerville', serif; font-size: 2.4rem; font-weight: 700;
    color: #fff; overflow: hidden; transition: opacity 0.2s;
    box-shadow: 0 8px 28px rgba(0,0,0,0.4);
  }
  .profile-avatar img { width: 100%; height: 100%; object-fit: cover; }
  .avatar-edit-overlay {
    position: absolute; inset: 0; border-radius: 50%;
    background: rgba(0,0,0,0.55); display: flex; align-items: center; justify-content: center;
    opacity: 0; transition: opacity 0.2s;
    font-size: 0.7rem; font-weight: 700; color: #d4a853; font-family: 'Cabin', sans-serif;
    text-transform: uppercase; letter-spacing: 0.05em; text-align: center;
  }
  .profile-avatar-wrap:hover .avatar-edit-overlay { opacity: 1; }

  .profile-identity-text { padding-bottom: 10px; }
  .profile-name {
    font-family: 'Libre Baskerville', serif; font-size: 1.9rem; font-weight: 700;
    color: #e0bd70; margin: 0 0 6px; line-height: 1;
  }
  .profile-role-badge {
    display: inline-block; font-size: 0.72rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em;
    padding: 4px 12px; border-radius: 20px;
    background: rgba(212,168,83,0.18); border: 1px solid rgba(212,168,83,0.35); color: #d4a853;
  }
  .profile-role-badge.admin { background: #d4a853; color: #0f1a12; }
  .profile-meta { margin-left: auto; padding-bottom: 12px; display: flex; gap: 12px; align-items: flex-end; }
  .signout-btn {
    padding: 10px 24px; background: transparent; border: 1px solid rgba(212,168,83,0.4);
    color: #d4a853; border-radius: 6px; font-family: 'Cabin', sans-serif;
    font-weight: 700; font-size: 0.82rem; text-transform: uppercase;
    letter-spacing: 0.05em; cursor: pointer; transition: all 0.2s;
  }
  .signout-btn:hover { background: rgba(212,168,83,0.15); border-color: #d4a853; }

  /* ── Main content grid ── */
  .profile-body { display: grid; grid-template-columns: 320px 1fr; gap: 28px; padding: 32px 40px 0; }

  /* ── Glass card ── */
  .p-card {
    background: rgba(255,255,255,0.05); backdrop-filter: blur(12px);
    border: 1px solid rgba(212,168,83,0.18); border-radius: 12px;
    padding: 28px; margin-bottom: 24px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  }
  .p-card-title {
    font-family: 'Cabin', sans-serif; font-size: 0.72rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.1em; color: #d4a853;
    margin: 0 0 20px; border-bottom: 1px solid rgba(212,168,83,0.15); padding-bottom: 10px;
  }

  /* ── Info fields ── */
  .profile-fields { display: flex; flex-direction: column; gap: 16px; }
  .profile-field label {
    display: block; font-size: 0.7rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em; color: rgba(212,168,83,0.6); margin-bottom: 3px;
  }
  .profile-field span { font-size: 0.95rem; color: rgba(224,189,112,0.95); }

  /* ── Avatar picker modal ── */
  .avatar-modal-overlay {
    display: none; position: fixed; inset: 0;
    background: rgba(0,0,0,0.75); z-index: 600;
    align-items: center; justify-content: center; backdrop-filter: blur(4px);
  }
  .avatar-modal-overlay.open { display: flex; }
  .avatar-modal {
    background: linear-gradient(135deg, rgba(25,38,28,0.98), rgba(40,55,42,0.96));
    border: 1px solid rgba(212,168,83,0.25); border-radius: 16px;
    width: 90%; max-width: 560px; max-height: 88vh; overflow-y: auto; padding: 32px;
    box-shadow: 0 24px 60px rgba(0,0,0,0.5);
  }
  .avatar-modal h2 {
    font-family: 'Libre Baskerville', serif; font-size: 1.3rem; font-weight: 700;
    color: #e0bd70; margin: 0 0 8px; border: none;
  }
  .avatar-modal-sub { font-size: 0.88rem; color: rgba(212,168,83,0.7); margin: 0 0 24px; }
  .avatar-modal-close {
    position: absolute; top: 16px; right: 20px;
    background: rgba(212,168,83,0.2); border: none; border-radius: 50%;
    width: 34px; height: 34px; color: #d4a853; font-size: 1.1rem;
    cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center;
  }
  .avatar-modal-close:hover { background: #d4a853; color: #0f1a12; }
  .avatar-modal { position: relative; }

  /* Upload section */
  .avatar-upload-zone {
    border: 2px dashed rgba(212,168,83,0.3); border-radius: 10px;
    padding: 28px; text-align: center; margin-bottom: 24px; cursor: pointer;
    transition: all 0.2s; background: rgba(212,168,83,0.04);
  }
  .avatar-upload-zone:hover, .avatar-upload-zone.drag-over {
    border-color: #d4a853; background: rgba(212,168,83,0.1);
  }
  .avatar-upload-zone p { color: rgba(212,168,83,0.75); font-size: 0.88rem; margin: 8px 0 0; }
  .avatar-upload-icon { font-size: 2rem; line-height: 1; }
  .avatar-upload-btn {
    display: inline-block; margin-top: 12px; padding: 8px 20px;
    background: #d4a853; color: #0f1a12; border: none; border-radius: 6px;
    font-family: 'Cabin', sans-serif; font-weight: 700; font-size: 0.82rem;
    text-transform: uppercase; cursor: pointer; transition: all 0.2s;
  }
  .avatar-upload-btn:hover { background: #e0bd70; }

  /* Preset grid */
  .avatar-presets-title {
    font-family: 'Cabin', sans-serif; font-size: 0.72rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em; color: #d4a853;
    margin: 0 0 14px;
  }
  .avatar-presets-grid {
    display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px;
  }
  .avatar-preset {
    width: 100%; aspect-ratio: 1; border-radius: 50%; cursor: pointer;
    border: 3px solid transparent; transition: all 0.2s;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem; overflow: hidden;
  }
  .avatar-preset:hover, .avatar-preset.selected { border-color: #d4a853; transform: scale(1.08); }
  .avatar-preset img { width: 100%; height: 100%; object-fit: cover; }

  .avatar-save-btn {
    margin-top: 20px; width: 100%; padding: 13px;
    background: #d4a853; color: #0f1a12; border: none; border-radius: 6px;
    font-family: 'Cabin', sans-serif; font-weight: 700; font-size: 0.9rem;
    text-transform: uppercase; cursor: pointer; transition: all 0.2s;
  }
  .avatar-save-btn:hover { background: #e0bd70; transform: translateY(-1px); }

  /* ── Wordle Stats ── */
  .stats-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 20px;
  }
  .stat-box {
    background: rgba(212,168,83,0.08); border: 1px solid rgba(212,168,83,0.15);
    border-radius: 8px; text-align: center; padding: 14px 8px;
  }
  .stat-num {
    font-family: 'Cabin', sans-serif; font-size: 1.8rem; font-weight: 700;
    color: #d4a853; line-height: 1;
  }
  .stat-lbl { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(212,168,83,0.6); margin-top: 4px; }
  .dist-title {
    font-family: 'Cabin', sans-serif; font-size: 0.75rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em; color: rgba(212,168,83,0.7); margin-bottom: 10px;
  }
  .dist-row { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; font-size: 0.85rem; }
  .dist-num { font-weight: 700; min-width: 14px; color: #d4a853; }
  .dist-bar-wrap { flex: 1; background: rgba(212,168,83,0.1); border-radius: 3px; height: 22px; }
  .dist-bar {
    height: 100%; min-width: 28px; background: #d4a853; border-radius: 3px;
    display: flex; align-items: center; justify-content: flex-end;
    padding-right: 8px; font-size: 0.8rem; font-weight: 700; color: #0f1a12;
    transition: width 0.8s ease;
  }
  .no-stats { font-size: 0.92rem; color: rgba(212,168,83,0.5); margin: 0; }
  .no-stats a { color: #d4a853; font-weight: 700; }

  /* ── Saved Books shelf ── */
  .saved-shelf { }
  .saved-shelf-empty { color: rgba(212,168,83,0.5); font-size: 0.9rem; }
  .saved-shelf-empty a { color: #d4a853; font-weight: 700; }
  .shelf-row {
    display: flex; gap: 14px; overflow-x: auto; padding-bottom: 8px;
  }
  .shelf-row::-webkit-scrollbar { height: 5px; }
  .shelf-row::-webkit-scrollbar-track { background: rgba(212,168,83,0.05); }
  .shelf-row::-webkit-scrollbar-thumb { background: rgba(212,168,83,0.3); border-radius: 10px; }
  .shelf-book {
    flex-shrink: 0; width: 90px; cursor: pointer;
    transition: transform 0.2s;
  }
  .shelf-book:hover { transform: translateY(-4px); }
  .shelf-cover {
    width: 90px; height: 130px; border-radius: 6px; overflow: hidden;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Libre Baskerville', serif; font-size: 1.1rem; font-weight: 700;
    color: #fff; position: relative;
    box-shadow: 0 6px 16px rgba(0,0,0,0.4);
    border: 1px solid rgba(212,168,83,0.15);
  }
  .shelf-cover img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
  .shelf-cover-letters { position: relative; z-index: 1; text-shadow: 0 2px 6px rgba(0,0,0,0.5); }
  .shelf-title { font-size: 0.75rem; color: rgba(224,189,112,0.9); margin-top: 8px; line-height: 1.3; text-align: center; font-weight: 600; }
  .shelf-remove-btn {
    display: block; width: 100%; margin-top: 4px; padding: 4px;
    background: rgba(212,168,83,0.08); border: 1px solid rgba(212,168,83,0.2);
    border-radius: 4px; color: rgba(212,168,83,0.6); font-size: 0.65rem;
    font-family: 'Cabin', sans-serif; font-weight: 700; text-transform: uppercase;
    cursor: pointer; transition: all 0.2s; text-align: center;
  }
  .shelf-remove-btn:hover { background: rgba(220,53,69,0.2); border-color: rgba(220,53,69,0.4); color: #ef5350; }

  /* ── Netflix-style Recommendations ── */
  .rec-section { padding: 0 40px; margin-top: 8px; }
  .rec-row { margin-bottom: 40px; }
  .rec-row-header {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 16px;
  }
  .rec-row-title {
    font-family: 'Libre Baskerville', serif; font-size: 1.15rem; font-weight: 700;
    color: #e0bd70;
  }
  .rec-row-reason {
    font-size: 0.78rem; color: rgba(212,168,83,0.6);
    font-style: italic; margin-top: 2px;
  }
  .rec-track {
    display: flex; gap: 16px; overflow-x: auto; padding-bottom: 12px;
  }
  .rec-track::-webkit-scrollbar { height: 5px; }
  .rec-track::-webkit-scrollbar-track { background: rgba(212,168,83,0.05); }
  .rec-track::-webkit-scrollbar-thumb { background: rgba(212,168,83,0.25); border-radius: 10px; }
  .rec-card {
    flex-shrink: 0; width: 150px; cursor: pointer;
    transition: transform 0.25s, box-shadow 0.25s;
    position: relative;
  }
  .rec-card:hover { transform: scale(1.05); z-index: 2; }
  .rec-cover {
    width: 150px; height: 220px; border-radius: 8px; overflow: hidden;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Libre Baskerville', serif; font-size: 1.3rem; font-weight: 700;
    color: #fff; position: relative;
    box-shadow: 0 8px 24px rgba(0,0,0,0.5);
    border: 1px solid rgba(212,168,83,0.15);
  }
  .rec-cover img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
  .rec-cover-letters { position: relative; z-index: 1; text-shadow: 0 2px 8px rgba(0,0,0,0.6); padding: 8px; text-align: center; }
  .rec-badge {
    position: absolute; top: 8px; right: 8px; z-index: 3;
    background: #d4a853; color: #0f1a12; font-family: 'Cabin', sans-serif;
    font-size: 0.6rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
    padding: 3px 7px; border-radius: 4px; white-space: nowrap;
  }
  .rec-info { padding: 10px 2px 0; }
  .rec-title {
    font-family: 'Libre Baskerville', serif; font-size: 0.82rem; font-weight: 700;
    color: #e0bd70; line-height: 1.3; margin-bottom: 3px;
  }
  .rec-author { font-size: 0.73rem; color: rgba(212,168,83,0.65); }
  .rec-price { font-size: 0.78rem; font-weight: 700; color: #d4a853; margin-top: 4px; }
  .rec-save-btn {
    margin-top: 7px; width: 100%; padding: 6px;
    background: rgba(212,168,83,0.12); border: 1px solid rgba(212,168,83,0.25);
    border-radius: 5px; color: #d4a853; font-size: 0.7rem;
    font-family: 'Cabin', sans-serif; font-weight: 700; text-transform: uppercase;
    cursor: pointer; transition: all 0.2s; text-align: center;
  }
  .rec-save-btn:hover { background: #d4a853; color: #0f1a12; }
  .rec-save-btn.saved { background: rgba(76,175,80,0.2); border-color: rgba(76,175,80,0.4); color: #81c784; }

  .rec-skeleton {
    flex-shrink: 0; width: 150px;
    background: rgba(255,255,255,0.04); border-radius: 8px;
    height: 220px; animation: shimmer 1.5s infinite;
  }
  @keyframes shimmer {
    0%,100% { opacity: 0.5; } 50% { opacity: 1; }
  }

  .rec-empty {
    color: rgba(212,168,83,0.5); font-size: 0.9rem; padding: 20px 0;
    font-style: italic;
  }
  .rec-empty a { color: #d4a853; font-weight: 700; font-style: normal; }

  /* ── Genre tag chips ── */
  .genre-prefs { display: flex; flex-wrap: wrap; gap: 8px; }
  .genre-chip {
    padding: 6px 14px; border-radius: 20px; cursor: pointer; font-size: 0.78rem;
    font-family: 'Cabin', sans-serif; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.04em; border: 1px solid rgba(212,168,83,0.25);
    background: rgba(212,168,83,0.07); color: rgba(212,168,83,0.75);
    transition: all 0.2s; user-select: none;
  }
  .genre-chip.active { background: #d4a853; color: #0f1a12; border-color: #d4a853; }

  /* ── Divider ── */
  .profile-section-divider {
    margin: 36px 40px 0;
    border: none; border-top: 1px solid rgba(212,168,83,0.1);
  }
  .profile-section-header {
    padding: 28px 40px 0;
    display: flex; align-items: center; gap: 16px;
  }
  .profile-section-header h2 {
    font-family: 'Libre Baskerville', serif; font-size: 1.3rem; color: #e0bd70;
    font-weight: 700; margin: 0; border: none;
  }
  .profile-section-header .section-sub {
    font-size: 0.82rem; color: rgba(212,168,83,0.6); margin-left: auto;
  }

  @media (max-width: 900px) {
    .profile-body { grid-template-columns: 1fr; }
    .profile-identity { padding: 0 20px; gap: 18px; }
    .rec-section { padding: 0 20px; }
    .profile-section-header { padding: 20px 20px 0; }
    .profile-section-divider { margin: 28px 20px 0; }
  }
  @media (max-width: 600px) {
    .profile-banner { height: 160px; }
    .profile-avatar { width: 80px; height: 80px; font-size: 1.8rem; }
    .profile-name { font-size: 1.4rem; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
    .profile-body { padding: 24px 16px 0; }
    .rec-cover { width: 120px; height: 176px; }
    .rec-card { width: 120px; }
    .avatar-presets-grid { grid-template-columns: repeat(4, 1fr); }
  }
</style>

<!-- Avatar Picker Modal -->
<div class="avatar-modal-overlay" id="avatar-modal">
  <div class="avatar-modal">
    <button class="avatar-modal-close" id="avatar-modal-close">✕</button>
    <h2>Customize Your Avatar</h2>
    <p class="avatar-modal-sub">Upload your own image or choose a preset.</p>

    <!-- Upload zone -->
    <div class="avatar-upload-zone" id="avatar-upload-zone">
      <div class="avatar-upload-icon">📷</div>
      <p>Drag & drop an image here</p>
      <button class="avatar-upload-btn" id="avatar-upload-trigger">Browse File</button>
      <input type="file" id="avatar-file-input" accept="image/*" style="display:none">
    </div>

    <!-- Preset selection -->
    <div class="avatar-presets-title">— or choose a preset —</div>
    <div class="avatar-presets-grid" id="avatar-presets-grid">
      <!-- presets rendered by JS -->
    </div>

    <button class="avatar-save-btn" id="avatar-save-btn">Save Avatar</button>
  </div>
</div>

<div class="profile-page">

  <!-- Hero Banner -->
  <div class="profile-banner">
    <div class="profile-banner-bg"></div>
    <div class="profile-banner-particles" id="banner-particles"></div>
    <button class="profile-banner-change-btn" id="open-avatar-modal">Change Banner / Avatar</button>
  </div>

  <!-- Identity row -->
  <div class="profile-identity">
    <div class="profile-avatar-wrap" id="open-avatar-from-pic">
      <div class="profile-avatar" id="profile-avatar-el">?</div>
      <div class="avatar-edit-overlay">Edit<br>Photo</div>
    </div>
    <div class="profile-identity-text">
      <div class="profile-name" id="profile-name">—</div>
      <span class="profile-role-badge" id="profile-role">Member</span>
    </div>
    <div class="profile-meta">
      <button class="signout-btn" onclick="doSignOut()">Sign Out</button>
    </div>
  </div>

  <!-- Main body: left sidebar + right content -->
  <div class="profile-body">

    <!-- LEFT SIDEBAR -->
    <div class="profile-sidebar">

      <!-- Account Info -->
      <div class="p-card">
        <div class="p-card-title">Account</div>
        <div class="profile-fields">
          <div class="profile-field">
            <label>Email</label>
            <span id="profile-email">—</span>
          </div>
          <div class="profile-field">
            <label>Member Since</label>
            <span id="profile-since">—</span>
          </div>
        </div>
      </div>

      <!-- Genre Preferences -->
      <div class="p-card">
        <div class="p-card-title">My Genre Preferences</div>
        <div class="genre-prefs" id="genre-prefs"></div>
        <p style="font-size:0.78rem;color:rgba(212,168,83,0.5);margin:12px 0 0;">Select genres to personalize your recommendations.</p>
      </div>

      <!-- Wordle Stats -->
      <div class="p-card">
        <div class="p-card-title">🟩 Wordle Stats</div>
        <div id="wordle-stats-content"><p class="no-stats">Loading…</p></div>
      </div>

    </div><!-- /sidebar -->

    <!-- RIGHT CONTENT -->
    <div class="profile-main">

      <!-- Saved Books shelf -->
      <div class="p-card saved-shelf">
        <div class="p-card-title">My Saved Books</div>
        <div id="saved-books-shelf">
          <p class="saved-shelf-empty">No saved books yet. <a href="/catalog">Browse the catalog →</a></p>
        </div>
      </div>

    </div><!-- /main -->
  </div><!-- /profile-body -->

  <!-- ─── Recommendations ─── -->
  <hr class="profile-section-divider">
  <div class="profile-section-header">
    <h2>Recommended for You</h2>
    <span class="section-sub">Based on your saves and preferences</span>
  </div>
  <div class="rec-section" id="rec-section">
    <!-- rows rendered by JS -->
    <div class="rec-row">
      <div class="rec-track">
        <div class="rec-skeleton"></div>
        <div class="rec-skeleton"></div>
        <div class="rec-skeleton"></div>
        <div class="rec-skeleton"></div>
        <div class="rec-skeleton"></div>
        <div class="rec-skeleton"></div>
      </div>
    </div>
  </div>

</div><!-- /profile-page -->

<script>
{
  const BACKEND = window.FOPL_BACKEND;
  const foplUser = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  if (!foplUser) { window.location.replace('/login'); }

  // ─── Storage helpers ────────────────────────────────────────────────────────
  const LS_SAVED   = 'fopl_saved_books';     // {id: bookObj}
  const LS_VIEWED  = 'fopl_viewed_books';    // [id, id, ...] most-recent first
  const LS_GENRES  = 'fopl_pref_genres';     // [genre, genre]
  const LS_AVATAR  = 'fopl_avatar';          // base64 string or 'preset:N'

  const getSaved  = () => JSON.parse(localStorage.getItem(LS_SAVED)  || '{}');
  const getViewed = () => JSON.parse(localStorage.getItem(LS_VIEWED) || '[]');
  const getGenres = () => JSON.parse(localStorage.getItem(LS_GENRES) || '[]');
  const getAvatar = () => localStorage.getItem(LS_AVATAR) || null;

  const saveSaved  = v => localStorage.setItem(LS_SAVED,  JSON.stringify(v));
  const saveViewed = v => localStorage.setItem(LS_VIEWED, JSON.stringify(v));
  const saveGenres = v => localStorage.setItem(LS_GENRES, JSON.stringify(v));
  const saveAvatar = v => localStorage.setItem(LS_AVATAR, v);

  // ─── Preset avatars ─────────────────────────────────────────────────────────
  const PRESETS = [
    { bg:'linear-gradient(135deg,#2a4a2a,#d4a853)', emoji:'📚' },
    { bg:'linear-gradient(135deg,#1a3a5c,#6ab4f5)', emoji:'🌊' },
    { bg:'linear-gradient(135deg,#5c2a2a,#e08060)', emoji:'🔥' },
    { bg:'linear-gradient(135deg,#3a1a5c,#b07adc)', emoji:'✨' },
    { bg:'linear-gradient(135deg,#1a4a3a,#70c8a0)', emoji:'🌿' },
    { bg:'linear-gradient(135deg,#4a3a1a,#e0c060)', emoji:'☀️' },
    { bg:'linear-gradient(135deg,#2a1a4a,#8060c0)', emoji:'🌙' },
    { bg:'linear-gradient(135deg,#1a1a1a,#888888)', emoji:'🎩' },
    { bg:'linear-gradient(135deg,#4a1a1a,#c04060)', emoji:'🌹' },
    { bg:'linear-gradient(135deg,#1a4a4a,#40c0c0)', emoji:'🔮' },
    { bg:'linear-gradient(135deg,#3a3a1a,#a0a040)', emoji:'🍂' },
    { bg:'linear-gradient(135deg,#1a2a4a,#4080d0)', emoji:'🦋' },
  ];

  // ─── Banner particles ───────────────────────────────────────────────────────
  function initParticles() {
    const container = document.getElementById('banner-particles');
    if (!container) return;
    const glyphs = ['A','B','§','¶','✦','◆','❧','☙','⌘','∞','ℓ','Ω'];
    for (let i = 0; i < 12; i++) {
      const el = document.createElement('span');
      el.className = 'banner-glyph';
      el.textContent = glyphs[i % glyphs.length];
      el.style.left  = Math.random() * 100 + '%';
      el.style.top   = Math.random() * 100 + '%';
      el.style.animationDelay = Math.random() * 10 + 's';
      el.style.animationDuration = (14 + Math.random() * 10) + 's';
      container.appendChild(el);
    }
  }

  // ─── Avatar rendering ────────────────────────────────────────────────────────
  let pendingAvatarValue = null; // staging area before Save

  function applyAvatarToEl(el, value, initials) {
    if (!value) {
      el.style.background = 'linear-gradient(135deg,#2a4a2a,#d4a853)';
      el.innerHTML = `<span style="position:relative;z-index:1;">${initials || '?'}</span>`;
      return;
    }
    if (value.startsWith('preset:')) {
      const idx = parseInt(value.split(':')[1]);
      const p = PRESETS[idx] || PRESETS[0];
      el.style.background = p.bg;
      el.innerHTML = `<span style="font-size:1.8rem;">${p.emoji}</span>`;
    } else {
      el.style.background = '#000';
      el.innerHTML = `<img src="${value}" alt="avatar">`;
    }
  }

  function renderMainAvatar() {
    if (!foplUser) return;
    const initials = foplUser.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
    applyAvatarToEl(document.getElementById('profile-avatar-el'), getAvatar(), initials);
  }

  // ─── Avatar Modal ────────────────────────────────────────────────────────────
  function openAvatarModal() {
    pendingAvatarValue = getAvatar();
    renderPresetGrid();
    document.getElementById('avatar-modal').classList.add('open');
  }
  function closeAvatarModal() {
    pendingAvatarValue = null;
    document.getElementById('avatar-modal').classList.remove('open');
  }
  function renderPresetGrid() {
    const grid = document.getElementById('avatar-presets-grid');
    const cur  = pendingAvatarValue;
    grid.innerHTML = PRESETS.map((p, i) => {
      const sel = cur === 'preset:'+i ? 'selected' : '';
      return `<div class="avatar-preset ${sel}" style="background:${p.bg};" data-preset="${i}" onclick="selectPreset(${i})">
        <span style="font-size:1.5rem;">${p.emoji}</span>
      </div>`;
    }).join('');
  }
  window.selectPreset = function(i) {
    pendingAvatarValue = 'preset:'+i;
    renderPresetGrid();
  };

  document.getElementById('open-avatar-modal').addEventListener('click', openAvatarModal);
  document.getElementById('open-avatar-from-pic').addEventListener('click', openAvatarModal);
  document.getElementById('avatar-modal-close').addEventListener('click', closeAvatarModal);
  document.getElementById('avatar-modal').addEventListener('click', e => {
    if (e.target === document.getElementById('avatar-modal')) closeAvatarModal();
  });

  // File upload
  const fileInput = document.getElementById('avatar-file-input');
  document.getElementById('avatar-upload-trigger').addEventListener('click', () => fileInput.click());
  const uploadZone = document.getElementById('avatar-upload-zone');
  uploadZone.addEventListener('dragover', e => { e.preventDefault(); uploadZone.classList.add('drag-over'); });
  uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('drag-over'));
  uploadZone.addEventListener('drop', e => {
    e.preventDefault(); uploadZone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  });
  fileInput.addEventListener('change', () => { if (fileInput.files[0]) handleFileUpload(fileInput.files[0]); });

  function handleFileUpload(file) {
    if (!file.type.startsWith('image/')) return;
    if (file.size > 4 * 1024 * 1024) { alert('Please choose an image under 4 MB.'); return; }
    const reader = new FileReader();
    reader.onload = e => {
      pendingAvatarValue = e.target.result;
      // Deselect presets
      document.querySelectorAll('.avatar-preset').forEach(el => el.classList.remove('selected'));
      uploadZone.style.borderColor = '#d4a853';
      uploadZone.querySelector('p').textContent = '✓ Image ready — click Save';
    };
    reader.readAsDataURL(file);
  }

  document.getElementById('avatar-save-btn').addEventListener('click', () => {
    if (pendingAvatarValue !== null) {
      saveAvatar(pendingAvatarValue);
      renderMainAvatar();
    }
    closeAvatarModal();
  });

  // ─── User card ───────────────────────────────────────────────────────────────
  function fillUser(user) {
    document.getElementById('profile-name').textContent  = user.name;
    document.getElementById('profile-email').textContent = user.email;
    const roleEl = document.getElementById('profile-role');
    roleEl.textContent = user.role || 'Member';
    if ((user.role||'').toLowerCase() === 'admin') roleEl.classList.add('admin');
    if (user.created_at) {
      const d = new Date(user.created_at);
      document.getElementById('profile-since').textContent =
        d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
    renderMainAvatar();
  }

  // ─── Wordle Stats ────────────────────────────────────────────────────────────
  function fillWordleStats(s) {
    const el = document.getElementById('wordle-stats-content');
    if (!s || s.games_played === 0) {
      el.innerHTML = `<p class="no-stats">No Wordle games played yet. <a href="/wordle">Play now →</a></p>`;
      return;
    }
    const dist = s.guess_dist || {};
    const maxVal = Math.max(...Object.values(dist), 1);
    let distHtml = '';
    for (let i = 1; i <= 6; i++) {
      const val = dist[String(i)] || 0;
      const w = Math.max(Math.round((val / maxVal) * 100), 8);
      distHtml += `<div class="dist-row">
        <div class="dist-num">${i}</div>
        <div class="dist-bar-wrap">
          <div class="dist-bar" style="width:${w}%">${val}</div>
        </div></div>`;
    }
    el.innerHTML = `
      <div class="stats-grid">
        <div class="stat-box"><div class="stat-num">${s.games_played}</div><div class="stat-lbl">Played</div></div>
        <div class="stat-box"><div class="stat-num">${s.win_rate}</div><div class="stat-lbl">Win %</div></div>
        <div class="stat-box"><div class="stat-num">${s.streak}</div><div class="stat-lbl">Streak</div></div>
        <div class="stat-box"><div class="stat-num">${s.max_streak}</div><div class="stat-lbl">Max Streak</div></div>
      </div>
      <div class="dist-title">Guess Distribution</div>${distHtml}`;
  }

  // ─── Saved shelf ─────────────────────────────────────────────────────────────
  const COVER_COLORS = ['#2a4a2a','#1a3a5c','#5c2a2a','#3a1a5c','#1a4a3a','#4a3a1a'];

  function coverColor(id) { return COVER_COLORS[Math.abs((id||0)) % COVER_COLORS.length]; }

  function renderSavedShelf() {
    const saved = getSaved();
    const ids   = Object.keys(saved);
    const el    = document.getElementById('saved-books-shelf');
    if (!ids.length) {
      el.innerHTML = `<p class="saved-shelf-empty">No saved books yet. <a href="/catalog">Browse the catalog →</a></p>`;
      return;
    }
    el.innerHTML = `<div class="shelf-row">${ids.map(id => {
      const b = saved[id];
      const coverUrl = b.isbn ? `https://covers.openlibrary.org/b/isbn/${b.isbn}-M.jpg` : '';
      return `<div class="shelf-book" data-id="${b.id}">
        <div class="shelf-cover" style="background:${coverColor(b.id)}">
          ${coverUrl ? `<img src="${coverUrl}" onerror="this.style.display='none'" alt="">` : ''}
          <span class="shelf-cover-letters">${(b.title||'?').charAt(0)}</span>
        </div>
        <div class="shelf-title">${escHtml(b.title||'')}</div>
        <button class="shelf-remove-btn" onclick="unsaveBook('${b.id}')">Remove</button>
      </div>`;
    }).join('')}</div>`;
  }

  window.unsaveBook = function(id) {
    const saved = getSaved();
    delete saved[id];
    saveSaved(saved);
    renderSavedShelf();
    renderRecommendations(allBooks);
  };

  // ─── Genre preferences chips ─────────────────────────────────────────────────
  const ALL_GENRES = ['Fiction','Non-Fiction','Mystery','Science Fiction','Fantasy',
    'Biography','History','Children','Romance','Self-Help','Science','Art'];

  function renderGenreChips() {
    const active = getGenres();
    const el = document.getElementById('genre-prefs');
    el.innerHTML = ALL_GENRES.map(g =>
      `<span class="genre-chip${active.includes(g)?' active':''}" onclick="toggleGenre('${g}')">${g}</span>`
    ).join('');
  }

  window.toggleGenre = function(g) {
    let genres = getGenres();
    if (genres.includes(g)) genres = genres.filter(x => x !== g);
    else genres.push(g);
    saveGenres(genres);
    renderGenreChips();
    renderRecommendations(allBooks);
  };

  // ─── Recommendations engine ───────────────────────────────────────────────────
  let allBooks = [];

  function buildBookCard(b, badgeText) {
    const coverUrl = b.isbn ? `https://covers.openlibrary.org/b/isbn/${b.isbn}-M.jpg` : '';
    const saved = getSaved();
    const isSaved = !!saved[b.id];
    return `<div class="rec-card" onclick="openBookFromProfile(${b.id})">
      <div class="rec-cover" style="background:${coverColor(b.id)}">
        ${coverUrl ? `<img src="${coverUrl}" onerror="this.style.display='none'" alt="">` : ''}
        <span class="rec-cover-letters">${(b.title||'?').charAt(0)}</span>
        ${badgeText ? `<span class="rec-badge">${escHtml(badgeText)}</span>` : ''}
      </div>
      <div class="rec-info">
        <div class="rec-title">${escHtml(b.title||'')}</div>
        <div class="rec-author">${escHtml(b.author||'')}</div>
        <div class="rec-price">$${parseFloat(b.price||0).toFixed(2)}</div>
        <button class="rec-save-btn${isSaved?' saved':''}" onclick="event.stopPropagation();toggleSaveBook(${JSON.stringify(JSON.stringify(b))},this)">${isSaved?'✓ Saved':'+ Save'}</button>
      </div>
    </div>`;
  }

  window.toggleSaveBook = function(bStr, btn) {
    const b = JSON.parse(bStr);
    const saved = getSaved();
    if (saved[b.id]) {
      delete saved[b.id];
      btn.textContent = '+ Save'; btn.classList.remove('saved');
    } else {
      saved[b.id] = b;
      btn.textContent = '✓ Saved'; btn.classList.add('saved');
    }
    saveSaved(saved);
    renderSavedShelf();
  };

  window.openBookFromProfile = function(id) {
    // Track view
    const viewed = getViewed().filter(x => x !== id);
    viewed.unshift(id);
    saveViewed(viewed.slice(0, 50));
    // Navigate to catalog with highlight
    window.location.href = `/catalog?book=${id}`;
  };

  function renderRecommendations(books) {
    if (!books || !books.length) return;
    const recSection = document.getElementById('rec-section');
    const saved  = getSaved();
    const genres = getGenres();
    const viewed = getViewed();
    const savedIds  = new Set(Object.keys(saved).map(Number));
    const viewedSet = new Set(viewed.map(Number));
    const savedBooks = Object.values(saved);

    // Shuffle helper (Fisher-Yates)
    const shuffle = arr => {
      const a = [...arr];
      for (let i = a.length-1; i > 0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [a[i],a[j]] = [a[j],a[i]];
      }
      return a;
    };

    const rows = [];

    // Row 1 — Because you saved X (per saved book genre)
    const savedGenres = [...new Set(savedBooks.map(b => b.genre).filter(Boolean))];
    savedGenres.slice(0,3).forEach(genre => {
      const trigger = savedBooks.find(b => b.genre === genre);
      const picks = books.filter(b => b.genre === genre && !savedIds.has(b.id));
      if (picks.length >= 3) {
        rows.push({
          title: `Because you saved "${trigger.title}"`,
          reason: `More ${genre} books`,
          books: shuffle(picks).slice(0,12),
          badge: genre
        });
      }
    });

    // Row 2 — Your preferred genres
    genres.slice(0,3).forEach(g => {
      const picks = books.filter(b => (b.genre||'').toLowerCase().includes(g.toLowerCase()) && !savedIds.has(b.id));
      if (picks.length >= 3) {
        rows.push({
          title: `Picks in ${g}`,
          reason: `Matching your genre preference`,
          books: shuffle(picks).slice(0,12),
          badge: null
        });
      }
    });

    // Row 3 — Recently viewed
    const recentlyViewed = viewed.map(id => books.find(b => b.id === id || b.id === String(id))).filter(Boolean);
    if (recentlyViewed.length >= 2) {
      rows.push({
        title: 'Continue Browsing',
        reason: 'Books you recently viewed',
        books: recentlyViewed.slice(0,12),
        badge: null
      });
    }

    // Row 4 — New arrivals (good condition, no saves filter)
    const newArrivals = books.filter(b => (b.condition||'').toLowerCase() === 'good' && !savedIds.has(b.id));
    if (newArrivals.length >= 3) {
      rows.push({
        title: 'Good-Condition Picks',
        reason: 'Curated quality finds',
        books: shuffle(newArrivals).slice(0,12),
        badge: 'Good'
      });
    }

    // Row 5 — Affordable reads
    const affordable = books.filter(b => parseFloat(b.price||99) <= 3 && !savedIds.has(b.id));
    if (affordable.length >= 3) {
      rows.push({
        title: 'Budget-Friendly Reads',
        reason: 'Under $3.00',
        books: shuffle(affordable).slice(0,12),
        badge: null
      });
    }

    // Row 6 — Fallback: browse all
    rows.push({
      title: 'Explore the Collection',
      reason: 'All available titles',
      books: shuffle(books.filter(b => !savedIds.has(b.id))).slice(0,18),
      badge: null
    });

    recSection.innerHTML = rows.map(row => `
      <div class="rec-row">
        <div class="rec-row-header">
          <div>
            <div class="rec-row-title">${escHtml(row.title)}</div>
            <div class="rec-row-reason">${escHtml(row.reason)}</div>
          </div>
        </div>
        <div class="rec-track">
          ${row.books.length ? row.books.map(b => buildBookCard(b, row.badge)).join('') :
            `<div class="rec-empty">No books found. <a href="/catalog">Explore catalog →</a></div>`}
        </div>
      </div>`).join('');
  }

  function escHtml(s) {
    return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // ─── Sign out ─────────────────────────────────────────────────────────────────
  async function doSignOut() {
    await fetch(`${BACKEND}/api/fopl/login`, { method: 'DELETE', credentials: 'include' }).catch(() => {});
    localStorage.removeItem('fopl_user');
    window.location.href = '/home';
  }
  window.doSignOut = doSignOut;

  // ─── Boot ─────────────────────────────────────────────────────────────────────
  if (foplUser) {
    initParticles();
    fillUser(foplUser);
    renderGenreChips();
    renderSavedShelf();

    // Wordle stats
    fetch(`${BACKEND}/api/fopl/puzzle/stats?game=wordle`, { credentials: 'include' })
      .then(r => r.ok ? r.json() : null)
      .then(fillWordleStats)
      .catch(() => fillWordleStats(null));

    // Books for recommendations
    fetch(`${BACKEND}/api/fopl/books`, { credentials: 'include' })
      .then(r => r.ok ? r.json() : [])
      .then(books => {
        allBooks = Array.isArray(books) ? books : (books.books || []);
        renderRecommendations(allBooks);
      })
      .catch(() => {
        document.getElementById('rec-section').innerHTML =
          `<div class="rec-empty">Could not load recommendations. <a href="/catalog">Browse catalog →</a></div>`;
      });
  }
}
</script>
