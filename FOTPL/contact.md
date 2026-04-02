---
layout: fopl
title: Contact Us — Friends of the Poway Library
permalink: /contact
description: Get in touch with the Friends of the Poway Library. Visit us, volunteer, donate, or find out more.
fopl_nav_active: contact
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

  /* ── Contact layout ── */
  .contact-content {
    max-width: 1000px; margin: 0 auto; padding: 48px 40px;
    display: grid; grid-template-columns: 1fr 1fr; gap: 32px;
  }

  .contact-card {
    background: #fff; border-radius: 8px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.08);
    border-top: 4px solid #023b0f;
    padding: 32px 28px;
  }
  .contact-card h2 {
    font-family: 'Cabin', sans-serif; font-size: 1.1rem; font-weight: 700;
    color: #023b0f; text-transform: uppercase; letter-spacing: 0.05em;
    margin: 0 0 18px; border: none;
  }

  /* ── Contact form ── */
  .contact-form { display: flex; flex-direction: column; gap: 14px; }
  .contact-form label {
    font-size: 0.78rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.06em; color: #555; margin-bottom: 2px;
  }
  .contact-form input,
  .contact-form textarea {
    width: 100%; padding: 10px 12px; border: 1px solid #c9d8cb;
    border-radius: 4px; font-family: 'Lato', sans-serif; font-size: 0.95rem;
    transition: border-color 0.2s;
  }
  .contact-form input:focus,
  .contact-form textarea:focus {
    outline: none; border-color: #023b0f;
  }
  .contact-form textarea { resize: vertical; min-height: 100px; }
  .contact-form-btn {
    display: inline-block; padding: 12px 28px; background: #023b0f; color: #fff;
    border: none; border-radius: 4px; cursor: pointer;
    font-family: 'Cabin', sans-serif; font-weight: 700; font-size: 0.9rem;
    text-transform: uppercase; letter-spacing: 0.05em; transition: background 0.2s;
    align-self: flex-start;
  }
  .contact-form-btn:hover { background: #045218; }
  .contact-form-msg {
    font-size: 0.9rem; padding: 8px 12px; border-radius: 4px; display: none;
  }
  .contact-form-msg.show { display: block; }
  .contact-form-msg.ok { background: #d7f1db; border: 1px solid #2e7d32; color: #1f4a20; }
  .contact-form-msg.err { background: #fae1e1; border: 1px solid #a52c2c; color: #6c1e1e; }

  /* ── Info blocks ── */
  .contact-info-block { margin-bottom: 24px; }
  .contact-info-block:last-child { margin-bottom: 0; }
  .contact-info-block h3 {
    font-family: 'Cabin', sans-serif; font-size: 0.85rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em; color: #023b0f;
    margin: 0 0 8px; border: none;
  }
  .contact-info-block p {
    font-size: 0.95rem; color: #444; line-height: 1.7; margin: 0;
  }
  .contact-info-block a {
    color: #023b0f; text-decoration: none; font-weight: 600;
  }
  .contact-info-block a:hover { text-decoration: underline; }

  /* ── Hours table ── */
  .hours-table { width: 100%; border-collapse: collapse; margin-top: 4px; }
  .hours-table td {
    padding: 6px 0; font-size: 0.92rem; color: #444;
    border-bottom: 1px solid #eef2ee;
  }
  .hours-table td:first-child { font-weight: 600; color: #333; padding-right: 16px; }
  .hours-table tr:last-child td { border-bottom: none; }
  .hours-section-label {
    font-family: 'Cabin', sans-serif; font-size: 0.78rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em; color: #6b756b;
    margin: 14px 0 4px; display: block;
  }
  .hours-section-label:first-of-type { margin-top: 0; }

  /* ── Social links ── */
  .social-links { display: flex; gap: 12px; margin-top: 8px; flex-wrap: wrap; }
  .social-link {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 6px 14px; background: #e8f5e9; border-radius: 20px;
    font-family: 'Cabin', sans-serif; font-size: 0.8rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.04em;
    color: #023b0f; text-decoration: none; transition: background 0.2s;
  }
  .social-link:hover { background: #c8e6c9; }

  /* ── Map ── */
  .contact-map {
    grid-column: 1 / -1;
    background: #fff; border-radius: 8px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.08);
    overflow: hidden;
  }
  .contact-map iframe {
    width: 100%; height: 300px; border: none;
  }

  @media (max-width: 640px) {
    .contact-content { grid-template-columns: 1fr; padding: 32px 18px; }
  }
</style>

<div class="fopl-hero">
  <h1>Contact Us</h1>
  <p>We'd love to hear from you. Reach out to volunteer, donate, ask a question, or learn more about the Friends.</p>
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

<div class="contact-content">

  <!-- Left column: Get Involved -->
  <div class="contact-card">
    <h2>Get Involved!</h2>
    <p style="font-size: 0.97rem; color: #444; line-height: 1.7; margin: 0 0 18px;">
      There are so many ways to support The Friends. Contact us to find out more about volunteer opportunities, fundraising events, and ways to get our message to your friends and family.
    </p>
    <p style="font-size: 0.97rem; color: #444; line-height: 1.7; margin: 0 0 18px;">
      Interested in donating or volunteering? Reach out — we'd love to hear from you!
    </p>
    <a class="contact-form-btn" href="mailto:info@powayfriends.org" style="text-decoration:none; display:inline-block;">Email Us</a>
  </div>

  <!-- Right column: Info -->
  <div class="contact-card">
    <h2>Find Us</h2>

    <div class="contact-info-block">
      <h3>Address</h3>
      <p>
        13137 Poway Rd<br>
        Poway, California 92064
      </p>
    </div>

    <div class="contact-info-block">
      <h3>Phone &amp; Email</h3>
      <p>
        <a href="tel:8585132862">858-513-2862</a><br>
        <a href="mailto:info@powayfriends.org">info@powayfriends.org</a>
      </p>
    </div>

    <div class="contact-info-block">
      <h3>Hours</h3>
      <span class="hours-section-label">The Friends Bookstore</span>
      <table class="hours-table">
        <tr><td>Monday</td><td>Closed</td></tr>
        <tr><td>Tue &amp; Wed</td><td>Noon – 6:30 PM</td></tr>
        <tr><td>Thursday</td><td>10 AM – 5:30 PM</td></tr>
        <tr><td>Fri, Sat &amp; Sun</td><td>10 AM – 4:30 PM</td></tr>
      </table>
      <span class="hours-section-label">The Poway Library</span>
      <table class="hours-table">
        <tr><td>Mon &amp; Thu</td><td>10 AM – 6 PM</td></tr>
        <tr><td>Tue &amp; Wed</td><td>Noon – 7 PM</td></tr>
        <tr><td>Fri, Sat &amp; Sun</td><td>10 AM – 5 PM</td></tr>
      </table>
    </div>

    <div class="contact-info-block">
      <h3>Connect With Us</h3>
      <div class="social-links">
        <a class="social-link" href="https://www.facebook.com/Poway-Community-Library-252075348169091" target="_blank" rel="noopener">Facebook</a>
        <a class="social-link" href="https://www.instagram.com/poway_community_library" target="_blank" rel="noopener">Instagram</a>
        <a class="social-link" href="https://www.x.com/PowayLibSDCL" target="_blank" rel="noopener">X</a>
        <a class="social-link" href="https://www.yelp.com/biz/friends-of-the-poway-library-bookstore-poway" target="_blank" rel="noopener">Yelp</a>
      </div>
    </div>
  </div>

  <!-- Map -->
  <div class="contact-map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.8!2d-117.0363!3d32.9628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf8e5f1b4b3a1%3A0x4b0e5e7c8e8d3a0!2s13137%20Poway%20Rd%2C%20Poway%2C%20CA%2092064!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
      allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="Friends of the Poway Library - Map"></iframe>
  </div>

</div>

<div class="fopl-footer">
  &copy; 2025 Friends of the Poway Library &mdash;
  <a href="https://powayfriends.org">powayfriends.org</a>
</div>

<script>
{
  // Auth nav dropdown
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
      await fetch(window.FOPL_BACKEND + '/api/fopl/login', { method: 'DELETE', credentials: 'include' }).catch(() => {});
      localStorage.removeItem('fopl_user');
      window.location.href = '/home';
    };
  }
}
</script>


