---
layout: fopl
title: Admin Dashboard — Friends of the Poway Library
permalink: /admin
description: Admin dashboard for the Friends of the Poway Library site.
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

  .admin-wrap { max-width: 1100px; margin: 0 auto; padding: 40px 24px; }

  /* ── Access denied ── */
  .admin-denied {
    text-align: center; padding: 80px 20px;
  }
  .admin-denied h2 {
    font-family: 'Cabin', sans-serif; font-size: 1.4rem; color: #023b0f; margin: 0 0 12px;
  }
  .admin-denied p { color: #555; margin: 0 0 20px; }
  .admin-denied a {
    display: inline-block; padding: 10px 24px; background: #023b0f; color: #fff;
    border-radius: 4px; text-decoration: none; font-family: 'Cabin', sans-serif;
    font-weight: 700; font-size: 0.88rem; text-transform: uppercase;
  }

  /* ── Stat cards ── */
  .admin-stats {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px;
  }
  @media (max-width: 720px) { .admin-stats { grid-template-columns: repeat(2, 1fr); } }

  .admin-stat {
    background: #fff; border-radius: 8px; padding: 20px;
    box-shadow: 0 2px 10px rgba(2,59,15,0.08); border-top: 4px solid #023b0f;
    text-align: center;
  }
  .admin-stat-value {
    font-family: 'Cabin', sans-serif; font-size: 2.2rem; font-weight: 700;
    color: #023b0f; display: block; line-height: 1; margin-bottom: 6px;
  }
  .admin-stat-label {
    font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.07em; color: #6b756b;
  }

  /* ── Section card ── */
  .admin-card {
    background: #fff; border-radius: 8px;
    box-shadow: 0 2px 10px rgba(2,59,15,0.08); border-top: 4px solid #023b0f;
    padding: 24px; margin-bottom: 24px;
  }
  .admin-card h2 {
    font-family: 'Cabin', sans-serif; font-size: 1rem; font-weight: 700;
    color: #023b0f; text-transform: uppercase; letter-spacing: 0.05em;
    margin: 0 0 16px; border: none;
  }

  /* ── Users table ── */
  .admin-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
  .admin-table th {
    background: #f4f8f4; text-align: left; padding: 8px 12px;
    font-family: 'Cabin', sans-serif; font-size: 0.72rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em; color: #6b756b;
    border-bottom: 2px solid #dce8dc;
  }
  .admin-table td { padding: 9px 12px; border-bottom: 1px solid #eef2ee; color: #333; }
  .admin-table tr:last-child td { border-bottom: none; }
  .admin-table tr:hover td { background: #f9fcf9; }

  .role-badge {
    display: inline-block; padding: 2px 8px; border-radius: 3px;
    font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;
  }
  .role-badge.admin { background: #023b0f; color: #fff; }
  .role-badge.member { background: #e8f5e9; color: #023b0f; border: 1px solid rgba(2,59,15,0.2); }

  /* ── Mini bar chart ── */
  .admin-bars { display: flex; flex-direction: column; gap: 10px; }
  .admin-bar-row { display: flex; align-items: center; gap: 10px; font-size: 0.85rem; }
  .admin-bar-label { width: 130px; flex-shrink: 0; color: #333; font-size: 0.82rem; }
  .admin-bar-track { flex: 1; background: #eef2ee; border-radius: 4px; height: 18px; overflow: hidden; }
  .admin-bar-fill { height: 100%; background: #023b0f; border-radius: 4px; transition: width 0.5s; }
  .admin-bar-val { width: 40px; text-align: right; flex-shrink: 0; color: #023b0f; font-weight: 700; font-size: 0.82rem; }

  /* ── Grid of mini stats ── */
  .admin-mini-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  @media (max-width: 600px) { .admin-mini-grid { grid-template-columns: 1fr 1fr; } }
  .admin-mini-stat { background: #f4f8f4; border-radius: 6px; padding: 14px; text-align: center; }
  .admin-mini-stat-val { font-family: 'Cabin', sans-serif; font-size: 1.4rem; font-weight: 700; color: #023b0f; display: block; }
  .admin-mini-stat-lbl { font-size: 0.72rem; color: #6b756b; text-transform: uppercase; letter-spacing: 0.06em; }

  #admin-loading { text-align: center; padding: 60px; color: #6b756b; font-size: 0.95rem; }
  #admin-content { display: none; }
</style>

<div class="fopl-hero">
  <h1>Admin Dashboard</h1>
  <p>Site analytics and user management for Friends of the Poway Library</p>
</div>

<div class="admin-wrap">

  <div id="admin-denied" style="display:none;">
    <div class="admin-denied">
      <h2>Access Restricted</h2>
      <p>This page is only accessible to FOPL admins.</p>
      <a href="/login">Sign In</a>
    </div>
  </div>

  <div id="admin-loading">Loading dashboard...</div>

  <div id="admin-content">

    <!-- Top stat cards -->
    <div class="admin-stats">
      <div class="admin-stat">
        <span class="admin-stat-value" id="stat-users">—</span>
        <span class="admin-stat-label">Registered Users</span>
      </div>
      <div class="admin-stat">
        <span class="admin-stat-value" id="stat-books">—</span>
        <span class="admin-stat-label">Books in Catalog</span>
      </div>
      <div class="admin-stat">
        <span class="admin-stat-value" id="stat-sessions">—</span>
        <span class="admin-stat-label">Game Sessions</span>
      </div>
      <div class="admin-stat">
        <span class="admin-stat-value" id="stat-events">—</span>
        <span class="admin-stat-label">Calendar Events</span>
      </div>
    </div>

    <!-- Users table -->
    <div class="admin-card">
      <h2>Registered Users</h2>
      <div style="overflow-x:auto;">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody id="users-tbody"></tbody>
        </table>
      </div>
    </div>

    <!-- Books breakdown -->
    <div class="admin-card">
      <h2>Book Catalog</h2>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
        <div>
          <p style="font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:#6b756b;margin:0 0 10px;">By Age Group</p>
          <div class="admin-bars" id="bars-age"></div>
        </div>
        <div>
          <p style="font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:#6b756b;margin:0 0 10px;">By Condition</p>
          <div class="admin-bars" id="bars-condition"></div>
        </div>
      </div>
      <div style="margin-top:20px;display:flex;gap:24px;flex-wrap:wrap;">
        <div><span style="font-size:0.82rem;color:#6b756b;">Total inventory:</span> <strong id="stat-inventory" style="color:#023b0f;">—</strong></div>
        <div><span style="font-size:0.82rem;color:#6b756b;">Estimated value:</span> <strong id="stat-value" style="color:#023b0f;">—</strong></div>
      </div>
    </div>

    <!-- Game stats -->
    <div class="admin-card">
      <h2>Game Activity</h2>
      <div class="admin-mini-grid" id="game-grid"></div>
    </div>

  </div>
</div>

<script>
(function() {
  const BACKEND = window.FOPL_BACKEND;
  const user = JSON.parse(localStorage.getItem('fopl_user') || 'null');

  if (!user || user.role !== 'Admin') {
    document.getElementById('admin-loading').style.display = 'none';
    document.getElementById('admin-denied').style.display = 'block';
    return;
  }

  fetch(BACKEND + '/api/fopl/admin/stats', { credentials: 'include' })
    .then(r => r.json())
    .then(data => {
      document.getElementById('admin-loading').style.display = 'none';
      document.getElementById('admin-content').style.display = 'block';

      // Top stats
      document.getElementById('stat-users').textContent    = data.users.total;
      document.getElementById('stat-books').textContent    = data.books.total_titles;
      document.getElementById('stat-sessions').textContent = data.games.total_sessions;
      document.getElementById('stat-events').textContent   = data.events.total;
      document.getElementById('stat-inventory').textContent = data.books.total_inventory + ' copies';
      document.getElementById('stat-value').textContent    = '$' + data.books.total_value.toFixed(2);

      // Users table
      const tbody = document.getElementById('users-tbody');
      data.users.list.forEach(u => {
        const tr = document.createElement('tr');
        const joined = u.created_at ? new Date(u.created_at).toLocaleDateString() : '—';
        tr.innerHTML = `
          <td>${u.name}</td>
          <td>${u.email}</td>
          <td><span class="role-badge ${u.role.toLowerCase()}">${u.role}</span></td>
          <td>${joined}</td>`;
        tbody.appendChild(tr);
      });

      // Bar charts
      function makeBars(containerId, obj) {
        const container = document.getElementById(containerId);
        const max = Math.max(...Object.values(obj), 1);
        Object.entries(obj).forEach(([label, val]) => {
          const pct = Math.round((val / max) * 100);
          container.innerHTML += `
            <div class="admin-bar-row">
              <span class="admin-bar-label">${label}</span>
              <div class="admin-bar-track"><div class="admin-bar-fill" style="width:${pct}%"></div></div>
              <span class="admin-bar-val">${val}</span>
            </div>`;
        });
      }
      makeBars('bars-age', data.books.by_age_group);
      makeBars('bars-condition', data.books.by_condition);

      // Game grid
      const gameGrid = document.getElementById('game-grid');
      const gameNames = {
        'pinshelf': 'PinShelf', 'trivia': 'Book Trivia', 'scramble': 'Word Scramble',
        'shelfrun': 'Shelf Run', 'netstack': 'Net Stack', 'osi': 'OSI RPG'
      };
      Object.entries(data.games.by_game).forEach(([game, s]) => {
        const name = gameNames[game] || game;
        const winRate = s.sessions ? Math.round(s.wins / s.sessions * 100) : 0;
        gameGrid.innerHTML += `
          <div class="admin-mini-stat">
            <span class="admin-mini-stat-val">${s.sessions}</span>
            <span class="admin-mini-stat-lbl">${name}</span>
            <span style="font-size:0.72rem;color:#6b756b;display:block;margin-top:3px;">${winRate}% win rate</span>
          </div>`;
      });
      if (!Object.keys(data.games.by_game).length) {
        gameGrid.innerHTML = '<p style="color:#6b756b;font-size:0.9rem;grid-column:1/-1;">No game sessions recorded yet.</p>';
      }
    })
    .catch(() => {
      document.getElementById('admin-loading').textContent = 'Failed to load dashboard. Is the backend running?';
    });
})();
</script>
