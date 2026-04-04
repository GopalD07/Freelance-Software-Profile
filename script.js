const data = window.freelanceData;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function profileCards() {
  return data.profiles
    .map(
      (profile) => `
        <div class="card">
          <div class="avatar">${escapeHtml(profile.avatar)}</div>
          <div class="founder-name">${escapeHtml(profile.name)}</div>
          <div class="founder-role">${escapeHtml(profile.role)}</div>
          <div class="tags">
            ${profile.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
          </div>
          <p class="founder-desc">${escapeHtml(profile.summary)}</p>
          <ul class="mini-list">
            ${profile.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
          <div class="links">
            <a class="lbtn" href="${profile.portfolio}" target="_blank" rel="noreferrer">Portfolio</a>
            <a class="lbtn" href="mailto:${profile.email}">Email</a>
          </div>
        </div>
      `
    )
    .join("");
}

function serviceCards() {
  return data.services
    .map(
      (service) => `
        <div class="svc">
          <div class="svc-icon">${escapeHtml(service.icon)}</div>
          <div class="svc-title">${escapeHtml(service.title)}</div>
          <p class="svc-desc">${escapeHtml(service.text)}</p>
        </div>
      `
    )
    .join("");
}

function buildColumns() {
  return data.buildSections
    .map(
      (section) => `
        <div class="build-col">
          <div class="build-col-title">${escapeHtml(section.title)}</div>
          ${section.items
            .map(
              (item) => `
                <div class="build-item">
                  <div class="dot"></div>
                  <div>${escapeHtml(item)}</div>
                </div>
              `
            )
            .join("")}
        </div>
      `
    )
    .join("");
}

function stackChips() {
  return data.stack
    .map(
      (item) => `
        <span class="chip ${item.hi ? "hi" : ""}">${escapeHtml(item.label)}</span>
      `
    )
    .join("");
}

function statCards() {
  return data.stats
    .map(
      (item) => `
        <div class="stat-card">
          <div class="stat-num">${escapeHtml(item.value)}</div>
          <div class="stat-label">${escapeHtml(item.label)}</div>
        </div>
      `
    )
    .join("");
}

function processCards() {
  return data.process
    .map(
      (item) => `
        <div class="process-step">
          <div class="step-num">${escapeHtml(item.step)}</div>
          <div class="step-title">${escapeHtml(item.title)}</div>
          <p class="step-desc">${escapeHtml(item.text)}</p>
        </div>
      `
    )
    .join("");
}

function contactCards() {
  return data.profiles
    .map(
      (profile) => `
        <div class="contact-card">
          <div class="c-name">${escapeHtml(profile.name)}</div>
          <div class="c-info">
            <a href="mailto:${profile.email}">${escapeHtml(profile.email)}</a>
            <a href="${profile.portfolio}" target="_blank" rel="noreferrer">${escapeHtml(profile.portfolio.replace(/^https?:\/\//, ""))}</a>
            <a href="tel:${profile.phone.replaceAll(" ", "")}">${escapeHtml(profile.phone)}</a>
          </div>
        </div>
      `
    )
    .join("");
}

document.querySelector("#app").innerHTML = `
  <div class="page">
    <header>
      <div class="header-card">
        <div>
          <div class="badge">${escapeHtml(data.badge)}</div>
          <h1>${escapeHtml(data.heroTitle).replace(escapeHtml(data.heroHighlight), `<em>${escapeHtml(data.heroHighlight)}</em>`)}</h1>
          <p class="header-sub">${escapeHtml(data.heroSubtitle)}</p>
        </div>
        <div class="header-pills">
          ${data.headerPills.map((item) => `<div class="pill">${escapeHtml(item)}</div>`).join("")}
        </div>
      </div>
    </header>

    <section class="section">
      <div class="section-label">Who We Are</div>
      <div class="two-col">
        ${profileCards()}
      </div>
    </section>

    <section class="section">
      <div class="section-label">Services We Offer</div>
      <div class="three-col">
        ${serviceCards()}
      </div>
    </section>

    <section class="section">
      <div class="section-label">What We&apos;ve Built</div>
      <div class="two-col">
        ${buildColumns()}
      </div>
    </section>

    <section class="section">
      <div class="section-label">Technology Stack</div>
      <div class="stack-wrap">
        ${stackChips()}
      </div>
    </section>

    <section class="section">
      <div class="section-label">By the Numbers</div>
      <div class="four-col">
        ${statCards()}
      </div>
    </section>

    <section class="section">
      <div class="section-label">How We Work</div>
      <div class="four-col">
        ${processCards()}
      </div>
    </section>

    <section class="section">
      <div class="section-label">Get In Touch</div>
      <div class="cta-card">
        <div>
          <div class="cta-title">Let&apos;s build something <br /><em>great</em> together.</div>
          <p class="cta-sub">${escapeHtml(data.ctaText)}</p>
        </div>
        <div class="contacts">
          ${contactCards()}
        </div>
      </div>
      <div class="pay-note">
        <span style="font-size:19px;line-height:1">💳</span>
        <span><strong>Pricing:</strong> ${escapeHtml(data.payment)}</span>
      </div>
    </section>

    <footer>
      <span>${escapeHtml(data.footerLeft)}</span>
      <span>${escapeHtml(data.footerRight)}</span>
    </footer>
  </div>
`;
