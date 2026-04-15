---
layout: fopl
title: Volunteer Applications — Friends of the Poway Library
permalink: /volunteer-apps
description: Admin view of volunteer applications submitted through the FOPL site.
fopl_nav_active: admin
---

<style>
  body { background: #f4f8f4; }

  .fopl-hero {
    background: #023b0f; color: #fff; text-align: center; padding: 40px 24px 32px;
  }
  .fopl-hero h1 {
    font-family: 'Cabin', sans-serif; font-size: 2rem; font-weight: 700;
    margin: 0 0 6px; color: #fff; border: none; text-transform: uppercase; letter-spacing: 0.04em;
  }
  .fopl-hero p { font-size: 0.95rem; opacity: 0.8; margin: 0; }

  /* ── Auth gate ── */
  #va-auth-gate {
    max-width: 400px; margin: 64px auto; background: #fff; border-radius: 8px;
    box-shadow: 0 2px 16px rgba(2,59,15,0.10); border-top: 4px solid #023b0f;
    padding: 36px 32px; text-align: center;
  }
  #va-auth-gate h2 {
    font-family: 'Cabin', sans-serif; font-size: 1rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em; color: #023b0f;
    margin: 0 0 6px; border: none;
  }
  #va-auth-gate p { font-size: 0.88rem; color: #666; margin: 0 0 22px; }
  #va-auth-gate input {
    width: 100%; box-sizing: border-box;
    border: 1.5px solid #c8dcc8; border-radius: 4px;
    padding: 10px 12px; font-size: 0.95rem;
    font-family: 'Lato', sans-serif; outline: none;
    transition: border-color 0.15s; margin-bottom: 12px;
  }
  #va-auth-gate input:focus { border-color: #023b0f; box-shadow: 0 0 0 3px rgba(2,59,15,0.08); }
  #va-auth-btn {
    width: 100%; padding: 11px; background: #023b0f; color: #fff;
    border: none; border-radius: 4px; font-family: 'Cabin', sans-serif;
    font-weight: 700; font-size: 0.88rem; text-transform: uppercase;
    letter-spacing: 0.06em; cursor: pointer; transition: background 0.2s;
  }
  #va-auth-btn:hover { background: #045218; }
  #va-auth-error { font-size: 0.82rem; color: #b71c1c; margin-top: 10px; display: none; }

  /* ── Main content ── */
  #va-main { display: none; max-width: 1100px; margin: 0 auto; padding: 40px 32px 60px; }

  /* ── Toolbar ── */
  .va-toolbar {
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 12px; margin-bottom: 24px;
  }
  .va-toolbar-left { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
  .va-count {
    font-family: 'Cabin', sans-serif; font-size: 0.8rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em; color: #023b0f;
    border-bottom: 2px solid #023b0f; padding-bottom: 4px; margin-right: 4px;
  }
  .va-filter-btn {
    padding: 5px 14px; border: 1.5px solid #c8dcc8; border-radius: 20px;
    font-size: 0.78rem; font-family: 'Cabin', sans-serif; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;
    background: #fff; color: #555; transition: all 0.15s;
  }
  .va-filter-btn.active, .va-filter-btn:hover { background: #023b0f; color: #fff; border-color: #023b0f; }
  .va-icon-btn {
    padding: 6px 16px; border-radius: 4px; font-size: 0.78rem;
    font-family: 'Cabin', sans-serif; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;
    background: #fff; transition: all 0.15s;
  }
  .va-icon-btn.danger { border: 1.5px solid #c62828; color: #c62828; }
  .va-icon-btn.danger:hover { background: #c62828; color: #fff; }
  .va-icon-btn.muted  { border: 1.5px solid #aaa; color: #666; }
  .va-icon-btn.muted:hover  { background: #f0f0f0; }

  /* ── Loading / empty ── */
  #va-loading { text-align: center; padding: 48px; color: #888; font-size: 0.95rem; }
  #va-empty   { text-align: center; padding: 60px 24px; color: #888; font-size: 0.95rem; display: none; }
  #va-error   { text-align: center; padding: 40px 24px; color: #b71c1c; font-size: 0.9rem; display: none; }

  /* ── Cards ── */
  #va-list { display: flex; flex-direction: column; gap: 16px; }

  .va-card {
    background: #fff; border-radius: 8px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.07);
    border-left: 4px solid #023b0f; overflow: hidden;
  }
  .va-card.status-reviewed  { border-left-color: #1565c0; }
  .va-card.status-contacted { border-left-color: #283593; }
  .va-card.status-rejected  { border-left-color: #b71c1c; opacity: 0.65; }

  .va-card-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 16px 20px; cursor: pointer; gap: 16px; user-select: none;
  }
  .va-card-header:hover { background: #f9fdf9; }
  .va-card-name {
    font-family: 'Cabin', sans-serif; font-weight: 700; font-size: 1rem; color: #1b3d1e;
  }
  .va-card-meta { font-size: 0.78rem; color: #666; margin-top: 2px; }
  .va-card-badges { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; flex-shrink: 0; }

  .va-badge {
    display: inline-block; font-size: 0.68rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em; padding: 3px 9px; border-radius: 3px;
  }
  .va-badge-new      { background: #e8f5e9; color: #1b5e20; border: 1px solid #a5d6a7; }
  .va-badge-reviewed { background: #e3f2fd; color: #0d47a1; border: 1px solid #90caf9; }
  .va-badge-contacted{ background: #e8eaf6; color: #283593; border: 1px solid #9fa8da; }
  .va-badge-rejected { background: #ffebee; color: #b71c1c; border: 1px solid #ef9a9a; }

  .va-card-chevron { font-size: 0.75rem; color: #999; transition: transform 0.2s; flex-shrink: 0; }
  .va-card.open .va-card-chevron { transform: rotate(180deg); }

  .va-card-body { display: none; padding: 0 20px 20px; border-top: 1px solid #eef2ee; }
  .va-card.open .va-card-body { display: block; }

  .va-detail-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 16px 0;
  }
  .va-detail-item label {
    display: block; font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.08em; color: #888; margin-bottom: 3px;
  }
  .va-detail-item span { font-size: 0.9rem; color: #222; }

  .va-detail-full { margin-top: 12px; }
  .va-detail-full label {
    display: block; font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.08em; color: #888; margin-bottom: 4px;
  }
  .va-detail-full p {
    font-size: 0.9rem; color: #333; line-height: 1.65;
    background: #f9fdf9; border-radius: 4px; padding: 10px 12px;
    margin: 0; border: 1px solid #e0ece0;
  }

  .va-card-actions {
    display: flex; gap: 8px; flex-wrap: wrap; margin-top: 16px;
    padding-top: 16px; border-top: 1px solid #eef2ee; align-items: center;
  }
  .va-action-btn {
    padding: 6px 14px; border-radius: 4px; font-size: 0.75rem;
    font-family: 'Cabin', sans-serif; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.05em; cursor: pointer; border: 1.5px solid; transition: all 0.15s;
    background: #fff;
  }
  .va-action-btn:disabled { opacity: 0.5; cursor: not-allowed; }
  .va-action-btn.mark-reviewed  { border-color: #1565c0; color: #1565c0; }
  .va-action-btn.mark-reviewed:hover:not(:disabled)  { background: #1565c0; color: #fff; }
  .va-action-btn.mark-contacted { border-color: #283593; color: #283593; }
  .va-action-btn.mark-contacted:hover:not(:disabled) { background: #283593; color: #fff; }
  .va-action-btn.mark-rejected  { border-color: #b71c1c; color: #b71c1c; }
  .va-action-btn.mark-rejected:hover:not(:disabled)  { background: #b71c1c; color: #fff; }
  .va-action-btn.mark-new       { border-color: #2e7d32; color: #2e7d32; }
  .va-action-btn.mark-new:hover:not(:disabled)       { background: #2e7d32; color: #fff; }
  .va-action-btn.delete-app     { border-color: #999; color: #999; margin-left: auto; }
  .va-action-btn.delete-app:hover:not(:disabled) { background: #eee; border-color: #666; color: #333; }

  @media (max-width: 700px) {
    #va-main { padding: 28px 16px 48px; }
    .va-detail-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 460px) {
    .va-detail-grid { grid-template-columns: 1fr; }
  }
</style>

<div class="fopl-hero">
  <h1>Volunteer Applications</h1>
  <p>Admin view — submitted applications from the volunteer page.</p>
</div>

<div id="va-auth-gate">
  <h2>Admin Access Required</h2>
  <p>Enter the admin password to view applications.</p>
  <input type="password" id="va-password" placeholder="Password" autocomplete="current-password">
  <button id="va-auth-btn">Sign In</button>
  <div id="va-auth-error">Incorrect password. Please try again.</div>
</div>

<div id="va-main">
  <div class="va-toolbar">
    <div class="va-toolbar-left">
      <span class="va-count" id="va-count">Loading…</span>
      <button class="va-filter-btn active" data-filter="all">All</button>
      <button class="va-filter-btn" data-filter="new">New</button>
      <button class="va-filter-btn" data-filter="reviewed">Reviewed</button>
      <button class="va-filter-btn" data-filter="contacted">Contacted</button>
      <button class="va-filter-btn" data-filter="rejected">Rejected</button>
    </div>
    <div style="display:flex;gap:8px;">
      <button class="va-icon-btn muted" id="va-refresh">Refresh</button>
      <button class="va-icon-btn muted" id="va-logout">Log Out</button>
    </div>
  </div>

  <div id="va-loading">Loading applications…</div>
  <div id="va-error">Failed to load applications. Check your Supabase configuration.</div>
  <div id="va-empty">No applications yet. They will appear here once someone submits the volunteer form.</div>
  <div id="va-list"></div>
</div>

<script>
(function () {
  /* ── Config ── */
  const SUPABASE_URL      = 'https://homnbekbwqfzmutyhkpq.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbW5iZWtid3Fmem11dHloa3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyNzg2NDQsImV4cCI6MjA5MTg1NDY0NH0.A8pXHtUY_Njwk_AHvns7d9ZBnmqq7KKKzn9MWXIgJYs';
  const ADMIN_PASSWORD    = 'fopl2025';
  const SESSION_KEY       = 'fopl_va_authed';
  const TABLE             = 'volunteer_applications';

  /* ── DOM refs ── */
  const gate    = document.getElementById('va-auth-gate');
  const main    = document.getElementById('va-main');
  const pwdIn   = document.getElementById('va-password');
  const authBtn = document.getElementById('va-auth-btn');
  const authErr = document.getElementById('va-auth-error');
  const loading = document.getElementById('va-loading');
  const empty   = document.getElementById('va-empty');
  const errMsg  = document.getElementById('va-error');
  const list    = document.getElementById('va-list');
  const countEl = document.getElementById('va-count');

  let currentFilter = 'all';
  let allApps = [];

  /* ── Supabase helpers ── */
  function sbHeaders() {
    return {
      'apikey':        SUPABASE_ANON_KEY,
      'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
      'Content-Type':  'application/json',
    };
  }

  async function fetchApps() {
    loading.style.display = 'block';
    errMsg.style.display  = 'none';
    empty.style.display   = 'none';
    list.innerHTML        = '';

    try {
      const res = await fetch(
        SUPABASE_URL + '/rest/v1/' + TABLE + '?select=*&order=submitted_at.desc',
        { headers: sbHeaders() }
      );
      if (!res.ok) throw new Error(res.status);
      allApps = await res.json();
      loading.style.display = 'none';
      renderList();
    } catch (e) {
      loading.style.display = 'none';
      errMsg.style.display  = 'block';
    }
  }

  async function updateStatus(id, status, card) {
    card.querySelectorAll('.va-action-btn').forEach(b => b.disabled = true);
    try {
      const res = await fetch(
        SUPABASE_URL + '/rest/v1/' + TABLE + '?id=eq.' + id,
        {
          method: 'PATCH',
          headers: Object.assign({}, sbHeaders(), { 'Prefer': 'return=minimal' }),
          body: JSON.stringify({ status }),
        }
      );
      if (!res.ok) throw new Error(res.status);
      const app = allApps.find(a => a.id === id);
      if (app) app.status = status;
      renderList();
    } catch (e) {
      card.querySelectorAll('.va-action-btn').forEach(b => b.disabled = false);
      alert('Failed to update status. Please try again.');
    }
  }

  async function deleteApp(id, name) {
    if (!confirm('Delete application from ' + name + '? This cannot be undone.')) return;
    try {
      const res = await fetch(
        SUPABASE_URL + '/rest/v1/' + TABLE + '?id=eq.' + id,
        { method: 'DELETE', headers: sbHeaders() }
      );
      if (!res.ok) throw new Error(res.status);
      allApps = allApps.filter(a => a.id !== id);
      renderList();
    } catch (e) {
      alert('Failed to delete. Please try again.');
    }
  }

  /* ── Render ── */
  function fmt(val) { return val || '<span style="color:#bbb">—</span>'; }
  function fmtArr(arr) {
    if (!arr || !arr.length) return '<span style="color:#bbb">—</span>';
    return arr.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ');
  }
  function fmtDate(iso) {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: '2-digit',
    });
  }
  function hoursLabel(h) {
    return ({ '2-4/week': '2–4 hrs/week', '5-8/week': '5–8 hrs/week',
              'fewdays/month': 'Few days/month', 'flexible': 'Flexible' })[h] || h || '—';
  }
  function badgeClass(s) {
    return ({ new: 'va-badge-new', reviewed: 'va-badge-reviewed',
              contacted: 'va-badge-contacted', rejected: 'va-badge-rejected' })[s] || 'va-badge-new';
  }

  function renderList() {
    const filtered = currentFilter === 'all'
      ? allApps
      : allApps.filter(a => (a.status || 'new') === currentFilter);

    countEl.textContent = allApps.length + ' Application' + (allApps.length !== 1 ? 's' : '');
    list.innerHTML = '';
    empty.style.display = filtered.length === 0 ? 'block' : 'none';

    filtered.forEach(function (app) {
      const appStatus = app.status || 'new';
      const card = document.createElement('div');
      card.className = 'va-card status-' + appStatus;

      card.innerHTML =
        '<div class="va-card-header">' +
          '<div>' +
            '<div class="va-card-name">' + fmt(app.first_name) + ' ' + fmt(app.last_name) + '</div>' +
            '<div class="va-card-meta">' + fmt(app.email) + ' &nbsp;·&nbsp; ' + fmtDate(app.submitted_at) + '</div>' +
          '</div>' +
          '<div class="va-card-badges">' +
            '<span class="va-badge ' + badgeClass(appStatus) + '">' + appStatus + '</span>' +
            '<span class="va-card-chevron">&#9660;</span>' +
          '</div>' +
        '</div>' +
        '<div class="va-card-body">' +
          '<div class="va-detail-grid">' +
            '<div class="va-detail-item"><label>Phone</label><span>' + fmt(app.phone) + '</span></div>' +
            '<div class="va-detail-item"><label>City / Zip</label><span>' + (app.city || '—') + (app.zip ? ' ' + app.zip : '') + '</span></div>' +
            '<div class="va-detail-item"><label>Availability</label><span>' + hoursLabel(app.hours) + '</span></div>' +
            '<div class="va-detail-item"><label>Days</label><span>' + fmtArr(app.days) + '</span></div>' +
            '<div class="va-detail-item"><label>Roles Interested</label><span>' + fmtArr(app.roles) + '</span></div>' +
          '</div>' +
          (app.experience ? '<div class="va-detail-full"><label>Experience</label><p>' + app.experience + '</p></div>' : '') +
          '<div class="va-detail-full"><label>Why they want to volunteer</label><p>' + fmt(app.why) + '</p></div>' +
          (app.other ? '<div class="va-detail-full"><label>Additional notes</label><p>' + app.other + '</p></div>' : '') +
          '<div class="va-card-actions">' +
            '<button class="va-action-btn mark-reviewed"  data-status="reviewed">Mark Reviewed</button>' +
            '<button class="va-action-btn mark-contacted" data-status="contacted">Mark Contacted</button>' +
            '<button class="va-action-btn mark-rejected"  data-status="rejected">Reject</button>' +
            '<button class="va-action-btn mark-new"       data-status="new">Reset to New</button>' +
            '<button class="va-action-btn delete-app">Delete</button>' +
          '</div>' +
        '</div>';

      card.querySelector('.va-card-header').addEventListener('click', function () {
        card.classList.toggle('open');
      });

      card.querySelectorAll('.va-action-btn[data-status]').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          updateStatus(app.id, btn.dataset.status, card);
        });
      });

      card.querySelector('.delete-app').addEventListener('click', function (e) {
        e.stopPropagation();
        deleteApp(app.id, (app.first_name || '') + ' ' + (app.last_name || ''));
      });

      list.appendChild(card);
    });
  }

  /* ── Filter buttons ── */
  document.querySelectorAll('.va-filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.va-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderList();
    });
  });

  /* ── Auth ── */
  function showMain() {
    gate.style.display = 'none';
    main.style.display = 'block';
    fetchApps();
  }

  if (sessionStorage.getItem(SESSION_KEY) === '1') showMain();

  authBtn.addEventListener('click', function () {
    if (pwdIn.value === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1');
      authErr.style.display = 'none';
      showMain();
    } else {
      authErr.style.display = 'block';
      pwdIn.value = '';
      pwdIn.focus();
    }
  });
  pwdIn.addEventListener('keydown', function (e) { if (e.key === 'Enter') authBtn.click(); });

  document.getElementById('va-logout').addEventListener('click', function () {
    sessionStorage.removeItem(SESSION_KEY);
    location.reload();
  });

  document.getElementById('va-refresh').addEventListener('click', fetchApps);
})();
</script>

<div class="fopl-footer">
  &copy; 2025 Friends of the Poway Library &mdash;
  <a href="https://powayfriends.org">powayfriends.org</a>
</div>
