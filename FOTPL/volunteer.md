---
layout: fopl
title: Volunteer — Friends of the Poway Library
permalink: /volunteer
description: Join the Friends of the Poway Library as a volunteer. Help run the bookstore, support events, and strengthen our community.
fopl_nav_active: volunteer
---

<style>
  body { background: #f4f8f4; }

  /* ── Hero ── */
  .fopl-hero {
    background: #023b0f; color: #fff; text-align: center; padding: 56px 24px 48px;
  }
  .fopl-hero h1 {
    font-family: 'Cabin', sans-serif; font-size: 2.2rem; font-weight: 700;
    margin: 0 0 10px; color: #fff; border: none; text-transform: uppercase; letter-spacing: 0.04em;
  }
  .fopl-hero p { font-size: 1.05rem; opacity: 0.85; margin: 0 auto; max-width: 600px; line-height: 1.7; }

  /* ── Page wrapper ── */
  .vol-content {
    max-width: 1000px; margin: 0 auto; padding: 48px 40px;
  }

  /* ── Section label ── */
  .vol-section-label {
    font-family: 'Cabin', sans-serif; font-size: 0.75rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.12em; color: #023b0f;
    border-bottom: 2px solid #023b0f; padding-bottom: 6px; margin: 0 0 24px;
    display: block;
  }

  /* ── Why volunteer cards ── */
  .vol-why-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 48px;
  }
  .vol-why-card {
    background: #fff; border-radius: 8px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.08);
    border-top: 4px solid #023b0f;
    padding: 24px 20px;
  }
  .vol-why-card h3 {
    font-family: 'Cabin', sans-serif; font-size: 0.95rem; font-weight: 700;
    color: #023b0f; text-transform: uppercase; letter-spacing: 0.05em;
    margin: 0 0 10px; border: none;
  }
  .vol-why-card p {
    font-size: 0.92rem; color: #444; line-height: 1.65; margin: 0;
  }

  /* ── Roles section ── */
  .vol-roles-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 48px;
  }
  .vol-role-card {
    background: #fff; border-radius: 8px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.08);
    border-left: 4px solid #023b0f;
    padding: 22px 20px;
  }
  .vol-role-card h3 {
    font-family: 'Cabin', sans-serif; font-size: 0.95rem; font-weight: 700;
    color: #023b0f; text-transform: uppercase; letter-spacing: 0.05em;
    margin: 0 0 8px; border: none;
  }
  .vol-role-card p {
    font-size: 0.9rem; color: #444; line-height: 1.65; margin: 0;
  }
  .vol-role-tag {
    display: inline-block; font-size: 0.7rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em;
    padding: 2px 8px; background: #e8f5e9; border: 1px solid #a5d6a7;
    border-radius: 3px; color: #1b5e20; margin-top: 10px;
  }

  /* ── Steps ── */
  .vol-steps {
    display: flex; flex-direction: column; gap: 0; margin-bottom: 48px;
    background: #fff; border-radius: 8px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.08);
    overflow: hidden;
  }
  .vol-step {
    display: flex; align-items: flex-start; gap: 20px;
    padding: 22px 24px; border-bottom: 1px solid #eef2ee;
  }
  .vol-step:last-child { border-bottom: none; }
  .vol-step-num {
    flex-shrink: 0; width: 36px; height: 36px; border-radius: 50%;
    background: #023b0f; color: #fff;
    font-family: 'Cabin', sans-serif; font-size: 1rem; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
  }
  .vol-step-body h4 {
    font-family: 'Cabin', sans-serif; font-size: 0.95rem; font-weight: 700;
    color: #023b0f; text-transform: uppercase; letter-spacing: 0.05em;
    margin: 0 0 4px; border: none;
  }
  .vol-step-body p {
    font-size: 0.9rem; color: #444; line-height: 1.6; margin: 0;
  }

  /* ── Application section ── */
  .vol-apply-wrap {
    background: #fff; border-radius: 8px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.08);
    border-top: 4px solid #023b0f;
    padding: 32px 28px; margin-bottom: 48px;
  }
  .vol-apply-intro {
    font-size: 0.97rem; color: #444; line-height: 1.7; margin: 0 0 28px;
  }

  /* ── Form layout ── */
  .vol-form { display: flex; flex-direction: column; gap: 0; }
  .vol-form-section-title {
    font-family: 'Cabin', sans-serif; font-size: 0.72rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.12em; color: #023b0f;
    border-bottom: 1px solid #d0e8d0; padding-bottom: 6px;
    margin: 28px 0 18px;
  }
  .vol-form-section-title:first-child { margin-top: 0; }
  .vol-form-row {
    display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;
  }
  .vol-form-row.full { grid-template-columns: 1fr; }
  .vol-form-field { display: flex; flex-direction: column; gap: 5px; }
  .vol-form-field label {
    font-size: 0.8rem; font-weight: 700; color: #1b3d1e;
    font-family: 'Cabin', sans-serif; text-transform: uppercase; letter-spacing: 0.05em;
  }
  .vol-form-field label .opt {
    font-weight: 400; color: #999; text-transform: none; letter-spacing: 0; font-size: 0.78rem;
  }
  .vol-form-field input,
  .vol-form-field select,
  .vol-form-field textarea {
    border: 1.5px solid #c8dcc8; border-radius: 4px;
    padding: 10px 12px; font-size: 0.9rem; color: #222;
    font-family: 'Lato', sans-serif;
    background: #f9fdf9; transition: border-color 0.15s, box-shadow 0.15s;
    outline: none;
  }
  .vol-form-field input:focus,
  .vol-form-field select:focus,
  .vol-form-field textarea:focus {
    border-color: #023b0f; box-shadow: 0 0 0 3px rgba(2,59,15,0.08);
  }
  .vol-form-field textarea { resize: vertical; min-height: 90px; }

  /* ── Checkbox group ── */
  .vol-check-group { display: flex; flex-direction: column; gap: 8px; }
  .vol-check-item {
    display: flex; align-items: center; gap: 10px;
    font-size: 0.9rem; color: #333; cursor: pointer;
  }
  .vol-check-item input[type="checkbox"] {
    width: 16px; height: 16px; accent-color: #023b0f;
    flex-shrink: 0; cursor: pointer;
    padding: 0; border: none; background: none;
  }

  /* ── Submit ── */
  .vol-form-submit {
    margin-top: 28px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
  }
  .vol-apply-btn {
    display: inline-block; padding: 13px 36px; background: #023b0f; color: #fff;
    border-radius: 4px; font-family: 'Cabin', sans-serif; font-weight: 700;
    font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.06em;
    border: none; cursor: pointer; transition: background 0.2s;
  }
  .vol-apply-btn:hover { background: #045218; }
  .vol-form-status {
    font-size: 0.88rem; color: #2e7d32; font-weight: 600; display: none;
  }
  .vol-form-status.error { color: #b71c1c; }

  @media (max-width: 580px) {
    .vol-form-row { grid-template-columns: 1fr; }
  }

  /* ── Testimonial ── */
  .vol-quote {
    background: #e8f5e9; border-left: 4px solid #023b0f;
    border-radius: 0 8px 8px 0; padding: 20px 24px; margin-bottom: 48px;
  }
  .vol-quote p {
    font-size: 1rem; color: #1b3d1e; line-height: 1.75; font-style: italic; margin: 0 0 8px;
  }
  .vol-quote cite {
    font-size: 0.82rem; color: #2e7d32; font-style: normal; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em;
  }

  @media (max-width: 700px) {
    .vol-content { padding: 32px 18px; }
    .vol-why-grid { grid-template-columns: 1fr; }
    .vol-roles-grid { grid-template-columns: 1fr; }
  }
</style>

<div class="fopl-hero">
  <h1>Volunteer With Us</h1>
  <p>The Friends of the Poway Library runs entirely on the energy of people who love this community. If you love books, people, or just want to give back — there's a place for you here.</p>
  <div aria-hidden="true" style="display:flex;justify-content:center;align-items:center;gap:6px;margin-top:18px;opacity:0.75;">
    <div style="width:14px;height:26px;background:linear-gradient(135deg,#66bb6a,#1b5e20);border-radius:60% 40% 40% 60%/50% 50% 50% 50%;transform:rotate(-40deg);"></div>
    <div style="width:10px;height:20px;background:linear-gradient(135deg,#81c784,#2e7d32);border-radius:60% 40% 40% 60%/50% 50% 50% 50%;transform:rotate(-65deg);"></div>
    <div style="width:7px;height:14px;background:linear-gradient(135deg,#a5d6a7,#388e3c);border-radius:60% 40% 40% 60%/50% 50% 50% 50%;transform:rotate(-80deg);"></div>
    <div style="width:50px;height:1.5px;background:rgba(255,255,255,0.35);"></div>
    <div style="width:20px;height:20px;background:#2e7d32;border-radius:50%;"></div>
    <div style="width:50px;height:1.5px;background:rgba(255,255,255,0.35);"></div>
    <div style="width:7px;height:14px;background:linear-gradient(135deg,#a5d6a7,#388e3c);border-radius:60% 40% 40% 60%/50% 50% 50% 50%;transform:rotate(80deg);"></div>
    <div style="width:10px;height:20px;background:linear-gradient(135deg,#81c784,#2e7d32);border-radius:60% 40% 40% 60%/50% 50% 50% 50%;transform:rotate(65deg);"></div>
    <div style="width:14px;height:26px;background:linear-gradient(135deg,#66bb6a,#1b5e20);border-radius:60% 40% 40% 60%/50% 50% 50% 50%;transform:rotate(40deg);"></div>
  </div>
</div>

<div class="vol-content">

  <!-- How It Works -->
  <span class="vol-section-label">How It Works</span>
  <div class="vol-steps">
    <div class="vol-step">
      <div class="vol-step-num">1</div>
      <div class="vol-step-body">
        <h4>Submit Your Application</h4>
        <p>Fill out the short form below. It takes about 3 minutes and helps us match you to the right role.</p>
      </div>
    </div>
    <div class="vol-step">
      <div class="vol-step-num">2</div>
      <div class="vol-step-body">
        <h4>We Reach Out</h4>
        <p>A member of our volunteer coordinator team will contact you within a few days to introduce themselves and answer any questions.</p>
      </div>
    </div>
    <div class="vol-step">
      <div class="vol-step-num">3</div>
      <div class="vol-step-body">
        <h4>Get Oriented</h4>
        <p>We will walk you through the role, introduce you to the team, and get you set up so your first shift is comfortable and easy.</p>
      </div>
    </div>
    <div class="vol-step">
      <div class="vol-step-num">4</div>
      <div class="vol-step-body">
        <h4>Start Volunteering</h4>
        <p>Pick your shifts and jump in. You will be part of a group that has been supporting the Poway Library since 1971.</p>
      </div>
    </div>
  </div>

  <!-- Application -->
  <span class="vol-section-label">Apply to Volunteer</span>
  <div class="vol-apply-wrap">
    <p class="vol-apply-intro">
      Ready to get involved? Fill out the form below and we will follow up within 3 to 5 business days.
    </p>

    <form class="vol-form" id="vol-application-form" novalidate>

      <!-- Section 1: About You -->
      <div class="vol-form-section-title">About You</div>

      <div class="vol-form-row">
        <div class="vol-form-field">
          <label for="vol-fname">First Name</label>
          <input type="text" id="vol-fname" name="firstName" placeholder="Jane" required>
        </div>
        <div class="vol-form-field">
          <label for="vol-lname">Last Name</label>
          <input type="text" id="vol-lname" name="lastName" placeholder="Smith" required>
        </div>
      </div>

      <div class="vol-form-row">
        <div class="vol-form-field">
          <label for="vol-email">Email Address</label>
          <input type="email" id="vol-email" name="email" placeholder="jane@example.com" required>
        </div>
        <div class="vol-form-field">
          <label for="vol-phone">Phone Number</label>
          <input type="tel" id="vol-phone" name="phone" placeholder="(619) 555-0100">
        </div>
      </div>

      <div class="vol-form-row">
        <div class="vol-form-field">
          <label for="vol-city">City</label>
          <input type="text" id="vol-city" name="city" placeholder="Poway">
        </div>
        <div class="vol-form-field">
          <label for="vol-zip">Zip Code</label>
          <input type="text" id="vol-zip" name="zip" placeholder="92064">
        </div>
      </div>

      <!-- Section 2: Availability -->
      <div class="vol-form-section-title">Availability</div>

      <div class="vol-form-row">
        <div class="vol-form-field">
          <label for="vol-hours">Hours available per week / month</label>
          <select id="vol-hours" name="hours" required>
            <option value="" disabled selected>Select an option</option>
            <option value="2-4/week">2–4 hours per week</option>
            <option value="5-8/week">5–8 hours per week</option>
            <option value="fewdays/month">A few days a month</option>
            <option value="flexible">Flexible / varies</option>
          </select>
        </div>
        <div class="vol-form-field">
          <label>Days generally available</label>
          <div class="vol-check-group" style="margin-top:4px;">
            <label class="vol-check-item">
              <input type="checkbox" name="days" value="weekdays"> Weekdays
            </label>
            <label class="vol-check-item">
              <input type="checkbox" name="days" value="weekends"> Weekends
            </label>
            <label class="vol-check-item">
              <input type="checkbox" name="days" value="either"> Either / flexible
            </label>
          </div>
        </div>
      </div>

      <!-- Section 3: Role Interest -->
      <div class="vol-form-section-title">Role Interest</div>

      <div class="vol-form-row full">
        <div class="vol-form-field">
          <label>Which volunteer role interests you most? <span class="opt">(select all that apply)</span></label>
          <div class="vol-check-group" style="margin-top:6px; display:grid; grid-template-columns:1fr 1fr; gap:8px 24px;">
            <label class="vol-check-item">
              <input type="checkbox" name="roles" value="bookstore"> Bookstore
            </label>
            <label class="vol-check-item">
              <input type="checkbox" name="roles" value="events"> Events
            </label>
            <label class="vol-check-item">
              <input type="checkbox" name="roles" value="outreach"> Community Outreach
            </label>
            <label class="vol-check-item">
              <input type="checkbox" name="roles" value="admin"> Administrative Support
            </label>
            <label class="vol-check-item">
              <input type="checkbox" name="roles" value="notsure"> Not sure yet
            </label>
          </div>
        </div>
      </div>

      <div class="vol-form-row full">
        <div class="vol-form-field">
          <label for="vol-experience">Relevant experience <span class="opt">(optional)</span></label>
          <textarea id="vol-experience" name="experience" placeholder="Any past volunteering, library work, retail, event planning, etc."></textarea>
        </div>
      </div>

      <!-- Section 4: Anything Else -->
      <div class="vol-form-section-title">Anything Else</div>

      <div class="vol-form-row full">
        <div class="vol-form-field">
          <label for="vol-why">Why do you want to volunteer with the Friends of the Poway Library?</label>
          <textarea id="vol-why" name="why" placeholder="Tell us a little about yourself and what draws you to FOPL." required></textarea>
        </div>
      </div>

      <div class="vol-form-row full">
        <div class="vol-form-field">
          <label for="vol-other">Anything else you'd like us to know? <span class="opt">(optional)</span></label>
          <textarea id="vol-other" name="other" placeholder="Questions, scheduling notes, special skills, etc."></textarea>
        </div>
      </div>

      <div class="vol-form-submit">
        <button type="submit" class="vol-apply-btn">Submit Application</button>
        <span class="vol-form-status" id="vol-form-status"></span>
      </div>

    </form>

    <p style="font-size:0.82rem; color:#888; margin: 20px 0 0;">
      Prefer email? Reach us at <a href="mailto:info@powayfriends.org" style="color:#023b0f; font-weight:600;">info@powayfriends.org</a>
    </p>
  </div>

  <!-- Why volunteer -->
  <span class="vol-section-label">Why Volunteer</span>
  <div class="vol-why-grid">
    <div class="vol-why-card">
      <h3>Make a Real Impact</h3>
      <p>Every hour you give goes directly toward keeping the library's programs, events, and bookstore running for the Poway community.</p>
    </div>
    <div class="vol-why-card">
      <h3>Meet Your Neighbors</h3>
      <p>The Friends group is full of people who care about this community. Volunteering is one of the best ways to build lasting connections in Poway.</p>
    </div>
    <div class="vol-why-card">
      <h3>Flexible Commitment</h3>
      <p>Whether you can give two hours a week or two days a month, we have a role that works with your schedule. No experience required.</p>
    </div>
  </div>

  <!-- Volunteer roles -->
  <span class="vol-section-label">Ways to Help</span>
  <div class="vol-roles-grid">
    <div class="vol-role-card">
      <h3>Bookstore</h3>
      <p>Sort and shelve donated books, assist customers, manage inventory, and help keep the used bookstore organized and welcoming.</p>
      <span class="vol-role-tag">Ongoing</span>
    </div>
    <div class="vol-role-card">
      <h3>Events</h3>
      <p>Help set up, run, and break down the 400+ events the Friends host each year — from author talks to community fundraisers.</p>
      <span class="vol-role-tag">Seasonal</span>
    </div>
    <div class="vol-role-card">
      <h3>Community Outreach</h3>
      <p>Spread the word about the Friends through social media, flyers, tabling at local events, and connecting with community groups.</p>
      <span class="vol-role-tag">Flexible</span>
    </div>
    <div class="vol-role-card">
      <h3>Administrative Support</h3>
      <p>Help with membership records, communications, newsletter preparation, and other behind-the-scenes tasks that keep the organization running.</p>
      <span class="vol-role-tag">Flexible</span>
    </div>
  </div>

  <!-- Quote -->
  <div class="vol-quote">
    <p>"Volunteering at the Friends bookstore is one of my favorite parts of the week. The people are wonderful, and it is genuinely satisfying to know the money goes right back into the library."</p>
    <cite>FOPL Volunteer, Poway CA</cite>
  </div>

<script>
(function () {
  const SUPABASE_URL      = 'https://homnbekbwqfzmutyhkpq.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbW5iZWtid3Fmem11dHloa3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyNzg2NDQsImV4cCI6MjA5MTg1NDY0NH0.A8pXHtUY_Njwk_AHvns7d9ZBnmqq7KKKzn9MWXIgJYs';

  const form   = document.getElementById('vol-application-form');
  const status = document.getElementById('vol-form-status');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const firstName = form.querySelector('#vol-fname').value.trim();
    const lastName  = form.querySelector('#vol-lname').value.trim();
    const email     = form.querySelector('#vol-email').value.trim();
    const hours     = form.querySelector('#vol-hours').value;
    const why       = form.querySelector('#vol-why').value.trim();

    if (!firstName || !lastName || !email || !hours || !why) {
      status.textContent = 'Please fill in all required fields.';
      status.className = 'vol-form-status error';
      status.style.display = 'inline';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      status.textContent = 'Please enter a valid email address.';
      status.className = 'vol-form-status error';
      status.style.display = 'inline';
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting…';

    const payload = {
      first_name:  firstName,
      last_name:   lastName,
      email,
      phone:       form.querySelector('#vol-phone').value.trim(),
      city:        form.querySelector('#vol-city').value.trim(),
      zip:         form.querySelector('#vol-zip').value.trim(),
      hours,
      days:        [...form.querySelectorAll('input[name="days"]:checked')].map(cb => cb.value),
      roles:       [...form.querySelectorAll('input[name="roles"]:checked')].map(cb => cb.value),
      experience:  form.querySelector('#vol-experience').value.trim(),
      why,
      other:       form.querySelector('#vol-other').value.trim(),
      status:      'new',
    };

    try {
      const res = await fetch(SUPABASE_URL + '/rest/v1/volunteer_applications', {
        method: 'POST',
        headers: {
          'apikey':        SUPABASE_ANON_KEY,
          'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
          'Content-Type':  'application/json',
          'Prefer':        'return=minimal',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Server error ' + res.status);

      form.querySelectorAll('input, select, textarea, button').forEach(el => el.disabled = true);
      status.textContent = 'Application submitted! We will be in touch within 3–5 business days.';
      status.className = 'vol-form-status';
      status.style.display = 'inline';

    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Application';
      status.textContent = 'Something went wrong. Please try again or email us directly.';
      status.className = 'vol-form-status error';
      status.style.display = 'inline';
    }
  });
})();
</script>

</div>

<div class="fopl-footer">
  &copy; 2025 Friends of the Poway Library &mdash;
  <a href="https://powayfriends.org">powayfriends.org</a>
</div>
