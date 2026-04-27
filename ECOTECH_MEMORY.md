# ECOTECH EVOLUTION - PROJECT MEMORY (v1.0)

## 1. Project Foundation & Independence
- **Origin:** Cloned from `v0-ecotech-evolution-website` (Vercel template).
- **Declaration of Independence:** We immediately deleted the old `.git` tracking and removed `pnpm` dependencies. We migrated to a standard `npm` structure to ensure complete ownership and stability ("make this app our own").
- **Repository:** Re-initialized Git and successfully forced pushed over SSH to `git@github.com:genbak/v0-ecotech-evolution-website.git` (establishing standard origin `main`).

## 2. Aesthetic & UX Architecture ("Swiss Quality")
- **Hero Section:** Destroyed the generic 2-column wireframe. Re-engineered as a cinematic, full-bleed layout utilizing `hero-bg.png` with a subtle dark horizontal gradient overlay ensuring crisp typography readability. Removed unnecessary scroll indicators. Added floating KPI stats and WhatsApp connectivity.
- **Navbar (The Dual-State Engine):** 
  - Engineered a seamless dual-state React scroll listener monitoring `window.scrollY > 50`.
  - **State 0 (Top):** Completely transparent, massive `h-24` header, large EcoTech logo (`w-14 h-14`), large white text, standard Daikin partner badge. Matches the cinematic hero width.
  - **State 1 (Scrolled):** Instantaneously morphs into a compact `h-16` solid `bg-white` header with dark text (`text-gray-900`), shrunk logo (`w-10 h-10`), and shrunk Daikin partner asset to eliminate screen blockage while reading content.
- **Services Showcase (The Bento Box):**
  - Upgraded the "What We Offer" section from a standard array mapping into a bespoke 2x2 "Apple-esque" Bento Grid.
  - Implemented exact equal-weight visual hierarchy (`lg:grid-cols-2`, `auto-rows-[460px]`) so Solar does not overshadow Heating/Cooling.
  - Developed a high-end Glassmorphism UI layer: dark gradients at the panel bottoms for contrast, and a smooth `#7CB342` hover cascade with an interactive sliding arrow trigger.
  - Linked specific, actual Daikin product assets (`altherma.jpeg`, `air-c.png`, `vrv.jpeg`, `solar.png`) directly into the architecture using `next/image` with `object-cover`.

## 3. Technology Stack
- **Framework:** Next.js
- **Styling:** Tailwind CSS (Strict usage of semantic utilities, heavily utilizing `transition-colors`, `backdrop-blur`, and auto grid sizing).
- **Animations:** Framer Motion (`initial={{ opacity: 0, y: 20 }}`) for subtle upward reveals on scroll viewport entry.
- **Icons:** Lucide React (`ArrowRight`, `Menu`, `X`, etc).

## 4. Pending Milestones
- **Projects Showcase:** Implantation of high-fidelity grid or carousel displaying past EcoTech deployments.
- **About / Swiss Quality:** Implementation of content emphasizing the Swiss-engineered, Macedonian-installed USP.
- **Production Deployment:** Preparation for Vercel/Exoscale/Custom server deployment.
