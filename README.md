# Ritesh Tamboli – Full Stack Web Developer Portfolio

A modern developer portfolio website designed with an Apple & Linear inspired minimal light aesthetic. Built with React 19, Vite, and Tailwind CSS.

## 🚀 Live Projects Featured

1. **Shivam Salon** – [Live Website](https://shivam-salon-63h3.onrender.com)
   - *Tech:* React.js, Tailwind CSS, Lucide React, Vite
   - *Highlights:* Service catalogue, tiered pricing, styling gallery, appointment booking.

2. **ERA International School** – [Live Website](https://eraschool.onrender.com)
   - *Tech:* React.js, Tailwind CSS, Vite, Component Architecture
   - *Highlights:* Admissions guidance, curriculum levels, campus facilities, faculty showcases.

3. **Nishad Computers** – [Live Website](https://nishadcomputers.onrender.com)
   - *Tech:* React.js, React Router, Tailwind CSS, Lucide React, Vite
   - *Highlights:* Electronics catalogue, PC builder configuration, hardware maintenance.

4. **Additional Projects (04, 05, 06)**:
   - Configurable slots for SaaS Dashboards, E-Commerce platforms, and EdTech portals in `src/data/projects.js`.

---

## 🎨 Design Direction & Palette

- **Main Background:** `#F8F9FB`
- **Secondary Surface:** `#FFFFFF`
- **Primary Text:** `#111827`
- **Secondary Text:** `#64748B`
- **Primary Accent:** `#4F46E5`
- **Accent Light:** `#EEF2FF`
- **Border:** `#E5E7EB`
- **Success Accent:** `#10B981`

---

## 📂 Project Architecture

```
src/
├── assets/
│   └── projects/           # High-resolution WebP screenshots (1440x900)
├── components/
│   ├── Navbar.jsx          # Sticky nav with active section detection & mobile drawer
│   ├── Hero.jsx            # Two-column layout with code editor mockup & floating badges
│   ├── Stats.jsx           # 4 key statistics with subtle dividers
│   ├── About.jsx           # Personal narrative, checklist, and 3 core focus cards
│   ├── Projects.jsx        # Project grid with category filtering & spotlight layout
│   ├── ProjectCard.jsx     # Browser-framed preview card with zoom & action triggers
│   ├── ProjectDetails.jsx  # Interactive modal with full project breakdown & live links
│   ├── Skills.jsx          # Categorized tech stack cards with custom icons
│   ├── Experience.jsx      # Vertical timeline & "Best Full Stack Developer Award" card
│   ├── Services.jsx        # 4 service cards with feature points
│   ├── Contact.jsx         # Direct contact info, 1-click email copy & verified contact form
│   ├── Footer.jsx          # RT logo, links, social profiles & smooth Back-to-Top
│   └── Icons.jsx           # SVG brand icons
├── data/
│   ├── personal.js         # Centralized developer profile, bios & contact links
│   ├── projects.js         # Verified live project data, screenshots & features
│   ├── skills.js           # Tech stack categories & technology mappings
│   ├── experience.js       # Career journey & award details
│   ├── services.js         # Service offerings & deliverables
│   └── stats.js            # Editable metrics
├── App.jsx                 # Main layout coordinator
├── main.jsx                # Application root
└── index.css               # Tailwind directives, custom scrollbars, and fonts
```

---

## 🛠️ Development & Deployment

### Run Locally
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 📝 How to Update Portfolio Content

All content is centralized in the `src/data/` directory:
- Update personal info, email, or resume: `src/data/personal.js`
- Add new projects or update links: `src/data/projects.js`
- Add skills or change categories: `src/data/skills.js`
- Update work experience or awards: `src/data/experience.js`
- Update metrics and numbers: `src/data/stats.js`
