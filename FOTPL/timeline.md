---
layout: fopl
title: FOTPL Development Timeline
permalink: /fotpl/timeline
description: Friends of the Poway Library website development roadmap and timeline
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');

*, *::before, *::after { box-sizing: border-box; }

.timeline-page {
  font-family: 'Lato', sans-serif;
  background: linear-gradient(135deg, #f4f8f4 0%, #e8f0e8 100%);
  min-height: 100vh;
  padding: 0;
}

/* Hero Section */
.timeline-hero {
  background: linear-gradient(135deg, #023b0f 0%, #045218 50%, #023b0f 100%);
  color: #fff;
  text-align: center;
  padding: 60px 24px;
  position: relative;
  overflow: hidden;
}

.timeline-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
}

.timeline-hero h1 {
  font-family: 'Cabin', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin: 0 0 12px;
  color: #fff;
  border: none;
  position: relative;
  z-index: 1;
}

.timeline-hero p {
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Progress Stats */
.progress-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-family: 'Cabin', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  display: block;
}

.stat-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.8;
}

/* Container */
.timeline-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 24px 60px;
}

/* Phase Sections */
.phase-section {
  margin-bottom: 50px;
}

.phase-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.phase-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.phase-icon.completed { background: #1d9e75; }
.phase-icon.current { background: #ef9f27; }
.phase-icon.upcoming { background: #6f42c1; }
.phase-icon.future { background: #0d6efd; }

.phase-title {
  font-family: 'Cabin', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #023b0f;
  margin: 0;
  border: none;
}

.phase-dates {
  font-size: 0.85rem;
  color: #666;
  margin-top: 2px;
}

/* Timeline Items */
.timeline {
  position: relative;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #1d9e75 0%, #ef9f27 50%, #6f42c1 100%);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  padding: 0 0 24px 24px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -22px;
  top: 4px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

.timeline-marker.completed { background: #1d9e75; }
.timeline-marker.current { background: #ef9f27; animation: pulse 2s infinite; }
.timeline-marker.upcoming { background: #6f42c1; }
.timeline-marker.future { background: #0d6efd; }

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(239, 159, 39, 0.5); }
  50% { box-shadow: 0 0 0 8px rgba(239, 159, 39, 0); }
}

.timeline-card {
  background: #fff;
  border-radius: 10px;
  padding: 20px 24px;
  box-shadow: 0 3px 15px rgba(0,0,0,0.08);
  border-left: 4px solid #1d9e75;
  transition: transform 0.2s, box-shadow 0.2s;
}

.timeline-card:hover {
  transform: translateX(4px);
  box-shadow: 0 6px 25px rgba(0,0,0,0.12);
}

.timeline-card.current { border-left-color: #ef9f27; }
.timeline-card.upcoming { border-left-color: #6f42c1; }
.timeline-card.future { border-left-color: #0d6efd; }

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 10px;
}

.card-title {
  font-family: 'Cabin', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #222;
  margin: 0;
}

.card-badge {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 4px 10px;
  border-radius: 12px;
  white-space: nowrap;
}

.badge-completed { background: #d4edda; color: #155724; }
.badge-in-progress { background: #fff3cd; color: #856404; }
.badge-planned { background: #e2d9f3; color: #5a3d8a; }
.badge-future { background: #cce5ff; color: #004085; }

.card-description {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;
  margin: 0 0 12px;
}

.card-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.feature-tag {
  font-size: 0.75rem;
  background: #f4f8f4;
  color: #023b0f;
  padding: 4px 10px;
  border-radius: 15px;
  border: 1px solid #d4e8d4;
}

/* Gantt Preview */
.gantt-preview {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  margin-top: 40px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.gantt-title {
  font-family: 'Cabin', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #023b0f;
  margin: 0 0 20px;
  text-align: center;
  border: none;
}

.gantt-chart {
  overflow-x: auto;
}

.gantt-row {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.gantt-label {
  width: 140px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #444;
  flex-shrink: 0;
  padding-right: 12px;
}

.gantt-bar-container {
  flex: 1;
  height: 24px;
  background: #f0f0f0;
  border-radius: 4px;
  position: relative;
  min-width: 400px;
}

.gantt-bar {
  position: absolute;
  height: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
  padding: 0 8px;
}

.gantt-bar.completed { background: linear-gradient(90deg, #1d9e75, #27c78f); }
.gantt-bar.current { background: linear-gradient(90deg, #ef9f27, #f5b84d); }
.gantt-bar.planned { background: linear-gradient(90deg, #6f42c1, #8b5cf6); }
.gantt-bar.future { background: linear-gradient(90deg, #0d6efd, #3d8bfd); }

.gantt-months {
  display: flex;
  margin-left: 140px;
  margin-bottom: 8px;
}

.gantt-month {
  flex: 1;
  text-align: center;
  font-size: 0.7rem;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  min-width: 80px;
}

/* Links */
.cta-section {
  text-align: center;
  margin-top: 40px;
  padding: 30px;
  background: #023b0f;
  border-radius: 12px;
  color: #fff;
}

.cta-section h3 {
  font-family: 'Cabin', sans-serif;
  font-size: 1.3rem;
  margin: 0 0 10px;
  color: #fff;
  border: none;
}

.cta-section p {
  opacity: 0.9;
  margin: 0 0 20px;
}

.cta-btn {
  display: inline-block;
  background: #fff;
  color: #023b0f;
  font-family: 'Cabin', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 12px 28px;
  border-radius: 6px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  margin: 0 8px;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.cta-btn.secondary {
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
}

/* Responsive */
@media (max-width: 768px) {
  .timeline-hero h1 { font-size: 1.8rem; }
  .progress-stats { gap: 24px; }
  .stat-number { font-size: 2rem; }
  .phase-header { flex-direction: column; align-items: flex-start; gap: 10px; }
  .gantt-preview { display: none; }
  .card-header { flex-direction: column; }
}
</style>

<div class="timeline-page">

  <!-- Hero -->
  <div class="timeline-hero">
    <h1>📚 FOTPL Development Roadmap</h1>
    <p>Building a modern digital experience for the Friends of the Poway Library community</p>

    <div class="progress-stats">
      <div class="stat-item">
        <span class="stat-number">12</span>
        <span class="stat-label">Features Completed</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">4</span>
        <span class="stat-label">In Progress</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">8</span>
        <span class="stat-label">Planned</span>
      </div>
    </div>
  </div>

  <div class="timeline-container">

    <!-- Phase 1: Foundation (Completed) -->
    <div class="phase-section">
      <div class="phase-header">
        <div class="phase-icon completed">✅</div>
        <div>
          <h2 class="phase-title">Phase 1: Foundation</h2>
          <div class="phase-dates">January - February 2025 • Completed</div>
        </div>
      </div>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-marker completed"></div>
          <div class="timeline-card">
            <div class="card-header">
              <h3 class="card-title">Core Website Structure</h3>
              <span class="card-badge badge-completed">Completed</span>
            </div>
            <p class="card-description">Established the foundational layout, navigation system, and responsive design framework matching FOPL branding.</p>
            <div class="card-features">
              <span class="feature-tag">Homepage</span>
              <span class="feature-tag">Navigation</span>
              <span class="feature-tag">Footer</span>
              <span class="feature-tag">Mobile Responsive</span>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker completed"></div>
          <div class="timeline-card">
            <div class="card-header">
              <h3 class="card-title">Bookstore & Catalog System</h3>
              <span class="card-badge badge-completed">Completed</span>
            </div>
            <p class="card-description">Built the digital bookstore with search, filtering, and book request functionality connected to backend API.</p>
            <div class="card-features">
              <span class="feature-tag">Book Catalog</span>
              <span class="feature-tag">Search & Filter</span>
              <span class="feature-tag">Book Requests</span>
              <span class="feature-tag">ISBN Covers</span>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker completed"></div>
          <div class="timeline-card">
            <div class="card-header">
              <h3 class="card-title">Information Pages</h3>
              <span class="card-badge badge-completed">Completed</span>
            </div>
            <p class="card-description">Created static content pages with library history, contact information, and newsletter archives.</p>
            <div class="card-features">
              <span class="feature-tag">History</span>
              <span class="feature-tag">Contact</span>
              <span class="feature-tag">Newsletters</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Phase 2: Engagement (Completed) -->
    <div class="phase-section">
      <div class="phase-header">
        <div class="phase-icon completed">🎮</div>
        <div>
          <h2 class="phase-title">Phase 2: User Engagement</h2>
          <div class="phase-dates">February - March 2025 • Completed</div>
        </div>
      </div>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-marker completed"></div>
          <div class="timeline-card">
            <div class="card-header">
              <h3 class="card-title">Interactive Puzzles & Games</h3>
              <span class="card-badge badge-completed">Completed</span>
            </div>
            <p class="card-description">Launched a suite of book-themed games to engage visitors and promote reading.</p>
            <div class="card-features">
              <span class="feature-tag">Book Wordle</span>
              <span class="feature-tag">Word Scramble</span>
              <span class="feature-tag">Book Trivia</span>
              <span class="feature-tag">Library Shelf Run</span>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker completed"></div>
          <div class="timeline-card">
            <div class="card-header">
              <h3 class="card-title">User Authentication System</h3>
              <span class="card-badge badge-completed">Completed</span>
            </div>
            <p class="card-description">Implemented secure login/signup with user profiles and session management.</p>
            <div class="card-features">
              <span class="feature-tag">Login/Signup</span>
              <span class="feature-tag">User Profiles</span>
              <span class="feature-tag">Session Management</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Phase 3: Enhancement (Current) -->
    <div class="phase-section">
      <div class="phase-header">
        <div class="phase-icon current">🚧</div>
        <div>
          <h2 class="phase-title">Phase 3: Enhancement & Polish</h2>
          <div class="phase-dates">March - April 2025 • In Progress</div>
        </div>
      </div>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-marker current"></div>
          <div class="timeline-card current">
            <div class="card-header">
              <h3 class="card-title">ML/AI Integration - Titanic Predictor</h3>
              <span class="card-badge badge-in-progress">In Progress</span>
            </div>
            <p class="card-description">Adding interactive machine learning demonstrations with themed visualizations.</p>
            <div class="card-features">
              <span class="feature-tag">Logistic Regression</span>
              <span class="feature-tag">Newspaper Theme</span>
              <span class="feature-tag">Mission Control Theme</span>
              <span class="feature-tag">Iceberg Visualization</span>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker current"></div>
          <div class="timeline-card current">
            <div class="card-header">
              <h3 class="card-title">PPR Documentation & Portfolio</h3>
              <span class="card-badge badge-in-progress">In Progress</span>
            </div>
            <p class="card-description">Preparing AP Computer Science Principles Performance Task documentation.</p>
            <div class="card-features">
              <span class="feature-tag">Code Screenshots</span>
              <span class="feature-tag">Written Responses</span>
              <span class="feature-tag">Video Demo</span>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker current"></div>
          <div class="timeline-card current">
            <div class="card-header">
              <h3 class="card-title">UI/UX Improvements</h3>
              <span class="card-badge badge-in-progress">In Progress</span>
            </div>
            <p class="card-description">Refining visual design, accessibility, and user experience across all pages.</p>
            <div class="card-features">
              <span class="feature-tag">Accessibility</span>
              <span class="feature-tag">Animation</span>
              <span class="feature-tag">Loading States</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Phase 4: Advanced Features (Upcoming) -->
    <div class="phase-section">
      <div class="phase-header">
        <div class="phase-icon upcoming">🎯</div>
        <div>
          <h2 class="phase-title">Phase 4: Advanced Features</h2>
          <div class="phase-dates">April - May 2025 • Planned</div>
        </div>
      </div>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-marker upcoming"></div>
          <div class="timeline-card upcoming">
            <div class="card-header">
              <h3 class="card-title">AI Book Recommendations</h3>
              <span class="card-badge badge-planned">Planned</span>
            </div>
            <p class="card-description">Implement personalized book recommendations based on user preferences and browsing history.</p>
            <div class="card-features">
              <span class="feature-tag">Recommendation Engine</span>
              <span class="feature-tag">User Preferences</span>
              <span class="feature-tag">Similar Books</span>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker upcoming"></div>
          <div class="timeline-card upcoming">
            <div class="card-header">
              <h3 class="card-title">Community Events Calendar</h3>
              <span class="card-badge badge-planned">Planned</span>
            </div>
            <p class="card-description">Interactive calendar showing library events, book sales, and volunteer opportunities.</p>
            <div class="card-features">
              <span class="feature-tag">Event Display</span>
              <span class="feature-tag">RSVP System</span>
              <span class="feature-tag">Reminders</span>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker upcoming"></div>
          <div class="timeline-card upcoming">
            <div class="card-header">
              <h3 class="card-title">Volunteer Management Portal</h3>
              <span class="card-badge badge-planned">Planned</span>
            </div>
            <p class="card-description">Dashboard for volunteers to sign up for shifts, track hours, and coordinate activities.</p>
            <div class="card-features">
              <span class="feature-tag">Shift Scheduling</span>
              <span class="feature-tag">Hour Tracking</span>
              <span class="feature-tag">Notifications</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Phase 5: Future Vision -->
    <div class="phase-section">
      <div class="phase-header">
        <div class="phase-icon future">🔮</div>
        <div>
          <h2 class="phase-title">Phase 5: Future Vision</h2>
          <div class="phase-dates">Summer 2025 & Beyond</div>
        </div>
      </div>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-marker future"></div>
          <div class="timeline-card future">
            <div class="card-header">
              <h3 class="card-title">Mobile App Development</h3>
              <span class="card-badge badge-future">Future</span>
            </div>
            <p class="card-description">Native mobile app for iOS and Android with push notifications and offline features.</p>
            <div class="card-features">
              <span class="feature-tag">iOS</span>
              <span class="feature-tag">Android</span>
              <span class="feature-tag">Push Notifications</span>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker future"></div>
          <div class="timeline-card future">
            <div class="card-header">
              <h3 class="card-title">Donation & Payment System</h3>
              <span class="card-badge badge-future">Future</span>
            </div>
            <p class="card-description">Online donation portal with recurring donation options and membership management.</p>
            <div class="card-features">
              <span class="feature-tag">Online Donations</span>
              <span class="feature-tag">Memberships</span>
              <span class="feature-tag">Payment Processing</span>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker future"></div>
          <div class="timeline-card future">
            <div class="card-header">
              <h3 class="card-title">Analytics Dashboard</h3>
              <span class="card-badge badge-future">Future</span>
            </div>
            <p class="card-description">Admin dashboard with visitor analytics, inventory insights, and engagement metrics.</p>
            <div class="card-features">
              <span class="feature-tag">Traffic Analytics</span>
              <span class="feature-tag">Inventory Reports</span>
              <span class="feature-tag">User Insights</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Gantt Chart Preview -->
    <div class="gantt-preview">
      <h3 class="gantt-title">📊 Development Timeline Overview</h3>

      <div class="gantt-months">
        <div class="gantt-month">Jan</div>
        <div class="gantt-month">Feb</div>
        <div class="gantt-month">Mar</div>
        <div class="gantt-month">Apr</div>
        <div class="gantt-month">May</div>
      </div>

      <div class="gantt-chart">
        <div class="gantt-row">
          <div class="gantt-label">Foundation</div>
          <div class="gantt-bar-container">
            <div class="gantt-bar completed" style="left: 0%; width: 40%;">Complete</div>
          </div>
        </div>
        <div class="gantt-row">
          <div class="gantt-label">User Engagement</div>
          <div class="gantt-bar-container">
            <div class="gantt-bar completed" style="left: 20%; width: 30%;">Complete</div>
          </div>
        </div>
        <div class="gantt-row">
          <div class="gantt-label">Enhancement</div>
          <div class="gantt-bar-container">
            <div class="gantt-bar current" style="left: 40%; width: 25%;">In Progress</div>
          </div>
        </div>
        <div class="gantt-row">
          <div class="gantt-label">Advanced Features</div>
          <div class="gantt-bar-container">
            <div class="gantt-bar planned" style="left: 60%; width: 25%;">Planned</div>
          </div>
        </div>
        <div class="gantt-row">
          <div class="gantt-label">PPR Submission</div>
          <div class="gantt-bar-container">
            <div class="gantt-bar current" style="left: 45%; width: 15%; background: linear-gradient(90deg, #dc3545, #e35d6a);">Apr 30</div>
          </div>
        </div>
        <div class="gantt-row">
          <div class="gantt-label">N@tM Demo</div>
          <div class="gantt-bar-container">
            <div class="gantt-bar planned" style="left: 72%; width: 8%; background: linear-gradient(90deg, #e24b4a, #f06060);">Demo</div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="cta-section">
      <h3>Ready to Explore?</h3>
      <p>Check out our completed features or see the detailed project plan!</p>
      <a href="/bookstore" class="cta-btn">Visit Bookstore</a>
      <a href="/puzzles" class="cta-btn">Play Puzzles</a>
      <a href="/csp-planning" class="cta-btn secondary">View Full Plan</a>
    </div>

  </div>

</div>
