const { jsPDF } = require("jspdf");
const data = require("./freelance-data.js");

const doc = new jsPDF({
  orientation: "portrait",
  unit: "mm",
  format: "a4"
});

const pageWidth = 210;
const pageHeight = 297;
const margin = 16;
const contentWidth = pageWidth - margin * 2;

const colors = {
  navy: [8, 17, 32],
  blue: [15, 98, 254],
  blueDeep: [11, 62, 168],
  blueSoft: [237, 244, 255],
  blueLine: [205, 216, 238],
  text: [10, 15, 26],
  muted: [71, 84, 103],
  white: [255, 255, 255]
};

function setFont(style = "normal", size = 12) {
  doc.setFont("helvetica", style);
  doc.setFontSize(size);
}

function pageBase() {
  doc.setFillColor(...colors.white);
  doc.rect(0, 0, pageWidth, pageHeight, "F");
  doc.setFillColor(...colors.blueDeep);
  doc.rect(0, 0, pageWidth, 9, "F");
  doc.setFillColor(...colors.blueSoft);
  doc.rect(0, 9, pageWidth, 18, "F");
}

function line(x1, y1, x2, y2, color = colors.blueLine) {
  doc.setDrawColor(...color);
  doc.line(x1, y1, x2, y2);
}

function textBlock(text, x, y, width, options = {}) {
  const size = options.size || 11.2;
  const style = options.style || "normal";
  const color = options.color || colors.muted;
  const leading = options.leading || 1.45;
  setFont(style, size);
  doc.setTextColor(...color);
  const lines = doc.splitTextToSize(text, width);
  doc.text(lines, x, y, { lineHeightFactor: leading });
  return y + lines.length * size * 0.3528 * leading;
}

function bulletList(items, x, y, width, options = {}) {
  let cursor = y;
  items.forEach((item) => {
    doc.setFillColor(...(options.bulletColor || colors.blue));
    doc.circle(x + 1.4, cursor - 1.15, 0.85, "F");
    cursor = textBlock(item, x + 4.5, cursor, width - 4.5, options) + 1.5;
  });
  return cursor;
}

function sectionTitle(title, x, y) {
  setFont("bold", 11);
  doc.setTextColor(...colors.blueDeep);
  doc.text(title.toUpperCase(), x, y);
  line(x, y + 2, pageWidth - margin, y + 2);
  return y + 8;
}

function card(x, y, w, h, topBar = true) {
  doc.setFillColor(251, 253, 255);
  doc.setDrawColor(...colors.blueLine);
  doc.roundedRect(x, y, w, h, 4.5, 4.5, "FD");
  if (topBar) {
    doc.setFillColor(...colors.blue);
    doc.roundedRect(x, y, w, 3.5, 4.5, 4.5, "F");
    doc.setFillColor(251, 253, 255);
    doc.rect(x, y + 2.5, w, 1.5, "F");
  }
}

function pill(x, y, w, label) {
  doc.setFillColor(...colors.blueSoft);
  doc.setDrawColor(...colors.blueLine);
  doc.roundedRect(x, y, w, 9, 4, 4, "FD");
  setFont("bold", 8.2);
  doc.setTextColor(...colors.blueDeep);
  doc.text(label.toUpperCase(), x + 5, y + 5.8);
}

function pageHeader(eyebrow, title, intro) {
  pageBase();
  pill(margin, 15, 62, eyebrow);
  setFont("bold", 24);
  doc.setTextColor(...colors.navy);
  const titleLines = doc.splitTextToSize(title, 118);
  doc.text(titleLines, margin, 42);
  return textBlock(intro, margin, 42 + titleLines.length * 8 + 5, 118, {
    size: 11.3,
    color: colors.muted
  });
}

let y = pageHeader(
  "Freelance Software Profile",
  data.title,
  `${data.intro} ${data.statement}`
);

card(137, 31, 57, 72);
setFont("bold", 10);
doc.setTextColor(...colors.blueDeep);
doc.text("CORE ENGAGEMENTS", 143, 42);
bulletList(data.delivery.slice(0, 5), 142, 50, 46, {
  size: 9.4,
  color: colors.muted,
  leading: 1.34
});

y = Math.max(y + 12, 111);
y = sectionTitle("Services We Provide", margin, y);

const serviceCardWidth = (contentWidth - 7) / 2;
data.services.forEach((service, index) => {
  const x = margin + (index % 2) * (serviceCardWidth + 7);
  const cy = y + Math.floor(index / 2) * 35;
  card(x, cy, serviceCardWidth, 30);
  setFont("bold", 10.8);
  doc.setTextColor(...colors.text);
  doc.text(service.title, x + 5, cy + 9);
  textBlock(service.text, x + 5, cy + 15, serviceCardWidth - 10, {
    size: 9.3,
    color: colors.muted
  });
});

