const freelanceData = {
  brand: "Om Ramanuj + Gopal Devmurari",
  title: "Freelance Software Development & Data Solutions",
  intro:
    "We build reliable software for startups, small businesses, founders, and teams that need practical digital products delivered with strong technical execution. Our work combines full-stack engineering, product thinking, automation, analytics, and scalable backend systems.",
  statement:
    "From business websites and internal tools to data-driven platforms and custom software workflows, we handle projects end-to-end: planning, design coordination, development, integrations, deployment, and iterative improvements.",
  services: [
    {
      title: "Custom Web Applications",
      text: "Professional websites, portals, dashboards, admin panels, booking systems, marketplace flows, and tailored business software."
    },
    {
      title: "Full-Stack Product Development",
      text: "Frontend and backend delivery using modern stacks such as Next.js, React, Node.js, FastAPI, Flask, MongoDB, PostgreSQL, and REST APIs."
    },
    {
      title: "Mobile & Multi-Platform Solutions",
      text: "Flutter-based app workflows, event management systems, companion apps, and connected web dashboards for operational teams."
    },
    {
      title: "AI, Automation & Smart Features",
      text: "AI-assisted experiences, process automation, scraping pipelines, smart recommendation flows, 3D customization interfaces, and productivity tooling."
    },
    {
      title: "Data Analytics & Decision Systems",
      text: "Dashboards, analytics tools, segmentation, reporting pipelines, KPI tracking, pricing intelligence, and business insight systems."
    },
    {
      title: "Performance-Critical Systems",
      text: "High-speed data processing, backtesting engines, quantitative workflows, optimization pipelines, and scalable engineering for data-heavy products."
    }
  ],
  delivery: [
    "MVPs and startup product builds",
    "Business websites with strong UX and clear conversion paths",
    "Internal dashboards and workflow software",
    "Custom APIs, backend architecture, and database design",
    "Automation tools and web/data scraping systems",
    "Analytics, reporting, and visualization solutions",
    "AI-enabled product features and experimental builds",
    "Maintenance, upgrades, deployment, and technical support"
  ],
  strengths: [
    "Strong combination of software engineering, analytics, and product execution",
    "Hands-on experience across React, Next.js, Node.js, FastAPI, Flask, Flutter, Python, Rust, MongoDB, and PostgreSQL",
    "Experience building real-world systems for booking, e-commerce, analytics, event operations, and quantitative workflows",
    "Comfortable working from early idea stage to production deployment"
  ],
  profiles: [
    {
      name: "Om Ramanuj",
      role: "Full-Stack Developer | Product Builder",
      summary:
        "Experience includes live product development, SEO-focused web delivery, mobile/web systems, hackathon-winning product builds, and modern frontend/backend implementation.",
      highlights: [
        "Worked on Next.js and FastAPI products, appointment systems, video call workflows, and production deployments",
        "Led technical delivery across app and web solutions with Flutter and Node.js",
        "Built interactive products using React, Go, PostgreSQL, Three.js, and AI integrations"
      ],
      portfolio: "https://www.omramanuj.site/"
    },
    {
      name: "Gopal Devmurari",
      role: "Software Engineer | Data & Automation Specialist",
      summary:
        "Experience includes data-heavy software, algorithmic systems, analytics platforms, automation pipelines, and backend/API development with strong quantitative and problem-solving depth.",
      highlights: [
        "Built trading systems, backtesting infrastructure, analytics tools, and high-performance Rust/Python workflows",
        "Developed scraping pipelines, compliance datasets, and REST APIs using Flask and FastAPI",
        "Delivers practical solutions that combine engineering, data analysis, and measurable business utility"
      ],
      portfolio: "https://gopal-dev-portfolio.vercel.app/"
    }
  ],
  process: [
    "Requirement discussion and scope definition",
    "Technical approach and timeline planning",
    "Development with regular progress updates",
    "Testing, deployment, and handover",
    "Post-launch support as needed"
  ],
  payment:
    "Payment and commercial terms can be discussed based on project requirements, scope, complexity, and timeline.",
  contact: {
    emails: ["ramanuj.om.r@gmail.com", "gopaldevmurari20@gmail.com"],
    phones: ["+91 88666 77277", "+91 88665 53468"],
    locations: ["Surat, Gujarat", "Ahmedabad, Gujarat"]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = freelanceData;
} else {
  window.freelanceData = freelanceData;
}
