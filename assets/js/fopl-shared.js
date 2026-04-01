/* ═══════════════════════════════════════════
   FOPL shared JavaScript
   Auth nav dropdown, backend URL, game helpers
   ═══════════════════════════════════════════ */

// Shared backend URL — single source of truth
window.FOPL_BACKEND = 'https://fopl-flask.opencodingsociety.com';

// ── Auth nav dropdown (runs on every page) ──
(function initAuthNav() {
  var foplUser = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  var authItem = document.getElementById('nav-auth-item');
  var authLink = document.getElementById('nav-auth-link');
  var dropdown = document.getElementById('nav-auth-dropdown');
  var signoutBtn = document.getElementById('nav-signout-btn');

  if (foplUser && authLink) {
    authItem.classList.add('fopl-nav-has-dropdown');
    authLink.textContent = foplUser.name.split(' ')[0];
    authLink.href = '#';
    authLink.onclick = function(e) {
      e.preventDefault();
      dropdown.classList.toggle('open');
    };
    document.addEventListener('click', function(e) {
      if (!authItem.contains(e.target)) dropdown.classList.remove('open');
    });
    signoutBtn.onclick = async function(e) {
      e.preventDefault();
      await fetch(window.FOPL_BACKEND + '/api/fopl/login', {
        method: 'DELETE', credentials: 'include'
      }).catch(function() {});
      localStorage.removeItem('fopl_user');
      window.location.href = '/home';
    };
  }
})();

// ── Day-ID helper (shared across all daily games) ──
window.foplGetDayId = function() {
  var epoch = new Date('2024-01-01T00:00:00');
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  return String(Math.floor((today - epoch) / 86400000));
};

// ── Overall game-progress tracker (shared across all games) ──
window.foplAddOverallProgress = function(game, points, won) {
  var overall = JSON.parse(
    localStorage.getItem('fopl_games_overall_v1') ||
    '{"xp":0,"sessions":0,"wins":0,"byGame":{}}'
  );
  overall.xp       = Number(overall.xp || 0) + Math.max(0, Number(points || 0));
  overall.sessions  = Number(overall.sessions || 0) + 1;
  if (won) overall.wins = Number(overall.wins || 0) + 1;
  overall.byGame    = overall.byGame || {};
  var current       = Number(overall.byGame[game] || 0);
  overall.byGame[game] = current + Math.max(0, Number(points || 0));
  overall.updatedAt = Date.now();
  localStorage.setItem('fopl_games_overall_v1', JSON.stringify(overall));
};

// ── Post puzzle result to backend (shared across all games) ──
window.foplPostResult = async function(game, won, guesses) {
  var user = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  if (!user) return;
  try {
    await fetch(window.FOPL_BACKEND + '/api/fopl/puzzle/stats', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        game: game,
        won: !!won,
        guesses: guesses != null ? guesses : null
      })
    });
  } catch(e) { /* silent */ }
};