y += 109;
y = sectionTitle("Why Clients Work With Us", margin, y);
card(margin, y, 84, 54);
card(110, y, 84, 54);
setFont("bold", 11);
doc.setTextColor(...colors.text);
doc.text("Why Us", margin + 5, y + 9);
doc.text("Working Process", 115, y + 9);
bulletList(data.strengths, margin + 4, y + 17, 73, {
  size: 9.4,
  color: colors.muted,
  leading: 1.3
});
bulletList(data.process, 114, y + 17, 73, {
  size: 9.4,
  color: colors.muted,
  leading: 1.3
});

y += 64;
card(margin, y, contentWidth, 30);
setFont("bold", 11);
doc.setTextColor(...colors.blueDeep);
doc.text("Commercial Terms", margin + 6, y + 10);
textBlock(data.payment, margin + 6, y + 17, contentWidth - 12, {
  size: 10,
  color: [42, 50, 64]
});

y += 42;
line(margin, y, pageWidth - margin, y);
y += 8;
setFont("bold", 10);
doc.setTextColor(...colors.blueDeep);
doc.text("Email", margin, y);
doc.text("Phone", 88, y);
doc.text("Location", 145, y);
setFont("normal", 10);
doc.setTextColor(...colors.muted);
doc.text(data.contact.emails, margin, y + 8);
doc.text(data.contact.phones, 88, y + 8);
doc.text(data.contact.locations, 145, y + 8);

doc.addPage();

pageHeader(
  "Team Capability Snapshot",
  "Professional Profiles & Project Fit",
  "A combined team profile covering product development, data systems, automation, analytics, custom business tools, and scalable engineering delivery."
);

y = sectionTitle("Professional Profiles", margin, 64);
card(margin, y, 86, 98);
card(108, y, 86, 98);

data.profiles.forEach((profile, index) => {
  const x = index === 0 ? margin : 108;
  setFont("bold", 8.5);
  doc.setTextColor(...colors.blueDeep);
  doc.text(profile.role.toUpperCase(), x + 5, y + 10);
  setFont("bold", 13);
  doc.setTextColor(...colors.text);
  doc.text(profile.name, x + 5, y + 18);
  let py = textBlock(profile.summary, x + 5, y + 26, 76, {
    size: 9.5,
    color: colors.muted
  }) + 1;
  py = bulletList(profile.highlights, x + 4, py + 3, 75, {
    size: 9.1,
    color: colors.muted,
    leading: 1.28
  });
  setFont("normal", 8.8);
  doc.setTextColor(...colors.blueDeep);
  doc.text(profile.portfolio, x + 5, Math.min(py + 4, y + 90));
});

y += 110;
y = sectionTitle("What We Can Build", margin, y);
card(margin, y, 86, 88);
card(108, y, 86, 88);
setFont("bold", 11.5);
doc.setTextColor(...colors.text);
doc.text("Typical Project Types", margin + 5, y + 9);
doc.text("Engagement Note", 113, y + 9);
bulletList(
  [
    "Business websites and premium landing pages",
    "Admin dashboards and internal tools",
    "Booking, marketplace, and portal systems",
    "AI-enabled product features and automation",
    "Analytics dashboards and reporting solutions",
    "Custom APIs, backend services, and data pipelines"
  ],
  margin + 4,
  y + 18,
  75,
  { size: 9.2, color: colors.muted, leading: 1.28 }
);
textBlock(
  "We are available for freelance software projects, tailored product builds, feature expansion, redesigns, maintenance, automation work, analytics systems, and specialized engineering tasks.",
  113,
  y + 18,
  72,
  { size: 9.5, color: colors.muted }
);

card(113, y + 49, 68, 26, false);
doc.setFillColor(...colors.blueSoft);
doc.roundedRect(113, y + 49, 68, 26, 4.5, 4.5, "F");
doc.setDrawColor(...colors.blueLine);
doc.roundedRect(113, y + 49, 68, 26, 4.5, 4.5, "S");
setFont("bold", 10.2);
doc.setTextColor(...colors.blueDeep);
doc.text("Commercial Terms", 118, y + 58);
textBlock(data.payment, 118, y + 65, 58, {
  size: 8.8,
  color: [42, 50, 64]
});

y += 100;
y = sectionTitle("Portfolio Links", margin, y);
setFont("normal", 10.8);
doc.setTextColor(...colors.blueDeep);
doc.text(data.profiles[0].portfolio, margin, y);
doc.text(data.profiles[1].portfolio, margin, y + 10);

y += 22;
line(margin, y, pageWidth - margin, y);
textBlock(
  "For project discussions, collaboration opportunities, or custom software requirements, please connect using the contact details on page one.",
  margin,
  y + 10,
  contentWidth,
  { size: 10, color: colors.muted }
);

doc.save("Freelance_Brochure.pdf");
