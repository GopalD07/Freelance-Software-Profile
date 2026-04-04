const data = window.freelanceData;

function list(items, className = "bullet-list") {
  return `
    <ul class="${className}">
      ${items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function serviceCards() {
  return data.services
    .map(
      (service) => `
        <article class="card">
          <h3>${service.title}</h3>
          <p>${service.text}</p>
        </article>
      `
    )
    .join("");
}

function profileCards() {
  return data.profiles
    .map(
      (profile) => `
        <article class="profile-card">
          <div class="profile-role">${profile.role}</div>
          <h3>${profile.name}</h3>
          <p class="profile-summary">${profile.summary}</p>
          ${list(profile.highlights, "profile-highlights")}
          <p style="margin-top: 16px;">
            <a class="portfolio-link" href="${profile.portfolio}" target="_blank" rel="noreferrer">
              ${profile.portfolio}
            </a>
          </p>
        </article>
      `
    )
    .join("");
}

document.querySelector("#app").innerHTML = `
  <section class="sheet">
    <div class="page">
      <div class="eyebrow">Freelance Software Profile</div>
      <section class="hero">
        <div>
          <h1>${data.title}</h1>
          <p class="lead">${data.intro}</p>
          <p class="lead">${data.statement}</p>
        </div>
        <aside class="hero-side">
          <h3>Core Engagements</h3>
          ${list(data.delivery)}
        </aside>
      </section>

      <section class="section">
        <h2>Services We Provide</h2>
        <div class="cards">
          ${serviceCards()}
        </div>
      </section>

      <section class="section grid-2">
        <div>
          <h2>Why Clients Work With Us</h2>
          ${list(data.strengths)}
        </div>
        <div>
          <h2>Working Process</h2>
          ${list(data.process)}
        </div>
      </section>

      <div class="payment-note">
        <strong>Commercial Terms</strong><br />
        ${data.payment}
      </div>

      <div class="footer-strip">
        <div>
          <strong>Email</strong>
          ${data.contact.emails
            .map((email) => `<div><a class="contact-link" href="mailto:${email}">${email}</a></div>`)
            .join("")}
        </div>
        <div>
          <strong>Phone</strong>
          ${data.contact.phones.map((phone) => `<div>${phone}</div>`).join("")}
        </div>
        <div>
          <strong>Location</strong>
          ${data.contact.locations.map((place) => `<div>${place}</div>`).join("")}
        </div>
      </div>
    </div>
  </section>

  <section class="sheet">
    <div class="page">
      <div class="eyebrow">Team Capability Snapshot</div>

      <section class="section">
        <h2>Professional Profiles</h2>
        <div class="profiles">
          ${profileCards()}
        </div>
      </section>

      <section class="section grid-2">
        <article class="contact-card">
          <h3>What We Can Build</h3>
          ${list([
            "Business websites and polished landing pages",
            "Admin dashboards and internal operation tools",
            "Marketplace, booking, and portal systems",
            "AI-powered product features and workflow automation",
            "Analytics dashboards and reporting systems",
            "APIs, integrations, and scalable backend services",
            "Data pipelines, scraping systems, and research tooling",
            "Custom software tailored to specific business workflows"
          ])}
        </article>

        <article class="closing-card">
          <h3>Engagement Note</h3>
          <p>
            We are open to freelance software projects, custom development work, product collaborations,
            and technical problem-solving assignments. We can contribute on new builds, feature expansion,
            redesigns, maintenance, or specialized engineering tasks.
          </p>
          <div class="payment-note">
            ${data.payment}
          </div>
        </article>
      </section>

      <section class="section">
        <h2>Portfolio Links</h2>
        <div class="chip-row">
          ${data.profiles
            .map(
              (profile) => `
                <a class="chip portfolio-link" href="${profile.portfolio}" target="_blank" rel="noreferrer">
                  ${profile.name}
                </a>
              `
            )
            .join("")}
        </div>
      </section>

      <div class="footer-strip">
        <div class="footer-note">
          For project discussions, collaboration opportunities, or custom software requirements, please reach out through the contact details above.
        </div>
      </div>
    </div>
  </section>
`;
