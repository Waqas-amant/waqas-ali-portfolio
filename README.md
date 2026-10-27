# Waqas Ali - Full-Stack & AI/ML Developer Portfolio

A modern, responsive, and performance-optimized personal portfolio built for **Waqas Ali**, Full-Stack Developer and AI/ML Developer based in Lahore, Pakistan.

---

## 🚀 Key Features

- **Futuristic & Minimalist Aesthetic**: Deep dark mode with cyan and violet accents, plus full light mode toggle support.
- **Top Bar Contract Compliant**: 3-zone clean navigation with single-line links, active scroll spy, and mobile drawer.
- **Hero Section**: Typographic hierarchy, live interactive code tabs (PyTorch Swin Transformer, Flask API, and React inference client), profile avatar with clean fallback, and verified call-to-actions.
- **Authentic About Section**: Highlights background in Information Technology at Minhaj University Lahore (2021–2026), continuous learning focus, and zero hallucinated credentials.
- **Categorized Skills**: Categorized into Frontend, Backend, Databases, AI & Machine Learning, and Tools with real-time text filter and zero fake percentages.
- **Featured Projects**:
  - **StyleMind AI**: Multimodal fashion discovery using CLIP embeddings & PyTorch.
  - **Oral Cancer Image Classification**: Transfer learning using Swin Transformers with explicit educational/research disclaimer.
  - **Chest X-Ray Classification**: Deep learning pulmonary radiograph classifier.
  - **Grocery E-Commerce Management System**: Product catalog, shopping workflows, and inventory tracking.
  - **Employee Management System**: Administrative CRUD platform with department hierarchies.
  - **Builder AI**: AI developer productivity and automated code scaffolding workbench.
- **Interactive Project Modals**: Complete architecture breakdown, technology tags, features, and key learnings with keyboard `ESC` dismissal.
- **Education & Learning**: Minhaj University Lahore BS IT details and a dedicated "Currently Exploring" section for active machine learning interests.
- **Optional Experience Architecture**: Kept hidden until real verified work experiences or internships are added to `portfolioData.ts`.
- **Integrated Contact Section**: One-click email copy with visual feedback, direct LinkedIn & GitHub links, client-side validation, and mail client launcher.
- **Printable Curriculum Vitae**: Clean modal with quick "Print / Save as PDF" integration.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 📁 Project Structure

```
├── index.html                   # HTML entry point with meta tags & Google Fonts
├── metadata.json                # Project description and permissions
├── src/
│   ├── assets/images/           # Generated and uploaded visual assets
│   ├── components/
│   │   ├── About.tsx            # Personal background and core highlights
│   │   ├── BackToTop.tsx        # Floating scroll-to-top button
│   │   ├── Contact.tsx          # Form, direct links, and mailto integration
│   │   ├── Education.tsx        # University studies and learning areas
│   │   ├── Experience.tsx       # Optional experience timeline
│   │   ├── Footer.tsx           # Footer with links and copyright
│   │   ├── Hero.tsx             # Hero section with interactive code showcase
│   │   ├── Navbar.tsx           # Sticky top bar with mobile navigation
│   │   ├── ProjectModal.tsx     # Full project details dialog
│   │   ├── Projects.tsx         # Bento grid with category filters
│   │   ├── ResumeModal.tsx      # Printable curriculum vitae viewer
│   │   ├── Skills.tsx           # Interactive categorized skill explorer
│   │   └── ThemeToggle.tsx      # Dark / Light mode switcher with persistence
│   ├── data/
│   │   └── portfolioData.ts     # Centralized configuration for all data & links
│   ├── App.tsx                  # Root app component
│   ├── index.css                # Tailwind directives and base styles
│   └── main.tsx                 # React entry point
└── package.json
```

---

## ⚙️ How to Customize Your Portfolio

All your data is cleanly separated from UI components in `src/data/portfolioData.ts`:

1. **Profile Photo**: Replace `avatar` with your own image in `/src/assets/images/` or a local URL.
2. **Projects & GitHub Links**: Add or edit projects inside the `PROJECTS` array in `src/data/portfolioData.ts`.
3. **Experience**: When you complete internships or professional roles, populate the `EXPERIENCES` array in `portfolioData.ts`. The section will automatically appear!
4. **Skills**: Add or remove items in `SKILL_CATEGORIES`.

---

## 💻 Development & Building

To run locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
