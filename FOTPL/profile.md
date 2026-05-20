---
layout: fopl
title: My Profile - Friends of the Poway Library
permalink: /profile
description: Your Friends of the Poway Library account profile.
fopl_nav_active: profile
---

<style>
body { background: #023b0f; }

/* ===== HERO ===== */
.profile-hero {
  background: rgba(0,0,0,0.28);
  padding: 40px 48px 36px;
  display: flex; align-items: center; gap: 28px;
  position: relative; flex-wrap: wrap;
}

.hero-avatar-wrap { position: relative; flex-shrink: 0; }

.hero-avatar-img,
.hero-avatar-init {
  width: 96px; height: 96px; border-radius: 50%;
  border: 3px solid #c9a84c;
}
.hero-avatar-img {
  object-fit: cover; display: none; background: #062b0c;
}
.hero-avatar-init {
  background: #062b0c; color: #c9a84c;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Cabin', sans-serif; font-size: 2rem; font-weight: 700;
}

.avatar-edit-btn {
  position: absolute; bottom: 2px; right: 2px;
  width: 26px; height: 26px; border-radius: 50%;
  background: #c9a84c; border: 2px solid #023b0f; cursor: pointer;
  font-size: 0.68rem; color: #1a1a1a; line-height: 1;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.15s;
}
.avatar-edit-btn:hover { background: #e8c76a; }

#avatar-input { display: none; }

.hero-info { flex: 1; min-width: 0; }
.hero-name {
  font-family: 'Cabin', sans-serif; font-size: 1.85rem; font-weight: 700;
  color: #fff; margin: 0 0 7px; line-height: 1.2;
}
.hero-role-badge {
  display: inline-block; font-size: 0.7rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.07em;
  padding: 3px 12px; border-radius: 20px;
  border: 1.5px solid #c9a84c; color: #c9a84c; margin-bottom: 10px;
}
.hero-role-badge.admin-badge { background: #c9a84c; color: #1a1a1a; }
.hero-meta { font-size: 0.88rem; color: rgba(255,255,255,0.58); margin-bottom: 3px; }
.hero-stats-line { font-size: 0.78rem; color: rgba(255,255,255,0.35); margin-top: 8px; letter-spacing: 0.01em; }

.hero-actions {
  position: absolute; top: 24px; right: 40px;
  display: flex; gap: 10px; align-items: center;
}
.hero-signout {
  padding: 9px 22px; background: none;
  border: 1.5px solid rgba(255,255,255,0.28); color: rgba(255,255,255,0.62);
  border-radius: 6px; font-family: 'Cabin', sans-serif; font-weight: 700;
  font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.06em;
  cursor: pointer; transition: border-color 0.2s, color 0.2s;
}
.hero-signout:hover { border-color: #c9a84c; color: #c9a84c; }
.hero-admin-link {
  padding: 9px 18px; background: rgba(201,168,76,0.15);
  border: 1.5px solid #c9a84c; color: #c9a84c;
  border-radius: 6px; font-family: 'Cabin', sans-serif; font-weight: 700;
  font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.06em;
  text-decoration: none; transition: background 0.2s;
}
.hero-admin-link:hover { background: rgba(201,168,76,0.28); }

/* ===== CONTENT WRAPPER ===== */
.profile-content {
  max-width: 1100px; margin: 0 auto; padding: 32px 40px 64px;
}

/* ===== SECTION LABEL ===== */
.section-label {
  font-family: 'Cabin', sans-serif; font-size: 0.7rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.12em; color: #c9a84c;
  margin-bottom: 12px;
}

/* ===== ACHIEVEMENT BADGES ===== */
.badges-row {
  display: flex; gap: 10px; overflow-x: auto; padding-bottom: 8px;
  scrollbar-width: none; margin-bottom: 36px;
}
.badges-row::-webkit-scrollbar { display: none; }

.badge-card {
  flex-shrink: 0; min-width: 112px;
  background: #0a2e10; border-radius: 10px;
  padding: 16px 12px 14px; text-align: center;
  border: 1.5px solid rgba(201,168,76,0.18);
  transition: transform 0.15s;
}
.badge-card.earned { border-color: rgba(201,168,76,0.55); }
.badge-card.locked { opacity: 0.36; }
.badge-card.earned:hover { transform: translateY(-2px); }
.badge-icon { margin: 0 auto 9px; width: 28px; height: 28px; }
.badge-icon svg { width: 28px; height: 28px; display: block; }
.badge-card.earned .badge-icon svg { stroke: #c9a84c; }
.badge-card.locked .badge-icon svg { stroke: rgba(255,255,255,0.32); }
.badge-name {
  font-family: 'Cabin', sans-serif; font-size: 0.7rem; font-weight: 700;
  color: #c9a84c; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 4px;
}
.badge-card.locked .badge-name { color: rgba(255,255,255,0.42); }
.badge-desc { font-size: 0.66rem; color: rgba(255,255,255,0.42); line-height: 1.35; }

/* ===== TWO-COLUMN GRID ===== */
.profile-grid {
  display: grid; grid-template-columns: 1fr 1.1fr; gap: 20px; align-items: start;
}
.profile-col { display: flex; flex-direction: column; gap: 20px; }

/* ===== CARDS ===== */
.pcard {
  background: #0a2e10; border-radius: 10px; padding: 24px 26px;
  border-top: 3px solid #c9a84c;
  box-shadow: 0 4px 20px rgba(0,0,0,0.28);
}
.pcard-title {
  font-family: 'Cabin', sans-serif; font-size: 0.72rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.1em; color: #c9a84c;
  margin: 0 0 18px;
}

/* Account fields */
.afield { margin-bottom: 14px; }
.afield:last-child { margin-bottom: 0; }
.afield-label {
  font-size: 0.67rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.08em; color: rgba(255,255,255,0.32); margin-bottom: 4px;
}
.afield-val { font-size: 0.92rem; color: #e8f5e9; font-family: 'Lato', sans-serif; }

/* Genre pills */
.genre-wrap { display: flex; flex-wrap: wrap; gap: 7px; }
.gpill {
  padding: 6px 13px; border-radius: 20px;
  border: 1.5px solid rgba(255,255,255,0.17);
  background: transparent; color: rgba(255,255,255,0.48);
  font-family: 'Lato', sans-serif; font-size: 0.78rem;
  cursor: pointer; transition: all 0.13s; user-select: none; line-height: 1;
}
.gpill:hover { border-color: #c9a84c; color: #c9a84c; }
.gpill.on { background: #c9a84c; border-color: #c9a84c; color: #1a1a1a; font-weight: 700; }
.genre-hint { font-size: 0.68rem; color: rgba(255,255,255,0.26); margin-top: 12px; }

/* Saved books */
.sbook {
  padding: 11px 0; border-bottom: 1px solid rgba(255,255,255,0.06);
}
.sbook:last-child { border-bottom: none; padding-bottom: 0; }
.sbook-title {
  font-family: 'Cabin', sans-serif; font-size: 0.88rem; font-weight: 700;
  color: #e8f5e9; margin-bottom: 2px;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.sbook-author { font-size: 0.78rem; color: rgba(255,255,255,0.46); }
.sbook-genre {
  display: inline-block; margin-top: 4px;
  font-size: 0.66rem; font-weight: 700; text-transform: uppercase;
  padding: 2px 7px; border-radius: 3px;
  background: rgba(201,168,76,0.12); color: #c9a84c;
}
.no-items { font-size: 0.88rem; color: rgba(255,255,255,0.36); margin: 0; }
.no-items a { color: #c9a84c; font-weight: 700; text-decoration: none; }
.no-items a:hover { text-decoration: underline; }

/* ===== RESPONSIVE ===== */
@media (max-width: 820px) {
  .profile-hero { padding: 28px 24px 24px; }
  .hero-actions { position: static; margin-top: 16px; width: 100%; flex-direction: column; }
  .hero-signout, .hero-admin-link { width: 100%; text-align: center; box-sizing: border-box; }
  .profile-content { padding: 24px 20px 40px; }
  .profile-grid { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .hero-name { font-size: 1.4rem; }
  .hero-avatar-img, .hero-avatar-init { width: 76px; height: 76px; font-size: 1.6rem; }
}
</style>

<input type="file" id="avatar-input" accept="image/*">

<!-- HERO -->
<div class="profile-hero">
  <div class="hero-avatar-wrap">
    <div class="hero-avatar-init" id="avatar-init">?</div>
    <img class="hero-avatar-img" id="avatar-img" alt="Profile photo">
    <button class="avatar-edit-btn" id="avatar-edit-btn" title="Change avatar">&#9998;</button>
  </div>
  <div class="hero-info">
    <div class="hero-name" id="hero-name">Loading</div>
    <span class="hero-role-badge" id="hero-role-badge">Member</span>
    <div class="hero-meta" id="hero-email"></div>
    <div class="hero-meta" id="hero-since"></div>
    <div class="hero-stats-line" id="hero-stats"></div>
  </div>
  <div class="hero-actions" id="hero-actions">
    <button class="hero-signout" onclick="doSignOut()">Sign Out</button>
  </div>
</div>

<!-- CONTENT -->
<div class="profile-content">

  <!-- Achievement Badges -->
  <div class="section-label">Achievements</div>
  <div class="badges-row" id="badges-row"></div>

  <!-- Two-column grid -->
  <div class="profile-grid">
    <!-- Left: Account Info + Genre Prefs -->
    <div class="profile-col">
      <div class="pcard">
        <div class="pcard-title">Account Info</div>
        <div class="afield">
          <div class="afield-label">Email</div>
          <div class="afield-val" id="acct-email">-</div>
        </div>
        <div class="afield">
          <div class="afield-label">Member Since</div>
          <div class="afield-val" id="acct-since">-</div>
        </div>
        <div class="afield">
          <div class="afield-label">Role</div>
          <div class="afield-val" id="acct-role">-</div>
        </div>
      </div>
      <div class="pcard">
        <div class="pcard-title">Genre Preferences</div>
        <div class="genre-wrap" id="genre-wrap"></div>
        <div class="genre-hint">Tap genres to toggle. Saved automatically.</div>
      </div>
    </div>
    <!-- Right: Saved Books -->
    <div class="profile-col">
      <div class="pcard">
        <div class="pcard-title">My Saved Books</div>
        <div id="saved-books-list"><p class="no-items">Loading...</p></div>
      </div>
    </div>
  </div>

</div>

<script>
{
  const BACKEND = window.FOPL_BACKEND;
  var foplUser = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  if (!foplUser) { window.location.replace('/login'); }

  var SVG = {
    member:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    reader:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    trophy:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="14.5 17 14 21 12 22 10 21 9.5 17"/><path d="M5 5V3h14v2"/><path d="M5 5a7 7 0 0 0 7 7 7 7 0 0 0 7-7"/><line x1="8" y1="21" x2="16" y2="21"/><path d="M5 5H3a2 2 0 0 0 0 4h2"/><path d="M19 5h2a2 2 0 0 1 0 4h-2"/></svg>',
    bolt:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
    compass:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
    lock:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'
  };

  const ALL_GENRES = [
    'Fiction','Non-Fiction','Mystery','Science Fiction','Fantasy',
    'Biography','History','Children','Romance','Thriller',
    'Horror','Young Adult','New Adult','Graphic Novel','Poetry',
    'Cooking','Self-Help'
  ];

  function escHtml(s) {
    return String(s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // --- Avatar ---
  function applyAvatar(initials) {
    const stored = localStorage.getItem('fopl_avatar');
    const img = document.getElementById('avatar-img');
    const ini = document.getElementById('avatar-init');
    if (stored) {
      img.src = stored;
      img.style.display = 'block';
      ini.style.display = 'none';
    } else {
      ini.textContent = initials || '?';
      ini.style.display = 'flex';
      img.style.display = 'none';
    }
  }

  document.getElementById('avatar-edit-btn').addEventListener('click', function () {
    document.getElementById('avatar-input').click();
  });
  document.getElementById('avatar-input').addEventListener('change', function () {
    if (!this.files[0]) return;
    var reader = new FileReader();
    reader.onload = function (e) {
      localStorage.setItem('fopl_avatar', e.target.result);
      applyAvatar('');
    };
    reader.readAsDataURL(this.files[0]);
  });

  // --- Fill hero + account card ---
  function fillUser(user) {
    var initials = (user.name || '').split(' ').map(function(w){ return w[0]; }).join('').slice(0,2).toUpperCase();
    applyAvatar(initials);

    document.getElementById('hero-name').textContent = user.name;
    document.getElementById('hero-email').textContent = user.email;
    document.getElementById('acct-email').textContent = user.email;
    document.getElementById('acct-role').textContent = user.role || 'Member';

    var badge = document.getElementById('hero-role-badge');
    badge.textContent = user.role || 'Member';
    if ((user.role || '').toLowerCase() === 'admin') {
      badge.classList.add('admin-badge');
      if (!document.getElementById('hero-vol-link')) {
        var volLink = document.createElement('a');
        volLink.id = 'hero-vol-link';
        volLink.className = 'hero-admin-link';
        volLink.href = '/volunteer-apps';
        volLink.textContent = 'Volunteer Apps';
        document.getElementById('hero-actions').insertBefore(volLink, document.getElementById('hero-actions').firstChild);
      }
    }

    if (user.created_at) {
      var d = new Date(user.created_at);
      var full = d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      document.getElementById('hero-since').textContent = 'Member since ' + full;
      document.getElementById('acct-since').textContent = full;
    }
    refreshStatsLine();
  }

  function refreshStatsLine() {
    var saved = getSavedBooks();
    var genres; try { genres = JSON.parse(localStorage.getItem('fopl_genres') || '[]'); } catch(e) { genres = []; }
    var parts = [];
    if (saved.length) parts.push(saved.length + ' saved book' + (saved.length !== 1 ? 's' : ''));
    if (genres.length) parts.push(genres.length + ' genre' + (genres.length !== 1 ? 's' : ''));
    if (foplUser && foplUser.created_at) {
      parts.push('joined ' + new Date(foplUser.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }));
    }
    document.getElementById('hero-stats').textContent = parts.join(' · ');
  }

  // --- Daily streak ---
  function calcStreak() {
    var today = new Date().toISOString().slice(0, 10);
    var last = localStorage.getItem('fopl_last_login');
    var s = parseInt(localStorage.getItem('fopl_streak') || '0', 10) || 0;
    if (!last) {
      s = 1;
    } else if (last !== today) {
      var yest = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      s = (last === yest) ? s + 1 : 1;
    }
    localStorage.setItem('fopl_last_login', today);
    localStorage.setItem('fopl_streak', String(s));
    return s;
  }

  // --- Saved books ---
  function getSavedBooks() {
    try { return JSON.parse(localStorage.getItem('fopl_saved_books') || '[]'); } catch(e) { return []; }
  }

  function renderSavedBooks() {
    var books = getSavedBooks();
    var el = document.getElementById('saved-books-list');
    if (!books.length) {
      el.innerHTML = '<p class="no-items">No saved books yet. Browse the <a href="/catalog">catalog</a> to save some!</p>';
      return;
    }
    el.innerHTML = books.map(function (b) {
      return '<div class="sbook">'
        + '<div class="sbook-title">' + escHtml(b.title || 'Unknown Title') + '</div>'
        + (b.author ? '<div class="sbook-author">' + escHtml(b.author) + '</div>' : '')
        + (b.genre ? '<span class="sbook-genre">' + escHtml(b.genre) + '</span>' : '')
        + '</div>';
    }).join('');
  }

  // --- Achievement badges ---
  function renderBadges(user, streak) {
    var saved = getSavedBooks();
    var genres; try { genres = JSON.parse(localStorage.getItem('fopl_genres') || '[]'); } catch(e) { genres = []; }
    var days = user.created_at ? Math.floor((Date.now() - new Date(user.created_at)) / 86400000) : 0;
    var sinceStr = user.created_at
      ? new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      : '';

    var list = [
      {
        icon: SVG.member, name: 'FOPL Member',
        desc: sinceStr ? 'Since ' + sinceStr : 'Welcome!',
        earned: true
      },
      {
        icon: SVG.reader, name: 'Loyal Reader',
        desc: '30+ days with FOPL',
        earned: days >= 30
      },
      {
        icon: SVG.trophy, name: 'Century Club',
        desc: '100+ days with FOPL',
        earned: days >= 100
      },
      {
        icon: SVG.bolt, name: streak + ' Day' + (streak !== 1 ? 's' : '') + ' Streak',
        desc: streak >= 7 ? 'On fire!' : streak >= 3 ? 'Keep it up!' : 'Log in daily!',
        earned: streak >= 2
      },
      {
        icon: SVG.bookmark, name: 'Bookworm',
        desc: saved.length + ' / 5 books saved',
        earned: saved.length >= 5
      },
      {
        icon: SVG.compass, name: 'Genre Explorer',
        desc: genres.length + ' / 5 genres',
        earned: genres.length >= 5
      }
    ];

    document.getElementById('badges-row').innerHTML = list.map(function (b) {
      return '<div class="badge-card ' + (b.earned ? 'earned' : 'locked') + '">'
        + '<div class="badge-icon">' + (b.earned ? b.icon : SVG.lock) + '</div>'
        + '<div class="badge-name">' + escHtml(b.name) + '</div>'
        + '<div class="badge-desc">' + escHtml(b.desc) + '</div>'
        + '</div>';
    }).join('');
  }

  // --- Genre pills ---
  function renderGenres() {
    var saved; try { saved = JSON.parse(localStorage.getItem('fopl_genres') || '[]'); } catch(e) { saved = []; }
    var wrap = document.getElementById('genre-wrap');
    wrap.innerHTML = ALL_GENRES.map(function (g) {
      return '<button class="gpill' + (saved.indexOf(g) !== -1 ? ' on' : '') + '" data-g="' + escHtml(g) + '">' + escHtml(g) + '</button>';
    }).join('');
    wrap.querySelectorAll('.gpill').forEach(function (btn) {
      btn.addEventListener('click', function () {
        this.classList.toggle('on');
        var sel = Array.prototype.slice.call(wrap.querySelectorAll('.gpill.on')).map(function (el) { return el.dataset.g; });
        localStorage.setItem('fopl_genres', JSON.stringify(sel));
        refreshStatsLine();
        try { renderBadges(foplUser, parseInt(localStorage.getItem('fopl_streak') || '1', 10)); } catch(e) {}
      });
    });
  }

  // --- Init ---
  if (foplUser) {
    var streak = calcStreak();
    // First paint from localStorage (instant)
    fillUser(foplUser);
    try { renderBadges(foplUser, streak); } catch(e) { console.error('renderBadges:', e); }
    renderGenres();
    renderSavedBooks();

    // Fetch accurate user data from server and re-render
    fetch(BACKEND + '/api/fopl/me', { credentials: 'include' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (fresh) {
        if (!fresh) return;
        foplUser = Object.assign({}, foplUser, fresh);
        localStorage.setItem('fopl_user', JSON.stringify(foplUser));
        fillUser(foplUser);
        try { renderBadges(foplUser, parseInt(localStorage.getItem('fopl_streak') || '1', 10)); } catch(e) {}
      })
      .catch(function () { /* keep cached data on network failure */ });
  }

  // --- Sign out ---
  function doSignOut() {
    fetch(BACKEND + '/api/fopl/login', { method: 'DELETE', credentials: 'include' }).catch(function(){});
    localStorage.removeItem('fopl_user');
    window.location.href = '/home';
  }
  window.doSignOut = doSignOut;
}
</script>
